import { lireCarteYml } from "./carte.mjs";

const selecteur = document.querySelector("#carte");
const rendu = document.querySelector("#rendu");

function element(nom, classe, texte) {
  const noeud = document.createElement(nom);
  if (classe) noeud.className = classe;
  if (texte !== undefined) noeud.textContent = texte;
  return noeud;
}

function afficher(carte) {
  const entete = element("div", "entete-carte");
  const titres = element("div");
  titres.append(
    element("p", "surtitre", "Carte"),
    element("h2", null, carte.theme.titre)
  );

  const meta = element("p", `statut statut-${carte.carte.statut}`);
  meta.append(
    element("strong", null, carte.carte.statut),
    document.createTextNode(` · version ${carte.carte.version}`)
  );
  entete.append(titres, meta);

  const echelle = element("ol", "echelle");
  carte.etapes.forEach((etape, index) => {
    const ligne = element("li", "etape");
    ligne.append(
      element("span", "numero", String(index + 1)),
      element("span", "titre-etape", etape.titre),
      element("code", "identifiant", etape.id)
    );
    echelle.append(ligne);
  });

  rendu.replaceChildren(entete, echelle);
}

async function charger() {
  rendu.replaceChildren(element("p", null, "Chargement de la carte…"));
  try {
    const reponse = await fetch(selecteur.value);
    if (!reponse.ok) throw new Error(`fichier introuvable (${reponse.status})`);
    afficher(lireCarteYml(await reponse.text()));
  } catch (erreur) {
    const message = element("p", "erreur");
    message.textContent = `Impossible d’afficher la carte : ${erreur.message}`;
    rendu.replaceChildren(message);
  }
}

selecteur.addEventListener("change", charger);
charger();
