// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.


// Insercion de datos en la colección "autores"
use("biblioteca_digital");

db.autores.insertMany([
  {
    nombre_autor: "Gabriel",
    apellido: "García Márquez",
    nacionalidad: "Colombiano",
    fecha_nacimiento: ISODate("1927-03-06"),
    biografia: "Autor de Cien años de soledad",
    estado: "ACTIVO"
  },
  {
    nombre_autor: "Mario",
    apellido: "Vargas Llosa",
    nacionalidad: "Peruano",
    fecha_nacimiento: ISODate("1936-03-28"),
    biografia: "Premio Nobel de Literatura 2010",
    estado: "ACTIVO"
  },
  {
    nombre_autor: "Isabel",
    apellido: "Allende",
    nacionalidad: "Chilena",
    fecha_nacimiento: ISODate("1942-08-02"),
    biografia: "Autora de La casa de los espíritus",
    estado: "ACTIVO"
  },
  {
    nombre_autor: "Julio",
    apellido: "Cortázar",
    nacionalidad: "Argentino",
    fecha_nacimiento: ISODate("1914-08-26"),
    biografia: "Autor de Rayuela",
    estado: "INACTIVO"
  },
  {
    nombre_autor: "Carlos",
    apellido: "Fuentes",
    nacionalidad: "Mexicano",
    fecha_nacimiento: ISODate("1928-11-11"),
    biografia: "Autor de La región más transparente",
    estado: "INACTIVO"
  },
  {
    nombre_autor: "Jorge Luis",
    apellido: "Borges",
    nacionalidad: "Argentino",
    fecha_nacimiento: ISODate("1899-08-24"),
    biografia: "Autor de El Aleph",
    estado: "INACTIVO"
  },
  {
    nombre_autor: "Octavio",
    apellido: "Paz",
    nacionalidad: "Mexicano",
    fecha_nacimiento: ISODate("1914-03-31"),
    biografia: "Premio Nobel de Literatura 1990",
    estado: "INACTIVO"
  },
  {
    nombre_autor: "Laura",
    apellido: "Esquivel",
    nacionalidad: "Mexicana",
    fecha_nacimiento: ISODate("1950-09-30"),
    biografia: "Autora de Como agua para chocolate",
    estado: "ACTIVO"
  },
  {
    nombre_autor: "Eduardo",
    apellido: "Galeano",
    nacionalidad: "Uruguayo",
    fecha_nacimiento: ISODate("1940-09-03"),
    biografia: "Autor de Las venas abiertas de América Latina",
    estado: "INACTIVO"
  },
  {
    nombre_autor: "José",
    apellido: "Martí",
    nacionalidad: "Cubano",
    fecha_nacimiento: ISODate("1853-01-28"),
    biografia: "Poeta y prócer de la independencia cubana",
    estado: "INACTIVO"
  }
])


// Insercion de datos en la colección "categorias"

use("biblioteca_digital");

db.categorias.insertMany([
  {
    nombre_categoria: "Novela",
    descripcion: "Narrativa extensa",
    estado: "Activo"
  },
  {
    nombre_categoria: "Cuento",
    descripcion: "Narrativa breve",
    estado: "Activo"
  },
  {
    nombre_categoria: "Poesía",
    descripcion: "Versos y lírica",
    estado: "Activo"
  },
  {
    nombre_categoria: "Ensayo",
    descripcion: "Texto reflexivo",
    estado: "Activo"
  },
  {
    nombre_categoria: "Historia",
    descripcion: "Obras históricas",
    estado: "Inactivo"
  },
  {
    nombre_categoria: "Biografía",
    descripcion: "Relatos de vida de personajes",
    estado: "Activo"
  },
  {
    nombre_categoria: "Fantasía",
    descripcion: "Mundos imaginarios y mágicos",
    estado: "Activo"
  },
  {
    nombre_categoria: "Ciencia Ficción",
    descripcion: "Tecnología y futuro",
    estado: "Activo"
  },
  {
    nombre_categoria: "Infantil",
    descripcion: "Libros para niños",
    estado: "Activo"
  },
  {
    nombre_categoria: "Educativo",
    descripcion: "Material académico y didáctico",
    estado: "Activo"
  }
])

