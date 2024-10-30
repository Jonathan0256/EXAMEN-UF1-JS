import fs from "fs";

//Tasca 1
const llegirProductes = () => {
  try {
    const data = fs.readFileSync("./productes.json");
    console.log("Llegit correctament");
    const result = JSON.parse(data);
    return result;
  } catch (err) {
    console.error("Error en llegir el fitxer", err);
  }
};

// llegirProductes();

//Tasca 2
const producte = {
  id: 2,
  nom: "Telèfon intel·ligent",
  marca: "Samsung",
  categoria: "Electrònica",
  preu: 500,
  disponible: false,
  caracteristiques: {
    pantalla: "6.4 polzades",
    càmera: "48MP",
    bateria: "4000mAh",
  },
};

const mostrarProducte = (object) => {
  for (const property in object) {
    if (typeof object[property === "object"]) {
      for (const atribut in object[property]) {
        console.log(`${atribut}: ${object[property][atribut]}`);
      }
    } else {
      console.log(`${property}: ${object[property]}`);
    }
  }
};

mostrarProducte(producte);
