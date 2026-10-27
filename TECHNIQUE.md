# Fiche technique — HORS TEMPS

## Périmètre

Prototype monopage indépendant et fictif, réalisé pour le défi LIVE EXPERIENCE 2027. Le site présente trois modes (Traversée, Forge des échos, L’essentiel), sans boutique réelle, compte, inscription, collecte, persistance ni connexion d’API. Le détail du concept et la comparaison sourcée des cinq candidats sont dans [ANALYSE.md](ANALYSE.md) ; la création visuelle et la structure du prototype sont résumées dans [PLAN.md](PLAN.md).

## Environnement et technologies

- Poste Windows ; PowerShell 7.6.9.
- Node.js 24.19.0 et npm 11.17.0 ; service statique écrit avec les API intégrées à Node, sans dépendances à installer.
- Front-end : HTML sémantique, CSS, JavaScript natif et SVG original. Pas de framework, base de données, police web distante ou service tiers côté site.
- Serveur lié à `127.0.0.1:4173` par défaut ; un contrôle de chemin bloque les requêtes sortant du dossier du projet.
- Le site peut s’ouvrir directement depuis `index.html`, mais le serveur local est le parcours recommandé.

La réalisation a été effectuée par **Manus 2.0, agent IA** ; cette version de l’agent a été précisée pour le projet. L’identifiant et la version exacte du modèle sous-jacent ne sont pas exposés par l’environnement. Les tokens consommés et le coût interne de la plateforme ne sont pas visibles ; aucune valeur n’est inventée. Le site livré n’embarque ni n’appelle aucun modèle.

## Essais exécutés

- `npm test` : **4 tests réussis sur 4**. Vérification de la page et de ses mentions fictives, service des ressources HTML/CSS/JS/SVG, refus d’un chemin sortant du répertoire, et réponse 404.
- `node --check app.js` et `node --check server.mjs` : syntaxe valide.
- Vérification HTTP locale : page servie en 200 ; ressources principales servies en local ; aucun import de police distant.
- Prévisualisation dans le navigateur intégré Manus : rendu observé à 795 × 848 px, puis à largeur réduite d’environ 636 px par zoom afin d’activer le menu compact. Le passage d’un chapitre au suivant, la composition d’une carte avec trois choix, la remise à zéro, les onglets de jours (clic et flèche clavier) et l’ouverture/fermeture de la boîte de dialogue ont été essayés. Aucun message d’erreur console n’était présent lors du contrôle final.

Ce contrôle navigateur n’est pas un audit d’accessibilité formel. Aucun smartphone physique, navigateur supplémentaire, score Lighthouse, lecteur d’écran ou test de charge n’a été vérifié. Le prototype ne tente aucune réservation ou transaction.

## Durée et coûts

La fenêtre annoncée était de 90 minutes. Le prototype et sa première archive ont été validés à 18:17:51 (+01:00), 26 min 29 s après le message initial horodaté 17:51:22. Le complément documentaire a été demandé à 18:19:53 ; sa première archive enrichie a été vérifiée à 18:26:54, soit 35 min 32 s écoulées depuis le début. Une dernière passe de précision factuelle et le réempaquetage ont suivi ce jalon. Ces durées sont calculées à partir des horodatages de session, pas mesurées par un chronomètre de temps actif ou CPU. L’environnement ne fournissait pas de limiteur garantissant l’arrêt automatique à 90 minutes. La livraison n’exige aucun service hébergé ou achat ; aucun coût externe lié au site n’est requis.

## Reproduction

Depuis le dossier du projet, exécuter `npm start`, puis ouvrir `http://127.0.0.1:4173`. Lancer les contrôles automatisés avec `npm test`. Les instructions d’installation et le parcours sont également dans [README.md](README.md).

## Autres capacités et limites de l’environnement

- **Outils de code :** Manus Desktop, édition locale de fichiers, terminal PowerShell, Node/npm et outils Git installés. Le dossier du projet n’est pas initialisé comme dépôt Git et aucun remote n’a été trouvé ; aucune publication n’a eu lieu.
- **Web :** accès aux pages publiques pour la recherche de sources ; celles-ci sont répertoriées dans `ANALYSE.md`.
- **Navigateur :** prévisualisation et captures faites dans le navigateur intégré Manus ; version exacte de son moteur non exposée. Un exécutable Chrome 155.0.8059.85 est installé, mais ses tentatives de capture headless isolée n’ont pas servi de preuve ni d’image livrée.
- **Création visuelle :** illustration, sigles et identité par SVG/CSS écrits pour le projet. Aucun service ou modèle de génération d’images n’a été utilisé.
- **Dépôt GitHub :** le Markdown et ses images emploient des chemins relatifs compatibles avec GitHub, mais ils ne sont pas en ligne puisque le dossier local n’a ni dépôt Git ni remote.
