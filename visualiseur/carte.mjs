const CLE_VALEUR = /^\s*([a-z_]+):\s*(.*)$/;
const ETAPE = /^\s*-\s+id:\s*(.+)$/;

export function lireCarteYml(texte) {
  const carte = { theme: {}, carte: {}, etapes: [] };
  let section = null;
  let etape = null;

  for (const ligne of texte.split(/\r?\n/)) {
    const contenu = ligne.trim();
    if (!contenu || contenu.startsWith("#")) continue;

    if (!ligne.startsWith(" ") && contenu.endsWith(":")) {
      section = contenu.slice(0, -1);
      etape = null;
      continue;
    }

    if (section === "etapes") {
      const debut = ligne.match(ETAPE);
      if (debut) {
        etape = { id: debut[1].trim() };
        carte.etapes.push(etape);
        continue;
      }

      const propriete = ligne.match(CLE_VALEUR);
      if (etape && propriete) etape[propriete[1]] = propriete[2].trim();
      continue;
    }

    const propriete = ligne.match(CLE_VALEUR);
    if (propriete && (section === "theme" || section === "carte")) {
      carte[section][propriete[1]] = propriete[2].trim();
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
