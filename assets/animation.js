/* Animation guidée : création d'une base Access 2016. Fonctionne hors ligne. Narration : voix française du navigateur, si disponible. */
(function () {
  'use strict';
  var etat = {i: 0, auto: false, vitesse: 1, voix: true, minuteurs: [], fini: false};
  function $(id) { return document.getElementById(id); }
  function arreter() { etat.minuteurs.forEach(clearTimeout); etat.minuteurs = []; if (window.speechSynthesis) { window.speechSynthesis.cancel(); } }
  function plus(fn, ms) { etat.minuteurs.push(setTimeout(fn, ms / etat.vitesse)); }
  function voixFr() {
    if (!window.speechSynthesis) { return null; }
    var v = window.speechSynthesis.getVoices().filter(function (x) { return /^fr/i.test(x.lang); });
    return v.length ? v[0] : null;
  }
  function parler(texte, fin) {
    if (!etat.voix || !window.speechSynthesis || typeof SpeechSynthesisUtterance === 'undefined') { fin(false); return; }
    var u = new SpeechSynthesisUtterance(texte);
    u.lang = 'fr-FR'; u.rate = etat.vitesse;
    var v = voixFr(); if (v) { u.voice = v; }
    var ok = false;
    u.onend = function () { if (!ok) { ok = true; fin(true); } };
    u.onerror = function () { if (!ok) { ok = true; fin(false); } };
    window.speechSynthesis.speak(u);
  }
  function pointeur(svg) {
    var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('id', 'ptr'); g.style.opacity = '0';
    g.innerHTML = '<path d="M0 0 L0 17 L4.5 13 L8 21 L11 19.5 L7.5 12 L13 12 Z" fill="#111" stroke="#fff" stroke-width="1.2"/>';
    svg.appendChild(g); return g;
  }
  function afficherEtape(i) {
    arreter();
    etat.i = i; var s = SCENES[i];
    $('scene').innerHTML = s.svg;
    var svg = $('scene').querySelector('svg');
    svg.querySelectorAll('.rv').forEach(function (g) { g.style.opacity = '0'; g.style.transition = 'opacity .6s'; });
    $('legende').textContent = s.narration;
    $('titre-etape').textContent = 'Étape ' + (i + 1) + ' sur ' + SCENES.length + ' : ' + s.titre;
    $('liste').value = String(i);
    $('prec').disabled = i === 0; $('suiv').disabled = i === SCENES.length - 1;
    $('avance').style.width = Math.round((i + 1) * 100 / SCENES.length) + '%';
    s.rv.forEach(function (d, k) { plus(function () { svg.querySelectorAll('.rv[data-i="' + k + '"]').forEach(function (g) { g.style.opacity = '1'; }); }, d); });
    if (s.rv.length === 0 || true) { svg.querySelectorAll('.rv').forEach(function (g) { var n = parseInt(g.getAttribute('data-i'), 10); if (n >= s.rv.length) { plus(function () { g.style.opacity = '1'; }, 300); } }); }
    s.typ.forEach(function (x) {
      plus(function () {
        var el = svg.querySelector('#' + x[0]); if (!el) { return; }
        var n = 0, iv = setInterval(function () { n++; el.textContent = x[1].slice(0, n); if (n >= x[1].length) { clearInterval(iv); } }, 90 / etat.vitesse);
        etat.minuteurs.push(iv);
      }, x[2]);
    });
    var p = pointeur(svg);
    s.ptr.forEach(function (pt, k) {
      plus(function () {
        p.style.opacity = '1'; p.style.transition = k === 0 ? 'none' : 'transform ' + (0.9 / etat.vitesse) + 's ease';
        p.style.transform = 'translate(' + pt[0] + 'px,' + pt[1] + 'px)';
        if (pt[3] === 'click') {
          plus(function () {
            var c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            c.setAttribute('cx', pt[0]); c.setAttribute('cy', pt[1]); c.setAttribute('r', '4'); c.setAttribute('class', 'clk');
            svg.appendChild(c); setTimeout(function () { if (c.parentNode) { c.parentNode.removeChild(c); } }, 800);
          }, 900);
        }
      }, pt[2]);
    });
    s.hl.forEach(function (h) {
      plus(function () {
        var r = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        r.setAttribute('x', h[0]); r.setAttribute('y', h[1]); r.setAttribute('width', h[2]); r.setAttribute('height', h[3]); r.setAttribute('class', 'hl');
        svg.appendChild(r); svg.appendChild($('ptr'));
        etat.minuteurs.push(setTimeout(function () { if (r.parentNode) { r.parentNode.removeChild(r); } }, h[5] / etat.vitesse));
      }, h[4]);
    });
    var fin = {anim: false, voix: false};
    function suite() {
      if (!etat.auto || !(fin.anim && fin.voix)) { return; }
      if (etat.i < SCENES.length - 1) { plus(function () { afficherEtape(etat.i + 1); }, 800); } else { etat.auto = false; majLecture(); }
    }
    plus(function () { fin.anim = true; suite(); }, s.dur);
    parler(s.narration, function () { fin.voix = true; suite(); });
    if (!etat.voix || !window.speechSynthesis) { fin.voix = true; }
    etat.minuteurs.push(setTimeout(function () { fin.voix = true; suite(); }, 40000));
  }
  function majLecture() { $('lecture').textContent = etat.auto ? 'Pause' : 'Lecture automatique'; }
  function init() {
    var h = '';
    SCENES.forEach(function (s, i) { h += '<option value="' + i + '">' + (i + 1) + '. ' + s.titre + '</option>'; });
    $('liste').innerHTML = h;
    $('prec').addEventListener('click', function () { etat.auto = false; majLecture(); afficherEtape(Math.max(0, etat.i - 1)); });
    $('suiv').addEventListener('click', function () { etat.auto = false; majLecture(); afficherEtape(Math.min(SCENES.length - 1, etat.i + 1)); });
    $('rejouer').addEventListener('click', function () { afficherEtape(etat.i); });
    $('liste').addEventListener('change', function () { etat.auto = false; majLecture(); afficherEtape(parseInt($('liste').value, 10)); });
    $('lecture').addEventListener('click', function () {
      etat.auto = !etat.auto; majLecture();
      if (etat.auto) { afficherEtape(etat.i); } else { arreter(); }
    });
    $('vitesse').addEventListener('change', function () { etat.vitesse = parseFloat($('vitesse').value); });
    $('voix').addEventListener('change', function () { etat.voix = $('voix').checked; if (!etat.voix && window.speechSynthesis) { window.speechSynthesis.cancel(); } });
    if (!window.speechSynthesis) { $('voix').checked = false; $('voix').disabled = true; etat.voix = false; $('infovoix').textContent = 'Narration indisponible sur cet appareil. Lis le texte sous l\'image.'; }
    afficherEtape(0);
  }
  document.addEventListener('DOMContentLoaded', init);
})();
