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
const producte = { a: 1, b: 2, c: 3 };

const mostrarProducte = (object) => {
  for (const property in object) {
    console.log(`${property}: ${object[property]}`);
  }
};

mostrarProducte(producte);
