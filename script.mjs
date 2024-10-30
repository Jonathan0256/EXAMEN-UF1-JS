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
const mostrarProducte = (producte) => {};
