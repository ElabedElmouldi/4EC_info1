// Banque de 100 QCM : ch = chapitre (31 = chapitre 3 bis), n = niveau (1 base, 2 approfondissement, 3 défi), o = réponses, a = indice de la bonne réponse, e = explication
var QCM = [
 {
  "ch": 1,
  "n": 1,
  "q": "Qu'est-ce qu'une donnée ?",
  "o": [
   "Une représentation brute d'un fait, sans interprétation",
   "Une information déjà interprétée dans un contexte",
   "Un logiciel de gestion",
   "Un tableau de plusieurs lignes"
  ],
  "a": 0,
  "e": "Une donnée seule n'a pas de sens complet. Interprétée dans un contexte, elle devient une information."
 },
 {
  "ch": 1,
  "n": 1,
  "q": "Quel est un inconvénient des fichiers séparés ?",
  "o": [
   "Une sécurité trop forte",
   "La redondance et l'incohérence des données",
   "Une recherche trop rapide",
   "Un partage simultané sans aucun risque"
  ],
  "a": 1,
  "e": "La même information est répétée à plusieurs endroits et peut devenir contradictoire."
 },
 {
  "ch": 1,
  "n": 1,
  "q": "Quel modèle de base de données est le plus répandu ?",
  "o": [
   "Le modèle hiérarchique",
   "Le modèle réseau",
   "Le modèle relationnel",
   "Le modèle orienté objet"
  ],
  "a": 2,
  "e": "Il range les données dans des tables reliées par des clés. Il a été proposé par E.F. Codd en 1970."
 },
 {
  "ch": 1,
  "n": 1,
  "q": "Une base de données est :",
  "o": [
   "un ensemble de logiciels sans lien",
   "un écran de saisie",
   "un fichier d'images uniquement",
   "un ensemble organisé de données liées à un même sujet"
  ],
  "a": 3,
  "e": "Elle est structurée, conservée durablement et partagée entre plusieurs utilisateurs."
 },
 {
  "ch": 1,
  "n": 2,
  "q": "Quel logiciel est une base de données NoSQL ?",
  "o": [
   "MongoDB",
   "Microsoft Access",
   "MySQL",
   "Oracle Database"
  ],
  "a": 0,
  "e": "MongoDB stocke des documents. Access, MySQL et Oracle sont des SGBD relationnels."
 },
 {
  "ch": 1,
  "n": 1,
  "q": "Répéter l'adresse d'un élève à chaque prêt de livre est un exemple de :",
  "o": [
   "sauvegarde",
   "redondance",
   "sécurité",
   "intégrité référentielle"
  ],
  "a": 1,
  "e": "Une même information est répétée inutilement. On l'évite avec des tables séparées reliées par des clés."
 },
 {
  "ch": 2,
  "n": 1,
  "q": "Un SGBD est :",
  "o": [
   "un fichier contenant les données",
   "un langage de programmation",
   "un logiciel qui crée et gère une base de données",
   "un matériel de stockage"
  ],
  "a": 2,
  "e": "Le SGBD sert d'intermédiaire entre les utilisateurs et la base de données."
 },
 {
  "ch": 2,
  "n": 2,
  "q": "Quelle phrase est correcte ?",
  "o": [
   "GestionCommandes.accdb est un SGBD et Access est une base de données",
   "Access et GestionCommandes.accdb sont tous deux des SGBD",
   "Access et GestionCommandes.accdb sont tous deux des bases de données",
   "GestionCommandes.accdb est une base de données et Access est un SGBD"
  ],
  "a": 3,
  "e": "La base contient les données. Le SGBD est le logiciel qui la gère."
 },
 {
  "ch": 2,
  "n": 1,
  "q": "Protéger une base par un mot de passe correspond au rôle de :",
  "o": [
   "sécurité",
   "manipulation des données",
   "partage",
   "définition des données"
  ],
  "a": 0,
  "e": "La sécurité limite l'accès aux personnes autorisées."
 },
 {
  "ch": 2,
  "n": 1,
  "q": "Qui installe le SGBD et gère la sécurité et les sauvegardes ?",
  "o": [
   "L'utilisateur final",
   "L'administrateur (DBA)",
   "Le concepteur",
   "Le développeur"
  ],
  "a": 1,
  "e": "L'administrateur de la base s'occupe de l'installation, de la sécurité et des sauvegardes."
 },
 {
  "ch": 2,
  "n": 2,
  "q": "Lequel de ces SGBD est libre ?",
  "o": [
   "Microsoft Access",
   "Oracle Database",
   "PostgreSQL",
   "SQL Server"
  ],
  "a": 2,
  "e": "PostgreSQL est libre. Access, Oracle Database et SQL Server sont des produits commerciaux."
 },
 {
  "ch": 2,
  "n": 1,
  "q": "Ajouter, modifier, supprimer et rechercher des données correspond au rôle de :",
  "o": [
   "définition des données",
   "sauvegarde et restauration",
   "contrôle de l'intégrité",
   "manipulation des données"
  ],
  "a": 3,
  "e": "La manipulation se fait avec la feuille de données, les formulaires et les requêtes."
 },
 {
  "ch": 3,
  "n": 1,
  "q": "Dans une table, une colonne s'appelle :",
  "o": [
   "un champ",
   "un enregistrement",
   "une clé",
   "une relation"
  ],
  "a": 0,
  "e": "Un champ décrit une propriété du sujet de la table (Nom, Ville, Téléphone…)."
 },
 {
  "ch": 3,
  "n": 1,
  "q": "Dans une table, une ligne s'appelle :",
  "o": [
   "un champ",
   "un enregistrement",
   "un domaine",
   "un type de données"
  ],
  "a": 1,
  "e": "Un enregistrement regroupe les valeurs de tous les champs pour un élément (un client)."
 },
 {
  "ch": 3,
  "n": 1,
  "q": "Une clé primaire doit être :",
  "o": [
   "répétée dans plusieurs lignes",
   "vide pour certains enregistrements",
   "unique et jamais vide",
   "modifiée à chaque saisie"
  ],
  "a": 2,
  "e": "Elle identifie de façon unique chaque enregistrement. Elle est aussi stable et la plus courte possible."
 },
 {
  "ch": 3,
  "n": 2,
  "q": "Une clé étrangère :",
  "o": [
   "identifie de façon unique les lignes de sa propre table",
   "remplace le type de données",
   "est toujours de type texte",
   "reprend les valeurs de la clé primaire d'une autre table"
  ],
  "a": 3,
  "e": "Elle crée le lien entre deux tables. Exemple : IdClient dans COMMANDE renvoie à IdClient de CLIENT."
 },
 {
  "ch": 3,
  "n": 2,
  "q": "Quelle est la clé primaire de la table LIGNE_COMMANDE ?",
  "o": [
   "Le couple (NumCommande, CodeProduit)",
   "NumCommande seul",
   "CodeProduit seul",
   "Quantité"
  ],
  "a": 0,
  "e": "Un produit apparaît une seule fois dans une commande : la combinaison des deux champs est unique."
 },
 {
  "ch": 3,
  "n": 1,
  "q": "Un client passe plusieurs commandes. Chaque commande appartient à un seul client. La relation est :",
  "o": [
   "un à un",
   "un à plusieurs",
   "plusieurs à plusieurs",
   "inexistante"
  ],
  "a": 1,
  "e": "C'est la relation la plus fréquente. La clé primaire du côté « un » est copiée comme clé étrangère du côté « plusieurs »."
 },
 {
  "ch": 3,
  "n": 2,
  "q": "Une relation plusieurs à plusieurs se réalise avec :",
  "o": [
   "une seule table sans clé",
   "un formulaire",
   "une table intermédiaire",
   "une requête de suppression"
  ],
  "a": 2,
  "e": "La table intermédiaire (LIGNE_COMMANDE) donne deux relations un à plusieurs."
 },
 {
  "ch": 3,
  "n": 2,
  "q": "L'intégrité référentielle empêche :",
  "o": [
   "de saisir une date",
   "d'utiliser des requêtes",
   "d'enregistrer la base",
   "de créer une commande pour un client inexistant"
  ],
  "a": 3,
  "e": "Elle empêche aussi de supprimer un client qui possède encore des commandes (sauf suppression en cascade)."
 },
 {
  "ch": 3,
  "n": 2,
  "q": "La valeur Null signifie :",
  "o": [
   "absence de valeur",
   "zéro",
   "texte vide",
   "un espace"
  ],
  "a": 0,
  "e": "Un champ Null n'est pas renseigné. Elle est interdite dans une clé primaire."
 },
 {
  "ch": 4,
  "n": 1,
  "q": "Quelle est l'extension d'un fichier Access 2016 ?",
  "o": [
   ".xlsx",
   ".accdb",
   ".docx",
   ".csv"
  ],
  "a": 1,
  "e": "Le fichier .accdb contient les tables, les requêtes, les formulaires et les états."
 },
 {
  "ch": 4,
  "n": 1,
  "q": "Quelle option choisir pour créer une base sans modèle ?",
  "o": [
   "Modèles en ligne",
   "Applications web",
   "Base de données du Bureau vide",
   "Récent"
  ],
  "a": 2,
  "e": "On saisit ensuite le nom du fichier puis on clique sur Créer."
 },
 {
  "ch": 4,
  "n": 1,
  "q": "Quel objet Access présente des données mises en forme pour l'impression ?",
  "o": [
   "La table",
   "Le formulaire",
   "La macro",
   "L'état"
  ],
  "a": 3,
  "e": "Une facture ou une liste de produits est un état."
 },
 {
  "ch": 4,
  "n": 2,
  "q": "Quel objet Access stocke les données ?",
  "o": [
   "La table",
   "La requête",
   "L'état",
   "Le module"
  ],
  "a": 0,
  "e": "Les requêtes lisent ou modifient les données. Elles ne les stockent pas."
 },
 {
  "ch": 5,
  "n": 1,
  "q": "Quel type de données choisir pour un identifiant numéroté automatiquement ?",
  "o": [
   "Texte court",
   "NuméroAuto",
   "Monétaire",
   "Date/Heure"
  ],
  "a": 1,
  "e": "NuméroAuto donne un numéro unique, incrémenté à chaque nouvel enregistrement."
 },
 {
  "ch": 5,
  "n": 1,
  "q": "Quel type de données convient au champ PrixUnitaire ?",
  "o": [
   "Texte court",
   "Oui/Non",
   "Monétaire",
   "Date/Heure"
  ],
  "a": 2,
  "e": "Le type Monétaire est prévu pour les montants."
 },
 {
  "ch": 5,
  "n": 1,
  "q": "Quel type de données convient au champ DateCommande ?",
  "o": [
   "Texte long",
   "NuméroAuto",
   "Oui/Non",
   "Date/Heure"
  ],
  "a": 3,
  "e": "Ce type permet de trier et de filtrer les dates."
 },
 {
  "ch": 5,
  "n": 2,
  "q": "Pourquoi choisir Texte court pour le champ Téléphone ?",
  "o": [
   "On ne calcule pas dessus et le zéro initial est conservé",
   "Un nombre ne peut pas dépasser 3 chiffres",
   "Access refuse le type Numérique",
   "Le texte se trie plus vite"
  ],
  "a": 0,
  "e": "Un numéro de téléphone n'est pas une quantité. Le type Numérique supprimerait un zéro au début."
 },
 {
  "ch": 5,
  "n": 2,
  "q": "Combien de caractères au maximum peut contenir un Texte court ?",
  "o": [
   "50",
   "255",
   "100",
   "1 000"
  ],
  "a": 1,
  "e": "Pour un texte plus long, on utilise le type Texte long."
 },
 {
  "ch": 5,
  "n": 2,
  "q": "La propriété « Null interdit = Oui » signifie que :",
  "o": [
   "le champ ne peut contenir que des nombres",
   "le champ est invisible",
   "le champ doit toujours être renseigné",
   "le champ est supprimé"
  ],
  "a": 2,
  "e": "Access refuse d'enregistrer un enregistrement dont ce champ est vide."
 },
 {
  "ch": 5,
  "n": 1,
  "q": "Comment définir la clé primaire en mode Création ?",
  "o": [
   "Taper « clé » dans la description",
   "Choisir le type Clé",
   "Créer une requête",
   "Sélectionner le champ puis cliquer sur Clé primaire"
  ],
  "a": 3,
  "e": "Pour une clé composée, on sélectionne les deux champs ensemble avant de cliquer sur Clé primaire."
 },
 {
  "ch": 6,
  "n": 1,
  "q": "Où ouvre-t-on la fenêtre Relations ?",
  "o": [
   "Outils de base de données → Relations",
   "Créer → Relations",
   "Accueil → Relations",
   "Fichier → Relations"
  ],
  "a": 0,
  "e": "On ajoute ensuite les tables à relier."
 },
 {
  "ch": 6,
  "n": 2,
  "q": "Comment crée-t-on une relation dans la fenêtre Relations ?",
  "o": [
   "En double-cliquant sur le nom de la base",
   "En glissant le champ clé primaire vers le champ correspondant de l'autre table",
   "En copiant une table dans l'autre",
   "En écrivant la relation dans une requête"
  ],
  "a": 1,
  "e": "La boîte « Modifier les relations » s'ouvre ensuite."
 },
 {
  "ch": 6,
  "n": 2,
  "q": "Avant d'ouvrir la fenêtre Relations, il faut :",
  "o": [
   "supprimer les données",
   "exporter la base",
   "fermer toutes les tables",
   "créer un état"
  ],
  "a": 2,
  "e": "Une table ouverte empêche de créer ou de modifier une relation."
 },
 {
  "ch": 6,
  "n": 2,
  "q": "Quelle case faut-il cocher pour qu'une clé étrangère désigne toujours un enregistrement existant ?",
  "o": [
   "Mettre à jour en cascade les champs correspondants",
   "Effacer en cascade les enregistrements correspondants",
   "Indexé : Oui",
   "Appliquer l'intégrité référentielle"
  ],
  "a": 3,
  "e": "Cette règle protège la cohérence entre les tables."
 },
 {
  "ch": 6,
  "n": 3,
  "q": "Les deux champs reliés par une relation doivent avoir :",
  "o": [
   "des types de données compatibles",
   "obligatoirement le même nom",
   "des valeurs toutes différentes",
   "la propriété Null interdit"
  ],
  "a": 0,
  "e": "Les noms peuvent différer. NuméroAuto côté clé primaire se relie à Numérique (entier long) côté clé étrangère."
 },
 {
  "ch": 6,
  "n": 3,
  "q": "Dans une relation un à un, les deux champs reliés sont :",
  "o": [
   "des champs calculés",
   "des clés primaires",
   "des clés étrangères uniquement",
   "de type Texte long"
  ],
  "a": 1,
  "e": "Chaque valeur apparaît au plus une fois de chaque côté."
 },
 {
  "ch": 7,
  "n": 1,
  "q": "Une requête sert à :",
  "o": [
   "stocker les données",
   "imprimer un document mis en forme",
   "poser une question à la base pour sélectionner, calculer ou modifier des données",
   "sauvegarder la base"
  ],
  "a": 2,
  "e": "Une requête s'appuie sur une ou plusieurs tables."
 },
 {
  "ch": 7,
  "n": 1,
  "q": "Où saisit-on le critère « Sfax » pour sélectionner les clients de Sfax ?",
  "o": [
   "Dans la ligne Tri, sous le champ Ville",
   "Dans la ligne Table",
   "Dans la ligne Afficher",
   "Dans la ligne Critères, sous le champ Ville"
  ],
  "a": 3,
  "e": "La ligne Critères contient la condition que doit remplir le champ."
 },
 {
  "ch": 7,
  "n": 2,
  "q": "Quel critère sélectionne les noms qui commencent par A ?",
  "o": [
   "Comme \"A*\"",
   "Comme \"*A\"",
   "= A",
   "Entre A"
  ],
  "a": 0,
  "e": "L'étoile remplace n'importe quelle suite de caractères."
 },
 {
  "ch": 7,
  "n": 2,
  "q": "Comment rend-on une requête paramétrée ?",
  "o": [
   "En écrivant le critère entre guillemets",
   "En écrivant le critère entre crochets, par exemple [Entrez la ville :]",
   "En cochant la case Afficher",
   "En utilisant le bouton Tri"
  ],
  "a": 1,
  "e": "Access affiche une boîte de dialogue qui demande la valeur à l'exécution."
 },
 {
  "ch": 7,
  "n": 2,
  "q": "Quelle expression calcule le montant d'une ligne de commande ?",
  "o": [
   "Montant = Quantité + PrixUnitaire",
   "Montant: Somme(Quantité)",
   "Montant: [Quantité]*[PrixUnitaire]",
   "[Montant] Comme Quantité*Prix"
  ],
  "a": 2,
  "e": "Un champ calculé s'écrit Nom: expression dans la ligne Champ."
 },
 {
  "ch": 7,
  "n": 2,
  "q": "Comment compter le nombre de commandes de chaque client ?",
  "o": [
   "Avec une requête de suppression",
   "Avec une requête de mise à jour",
   "Avec un filtre dans la feuille de données",
   "Avec le bouton Totaux : Regroupement sur Nom et Compte sur NumCommande"
  ],
  "a": 3,
  "e": "Le bouton Totaux fait apparaître la ligne Opération."
 },
 {
  "ch": 7,
  "n": 1,
  "q": "Quelle requête enregistre le résultat dans une nouvelle table ?",
  "o": [
   "La requête de création de table",
   "La requête de sélection",
   "La requête paramétrée",
   "La requête de suppression"
  ],
  "a": 0,
  "e": "On choisit le bouton Création de table puis on donne le nom de la nouvelle table."
 },
 {
  "ch": 7,
  "n": 1,
  "q": "Quelle requête augmente de 10 % le prix de plusieurs produits ?",
  "o": [
   "La requête d'ajout",
   "La requête de mise à jour",
   "La requête de suppression",
   "La requête de non-correspondance"
  ],
  "a": 1,
  "e": "Dans la ligne « Mise à jour », on écrit [PrixUnitaire]*1.1."
 },
 {
  "ch": 7,
  "n": 3,
  "q": "Quel critère sélectionne les commandes de février et mars 2026 ?",
  "o": [
   "Comme \"02/2026\"",
   "Entre 2026 Et 2026",
   "Entre #01/02/2026# Et #31/03/2026#",
   "> #31/03/2026#"
  ],
  "a": 2,
  "e": "Les dates sont entourées du signe # dans les critères."
 },
 {
  "ch": 8,
  "n": 1,
  "q": "Quel onglet contient les commandes d'importation et d'exportation ?",
  "o": [
   "Créer",
   "Accueil",
   "Outils de base de données",
   "Données externes"
  ],
  "a": 3,
  "e": "Les groupes « Importer et lier » et « Exporter » s'y trouvent."
 },
 {
  "ch": 8,
  "n": 2,
  "q": "Quel séparateur est le plus courant dans un fichier CSV français ?",
  "o": [
   "Le point-virgule",
   "La virgule",
   "Les deux-points",
   "Le tiret"
  ],
  "a": 0,
  "e": "En français, la virgule est le séparateur décimal."
 },
 {
  "ch": 8,
  "n": 2,
  "q": "Que faire pour afficher correctement les accents d'un CSV importé ?",
  "o": [
   "Supprimer tous les accents",
   "Choisir l'encodage Unicode (UTF-8)",
   "Changer le type en Numérique",
   "Remplacer le séparateur par une espace"
  ],
  "a": 1,
  "e": "Un mauvais encodage affiche des caractères étranges à la place des accents."
 },
 {
  "ch": 31,
  "n": 1,
  "q": "Dans quel ordre se déroule la conception d'une base de données ?",
  "o": [
   "Création dans Access, analyse du besoin, schéma relationnel, modèle entité-association",
   "Schéma relationnel, création dans Access, analyse du besoin, modèle entité-association",
   "Analyse du besoin, modèle entité-association, schéma relationnel, création dans Access",
   "Modèle entité-association, création dans Access, analyse du besoin, schéma relationnel"
  ],
  "a": 2,
  "e": "On conçoit sur papier avant de créer les tables."
 },
 {
  "ch": 31,
  "n": 1,
  "q": "Une entité est :",
  "o": [
   "un lien entre deux tables",
   "un type de données",
   "une requête enregistrée",
   "un objet ou une personne du domaine étudié, décrit par des propriétés"
  ],
  "a": 3,
  "e": "Exemples : CLIENT, PRODUIT. Une entité devient une table."
 },
 {
  "ch": 31,
  "n": 1,
  "q": "Une association est :",
  "o": [
   "un lien entre deux entités ou plus",
   "un champ de type Texte",
   "une valeur Null",
   "un fichier .accdb"
  ],
  "a": 0,
  "e": "Exemples : PASSER, CONTENIR."
 },
 {
  "ch": 31,
  "n": 2,
  "q": "La cardinalité (min,max) indique :",
  "o": [
   "la taille maximale d'un champ",
   "le nombre minimal et maximal de fois qu'une occurrence d'une entité participe à l'association",
   "le nombre de tables de la base",
   "le nombre de requêtes enregistrées"
  ],
  "a": 1,
  "e": "Elle se note 0,1 ; 1,1 ; 0,N ou 1,N."
 },
 {
  "ch": 31,
  "n": 2,
  "q": "Un client peut passer zéro, une ou plusieurs commandes. Quelle est la cardinalité du côté CLIENT ?",
  "o": [
   "1,1",
   "0,1",
   "0,N",
   "1,N"
  ],
  "a": 2,
  "e": "Le minimum est 0 et le maximum est N."
 },
 {
  "ch": 31,
  "n": 2,
  "q": "Une commande est passée par exactement un client. Quelle est la cardinalité du côté COMMANDE ?",
  "o": [
   "0,N",
   "1,N",
   "0,1",
   "1,1"
  ],
  "a": 3,
  "e": "Le minimum et le maximum sont égaux à 1."
 },
 {
  "ch": 31,
  "n": 2,
  "q": "L'association CONTENIR entre COMMANDE (1,N) et PRODUIT (0,N) devient, dans le schéma relationnel :",
  "o": [
   "une table intermédiaire avec deux clés étrangères",
   "un champ ajouté dans CLIENT",
   "une requête",
   "une clé primaire dans PRODUIT seulement"
  ],
  "a": 0,
  "e": "Une association plusieurs à plusieurs devient une table."
 },
 {
  "ch": 31,
  "n": 2,
  "q": "Pour une association un à plusieurs entre A (côté un) et B (côté plusieurs), où place-t-on la clé étrangère ?",
  "o": [
   "Dans la table A",
   "Dans la table B",
   "Dans une troisième table",
   "Nulle part"
  ],
  "a": 1,
  "e": "La clé primaire de A est copiée dans B."
 },
 {
  "ch": 31,
  "n": 3,
  "q": "Où range-t-on la propriété Quantité de l'association CONTENIR ?",
  "o": [
   "Dans la table CLIENT",
   "Dans la table PRODUIT",
   "Dans la table intermédiaire LIGNE_COMMANDE",
   "Dans la table COMMANDE"
  ],
  "a": 2,
  "e": "Les propriétés d'une association plusieurs à plusieurs vont dans la table intermédiaire."
 },
 {
  "ch": 31,
  "n": 1,
  "q": "Le dictionnaire de données décrit pour chaque champ :",
  "o": [
   "uniquement ses valeurs",
   "son mot de passe",
   "le nombre d'utilisateurs",
   "son nom, sa description, son type, sa taille et ses contraintes"
  ],
  "a": 3,
  "e": "Il se rédige avant de créer les tables."
 },
 {
  "ch": 1,
  "n": 2,
  "q": "Quel exemple est une information et non une simple donnée ?",
  "o": [
   "« Le client Ben Ali habite à Sfax »",
   "« Sfax »",
   "« 45 »",
   "« 12/03/2026 »"
  ],
  "a": 0,
  "e": "Une information est une donnée placée dans un contexte."
 },
 {
  "ch": 1,
  "n": 2,
  "q": "Pourquoi la sécurité est-elle meilleure avec une base de données qu'avec des fichiers séparés ?",
  "o": [
   "Les données sont cachées dans un fichier texte",
   "Les droits d'accès se définissent par utilisateur",
   "Les données sont dupliquées plusieurs fois",
   "Il n'y a plus de mot de passe"
  ],
  "a": 1,
  "e": "Le SGBD contrôle qui peut lire ou modifier les données."
 },
 {
  "ch": 1,
  "n": 1,
  "q": "Quel modèle organise les données en arbre où chaque élément a un seul parent ?",
  "o": [
   "Le modèle relationnel",
   "Le modèle réseau",
   "Le modèle hiérarchique",
   "Le modèle NoSQL"
  ],
  "a": 2,
  "e": "Dans le modèle réseau, un élément peut avoir plusieurs parents."
 },
 {
  "ch": 1,
  "n": 1,
  "q": "Quel domaine utilise une base de données pour gérer les notes et les absences ?",
  "o": [
   "Le transport aérien",
   "La banque",
   "Les réseaux sociaux",
   "L'éducation"
  ],
  "a": 3,
  "e": "Les établissements scolaires gèrent élèves, notes et absences."
 },
 {
  "ch": 2,
  "n": 2,
  "q": "Quel rôle du SGBD permet à plusieurs vendeurs de saisir des commandes en même temps ?",
  "o": [
   "Le partage (accès simultané)",
   "La sauvegarde",
   "La définition des données",
   "La mise en forme"
  ],
  "a": 0,
  "e": "Le SGBD évite les conflits entre utilisateurs."
 },
 {
  "ch": 2,
  "n": 2,
  "q": "Qui décide quelles tables et quels liens créer ?",
  "o": [
   "L'utilisateur final",
   "Le concepteur",
   "Le fabricant de l'ordinateur",
   "Le vendeur du logiciel"
  ],
  "a": 1,
  "e": "Le concepteur analyse le besoin et dessine la base."
 },
 {
  "ch": 2,
  "n": 2,
  "q": "Quel SGBD léger est intégré à de nombreuses applications mobiles ?",
  "o": [
   "Oracle Database",
   "Microsoft Access",
   "SQLite",
   "SQL Server"
  ],
  "a": 2,
  "e": "SQLite ne demande pas de serveur."
 },
 {
  "ch": 2,
  "n": 3,
  "q": "Le rôle « indépendance données / programmes » permet de :",
  "o": [
   "supprimer les données",
   "protéger par mot de passe",
   "copier la base",
   "changer la structure de la base sans réécrire les applications"
  ],
  "a": 3,
  "e": "Un formulaire continue de fonctionner si l'on ajoute un champ."
 },
 {
  "ch": 3,
  "n": 1,
  "q": "Une table CLIENT a 8 lignes et 5 colonnes. Combien d'enregistrements contient-elle ?",
  "o": [
   "8",
   "5",
   "13",
   "40"
  ],
  "a": 0,
  "e": "Un enregistrement est une ligne."
 },
 {
  "ch": 3,
  "n": 2,
  "q": "Pourquoi le nom d'un client ne convient-il pas comme clé primaire ?",
  "o": [
   "Un nom est trop court",
   "Deux clients peuvent porter le même nom",
   "Un nom ne peut pas être de type texte",
   "Un nom change de type"
  ],
  "a": 1,
  "e": "Une clé primaire doit être unique."
 },
 {
  "ch": 3,
  "n": 1,
  "q": "Dans COMMANDE(NumCommande, DateCommande, #IdClient), IdClient est :",
  "o": [
   "la clé primaire",
   "un champ calculé",
   "une clé étrangère",
   "une clé composée"
  ],
  "a": 2,
  "e": "Le signe # indique une clé étrangère."
 },
 {
  "ch": 3,
  "n": 2,
  "q": "Une relation un à un existe entre :",
  "o": [
   "un client et ses commandes",
   "un étudiant et ses cours",
   "un produit et ses commandes",
   "un pays et sa capitale"
  ],
  "a": 3,
  "e": "Chaque pays a une seule capitale, et inversement."
 },
 {
  "ch": 3,
  "n": 2,
  "q": "Quelle intégrité garantit que la clé primaire est unique et non vide ?",
  "o": [
   "L'intégrité d'entité",
   "L'intégrité de domaine",
   "L'intégrité référentielle",
   "L'intégrité de partage"
  ],
  "a": 0,
  "e": "Elle protège l'identification des enregistrements."
 },
 {
  "ch": 4,
  "n": 1,
  "q": "Où voit-on les tables, requêtes, formulaires et états d'une base ouverte ?",
  "o": [
   "Dans le ruban",
   "Dans le volet de navigation",
   "Dans la barre d'état",
   "Dans la zone de travail vide"
  ],
  "a": 1,
  "e": "Le volet de navigation est à gauche."
 },
 {
  "ch": 4,
  "n": 1,
  "q": "Quel onglet du ruban permet de créer une nouvelle table ?",
  "o": [
   "Accueil",
   "Données externes",
   "Créer",
   "Fichier"
  ],
  "a": 2,
  "e": "L'onglet Créer contient aussi les requêtes, formulaires et états."
 },
 {
  "ch": 4,
  "n": 2,
  "q": "Que contient le fichier GestionCommandes.accdb ?",
  "o": [
   "Seulement les tables",
   "Seulement les requêtes",
   "Seulement les données sans structure",
   "Tous les objets de la base : tables, requêtes, formulaires, états"
  ],
  "a": 3,
  "e": "Un seul fichier regroupe toute la base."
 },
 {
  "ch": 5,
  "n": 1,
  "q": "Quelle propriété limite le nombre de caractères d'un champ Texte court ?",
  "o": [
   "Taille du champ",
   "Format",
   "Indexé",
   "Légende"
  ],
  "a": 0,
  "e": "La taille maximale est de 255 caractères."
 },
 {
  "ch": 5,
  "n": 2,
  "q": "Quelle règle de validation refuse les prix négatifs ou nuls ?",
  "o": [
   "Null interdit : Oui",
   "Valide si : >0",
   "Taille du champ : 255",
   "Indexé : Oui"
  ],
  "a": 1,
  "e": "La règle Valide si teste la valeur saisie."
 },
 {
  "ch": 5,
  "n": 2,
  "q": "Quelle propriété affiche un message personnalisé quand la règle de validation n'est pas respectée ?",
  "o": [
   "Légende",
   "Valeur par défaut",
   "Message si erreur",
   "Masque de saisie"
  ],
  "a": 2,
  "e": "Exemple : « Le prix doit être positif »."
 },
 {
  "ch": 5,
  "n": 3,
  "q": "Quelle valeur de la propriété Indexé interdit les valeurs en double ?",
  "o": [
   "Non",
   "Oui (Avec doublons)",
   "Null interdit",
   "Oui (Sans doublons)"
  ],
  "a": 3,
  "e": "La clé primaire est automatiquement indexée sans doublons."
 },
 {
  "ch": 5,
  "n": 1,
  "q": "Dans quel mode saisit-on les enregistrements d'une table ?",
  "o": [
   "Mode Feuille de données",
   "Mode Création",
   "Mode Relations",
   "Mode Requête"
  ],
  "a": 0,
  "e": "Le mode Création sert à définir la structure."
 },
 {
  "ch": 5,
  "n": 1,
  "q": "Quel type de données convient à un champ qui vaut seulement Vrai ou Faux (Payé) ?",
  "o": [
   "NuméroAuto",
   "Oui/Non",
   "Texte court",
   "Monétaire"
  ],
  "a": 1,
  "e": "Le champ est une case à cocher."
 },
 {
  "ch": 6,
  "n": 1,
  "q": "Dans la relation CLIENT-COMMANDE, quelle table est du côté « un » ?",
  "o": [
   "COMMANDE",
   "LIGNE_COMMANDE",
   "CLIENT",
   "PRODUIT"
  ],
  "a": 2,
  "e": "Un client a plusieurs commandes."
 },
 {
  "ch": 6,
  "n": 1,
  "q": "Quel symbole marque le côté « plusieurs » dans la fenêtre Relations ?",
  "o": [
   "1",
   "#",
   "*",
   "∞"
  ],
  "a": 3,
  "e": "Le côté « un » est marqué 1."
 },
 {
  "ch": 6,
  "n": 2,
  "q": "Avec l'intégrité référentielle, que se passe-t-il si l'on supprime un client qui a des commandes ?",
  "o": [
   "Access refuse la suppression",
   "Le client est supprimé sans message",
   "Les commandes passent à un autre client",
   "Les produits sont supprimés"
  ],
  "a": 0,
  "e": "Un message d'erreur s'affiche."
 },
 {
  "ch": 6,
  "n": 2,
  "q": "Quelle option efface aussi les commandes d'un client supprimé ?",
  "o": [
   "Mettre à jour en cascade les champs correspondants",
   "Effacer en cascade les enregistrements correspondants",
   "Indexé : Oui",
   "Null interdit : Oui"
  ],
  "a": 1,
  "e": "À utiliser avec prudence : les données liées sont perdues."
 },
 {
  "ch": 6,
  "n": 2,
  "q": "Pourquoi LIGNE_COMMANDE a-t-elle deux relations un à plusieurs ?",
  "o": [
   "Elle stocke les clients",
   "Elle remplace la table COMMANDE",
   "Elle réalise la relation plusieurs à plusieurs entre COMMANDE et PRODUIT",
   "Elle contient les requêtes"
  ],
  "a": 2,
  "e": "C'est le rôle d'une table intermédiaire."
 },
 {
  "ch": 7,
  "n": 2,
  "q": "Que signifie une case Afficher décochée pour un champ ?",
  "o": [
   "Le champ est supprimé de la table",
   "Le critère est ignoré",
   "Le champ devient Null",
   "Le champ sert au critère mais n'apparaît pas dans le résultat"
  ],
  "a": 3,
  "e": "On l'utilise pour un critère sur un champ inutile à l'affichage."
 },
 {
  "ch": 7,
  "n": 1,
  "q": "Quel critère exprime « prix supérieur à 50 » ?",
  "o": [
   ">50",
   "<50",
   "=50",
   "Entre 50"
  ],
  "a": 0,
  "e": "Les opérateurs sont >, <, = et Entre … Et."
 },
 {
  "ch": 7,
  "n": 2,
  "q": "Quel critère sélectionne les enregistrements dont la ville n'est pas renseignée ?",
  "o": [
   "= 0",
   "Est Null",
   "Comme \"*\"",
   "Sans valeur"
  ],
  "a": 1,
  "e": "Est Pas Null sélectionne les villes renseignées."
 },
 {
  "ch": 7,
  "n": 1,
  "q": "Quelle opération du bouton Totaux compte les enregistrements ?",
  "o": [
   "Somme",
   "Moyenne",
   "Compte",
   "Max"
  ],
  "a": 2,
  "e": "Somme additionne, Moyenne calcule la moyenne."
 },
 {
  "ch": 7,
  "n": 3,
  "q": "Pour calculer le montant total acheté par chaque client, on utilise :",
  "o": [
   "Compte sur Nom",
   "Max sur PrixUnitaire",
   "Moyenne sur NumCommande",
   "Regroupement sur Nom et Somme sur [Quantité]*[PrixUnitaire]"
  ],
  "a": 3,
  "e": "Le calcul se fait par client puis on additionne."
 },
 {
  "ch": 7,
  "n": 3,
  "q": "Dans une requête d'analyse croisée, que contient l'en-tête de colonne ?",
  "o": [
   "Les valeurs qui deviennent les titres des colonnes, par exemple les mois",
   "Le résultat des calculs",
   "Les noms des tables",
   "Les critères"
  ],
  "a": 0,
  "e": "La valeur (par exemple Somme de Quantité) occupe le corps du tableau."
 },
 {
  "ch": 7,
  "n": 1,
  "q": "Quelle requête supprime les enregistrements qui répondent à un critère ?",
  "o": [
   "La requête de sélection",
   "La requête de suppression",
   "La requête de mise à jour",
   "La requête d'ajout"
  ],
  "a": 1,
  "e": "Elle modifie la base : sauvegarder avant."
 },
 {
  "ch": 7,
  "n": 2,
  "q": "Quelle précaution prendre avant d'exécuter une requête d'action ?",
  "o": [
   "Fermer Access",
   "Supprimer les relations",
   "Faire une sauvegarde de la base",
   "Changer le type des champs"
  ],
  "a": 2,
  "e": "On vérifie aussi le résultat en mode Feuille de données."
 },
 {
  "ch": 7,
  "n": 2,
  "q": "Comment trouver les clients sans commande ?",
  "o": [
   "Avec une requête de suppression",
   "Avec une requête de création de table seulement",
   "Avec le bouton Totaux seulement",
   "Avec l'assistant de requête de non-correspondance"
  ],
  "a": 3,
  "e": "L'autre méthode : jointure sur tous les clients et critère Est Null."
 },
 {
  "ch": 7,
  "n": 2,
  "q": "Que fait une requête de mise à jour avec l'expression [Stock]-1 ?",
  "o": [
   "Elle diminue le stock de 1 pour chaque enregistrement concerné",
   "Elle supprime le stock",
   "Elle affiche le stock",
   "Elle ajoute un champ"
  ],
  "a": 0,
  "e": "Le critère limite les enregistrements modifiés."
 },
 {
  "ch": 8,
  "n": 3,
  "q": "Quelle option garde le lien avec le fichier Excel source sans copier ses données ?",
  "o": [
   "Importer les données dans une nouvelle table",
   "Lier à la source de données",
   "Ajouter une copie des enregistrements",
   "Exporter vers Excel"
  ],
  "a": 1,
  "e": "La table liée reflète les changements du fichier."
 },
 {
  "ch": 8,
  "n": 1,
  "q": "Que cocher pour que la première ligne d'un fichier Excel devienne les noms des champs ?",
  "o": [
   "Importer sans clé primaire",
   "Ignorer le champ",
   "La première ligne contient les en-têtes de colonnes",
   "Indexé : Oui"
  ],
  "a": 2,
  "e": "Sinon la première ligne est importée comme un enregistrement."
 },
 {
  "ch": 8,
  "n": 1,
  "q": "Pour exporter une requête vers Excel, on commence par :",
  "o": [
   "supprimer les relations",
   "fermer la base",
   "créer un état",
   "la sélectionner dans le volet de navigation"
  ],
  "a": 3,
  "e": "Puis Données externes, Exporter, Excel."
 }
];
