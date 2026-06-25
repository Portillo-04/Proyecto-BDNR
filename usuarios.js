// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.


use("biblioteca_digital");

db.createUser({
  user: "administrador",
  pwd: "Admin123",
  roles: [
    { role: "dbOwner", db: "biblioteca_digital" }, // control total sobre la base
    { role: "userAdmin", db: "biblioteca_digital" } // puede crear y administrar usuarios
  ]
})

use("biblioteca_digital");

db.createUser({
  user: "bibliotecario",
  pwd: "Biblio123",
  roles: [
    { role: "readWrite", db: "biblioteca_digital" }, // lectura y escritura
    { role: "dbAdmin", db: "biblioteca_digital" }    // administración de colecciones e índices
  ]
})