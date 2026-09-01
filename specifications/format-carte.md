# Format d'une carte

Une carte est un dossier de `cartes/` :

```
cartes/<mon-theme>/
├── README.md     # ce que la carte raconte, et ce qui y reste incertain
├── etapes.yml    # la carte elle-même
└── versions/     # les états figés (voir gestion-versions.md)
```

Le nom du dossier est en minuscules avec des tirets : `nombres-entiers`.

## `etapes.yml`

Fichier YAML encodé en UTF-8, trois blocs, dans cet ordre :

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

### `theme`

| Clé | Obligatoire | Valeur |
| --- | --- | --- |
| `id` | oui | Minuscules ASCII, chiffres et tirets bas. Sans accent. Unique dans le dépôt. |
| `titre` | oui | Le nom lisible, tel qu'on le prononce. Accents bienvenus. |

L'`id` du thème reprend le nom du dossier, tirets remplacés par des tirets bas :
dossier `nombres-entiers` → `id: nombres_entiers`.

### `carte`

| Clé | Obligatoire | Valeur |
| --- | --- | --- |
| `statut` | oui | `brouillon`, `proposition` ou `stable` |
| `version` | oui | `developpement`, ou le nom d'une version figée |

Les deux valeurs sont définies dans [`vocabulaire.md`](vocabulaire.md) et
[`gestion-versions.md`](gestion-versions.md).

### `etapes`

Une liste, non vide, d'entrées à deux clés :

| Clé | Obligatoire | Valeur |
| --- | --- | --- |
| `id` | oui | Minuscules ASCII, chiffres et tirets bas. Unique dans la carte. |
| `titre` | oui | Un infinitif, une ligne, observable chez un élève. |

**L'ordre de la liste porte du sens** : c'est la montée, du plus élémentaire au
plus assuré. Réordonner la liste modifie la carte et se justifie comme tel.

Les identifiants d'étapes sont stables : une fois la carte passée en
`proposition`, on ne renomme plus un `id` — on en ajoute un nouveau et l'on
retire l'ancien, ce qui laisse une trace dans l'historique. Le `titre`, lui,
peut être reformulé librement.

## Règles de validité

Une carte est valide si :

1. les trois blocs `theme`, `carte`, `etapes` sont présents ;
2. `theme.id` et `theme.titre` sont non vides ;
3. `carte.statut` vaut `brouillon`, `proposition` ou `stable` ;
4. `carte.version` est non vide ;
5. `etapes` contient au moins une entrée ;
6. chaque étape a un `id` et un `titre` non vides ;
7. les `id` d'étapes sont deux à deux distincts ;
8. tous les `id` (thème et étapes) vérifient `^[a-z][a-z0-9_]*$`.

Aucun contrôle automatique n'est encore branché sur le dépôt : ces règles se
vérifient à la relecture. Un script de validation fait partie des choses à
écrire.

## Ce que le format ne dit pas encore

Ces manques sont assumés (voir [`PRINCIPES.md`](../PRINCIPES.md), point 3) et
chacun mérite sa discussion avant d'être comblé :

- **Les prérequis un à un.** Seul l'ordre global est exprimé. Une carte où deux
  étapes sont réellement indépendantes ne peut pas le dire : elle doit les
  ranger l'une après l'autre comme si l'une portait l'autre.
- **Les embranchements.** Le format décrit une montée unique, pas un graphe.
- **Les niveaux et cycles.** Rien ne relie une étape à un âge ou à une classe.
- **Les exemples et critères de réussite.** Un titre d'étape porte seul tout le
  sens ; rien ne précise à quoi l'on reconnaît qu'elle est franchie.
- **Les liens vers des ressources** (leçons, exercices, activités).
- **Les métadonnées d'auteur et de date**, aujourd'hui laissées à Git seul.

Ajouter un champ suppose : une discussion, une mise à jour de ce fichier, et la
reprise des cartes existantes.
