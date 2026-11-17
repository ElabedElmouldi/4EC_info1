/* Suivi de progression : chapitres terminés et scores de QCM, enregistrés sur l'appareil (localStorage). */
(function () {
  'use strict';
  var CLE = 'access2016_suivi';
  function lire() {
    try { return JSON.parse(localStorage.getItem(CLE)) || {lu: {}, qcm: {}, examens: []}; } catch (e) { return {lu: {}, qcm: {}, examens: []}; }
  }
  function ecrire(d) { try { localStorage.setItem(CLE, JSON.stringify(d)); return true; } catch (e) { return false; } }
  var Suivi = {
    lire: lire,
    marquerLu: function (page, valeur) { var d = lire(); if (valeur) { d.lu[page] = true; } else { delete d.lu[page]; } ecrire(d); },
    enregistrerQCM: function (chap, juste, total, mode) {
      var d = lire(), c = d.qcm[chap] || {meilleur: 0, dernier: 0, essais: 0};
      var pct = Math.round(juste * 100 / total);
      c.dernier = pct; c.meilleur = Math.max(c.meilleur, pct); c.essais++;
      d.qcm[chap] = c;
      if (mode === 'exam') { d.examens.push({date: new Date().toLocaleDateString('fr-FR'), note: Math.round(juste * 200 / total) / 10}); d.examens = d.examens.slice(-10); }
      ecrire(d);
    },
    effacer: function () { try { localStorage.removeItem(CLE); } catch (e) { return; } }
  };
  window.Suivi = Suivi;
  document.addEventListener('DOMContentLoaded', function () {
    var d = lire();
    document.querySelectorAll('.menu a[data-page]').forEach(function (a) { if (d.lu[a.getAttribute('data-page')]) { a.classList.add('fait'); } });
    var zone = document.getElementById('marquer');
    if (zone) {
      var page = zone.getAttribute('data-page');
      var maj = function () {
        var fait = !!lire().lu[page];
        zone.textContent = fait ? 'Chapitre terminé (cliquer pour annuler)' : 'Marquer ce chapitre comme terminé';
        zone.classList.toggle('on', fait);
        document.querySelectorAll('.menu a[data-page="' + page + '"]').forEach(function (a) { a.classList.toggle('fait', fait); });
      };
      zone.addEventListener('click', function () { Suivi.marquerLu(page, !lire().lu[page]); maj(); });
      maj();
    }
  });
})();
