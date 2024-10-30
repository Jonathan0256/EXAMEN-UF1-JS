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

//Tasca 3

const productes = [
  {
    id: 1,
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
  },
  {
    id: 2,
    nom: "Telèfon intel·ligent",
    marca: "Iphone",
    categoria: "X",
    preu: 800,
    disponible: true,
    caracteristiques: {
      pantalla: "6.0 polzades",
      càmera: "50MP",
      bateria: "5000mAh",
    },
  },
];

const mostrarProductes = (object) => {
  for (const property in object) {
    if (typeof object[property === "object"]) {
      for (const atribut in object[property]) {
        console.log(`${atribut}: ${object[property][atribut]}`);
      }
    } else {
      console.log(object.map(mostrarProductes(object)));
    }
  }
};

// mostrarProductes(productes);
//Tasca 4

const mostrarProducteID = (element, id) => {
  element.filter((c) => c.id === id)
    ? console.log(element)
    : console.log("Not found");
};

// mostrarProducteID(productes, 2);
