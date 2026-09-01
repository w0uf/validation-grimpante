const SECTION = /^([a-z][a-z0-9_]*):\s*(?:#.*)?$/;
const CLE_VALEUR = /^\s*([a-z][a-z0-9_]*):\s*(.*)$/;
const DEBUT_ETAPE = /^\s*-\s+([a-z][a-z0-9_]*):\s*(.*)$/;

// Retire un commentaire de fin de ligne, puis les guillemets éventuels.
function valeur(brut) {
  const utile = brut.replace(/(^|\s)#.*$/, "$1").trim();
  return utile.replace(/^(["'])(.*)\1$/, "$2");
}

export function lireCarteYml(texte) {
  const carte = { theme: {}, carte: {}, etapes: [] };
  let section = null;
  let etape = null;

  for (const ligne of texte.split(/\r?\n/)) {
    const contenu = ligne.trim();
    if (!contenu || contenu.startsWith("#")) continue;

    if (!ligne.startsWith(" ") && SECTION.test(contenu)) {
      section = contenu.match(SECTION)[1];
      etape = null;
      continue;
    }

    if (section === "etapes") {
      // Une étape commence à son premier tiret, quelle que soit la clé écrite
      // en premier : « - id: » et « - titre: » sont l'un et l'autre valides.
      const debut = ligne.match(DEBUT_ETAPE);
      if (debut) {
        etape = { [debut[1]]: valeur(debut[2]) };
        carte.etapes.push(etape);
        continue;
      }

      const propriete = ligne.match(CLE_VALEUR);
      if (etape && propriete) etape[propriete[1]] = valeur(propriete[2]);
      continue;
    }

    const propriete = ligne.match(CLE_VALEUR);
    if (propriete && (section === "theme" || section === "carte")) {
      carte[section][propriete[1]] = valeur(propriete[2]);
    }
  }

  verifierCarte(carte);
  return carte;
}

function verifierCarte(carte) {
  if (!carte.theme.titre || !carte.carte.statut || !carte.carte.version) {
    throw new Error("Les informations générales de la carte sont incomplètes.");
  }
  if (!carte.etapes.length || carte.etapes.some(({ id, titre }) => !id || !titre)) {
    throw new Error("La liste des étapes est vide ou incomplète.");
  }
}
