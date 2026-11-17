/* QCM d'auto-évaluation : 100 questions, 3 niveaux, correction automatique, mode examen blanc avec chronomètre. Fonctionne hors ligne. */
(function () {
  'use strict';
  var NOMS = {1: 'Introduction aux bases de données', 2: 'Les SGBD', 3: 'Bases de données relationnelles', 31: 'Conception d\'une base (chapitre 3 bis)',
    4: 'Création de la base', 5: 'Création des tables', 6: 'Création des relations', 7: 'Les requêtes', 8: 'Importation et exportation'};
  var ETIQ = {31: '3 bis'};
  var PAGES = {1: 'ch1-introduction.html', 2: 'ch2-sgbd.html', 3: 'ch3-relationnel.html', 31: 'ch3b-conception.html', 4: 'ch4-creation-base.html',
    5: 'ch5-tables.html', 6: 'ch6-relations.html', 7: 'ch7-requetes.html', 8: 'ch8-import-export.html'};
  var NIVEAUX = {1: 'Base', 2: 'Approfondissement', 3: 'Défi'};
  var DUREE_EXAMEN = 20 * 60;
  var etat = {liste: [], rep: [], mode: 'immediate', corrige: false, chap: 0, reste: 0, chrono: null};
  function $(id) { return document.getElementById(id); }
  function etiq(c) { return ETIQ[c] || String(c); }
  function echapper(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function melanger(t) { var a = t.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var x = a[i]; a[i] = a[j]; a[j] = x; } return a; }
  function filtre() {
    var ch = parseInt($('chap').value, 10) || 0, nv = parseInt($('niv').value, 10) || 0;
    return QCM.filter(function (q) { return (ch === 0 || q.ch === ch) && (nv === 0 || q.n === nv); });
  }
  function remplirListes(choix) {
    var h = '<option value="0">Tous les chapitres</option>', ordre = [1, 2, 3, 31, 4, 5, 6, 7, 8];
    ordre.forEach(function (c) { h += '<option value="' + c + '">Chapitre ' + etiq(c) + ' : ' + NOMS[c] + '</option>'; });
    $('chap').innerHTML = h; $('chap').value = String(choix);
    $('niv').innerHTML = '<option value="0">Tous les niveaux</option><option value="1">Niveau 1 : base</option><option value="2">Niveau 2 : approfondissement</option><option value="3">Niveau 3 : défi</option>';
  }
  function tirerExamen(pool) {
    var quotas = {1: 8, 2: 8, 3: 4}, sel = [];
    [1, 2, 3].forEach(function (n) { sel = sel.concat(melanger(pool.filter(function (q) { return q.n === n; })).slice(0, quotas[n])); });
    if (sel.length < 20) { var reste = melanger(pool.filter(function (q) { return sel.indexOf(q) < 0; })); sel = sel.concat(reste.slice(0, 20 - sel.length)); }
    return melanger(sel);
  }
  function arreterChrono() { if (etat.chrono) { clearInterval(etat.chrono); etat.chrono = null; } }
  function construire() {
    arreterChrono();
    etat.mode = $('mode').value; etat.chap = parseInt($('chap').value, 10) || 0;
    var melange = $('shuf').checked || etat.mode === 'exam', pool = filtre();
    var base = etat.mode === 'exam' ? tirerExamen(pool) : pool;
    etat.liste = base.map(function (q) {
      var opts = q.o.map(function (t, k) { return {t: t, ok: k === q.a}; });
      return {ch: q.ch, n: q.n, q: q.q, e: q.e, opts: melange ? melanger(opts) : opts};
    });
    etat.rep = etat.liste.map(function () { return -1; });
    etat.corrige = false;
    afficher();
    if (etat.mode === 'exam') { etat.reste = DUREE_EXAMEN; majChrono(); etat.chrono = setInterval(function () { etat.reste--; majChrono(); if (etat.reste <= 0) { corrigerTout(); } }, 1000); }
  }
  function majChrono() {
    var m = Math.floor(etat.reste / 60), s = etat.reste % 60;
    $('chrono').textContent = 'Temps restant : ' + m + ' min ' + (s < 10 ? '0' : '') + s + ' s';
  }
  function afficher() {
    var h = '', n = etat.liste.length;
    if (n === 0) { h = '<p>Aucune question pour ce choix de chapitre et de niveau.</p>'; }
    etat.liste.forEach(function (q, i) {
      h += '<section class="q" id="q' + i + '"><p class="qn">Question ' + (i + 1) + ' sur ' + n + ' — Chapitre ' + etiq(q.ch) + ' — <span class="niv n' + q.n + '">' + NIVEAUX[q.n] + '</span></p><p class="qt">' + echapper(q.q) + '</p>';
      q.opts.forEach(function (o, k) { h += '<label class="opt"><input type="radio" name="q' + i + '" value="' + k + '"><span>' + echapper(o.t) + '</span></label>'; });
      h += '<div class="fb" hidden></div></section>';
    });
    $('quiz').className = ''; $('quiz').innerHTML = h; $('endbox').innerHTML = '';
    $('chrono').hidden = etat.mode !== 'exam';
    $('actions').innerHTML = (etat.mode !== 'immediate' && n > 0) ? '<p><button type="button" class="btn" id="corriger">Corriger mes réponses</button></p>' : '';
    majBarre();
  }
  function nbRepondues() { return etat.rep.filter(function (r) { return r >= 0; }).length; }
  function nbJustes() { return etat.liste.filter(function (q, i) { return etat.rep[i] >= 0 && q.opts[etat.rep[i]].ok; }).length; }
  function majBarre() {
    var t = 'Questions répondues : ' + nbRepondues() + ' sur ' + etat.liste.length;
    if (etat.mode === 'immediate' || etat.corrige) { t += ' — Bonnes réponses : ' + nbJustes(); }
    $('bar').textContent = t;
  }
  function corrigerQuestion(i) {
    var q = etat.liste[i], r = etat.rep[i], sec = $('q' + i), bonne = '';
    sec.querySelectorAll('label.opt').forEach(function (l, k) {
      l.classList.remove('ok', 'ko'); l.querySelector('input').disabled = true;
      if (q.opts[k].ok) { l.classList.add('ok'); bonne = q.opts[k].t; } else if (k === r) { l.classList.add('ko'); }
    });
    var juste = r >= 0 && q.opts[r].ok, fb = sec.querySelector('.fb');
    fb.hidden = false; fb.className = 'fb ' + (juste ? 'bon' : 'mauvais');
    fb.innerHTML = '<b>' + (r < 0 ? 'Sans réponse.' : juste ? 'Bonne réponse.' : 'Mauvaise réponse.') + '</b> ' + (juste ? '' : 'La bonne réponse est : ' + echapper(bonne) + '. ') + echapper(q.e);
    sec.setAttribute('data-etat', juste ? 'ok' : 'ko');
  }
  function resultats() {
    arreterChrono(); $('chrono').hidden = true;
    var n = etat.liste.length, j = nbJustes(), note = Math.round(j * 20 / n * 10) / 10;
    var msg = note >= 16 ? 'Très bien : tu maîtrises ce sujet.' : note >= 12 ? 'Bien : revois les points où tu as hésité.' : note >= 10 ? 'Passable : relis les chapitres indiqués ci-dessous.' : 'Insuffisant : relis les chapitres indiqués puis recommence.';
    var par = {};
    etat.liste.forEach(function (q, i) { par[q.ch] = par[q.ch] || {n: 0, j: 0}; par[q.ch].n++; if (etat.rep[i] >= 0 && q.opts[etat.rep[i]].ok) { par[q.ch].j++; } });
    var lignes = '';
    Object.keys(par).forEach(function (c) { var p = par[c], faible = p.j / p.n < 0.6; lignes += '<tr><td>Chapitre ' + etiq(parseInt(c, 10)) + ' : ' + NOMS[c] + '</td><td>' + p.j + ' / ' + p.n + '</td><td>' + (faible ? '<a href="' + PAGES[c] + '">À revoir</a>' : 'Acquis') + '</td></tr>'; });
    var parn = {1: {n: 0, j: 0}, 2: {n: 0, j: 0}, 3: {n: 0, j: 0}};
    etat.liste.forEach(function (q, i) { parn[q.n].n++; if (etat.rep[i] >= 0 && q.opts[etat.rep[i]].ok) { parn[q.n].j++; } });
    var niv = [1, 2, 3].filter(function (k) { return parn[k].n > 0; }).map(function (k) { return NIVEAUX[k] + ' : ' + parn[k].j + ' / ' + parn[k].n; }).join(' — ');
    $('endbox').innerHTML = '<div class="res" id="res"><p class="note20">Score : ' + j + ' / ' + n + ' (' + note + ' / 20)</p><p>' + msg + '</p><p>' + niv + '</p>' +
      '<div class="w"><table><tr><th>Chapitre</th><th>Réponses justes</th><th>Bilan</th></tr>' + lignes + '</table></div>' +
      '<p><button type="button" class="btn" id="erreurs">Revoir seulement les erreurs</button> <button type="button" class="btn" id="refaire">Recommencer</button> <a class="btn" href="progression.html">Voir ma progression</a></p></div>';
    if (window.Suivi && n > 0) { window.Suivi.enregistrerQCM(String(etat.chap), j, n, etat.mode); }
    $('res').scrollIntoView({behavior: 'smooth', block: 'start'});
  }
  function corrigerTout() {
    if (etat.corrige) { return; }
    etat.corrige = true; arreterChrono();
    etat.liste.forEach(function (q, i) { corrigerQuestion(i); });
    majBarre(); $('actions').innerHTML = ''; resultats();
  }
  document.addEventListener('change', function (ev) {
    var t = ev.target;
    if (t.type !== 'radio' || !/^q\d+$/.test(t.name) || etat.corrige) { return; }
    var i = parseInt(t.name.slice(1), 10);
    etat.rep[i] = parseInt(t.value, 10);
    if (etat.mode === 'immediate') { corrigerQuestion(i); majBarre(); if (nbRepondues() === etat.liste.length) { etat.corrige = true; resultats(); } } else { majBarre(); }
  });
  document.addEventListener('click', function (ev) {
    var id = ev.target.id;
    if (id === 'corriger') { corrigerTout(); }
    if (id === 'refaire') { construire(); window.scrollTo(0, 0); }
    if (id === 'erreurs') { $('quiz').classList.toggle('solo'); }
  });
  var p = new URLSearchParams(location.search), ch0 = parseInt(p.get('ch'), 10);
  remplirListes(NOMS[ch0] ? ch0 : 0);
  if (p.get('mode') === 'exam') { $('mode').value = 'exam'; }
  $('start').addEventListener('click', construire);
  ['chap', 'niv', 'mode', 'shuf'].forEach(function (k) { $(k).addEventListener('change', construire); });
  construire();
})();
