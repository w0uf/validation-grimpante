# Gestion des versions

Deux mécanismes cohabitent, et ils ne servent pas à la même chose.

**Git** garde l'histoire complète : qui a proposé quoi, quand, et pourquoi.
C'est la mémoire du dépôt, et elle est intégrale.

**Les versions figées** répondent à un autre besoin : pouvoir citer une carte
telle qu'elle était, sans demander au lecteur de savoir manier un dépôt. Une
carte utilisée dans une classe, un article ou un autre outil doit pouvoir être
désignée par un nom stable.

## Le fichier vivant

`etapes.yml` est la carte en cours. Il porte toujours :

```yaml
carte:
  statut: brouillon      # ou proposition, ou stable
  version: developpement
```

`version: developpement` signifie exactement : *ce fichier peut changer demain*.
On ne s'y appuie pas pour un usage durable.

## Figer une version

On fige quand une carte passe en `stable`, ou quand on veut pouvoir la citer.

1. Copier `etapes.yml` dans `versions/<nom>.yml`.
2. Dans la **copie** uniquement, remplacer `version: developpement` par
   `version: <nom>` et porter `statut: stable`.
3. Ne plus jamais modifier ce fichier. Une version figée qui bouge ne sert plus
   à rien.
4. `etapes.yml` reste en `developpement` et continue d'évoluer.

Nommage proposé : l'année et le mois, `2026-09.yml`, éventuellement suivis d'une
lettre si l'on fige deux fois dans le même mois (`2026-09b.yml`). Le nom doit se
lire sans le dépôt sous les yeux, ce qui exclut un numéro de commit.

> **Question ouverte.** Une numérotation par dates convient à des cartes qui
> évoluent lentement, mais elle ne dit rien de l'ampleur d'un changement — une
> étape reformulée et une montée réordonnée se ressemblent. Faut-il un numéro
> qui distingue les deux ? À discuter avant la première version figée.

## Ce qui compte comme un changement

Par ordre de gravité :

| Changement | Portée |
| --- | --- |
| Reformuler un `titre` | Cosmétique. La carte dit la même chose. |
| Ajouter une étape en fin de montée | Extension. Ce qui précède reste vrai. |
| Insérer une étape au milieu | La montée change de forme. |
| Réordonner des étapes | **Changement de fond** : c'est une autre thèse. |
| Retirer une étape, ou changer son `id` | **Rupture** : les citations extérieures tombent. |

Les deux dernières lignes se signalent explicitement dans la *pull request* et,
si des versions figées existent, dans le `README.md` de la carte.

## Cartes concurrentes

Deux propositions incompatibles sur un même thème ne se départagent pas en
écrasant l'une par l'autre. On crée une seconde carte (`nombres-entiers-abaque`,
par exemple), chacune assumant sa montée, et l'on décide ensuite — ou jamais.
Le dépôt sait vivre avec deux réponses.
