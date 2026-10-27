# Processus et preuves — Daybreak · HORS TEMPS

Cette page distingue les traces réellement conservées des résumés rétrospectifs. Elle n’attribue pas au projet de maquette ou de test qui n’a pas eu lieu.

## Chronologie vérifiable

1. **Brief, attribution et périmètre.** Ce prototype a été réalisé par **Manus 2.0, agent IA**, après la demande utilisateur horodatée le 27 octobre 2026 à 17:51:22 (+01:00). Le brief LIVE EXPERIENCE 2027 demandait l’étude de cinq organisations, un choix autonome, une édition fictive, plusieurs modes de découverte, un accès pratique et un prototype réellement fonctionnel, accessible et responsive. Le choix de déploiement demandé pendant la session a été un site local simple.
2. **Recherche.** Des pages publiques des cinq organisations ont été examinées, principalement leurs propres sites. Une publication publique du compte associé à Lollapalooza Stockholm a servi à décrire la communication relative à la pause 2024 ; elle ne permet pas de conclure sur la suite. Les faits, interprétations et limites d’accès sont séparés dans [ANALYSE.md](../ANALYSE.md). Les sources ont été consultées le 27 octobre 2026.
3. **Décision créative.** Hellfest a été choisi pour les possibilités narratives offertes par ses espaces, ses scènes et leur scénographie. Le concept original *HORS TEMPS* place une traversée fictionnelle et une composition participative à côté d’un parcours pratique direct. C’est une hypothèse de conception, pas une conclusion issue d’entretiens utilisateurs.
4. **Construction.** Le prototype navigable a été construit directement en HTML, CSS et JavaScript natifs, avec un serveur Node local et une illustration SVG. Les trois modes et leurs interactions sont décrits dans le [README](../README.md). Aucun framework, API payante ou service hébergé n’est requis.
5. **Ce qui n’a pas précédé le code.** **Aucun wireframe, croquis, moodboard, maquette Figma, écran basse fidélité ou capture de prototype préparatoire n’a été créé ou conservé avant le développement.** L’intention de conception s’est concrétisée directement dans le prototype. Le fichier [PLAN.md](../PLAN.md) a été rédigé après la construction : c’est un résumé rétrospectif des choix présents, pas la preuve d’une maquette antérieure. Les captures ci-dessous ont également été faites après le développement.
6. **Révisions et vérification.** Le retrait d’une police web distante a rendu l’affichage indépendant de cette ressource ; la typographie utilise des polices système. Une capture a révélé un décalage inutile lors d’un lien d’ancre, corrigé dans la CSS ; les petits libellés mobiles ont également été agrandis. Le serveur a été contrôlé en HTTP. La navigation narrative, la forge, la remise à zéro, les onglets (souris et flèche clavier) et le dialogue de démonstration ont été exercés dans le navigateur intégré. Quatre tests automatisés couvrent la page et ses mentions, les ressources statiques, les chemins hors du projet et les erreurs 404. Le code fonctionnel n’a pas été modifié pendant le suivi documentaire Daybreak.
7. **Documentation.** Le présent README et cette chronologie ont été préparés après la réalisation pour rendre le dépôt lisible sur GitHub. Ils ne modifient pas les fichiers fonctionnels du prototype. Au moment de cette phase documentaire, le répertoire n’était pas un dépôt Git configuré ; le projet a été publié ultérieurement.
8. **Suivi documentaire Daybreak.** Le brief de documentation est arrivé le 27 octobre à 18:19:53. Les captures finales ont alors été enregistrées, le README, ce journal et les fiches ont été complétés, puis la première archive documentaire a été vérifiée à 18:26:54. Une dernière précision factuelle et un réempaquetage ont suivi. Pendant cette phase, le code fonctionnel du site n’a pas été modifié.

## Captures authentiques du prototype final

