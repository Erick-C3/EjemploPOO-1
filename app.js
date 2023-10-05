const Cliente = require("./Cliente.js");
const Producto = require("./Producto.js");
const Super = require("./Super.js");

const maria = new Cliente("Maria", 1000, true);
const leche = new Producto("Leche", 500, 100);
const miSuper = new Super();

miSuper.abri(maria, leche);
