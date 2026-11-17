# Bases de données et Access 2016 : site de cours

Proposé par Elabed Elmouldi.

Cours d'informatique pour la 4ème Économie et Gestion. Le site contient 10 chapitres (avec cartes mentales et tableaux de synthèse), une animation guidée avec narration, des exercices en trois niveaux, un devoir de synthèse avec barème et corrigé, 100 QCM avec correction automatique et mode examen blanc, et un suivi de progression.

Adresse du site après publication : `https://NOM-UTILISATEUR.github.io/NOM-DU-DEPOT/`

## Publier sur GitHub Pages (sans ligne de commande)

1. Créer un compte sur https://github.com (gratuit).
2. Cliquer sur **New repository**. Nom du dépôt : `cours-access2016`. Choisir **Public**. Ne pas cocher « Add a README ».
3. Cliquer sur **uploading an existing file**.
4. Décompresser le ZIP. Glisser **tout le contenu** du dossier dans la page : `index.html`, les autres fichiers `.html`, le dossier `assets`, `.nojekyll` et `README.md`. Les fichiers doivent être à la racine du dépôt, pas dans un sous-dossier.
5. Cliquer sur **Commit changes**.
6. Ouvrir **Settings**, puis **Pages**. Dans « Build and deployment », choisir **Deploy from a branch**. Branche : `main`. Dossier : `/ (root)`. Cliquer sur **Save**.
7. Attendre 1 à 2 minutes. L'adresse du site s'affiche en haut de la page Pages.

Avec un compte gratuit, le dépôt doit être public pour utiliser GitHub Pages.

## Publier avec Git (ligne de commande)

```
git init
git add .
git commit -m "Site de cours Access 2016"
git branch -M main
git remote add origin https://github.com/NOM-UTILISATEUR/cours-access2016.git
git push -u origin main
```

Ensuite, activer Pages comme aux étapes 6 et 7 ci-dessus.

## Liste de tests après publication

| Test | Résultat attendu |
|---|---|
| Ouvrir l'adresse du site | La page d'accueil s'affiche avec le plan du cours |
| Cliquer sur chaque lien du menu | Les 17 pages s'ouvrent, la mise en page est correcte |
| Ouvrir le chapitre 3 bis | Le diagramme entité-association s'affiche |
| Ouvrir un chapitre | La carte mentale et le tableau de synthèse s'affichent |
| Animation : cliquer sur Suivant 12 fois | Les 13 étapes s'affichent, avec pointeur et surlignage |
| Animation : cocher Narration | Une voix française lit le texte (si l'appareil en a une) |
| QCM : répondre à une question | La correction apparaît tout de suite, avec l'explication |
| QCM : mode Examen blanc | 20 questions, chronomètre de 20 minutes, correction à la fin |
| QCM : ouvrir `qcm.html?ch=31` | Seules les 10 questions du chapitre 3 bis s'affichent |
| Chapitre : bouton « Marquer comme terminé » | Le menu souligne le chapitre en vert ; la page Suivi le compte |
| Page Ma progression : Copier mon bilan | Le bilan s'affiche dans la zone de texte |
| Ouvrir le site sur un téléphone | Le menu défile, aucune page ne dépasse de l'écran |
| Imprimer une page (Ctrl+P) | Le menu disparaît, la signature reste |

## Contenu du dépôt

| Fichier | Rôle |
|---|---|
| `index.html` | Accueil et plan du cours |
| `ch1-introduction.html` à `ch8-import-export.html` | Chapitres 1 à 8, plus `ch3b-conception.html` et `ch7b-exemples-requetes.html` |
| `animation.html` | Animation guidée : créer une base Access |
| `exercices.html`, `devoir-synthese.html`, `resume-exercices.html` | Exercices gradués, devoir de synthèse, résumé |
| `qcm.html` | 100 QCM avec correction automatique et examen blanc |
| `progression.html` | Suivi de la progression |
| `assets/` | Feuille de style, banque de QCM, programmes (QCM, animation, suivi) |
| `.nojekyll` | Demande à GitHub de publier les fichiers tels quels |

## Modifier les QCM

Ouvrir `assets/qcm-data.js`. Chaque question a : `ch` (chapitre ; 31 = chapitre 3 bis), `n` (niveau : 1 base, 2 approfondissement, 3 défi), `q` (question), `o` (4 réponses), `a` (position de la bonne réponse : 0, 1, 2 ou 3) et `e` (explication). Enregistrer, puis envoyer le fichier modifié sur GitHub (**Add file**, **Upload files**).

## Suivi de progression

Il est enregistré dans le navigateur de chaque appareil. Il n'est envoyé à personne.

## Dépannage

- **Erreur 404** : attendre quelques minutes. Vérifier que `index.html` est à la racine du dépôt, que le dépôt est public et que Pages est activé.
- **Page sans mise en forme** : le dossier `assets` n'a pas été envoyé. Le glisser de nouveau dans le dépôt.
- **Ancienne version affichée** : vider le cache du navigateur (Ctrl+F5).