Les fichiers de `images/` sont des captures PNG prises dans le navigateur intégré Manus le 27 octobre 2026, à **795 × 848 pixels**. Elles montrent la version finale, et non une idée préalable au code. Les chemins relatifs permettent leur affichage dans GitHub Markdown une fois le dossier versé dans un dépôt.

| Fichier | Ce qu’il montre | Étape et statut |
|---|---|---|
| [`images/home.png`](images/home.png) | Accueil, signature graphique, entrée dans l’expérience et mention explicite de fiction. | Capture du prototype final après implémentation. |
| [`images/story.png`](images/story.png) | Carte des quatre territoires et fragment « Écho », après activation d’un nœud. | Capture du prototype final dans un état interactif. |
| [`images/forge.png`](images/forge.png) | Trois forces sélectionnées et carte de parcours effectivement composée. | Capture du prototype final après composition locale. |
| [`images/practical.png`](images/practical.png) | Mode pratique, avertissement de fiction, dates et premier jour de programme. | Capture du prototype final ; tous les renseignements événementiels affichés sont fictifs. |

Un affichage plus étroit d’environ **636 pixels** a également été observé dans le navigateur après zoom pour activer le menu compact. Il ne s’agissait pas d’un smartphone physique et aucune capture mobile distincte n’a été conservée. Le contrôle de la mise en page ne doit donc pas être présenté comme un essai sur appareil réel.

## Ressources et droits

Les visuels livrés sont produits par le code du prototype : SVG, formes CSS, typographie système et illustration vectorielle. Aucun logo, affiche, photo, vidéo, morceau ou élément graphique propriétaire des cinq organisations n’est repris. Les liens officiels figurent dans la documentation à titre de sources consultées, pas comme ressources incorporées dans le site.

## Ce qui demeure non vérifié

- Aucun test utilisateur, entretien ou validation par Hellfest.
- Aucun examen visuel comparatif de chacun des cinq sites sur téléphone et ordinateur ; les pages accessibles ont été étudiées par extraction publique, conformément aux limites notées dans l’analyse.
- Aucun smartphone ou tablette physique, lecteur d’écran, audit automatisé WCAG, mesure Lighthouse, essai de charge ou autre navigateur que le navigateur intégré utilisé pour ces captures.
- Aucune réservation, transaction, disponibilité, programmation réelle du prototype ou collecte de coordonnées ; ces fonctions n’existent pas dans le site.
- Les tokens consommés et le coût interne de la plateforme ne sont pas disponibles.

## Mesure de durée et contexte

Le jalon du prototype livré (archive et tests finaux) est horodaté le 27 octobre 2026 à 18:17:51 (+01:00), soit **26 minutes et 29 secondes écoulées** depuis le message initial à 17:51:22. Il s’agit d’un calcul à partir des horodatages de session — pas d’un chronomètre fiable de temps actif ou CPU. L’environnement ne signalait pas de mécanisme d’arrêt automatique à 90 minutes ; la limite exacte de travail actif ne peut donc pas être affirmée.

- Poste local Windows ; terminal PowerShell 7.6.9.
- Node.js 24.19.0, npm 11.17.0 ; Git 2.50.1.windows.1 installé, mais aucun dépôt Git/remote n’a été trouvé dans ce dossier ni ses parents.
- Prototype et captures contrôlés dans le navigateur intégré Manus ; la version de son moteur n’est pas exposée. Un binaire Chrome 155.0.8059.85 est installé, mais ses tentatives de capture isolée n’ont pas constitué les captures livrées.
- Accès aux pages Web publiques pour la recherche ; fichiers édités localement. Création visuelle par code SVG/CSS, sans outil de génération d’image.
- Aucun coût de service externe requis par la livraison ; les crédits internes, tokens et identifiants du modèle ne sont pas visibles.

Pour lancer le résultat livré, suivre les commandes de [`README.md`](../README.md). Pour retrouver l’analyse des organisations, consulter [`ANALYSE.md`](../ANALYSE.md).