// Insercion de datos en la colección "libros"
use("biblioteca_digital");

db.libros.insertMany([
  {
    codigo_libro: "LIB001",
    titulo: "Cien años de soledad",
    editorial: "Sudamericana",
    anio_publicacion: 1967,
    cantidad: 10,
    disponibles: 7,
    estado: "DISPONIBLE",
    autores: [{ nombre_autor: "Gabriel García Márquez" }],
    categorias: [{ nombre_categoria: "Novela" }]
  },
  {
    codigo_libro: "LIB002",
    titulo: "La ciudad y los perros",
    editorial: "Seix Barral",
    anio_publicacion: 1963,
    cantidad: 8,
    disponibles: 5,
    estado: "DISPONIBLE",
    autores: [{ nombre_autor: "Mario Vargas Llosa" }],
    categorias: [{ nombre_categoria: "Novela" }]
  },
  {
    codigo_libro: "LIB003",
    titulo: "La casa de los espíritus",
    editorial: "Plaza & Janés",
    anio_publicacion: 1982,
    cantidad: 6,
    disponibles: 3,
    estado: "PRESTADO",
    autores: [{ nombre_autor: "Isabel Allende" }],
    categorias: [{ nombre_categoria: "Novela" }]
  },
  {
    codigo_libro: "LIB004",
    titulo: "Rayuela",
    editorial: "Sudamericana",
    anio_publicacion: 1963,
    cantidad: 5,
    disponibles: 2,
    estado: "DISPONIBLE",
    autores: [{ nombre_autor: "Julio Cortázar" }],
    categorias: [{ nombre_categoria: "Novela" }]
  },
  {
    codigo_libro: "LIB005",
    titulo: "La región más transparente",
    editorial: "FCE",
    anio_publicacion: 1958,
    cantidad: 4,
    disponibles: 1,
    estado: "INACTIVO",
    autores: [{ nombre_autor: "Carlos Fuentes" }],
    categorias: [{ nombre_categoria: "Novela" }]
  },
  {
    codigo_libro: "LIB006",
    titulo: "El Aleph",
    editorial: "Emecé",
    anio_publicacion: 1949,
    cantidad: 7,
    disponibles: 4,
    estado: "DISPONIBLE",
    autores: [{ nombre_autor: "Jorge Luis Borges" }],
    categorias: [{ nombre_categoria: "Cuento" }]
  },
  {
    codigo_libro: "LIB007",
    titulo: "El laberinto de la soledad",
    editorial: "FCE",
    anio_publicacion: 1950,
    cantidad: 6,
    disponibles: 3,
    estado: "DISPONIBLE",
    autores: [{ nombre_autor: "Octavio Paz" }],
    categorias: [{ nombre_categoria: "Ensayo" }]
  },
  {
    codigo_libro: "LIB008",
    titulo: "Como agua para chocolate",
    editorial: "Planeta",
    anio_publicacion: 1989,
    cantidad: 9,
    disponibles: 6,
    estado: "DISPONIBLE",
    autores: [{ nombre_autor: "Laura Esquivel" }],
    categorias: [{ nombre_categoria: "Novela" }]
  },
  {
    codigo_libro: "LIB009",
    titulo: "Las venas abiertas de América Latina",
    editorial: "Siglo XXI",
    anio_publicacion: 1971,
    cantidad: 5,
    disponibles: 2,
    estado: "DISPONIBLE",
    autores: [{ nombre_autor: "Eduardo Galeano" }],
    categorias: [{ nombre_categoria: "Historia" }]
  },
  {
    codigo_libro: "LIB010",
    titulo: "Versos sencillos",
    editorial: "Editorial Letras Cubanas",
    anio_publicacion: 1891,
    cantidad: 3,
    disponibles: 1,
    estado: "INACTIVO",
    autores: [{ nombre_autor: "José Martí" }],
    categorias: [{ nombre_categoria: "Poesía" }]
  }
])

