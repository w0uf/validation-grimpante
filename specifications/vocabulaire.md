# Vocabulaire

Les mots ci-dessous ont un sens fixe dans tout le dépôt. Les employer ailleurs
dans un autre sens est la meilleure façon de rendre deux cartes incomparables.

## Thème

Le domaine que la carte décrit : *les nombres entiers*, *les fractions*, *la
proportionnalité*. Un thème porte un identifiant (`nombres_entiers`) et un titre
lisible (*Nombres entiers*).

Un thème n'est ni un niveau de classe, ni un chapitre de manuel, ni une
compétence du socle. Il peut être traversé par plusieurs niveaux, et un même
niveau en traverse plusieurs.

## Carte

La description d'un thème sous forme d'étapes ordonnées : un dossier de
`cartes/`, contenant au minimum un `etapes.yml`.

Une carte est **une proposition**, pas un constat. Deux cartes concurrentes sur
le même thème sont possibles ; c'est un désaccord à instruire, pas une erreur à
corriger dans l'urgence.

## Étape

Une chose que l'élève sait faire, formulée à l'infinitif et observable :
*dénombrer une collection*. Une étape porte un identifiant stable
(`denombrer_collection`) et un titre.

L'identifiant ne change plus une fois la carte publiée : c'est lui qui permet de
citer une étape depuis l'extérieur du dépôt. Le titre, lui, peut être reformulé.

## Palier

Le **numéro** d'une étape dans une carte donnée : sa position dans la liste,
comptée à partir de 1.

Palier et étape désignent la même chose vue de deux façons, et la distinction
est le point le plus important de ce vocabulaire :

| | Palier | Étape |
| --- | --- | --- |
| C'est | un numéro | une chose que l'on sait faire |
| Il vaut | pour **une version** de la carte | pour toujours |
| Il change si | on insère, fusionne ou retire ailleurs | jamais (l'identifiant est stable) |

Un palier n'a donc aucun sens sans sa version : *palier 3* ne veut rien dire,
*palier 3 de la carte « Nombres entiers », version 2026-09* veut dire quelque
chose. Et *palier 3 sur 298* n'est pas une proportion : 298 compte les étapes
qu'une carte décrit aujourd'hui, pas la totalité de ce qu'il y aurait à savoir.

C'est la raison d'être des identifiants stables. Quand la carte s'enrichit,
`denombrer_collection` reste `denombrer_collection` ; seul son numéro bouge. Le
dépôt est propriétaire de la numérotation ; il documente ses changements dans
[`gestion-versions.md`](gestion-versions.md).

## Montée

La lecture de la carte de la première étape à la dernière. L'ordre de la liste
`etapes` **est** la montée : chaque étape s'appuie sur celles qui la précèdent.

Le format actuel n'exprime pas de prérequis un à un — seulement cet ordre
global. Ce n'est pas seulement une limite technique : une montée unique suppose
que deux étapes quelconques sont toujours comparables, ce qui est faux en
général. La convention est gardée comme point de départ, et les endroits où elle
casse sont ce que le travail collectif cherche (voir
[`../PRINCIPES.md`](../PRINCIPES.md), point 1, et
[`format-carte.md`](format-carte.md)).

## Statut

Le degré de solidité de la carte, indépendamment de son contenu :

| Statut | Ce qu'il veut dire |
| --- | --- |
| `brouillon` | En cours d'écriture. Ne pas s'appuyer dessus. |
| `proposition` | Complète, soumise à relecture, encore discutée. |
| `stable` | Relue et acceptée. Ne change plus qu'en changeant de version. |

## Version

Le nom de l'état figé auquel se réfère un fichier. `developpement` désigne le
fichier vivant, celui qui bouge. Toute autre valeur désigne une version figée,
conservée dans le dossier `versions/` de la carte. Voir
[`gestion-versions.md`](gestion-versions.md).

## Validation

Le fait de reconnaître une étape comme franchie.

Une validation grimpante ne produit pas un seul résultat mais trois : une
**position** (ce que l'élève mobilise aujourd'hui), un **déplacement** (ce qu'il
sait faire depuis une observation antérieure) et une **prochaine marche**
(l'étape qui devient accessible).

Ces trois informations **ne sont pas dans ce dépôt et n'y seront pas**. Elles
dépendent d'un élève et des tâches qu'on lui a proposées ; elles se calculent
face à lui, avec une carte sous les yeux. Le dépôt fournit la carte — la liste,
ses paliers, ses versions — et rien d'autre (voir
[`../PRINCIPES.md`](../PRINCIPES.md), point 6).

Le mot reste ici parce qu'il commande la façon d'écrire une étape : un intitulé
dont on ne saurait pas dire s'il est franchi ne sert à personne.
