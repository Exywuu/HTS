# Plan de conception

> **Note de chronologie :** ce plan a été rédigé après la réalisation du prototype fonctionnel. Il résume la direction présente dans le résultat ; ce n’est ni un wireframe ni une maquette antérieure au développement. Voir [`docs/PROCESS.md`](docs/PROCESS.md).

## Intention

Créer un site d’expérience éditoriale, pas une copie du site officiel : « HORS TEMPS » donne à découvrir une édition anniversaire entièrement fictive autour d’un territoire du bruit imaginé. Il met sur un pied d’égalité exploration sensible et accès pratique.

## Direction artistique

- **Mouvement :** cartographie éditoriale contemporaine, détails d’atelier et formes de matière gravée.
- **Principes :** tension entre précision typographique et formes irrégulières ; contrastes forts ; contenu pratique toujours visible ; fiction explicitement marquée.
- **Palette :** charbon et papier chaud pour une lecture calme ; lime acide pour les repères ; orange braise pour les appels et contrepoints.
- **Composition :** grands blocs asymétriques, grille de territoire, espaces de respiration ; aucun effet 3D nécessaire.
- **Motifs :** quatre sigils dessinés en texte et SVG ; lignes de carte ; carte de fragments texturée par CSS.
- **Interaction :** les contrôles révèlent un contenu utile (fragment, itinéraire visuel, horaire) et ne sont jamais décoratifs.
- **Mouvement :** rotation lente des orbites et transitions discrètes ; animations désactivées ou raccourcies par `prefers-reduced-motion`.
- **Typographie :** serif système (Georgia) pour les titres, sans-sérif pour la lecture, monospace pour les légendes. Fonctionne hors ligne sans webfont obligatoire.
- **Voix :** sobre, collective, fragmentaire. « Rien à débloquer. » « Cette date est inventée. »
- **Signature :** lettre H dans un cartouche gravé et point braise ; création originale sans logo Hellfest.

## Architecture

- `index.html` : une page sémantique avec trois modes et composants accessibles.
- `styles.css` : thème, version mobile, focus, reduced motion et contraste.
- `app.js` : chapitres, forge locale, onglets clavier et dialogue simulé.
- `assets/mark.svg` : favicon et sigle indépendant.
- `server.mjs` : serveur statique local Node, sans dépendance.
- `tests/` : contrôles par Node intégré.
- `ANALYSE.md` : comparaison sourcée, choix et limites de recherche.
- `README.md` : mode d’emploi et limites du prototype.
- `docs/PROCESS.md` : chronologie vérifiée, captures finales et limites des essais.
