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

## Montée

La lecture de la carte de la première étape à la dernière. L'ordre de la liste
`etapes` **est** la montée : chaque étape s'appuie sur celles qui la précèdent.

Le format actuel n'exprime pas de prérequis un à un — seulement cet ordre
global. C'est une limite connue, voir [`format-carte.md`](format-carte.md).

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

Le fait de reconnaître une étape comme franchie. Le dépôt décrit **ce qui peut
être validé** ; il ne conserve jamais **qui** l'a validé. Aucune donnée d'élève
n'entre ici (voir [`PRINCIPES.md`](../PRINCIPES.md), point 6).
