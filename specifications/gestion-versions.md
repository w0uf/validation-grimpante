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

## Traduire une position d'une version à l'autre

C'est ici que se joue le seul engagement du dépôt envers le monde extérieur.

Une position observée chez un élève ne vit pas dans ce dépôt : elle est notée
dans une classe, sur un cahier, dans un autre outil, sous une forme du genre
*palier 3, carte « Nombres entiers », version 2026-09*. Quand la carte change,
cette note ne change pas. Il faut donc pouvoir la **relire** — et c'est au dépôt
de le permettre, pas à celui qui l'a écrite.

### Ce que les identifiants règlent déjà

La plus grande partie du travail est faite gratuitement par la règle des
identifiants stables. Une étape qui se contente de changer de rang garde son
`id` : on lit son ancien palier dans `versions/2026-05.yml`, son nouveau dans
`versions/2026-09.yml`, et la traduction est immédiate. **Aucune déclaration
n'est nécessaire.**

Les ajouts ne posent pas de problème non plus : personne ne détient une position
sur une étape qui n'existait pas.

### Ce qui doit être déclaré

Trois événements seulement cassent l'identité d'une étape, et donc la lecture
d'une ancienne position :

| Rupture | Ce qui se passe | Effet sur une note ancienne |
| --- | --- | --- |
| `decomposition` | une étape devient plusieurs | la position ne désigne plus une seule étape |
| `fusion` | plusieurs étapes n'en font plus qu'une | plusieurs positions anciennes se confondent |
| `retrait` | une étape disparaît | la position n'a plus de correspondant |

Ces trois cas se déclarent dans un fichier posé à côté de la version figée :
`versions/<nom>.correspondance.yml`.

```yaml
correspondance:
  depuis: 2026-05
  vers: 2026-09

ruptures:
  - type: decomposition
    depuis: denombrer_collection
    vers:
      - enumerer_sans_oubli
      - dire_le_cardinal
    note: >
      Une seule étape couvrait l'énumération sans oubli ni redite et la
      compréhension que le dernier mot-nombre dit le cardinal. Un élève pouvait
      tenir l'une sans l'autre : une position ancienne sur cette étape ne
      permet pas de décider laquelle était acquise.

  - type: fusion
    depuis:
      - reconnaitre_petites_quantites
      - reconnaitre_constellations
    vers: reconnaitre_petites_quantites
    note: >
      Les deux étaient toujours validées ensemble. La distinction ne changeait
      aucune décision pédagogique.

  - type: retrait
    depuis: reciter_la_comptine_jusqua_dix
    note: >
      Le nombre dix relevait d'un choix d'école, pas d'un palier
      d'apprentissage. Remplacée par une formulation sans borne.
```

Une carte sans rupture depuis la version précédente n'a pas besoin de ce
fichier. Son absence signifie exactement : *les identifiants suffisent*.

### Lire une position ancienne

1. Ouvrir `versions/<version notée>.yml` et relever l'`id` de l'étape au palier
   indiqué. C'est cet identifiant qui porte l'information, pas le numéro.
2. Chercher cet `id` dans les `ruptures` des correspondances postérieures.
3. S'il n'y figure pas : le retrouver dans la version courante, son nouveau
   palier s'y lit directement.
4. S'il y figure : la note explique ce que la position ancienne permet encore
   d'affirmer — et, le cas échéant, ce qu'elle ne permet plus.

Le quatrième cas est le plus important, et il est normal : **une carte plus fine
peut rendre une observation ancienne insuffisante**. Le dire est honnête ;
prétendre traduire mécaniquement un numéro en un autre ne le serait pas.

Ce n'est pas l'élève qui recule quand la carte s'agrandit, c'est la description
qui devient plus précise — encore faut-il que le dépôt garde de quoi le montrer.

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
si des versions figées existent, dans le `README.md` de la carte. Retirer une
étape, la décomposer ou en fusionner deux impose en outre une déclaration dans
le fichier de correspondance de la prochaine version figée.

## Cartes concurrentes

Deux propositions incompatibles sur un même thème ne se départagent pas en
écrasant l'une par l'autre. On crée une seconde carte (`nombres-entiers-abaque`,
par exemple), chacune assumant sa montée, et l'on décide ensuite — ou jamais.
Le dépôt sait vivre avec deux réponses.
