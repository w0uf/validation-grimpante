# validation-grimpante

Cartographie collaborative et versionnée des parcours d'apprentissage.

Un apprentissage se raconte rarement comme une liste de leçons : il ressemble
plutôt à une paroi que l'on remonte prise après prise. On sait reconnaître trois
jetons avant de savoir en constituer sept, et en constituer sept avant de savoir
dénombrer une collection quelconque. Ce dépôt sert à **écrire ces montées**, une
par thème, dans un format simple, lisible et discutable.

Une **carte** décrit un thème (les nombres entiers, les fractions, la
proportionnalité…) sous la forme d'une suite d'**étapes** ordonnées. Rien de
plus pour l'instant : le format reste volontairement pauvre tant que l'usage
n'a pas montré ce qui lui manque.

## Discussion en cours

La première carte pilote porte sur les **nombres entiers**. Ses trois premières
étapes sont un point de départ à interroger, et non une progression déjà
figée : [discuter leur formulation, leur ordre et les étapes manquantes](https://github.com/w0uf/validation-grimpante/discussions/1).

Les observations de terrain, exemples de situations, objections et références
didactiques sont les bienvenus.

## Ce que contient le dépôt

| Chemin | Rôle |
| --- | --- |
| `cartes/` | Une carte par thème, un dossier chacune |
| `cartes/modele/` | Le dossier à copier pour commencer une carte |
| `specifications/` | Le vocabulaire, le format des fichiers, les versions |
| `visualiseur/` | Le rendu lisible des cartes (à venir) |
| `PRINCIPES.md` | Ce que ce dépôt cherche à faire, et ce qu'il refuse de faire |
| `CONTRIBUTING.md` | Comment proposer, discuter, corriger |

## Une carte, concrètement

`cartes/nombres-entiers/etapes.yml` :

```yaml
theme:
  id: nombres_entiers
  titre: Nombres entiers

carte:
  statut: brouillon
  version: developpement

etapes:
  - id: reconnaitre_petites_quantites
    titre: Reconnaître de petites quantités

  - id: constituer_collection
    titre: Constituer une collection demandée

  - id: denombrer_collection
    titre: Dénombrer une collection
```

L'ordre de la liste est celui de la montée, et le rang d'une étape est son
**palier**. Cet ordre unique est une convention de départ que l'on cherche
justement à mettre en défaut : les identifiants, eux, ne bougent jamais. Le
format complet est décrit dans
[`specifications/format-carte.md`](specifications/format-carte.md).

## Commencer une carte

1. Copier `cartes/modele/` sous `cartes/<mon-theme>/`.
2. Renseigner `etapes.yml` et le `README.md` du dossier.
3. Laisser `statut: brouillon` tant que la carte n'a pas été discutée.
4. Ouvrir une *pull request*, ou une *discussion* si l'on veut d'abord en parler.

## État du dépôt

Tout est en chantier. La carte `nombres-entiers` est un **brouillon
expérimental** : elle sert d'abord à éprouver le format, pas à faire autorité
sur l'apprentissage du nombre. Les questions encore ouvertes sont signalées
comme telles dans les fichiers de `specifications/`, et se discutent dans
l'onglet *Discussions*.

## Licence

[CC BY-SA 4.0](LICENSE) — réutilisable et modifiable, à condition de citer la
source et de partager les versions dérivées aux mêmes conditions.