// Insercion de datos en la colección "estudiantes"
use("biblioteca_digital");


db.estudiantes.insertMany([
  {
    carnet: "CARNET001",
    nombre_completo: "Ana López",
    carrera: "Ingeniería de Software",
    telefono: "70010001",
    correo: "ana001@correo.com",
    estado: "ACTIVO"
  },
  {
    carnet: "CARNET002",
    nombre_completo: "Luis Pérez",
    carrera: "Hostelería y Turismo",
    telefono: "70010002",
    correo: "luis002@correo.com",
    estado: "INACTIVO"
  },
  {
    carnet: "CARNET003",
    nombre_completo: "María Gómez",
    carrera: "Ingeniería Civil",
    telefono: "70010003",
    correo: "maria003@correo.com",
    estado: "ACTIVO"
  },
  {
    carnet: "CARNET004",
    nombre_completo: "Carlos Hernández",
    carrera: "Ingeniería Eléctrica",
    telefono: "70010004",
    correo: "carlos004@correo.com",
    estado: "ACTIVO"
  },
  {
    carnet: "CARNET005",
    nombre_completo: "Sofía Ramírez",
    carrera: "Diseño Gráfico",
    telefono: "70010005",
    correo: "sofia005@correo.com",
    estado: "INACTIVO"
  },
  {
    carnet: "CARNET006",
    nombre_completo: "José Martínez",
    carrera: "Administración de Empresas",
    telefono: "70010006",
    correo: "jose006@correo.com",
    estado: "ACTIVO"
  },
  {
    carnet: "CARNET007",
    nombre_completo: "Claudia Rivera",
    carrera: "Ingeniería en Sistemas",
    telefono: "70010007",
    correo: "claudia007@correo.com",
    estado: "ACTIVO"
  },
  {
    carnet: "CARNET008",
    nombre_completo: "Andrés Castillo",
    carrera: "Arquitectura",
    telefono: "70010008",
    correo: "andres008@correo.com",
    estado: "INACTIVO"
  },
  {
    carnet: "CARNET009",
    nombre_completo: "Valeria Torres",
    carrera: "Medicina",
    telefono: "70010009",
    correo: "valeria009@correo.com",
    estado: "ACTIVO"
  },
  {
    carnet: "CARNET010",
    nombre_completo: "Fernando Cruz",
    carrera: "Ingeniería Mecánica",
    telefono: "70010010",
    correo: "fernando010@correo.com",
    estado: "ACTIVO"
  }
])

// Insercion de datos en la colección "roles"
use("biblioteca_digital");

db.roles.insertMany([
  {
    nombre_rol: "Administrador",
    descripcion: "Acceso total al sistema"
  },
  {
    nombre_rol: "Bibliotecario",
    descripcion: "Gestión de libros y préstamos"
  }
])

// Insercion de datos en la colección "usuarios"

use("biblioteca_digital");

db.usuarios.insertMany([
  {
    usuario: "administrador",
    correo: "admin@biblioteca.com",
    password: "Admin123",
    estado: "ACTIVO",
    fecha_creacion: new Date(),
    rol_usuario: "Administrador"
  },
  {
    usuario: "bibliotecario",
    correo: "bibliotecario@biblioteca.com",
    password: "Biblio123",
    estado: "ACTIVO",
    fecha_creacion: new Date(),
    rol_usuario: "Bibliotecario"
  }
])

// Insercion de datos en la colección "prestamos"

use("biblioteca_digital");

