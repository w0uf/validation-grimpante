# Principes

Ce fichier dit ce que le dépôt cherche à faire, et surtout ce qu'il s'interdit.
Il est lui-même discutable : c'est le premier endroit où ouvrir une discussion
si quelque chose y sonne faux.

## 1. La validation grimpe

Un parcours n'est pas une liste de cases à cocher indépendantes. Les étapes se
portent les unes les autres : celle du haut suppose acquises celles qui la
soutiennent. C'est le sens du mot *grimpante* — on lit une carte de bas en haut,
et l'ordre n'est pas décoratif.

Conséquence pratique : **l'ordre des étapes dans `etapes.yml` est une
information**, pas une mise en page. Le déplacer, c'est modifier la carte.

## 2. Décrire ce que l'on sait faire, pas ce que l'on a vu

Une étape se formule du côté de l'élève et au niveau de l'action :
« dénombrer une collection », pas « le dénombrement » ni « chapitre 2 ».
Un intitulé que l'on ne peut pas observer chez un élève n'est pas une étape.

## 3. Un format pauvre, aussi longtemps que possible

Le format actuel ne connaît que `theme`, `carte` et une liste d'étapes réduites
à un identifiant et un titre. Cette pauvreté est voulue. Chaque champ
supplémentaire — prérequis explicites, niveaux, durées, références au
programme — devra d'abord être **réclamé par un usage réel**, discuté, puis
inscrit dans les spécifications. Un champ ajouté « au cas où » est un champ que
personne ne remplira correctement.

## 4. Le texte avant l'outil

La source d'une carte est un fichier YAML lisible et modifiable à la main, dans
un dépôt Git. Le visualiseur viendra ensuite et restera un confort : aucune
carte ne doit dépendre d'un outil pour être comprise, relue ou corrigée.

## 5. Tout est versionné, y compris les désaccords

Une carte n'est pas un état de fait mais une proposition datée. Les versions
figées sont conservées (voir
[`specifications/gestion-versions.md`](specifications/gestion-versions.md)),
et l'historique Git garde la trace de qui a proposé quoi. Une carte peut être
reprise, contestée, remplacée — pas réécrite en silence.

## 6. Une carte n'est pas un classement d'élèves

Les cartes décrivent des parcours, jamais des personnes. Le dépôt ne contient et
ne contiendra **aucune donnée d'élève** : ni nom, ni classe, ni résultat, ni
suivi individuel. Ce qui se validerait pour un élève donné relève d'un autre
outil, hors de ce dépôt public.

## 7. Collaboratif veut dire discutable

Les cartes sont publiées sous licence CC BY-SA 4.0 pour être reprises et
adaptées. Un désaccord sur une carte est un usage normal du dépôt : il s'écrit
dans une *issue* ou une *discussion*, et se règle sur le fond.
