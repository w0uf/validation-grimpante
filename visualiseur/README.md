# Visualiseur

Rien n'est encore écrit ici. Ce dossier réserve la place et fixe l'intention.

## Ce que ce sera

Un rendu lisible des cartes : la montée d'un thème, affichée de bas en haut, à
partir du `etapes.yml` — sans que le lecteur ait à ouvrir un fichier YAML ni un
dépôt Git.

## Ce que ce ne sera pas

- **Un éditeur.** Les cartes s'écrivent à la main et se relisent en *pull
  request*. Un formulaire qui produirait du YAML déplacerait la discussion hors
  du dépôt.
- **Un outil de suivi d'élèves.** Le visualiseur affiche des cartes, jamais des
  personnes (voir [`PRINCIPES.md`](../PRINCIPES.md), point 6).
- **Un passage obligé.** Une carte doit rester compréhensible sans lui — c'est
  le point 4 des principes. Si le visualiseur devient nécessaire à la lecture,
  c'est le format qu'il faut corriger, pas l'outil qu'il faut enrichir.

## Contraintes retenues

- Lit les `cartes/*/etapes.yml` du dépôt, sans base de données.
- Sortie statique, consultable hors ligne.
- Signale visiblement `statut: brouillon` et `version: developpement` : on ne
  doit pas pouvoir confondre un essai et une carte stable.

## Avant d'écrire la moindre ligne

Le format bougera encore (voir la fin de
[`specifications/format-carte.md`](../specifications/format-carte.md)). Écrire
le visualiseur maintenant, c'est figer par accident un format qui n'a pas fini
d'être discuté. Il attendra qu'une carte au moins soit passée en `stable`.