db.prestamos.insertMany([
  {
    fecha_prestamo: new Date("2026-06-01"),
    fecha_devolucion: new Date("2026-06-05"),
    estado: "DEVUELTO",
    estudiante: { carnet: "CARNET001", nombre: "Ana López" },
    usuario: { usuario: "administrador", rol_usuario: "Administrador" },
    libros: [{ codigo_libro: "LIB001", titulo: "Cien años de soledad" }]
  },
  {
    fecha_prestamo: new Date("2026-06-02"),
    fecha_devolucion: new Date("2026-06-06"),
    estado: "ACTIVO",
    estudiante: { carnet: "CARNET002", nombre: "Luis Pérez" },
    usuario: { usuario: "bibliotecario", rol_usuario: "Bibliotecario" },
    libros: [{ codigo_libro: "LIB002", titulo: "La ciudad y los perros" }]
  },
  {
    fecha_prestamo: new Date("2026-06-03"),
    fecha_devolucion: new Date("2026-06-07"),
    estado: "DEVUELTO",
    estudiante: { carnet: "CARNET003", nombre: "María Gómez" },
    usuario: { usuario: "bibliotecario", rol_usuario: "Bibliotecario" },
    libros: [{ codigo_libro: "LIB003", titulo: "La casa de los espíritus" }]
  },
  {
    fecha_prestamo: new Date("2026-06-04"),
    fecha_devolucion: new Date("2026-06-08"),
    estado: "ACTIVO",
    estudiante: { carnet: "CARNET004", nombre: "Carlos Hernández" },
    usuario: { usuario: "administrador", rol_usuario: "Administrador" },
    libros: [{ codigo_libro: "LIB004", titulo: "Rayuela" }]
  },
  {
    fecha_prestamo: new Date("2026-06-05"),
    fecha_devolucion: new Date("2026-06-09"),
    estado: "DEVUELTO",
    estudiante: { carnet: "CARNET005", nombre: "Sofía Ramírez" },
    usuario: { usuario: "bibliotecario", rol_usuario: "Bibliotecario" },
    libros: [{ codigo_libro: "LIB005", titulo: "La región más transparente" }]
  },
  {
    fecha_prestamo: new Date("2026-06-06"),
    fecha_devolucion: new Date("2026-06-10"),
    estado: "ACTIVO",
    estudiante: { carnet: "CARNET006", nombre: "José Martínez" },
    usuario: { usuario: "administrador", rol_usuario: "Administrador" },
    libros: [{ codigo_libro: "LIB006", titulo: "El Aleph" }]
  },
  {
    fecha_prestamo: new Date("2026-06-07"),
    fecha_devolucion: new Date("2026-06-11"),
    estado: "DEVUELTO",
    estudiante: { carnet: "CARNET007", nombre: "Claudia Rivera" },
    usuario: { usuario: "bibliotecario", rol_usuario: "Bibliotecario" },
    libros: [{ codigo_libro: "LIB007", titulo: "El laberinto de la soledad" }]
  },
  {
    fecha_prestamo: new Date("2026-06-08"),
    fecha_devolucion: new Date("2026-06-12"),
    estado: "ACTIVO",
    estudiante: { carnet: "CARNET008", nombre: "Andrés Castillo" },
    usuario: { usuario: "administrador", rol_usuario: "Administrador" },
    libros: [{ codigo_libro: "LIB008", titulo: "Como agua para chocolate" }]
  },
  {
    fecha_prestamo: new Date("2026-06-09"),
    fecha_devolucion: new Date("2026-06-13"),
    estado: "DEVUELTO",
    estudiante: { carnet: "CARNET009", nombre: "Valeria Torres" },
    usuario: { usuario: "bibliotecario", rol_usuario: "Bibliotecario" },
    libros: [{ codigo_libro: "LIB009", titulo: "Las venas abiertas de América Latina" }]
  },
  {
    fecha_prestamo: new Date("2026-06-10"),
    fecha_devolucion: new Date("2026-06-14"),
    estado: "ACTIVO",
    estudiante: { carnet: "CARNET010", nombre: "Fernando Cruz" },
    usuario: { usuario: "administrador", rol_usuario: "Administrador" },
    libros: [{ codigo_libro: "LIB010", titulo: "Versos sencillos" }]
  }
])

// Insercion de datos en la colección "reporte"
use("biblioteca_digital");

