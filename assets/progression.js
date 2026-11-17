/* Page de suivi : tableau de bord de la progression. */
(function () {
  'use strict';
  var CHAP = window.CHAPITRES_SUIVI;
  function $(id) { return document.getElementById(id); }
  function afficher() {
    var d = Suivi.lire(), lus = 0, h = '';
    CHAP.forEach(function (c) {
      var lu = !!d.lu[c.page], q = d.qcm[c.qcm];
      if (lu) { lus++; }
      h += '<tr><td><a href="' + c.page + '">' + c.titre + '</a></td><td>' + (lu ? 'Terminé' : 'À faire') + '</td><td>' + (c.qcm === null ? '—' : q ? q.meilleur + ' % (' + q.essais + ' essai' + (q.essais > 1 ? 's' : '') + ')' : 'Non fait') + '</td></tr>';
    });
    $('lignes').innerHTML = h;
    var pct = Math.round(lus * 100 / CHAP.length);
    $('global').textContent = 'Chapitres terminés : ' + lus + ' sur ' + CHAP.length + ' (' + pct + ' %)';
    $('barre').style.width = pct + '%';
    var g = d.qcm['0'];
    $('qcmglobal').textContent = g ? 'QCM tous chapitres : meilleur score ' + g.meilleur + ' %, ' + g.essais + ' essai(s).' : 'QCM tous chapitres : pas encore fait.';
    var ex = d.examens || [];
    $('exam').innerHTML = ex.length ? ex.map(function (e) { return '<li>' + e.date + ' : ' + e.note + ' / 20</li>'; }).join('') : '<li>Aucun examen blanc passé.</li>';
  }
  function bilan() {
    var d = Suivi.lire(), nom = $('nom').value.trim() || 'Élève';
    var t = 'Bilan de ' + nom + ' — Bases de données et Access 2016\n';
    CHAP.forEach(function (c) { var q = d.qcm[c.qcm]; t += c.titre + ' : ' + (d.lu[c.page] ? 'terminé' : 'à faire') + ', QCM : ' + (c.qcm === null ? '—' : q ? q.meilleur + ' %' : 'non fait') + '\n'; });
    var ex = d.examens || [];
    t += 'Examens blancs : ' + (ex.length ? ex.map(function (e) { return e.note + '/20'; }).join(', ') : 'aucun') + '\n';
    return t;
  }
  document.addEventListener('click', function (ev) {
    if (ev.target.id === 'copier') {
      var t = bilan(), m = $('msg');
      $('texte').value = t;
      if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(t).then(function () { m.textContent = 'Bilan copié. Colle-le dans un message pour ton enseignant.'; }, function () { m.textContent = 'Copie impossible : copie le texte ci-dessous.'; }); }
      else { m.textContent = 'Copie le texte ci-dessous.'; }
    }
    if (ev.target.id === 'effacer' && window.confirm('Effacer toute ta progression sur cet appareil ?')) { Suivi.effacer(); afficher(); $('texte').value = ''; }
  });
  afficher();
})();
