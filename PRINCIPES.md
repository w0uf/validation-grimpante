# Principes

Ce fichier dit ce que le dépôt cherche à faire, et surtout ce qu'il s'interdit.
Il est lui-même discutable : c'est le premier endroit où ouvrir une discussion
si quelque chose y sonne faux.

## 1. La ligne est un tremplin, pas une thèse

Une carte se présente aujourd'hui comme une suite ordonnée : les étapes se
portent les unes les autres, on la lit de bas en haut, et l'ordre n'est pas
décoratif. **L'ordre des étapes dans `etapes.yml` est donc une information**, pas
une mise en page : le déplacer, c'est modifier la carte.

Mais cette ligne unique est une convention de départ, et personne ne prétend
qu'elle suffira. Les apprentissages ne se laissent pas toujours ranger avant ou
après : deux maîtrises peuvent être simplement **incomparables**, un même savoir
peut progresser à des rythmes différents selon qu'on le calcule, le représente,
le raisonne, le modélise ou l'explique. La ligne écrasera ces cas.

C'est voulu. On commence par une suite ordonnée précisément pour **repérer où
elle casse** : les endroits où deux étapes n'ont pas d'ordre, où un chemin se
divise, où l'on revient sur ses pas. Ces ruptures ne sont pas des accidents à
corriger dans le YAML, ce sont les résultats que le travail collectif cherche.
Les signaler est la contribution la plus utile que l'on puisse apporter.

Autrement dit : la linéarité est ici l'hypothèse que l'on met à l'épreuve, pas
le principe que l'on défend.

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
suivi individuel.

La frontière est nette. Le dépôt tient **la liste** : les étapes, leur ordre,
leurs identifiants, les versions. Ce qu'une validation grimpante produit face à
un élève — sa position, le déplacement accompli, la prochaine marche — dépend de
cet élève et de ce qui a été observé de lui : cela se calcule ailleurs, dans la
classe ou dans un autre outil, et n'entre jamais ici.

Le dépôt est donc le **référentiel que ce dehors cite**. C'est de là que vient
son seul vrai engagement : des identifiants qui ne bougent pas, des versions
citables, et une correspondance quand la numérotation change (voir
[`specifications/gestion-versions.md`](specifications/gestion-versions.md)).

## 7. Collaboratif veut dire discutable

Les cartes sont publiées sous licence CC BY-SA 4.0 pour être reprises et
adaptées. Un désaccord sur une carte est un usage normal du dépôt : il s'écrit
dans une *issue* ou une *discussion*, et se règle sur le fond.
