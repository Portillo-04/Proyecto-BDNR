// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.

use("biblioteca_digital");

// Usuarios activos
db.usuarios.find({ estado: "ACTIVO" }) 
// → Devuelve todos los usuarios cuyo estado sea ACTIVO

use("biblioteca_digital");

// Estudiantes con carnet específico
db.estudiantes.find({ carnet: "CARNET003" }) 
// → Busca al estudiante con carnet igual a CARNET003

use("biblioteca_digital");

// Libros con título exacto
db.libros.find({ titulo: "Rayuela" }) 
// → Devuelve el libro cuyo título sea exactamente "Rayuela"

use("biblioteca_digital");

// Préstamos con fecha posterior al 5 de junio
db.prestamos.find({ fecha_prestamo: { $gt: new Date("2026-06-05") } }) 
// → Muestra préstamos realizados después del 5 de junio de 2026

use("biblioteca_digital");

// Libros con más de 300 páginas
db.libros.find({ paginas: { $gte: 300 } }) 
// → Filtra libros con 300 páginas o más

use("biblioteca_digital");

// Estudiantes menores de 25 años
db.estudiantes.find({ edad: { $lt: 25 } }) 
// → Devuelve estudiantes cuya edad sea menor a 25

use("biblioteca_digital");

// Usuarios que sean administrador o bibliotecario
db.usuarios.find({ $or: [ { rol_usuario: "Administrador" }, { rol_usuario: "Bibliotecario" } ] }) 
// → Devuelve usuarios cuyo rol sea Administrador o Bibliotecario

use("biblioteca_digital");

// Préstamos activos y con devolución después del 10 de junio
db.prestamos.find({ $and: [ { estado: "ACTIVO" }, { fecha_devolucion: { $gt: new Date("2026-06-10") } } ] }) 
// → Filtra préstamos activos cuya fecha de devolución sea posterior al 10 de junio

use("biblioteca_digital");

// Estudiantes cuyo nombre no empiece con A
db.estudiantes.find({ nombre: { $not: /^A/ } }) 
// → Devuelve estudiantes cuyo nombre no inicia con la letra A

use("biblioteca_digital");

// Mostrar solo usuario y correo
db.usuarios.find({}, { usuario: 1, correo: 1, _id: 0 }) 
// → Devuelve únicamente usuario y correo

use("biblioteca_digital");

// Mostrar solo título de libros
db.libros.find({}, { titulo: 1, _id: 0 }) 
// → Lista solo los títulos de los libros

use("biblioteca_digital");

// Mostrar carnet y nombre de estudiantes
db.estudiantes.find({}, { carnet: 1, nombre: 1, _id: 0 }) 
// → Devuelve carnet y nombre de cada estudiante

use("biblioteca_digital");

// Ordenar estudiantes por nombre ascendente
db.estudiantes.find().sort({ nombre: 1 }) 

use("biblioteca_digital");

// Ordenar libros por título descendente
db.libros.find().sort({ titulo: -1 }) 

use("biblioteca_digital");

// Mostrar solo 2 usuarios
db.usuarios.find().limit(2) 

use("biblioteca_digital");

// Mostrar 3 libros
db.libros.find().limit(3) 


use("biblioteca_digital");

// Préstamos de un estudiante específico
db.prestamos.find({ "estudiante.carnet": "CARNET005" }) 

use("biblioteca_digital");

// Reportes generados por administrador
db.reporte.find({ "prestamo.usuario.rol_usuario": "Administrador" }) 

use("biblioteca_digital");

// Préstamos que incluyan el libro LIB007
db.prestamos.find({ "libros.codigo_libro": "LIB007" }) 

use("biblioteca_digital");

// Reportes que incluyan el libro LIB009
db.reporte.find({ "prestamo.libros.codigo_libro": "LIB009" }) 


// CONSULTAS DE AGREGACIÓN

use("biblioteca_digital");
db.prestamos.aggregate([ { $match: { estado: "ACTIVO" } } ])
// → Filtra los documentos de la colección "prestamos" y devuelve solo aquellos cuyo estado sea ACTIVO

use("biblioteca_digital");
db.prestamos.aggregate([ { $match: { "usuario.rol_usuario": "Bibliotecario" } } ])
// → Devuelve los préstamos gestionados por usuarios con rol "Bibliotecario"

use("biblioteca_digital");
db.reporte.aggregate([ { $match: { estado: "DEVUELTO" } } ])
// → Filtra los documentos de la colección "reporte" y devuelve solo los que tengan estado DEVUELTO

use("biblioteca_digital");
db.estudiantes.aggregate([ { $match: { edad: { $gte: 20 } } } ])
// → Devuelve estudiantes cuya edad sea mayor o igual a 20 años

use("biblioteca_digital");
db.libros.aggregate([ { $match: { paginas: { $lt: 200 } } } ])
// → Devuelve libros que tengan menos de 200 páginas


// GROUP
use("biblioteca_digital");
db.prestamos.aggregate([ { $group: { _id: "$estado", total: { $sum: 1 } } } ])

use("biblioteca_digital");
db.prestamos.aggregate([ { $group: { _id: "$usuario.rol_usuario", total: { $sum: 1 } } } ])

use("biblioteca_digital");
db.reporte.aggregate([ { $group: { _id: "$estado", total: { $sum: 1 } } } ])

use("biblioteca_digital");
db.libros.aggregate([ { $group: { _id: "$titulo", total: { $sum: 1 } } } ])

use("biblioteca_digital");
db.estudiantes.aggregate([ { $group: { _id: "$edad", total: { $sum: 1 } } } ])

//lookup

// Relacionar préstamos con estudiantes
db.prestamos.aggregate([
  { $lookup: { from: "estudiantes", localField: "estudiante.carnet", foreignField: "carnet", as: "info_estudiante" } }
])

// Relacionar préstamos con usuarios
db.prestamos.aggregate([
  { $lookup: { from: "usuarios", localField: "usuario.usuario", foreignField: "usuario", as: "info_usuario" } }
])

// Relacionar reportes con préstamos
db.reporte.aggregate([
  { $lookup: { from: "prestamos", localField: "prestamo.estudiante.carnet", foreignField: "estudiante.carnet", as: "info_prestamo" } }
])

// Relacionar reportes con usuarios
db.reporte.aggregate([
  { $lookup: { from: "usuarios", localField: "prestamo.usuario.usuario", foreignField: "usuario", as: "info_usuario" } }
])

// Relacionar reportes con libros
db.reporte.aggregate([
  { $lookup: { from: "libros", localField: "prestamo.libros.codigo_libro", foreignField: "codigo_libro", as: "info_libro" } }
])
