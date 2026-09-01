# Visualiseur

Ce dossier contient un premier prototype statique. Il affiche les étapes d'une
carte de bas en haut et calcule leur numéro à partir de leur ordre dans le YAML.

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

## Lancer le prototype

Depuis la racine du dépôt :

```bash
python3 -m http.server 8000
```

Puis ouvrir <http://localhost:8000/visualiseur/>.

Le petit lecteur YAML de `carte.mjs` ne reconnaît volontairement que le format
minimal documenté aujourd'hui. Il devra évoluer avec la spécification : ce
prototype observe le format, il ne le fige pas.
