# Contribuer

Toute contribution est bienvenue : une carte nouvelle, une étape mal formulée,
une objection de fond. Il n'est pas nécessaire de savoir se servir de Git pour
être utile — une *issue* bien écrite l'est tout autant.

## Par où passer

| Vous voulez… | Allez dans… |
| --- | --- |
| Signaler une étape fausse, mal placée, mal nommée | **Issues** |
| Proposer un thème, débattre du format ou des principes | **Discussions** |
| Proposer une carte ou une correction rédigée | **Pull request** |

Dans le doute, une discussion coûte moins cher qu'une carte écrite pour rien.

## Ajouter une carte

1. Copier `cartes/modele/` sous `cartes/<mon-theme>/`. Le nom du dossier est en
   minuscules avec des tirets (`nombres-entiers`) ; l'identifiant à l'intérieur
   du YAML est en tirets bas (`nombres_entiers`).
2. Remplir `etapes.yml` en suivant
   [`specifications/format-carte.md`](specifications/format-carte.md).
3. Remplir le `README.md` du dossier : de quoi parle la carte, à qui elle
   s'adresse, ce qui est encore incertain.
4. Laisser `statut: brouillon` et `version: developpement`.
5. Ouvrir une *pull request* en expliquant, dans le corps du message, **d'où
   vient l'ordre choisi** : c'est le point sur lequel la relecture portera.

## Écrire une étape

- Une étape décrit ce qu'un élève **sait faire**, pas ce qui a été enseigné.
- L'intitulé commence par un verbe à l'infinitif : *dénombrer une collection*.
- Il tient sur une ligne, sans jargon inutile et sans référence à un manuel.
- Deux étapes qui se valident toujours ensemble n'en font qu'une.
- Si l'on hésite entre deux ordres possibles, l'écrire dans la *pull request*
  plutôt que trancher en silence.

Le vocabulaire employé (thème, carte, étape, statut, version) est fixé dans
[`specifications/vocabulaire.md`](specifications/vocabulaire.md).

## Relire une carte

Une relecture utile répond à trois questions :

1. Chaque étape est-elle **observable** chez un élève ?
2. L'ordre tient-il ? Y a-t-il une marche que rien ne soutient ?
3. Manque-t-il une étape intermédiaire que l'on franchit sans s'en rendre compte ?

## Ce qui sera refusé

- Toute donnée nominative ou individuelle d'élève (voir
  [`PRINCIPES.md`](PRINCIPES.md), point 6).
- Un champ nouveau dans le format ajouté sans discussion préalable.
- Une carte recopiée d'une source non librement réutilisable : la licence
  CC BY-SA 4.0 du dépôt engage aussi ce qu'on y dépose.

## Licence des contributions

En contribuant, vous acceptez que votre apport soit publié sous
[CC BY-SA 4.0](LICENSE), comme le reste du dépôt.