db.reporte.insertMany([
  {
    fecha_reporte: new Date("2026-06-05"),
    estado: "DEVUELTO",
    prestamo: {
      estudiante: { carnet: "CARNET001", nombre: "Ana López" },
      usuario: { usuario: "administrador", rol_usuario: "Administrador" },
      libros: [{ codigo_libro: "LIB001", titulo: "Cien años de soledad" }]
    }
  },
  {
    fecha_reporte: new Date("2026-06-06"),
    estado: "ACTIVO",
    prestamo: {
      estudiante: { carnet: "CARNET002", nombre: "Luis Pérez" },
      usuario: { usuario: "bibliotecario", rol_usuario: "Bibliotecario" },
      libros: [{ codigo_libro: "LIB002", titulo: "La ciudad y los perros" }]
    }
  },
  {
    fecha_reporte: new Date("2026-06-07"),
    estado: "DEVUELTO",
    prestamo: {
      estudiante: { carnet: "CARNET003", nombre: "María Gómez" },
      usuario: { usuario: "bibliotecario", rol_usuario: "Bibliotecario" },
      libros: [{ codigo_libro: "LIB003", titulo: "La casa de los espíritus" }]
    }
  },
  {
    fecha_reporte: new Date("2026-06-08"),
    estado: "ACTIVO",
    prestamo: {
      estudiante: { carnet: "CARNET004", nombre: "Carlos Hernández" },
      usuario: { usuario: "administrador", rol_usuario: "Administrador" },
      libros: [{ codigo_libro: "LIB004", titulo: "Rayuela" }]
    }
  },
  {
    fecha_reporte: new Date("2026-06-09"),
    estado: "DEVUELTO",
    prestamo: {
      estudiante: { carnet: "CARNET005", nombre: "Sofía Ramírez" },
      usuario: { usuario: "bibliotecario", rol_usuario: "Bibliotecario" },
      libros: [{ codigo_libro: "LIB005", titulo: "La región más transparente" }]
    }
  },
  {
    fecha_reporte: new Date("2026-06-10"),
    estado: "ACTIVO",
    prestamo: {
      estudiante: { carnet: "CARNET006", nombre: "José Martínez" },
      usuario: { usuario: "administrador", rol_usuario: "Administrador" },
      libros: [{ codigo_libro: "LIB006", titulo: "El Aleph" }]
    }
  },
  {
    fecha_reporte: new Date("2026-06-11"),
    estado: "DEVUELTO",
    prestamo: {
      estudiante: { carnet: "CARNET007", nombre: "Claudia Rivera" },
      usuario: { usuario: "bibliotecario", rol_usuario: "Bibliotecario" },
      libros: [{ codigo_libro: "LIB007", titulo: "El laberinto de la soledad" }]
    }
  },
  {
    fecha_reporte: new Date("2026-06-12"),
    estado: "ACTIVO",
    prestamo: {
      estudiante: { carnet: "CARNET008", nombre: "Andrés Castillo" },
      usuario: { usuario: "administrador", rol_usuario: "Administrador" },
      libros: [{ codigo_libro: "LIB008", titulo: "Como agua para chocolate" }]
    }
  },
  {
    fecha_reporte: new Date("2026-06-13"),
    estado: "DEVUELTO",
    prestamo: {
      estudiante: { carnet: "CARNET009", nombre: "Valeria Torres" },
      usuario: { usuario: "bibliotecario", rol_usuario: "Bibliotecario" },
      libros: [{ codigo_libro: "LIB009", titulo: "Las venas abiertas de América Latina" }]
    }
  },
  {
    fecha_reporte: new Date("2026-06-14"),
    estado: "ACTIVO",
    prestamo: {
      estudiante: { carnet: "CARNET010", nombre: "Fernando Cruz" },
      usuario: { usuario: "administrador", rol_usuario: "Administrador" },
      libros: [{ codigo_libro: "LIB010", titulo: "Versos sencillos" }]
    }
  }
])

