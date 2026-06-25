// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.



use("biblioteca_digital");

// Colección: Autores
db.createCollection("autores", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre_autor", "apellido", "estado"],
      properties: {
        nombre_autor: { bsonType: "string" },
        apellido: { bsonType: "string" },
        nacionalidad: { bsonType: "string" },
        fecha_nacimiento: { bsonType: "date" },
        biografia: { bsonType: "string" },
        estado: { enum: ["ACTIVO", "INACTIVO"] }
      }
    }
  }
})

// Colección: Categorías
db.createCollection("categorias", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre_categoria", "estado"],
      properties: {
        nombre_categoria: { bsonType: "string" },
        descripcion: { bsonType: "string" },
        estado: { enum: ["Activo", "Inactivo"] }
      }
    }
  }
})

// Colección: Libros
db.createCollection("libros", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["codigo_libro", "titulo", "estado"],
      properties: {
        codigo_libro: { bsonType: "string" },
        titulo: { bsonType: "string" },
        autores: { bsonType: "array" },
        categorias: { bsonType: "array" },
        editorial: { bsonType: "string" },
        anio_publicacion: { bsonType: "int" },
        cantidad: { bsonType: "int" },
        disponibles: { bsonType: "int" },
        estado: { enum: ["DISPONIBLE", "PRESTADO", "INACTIVO"] }
      }
    }
  }
})

// Colección: Estudiantes
db.createCollection("estudiantes", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["carnet", "nombre_completo", "carrera", "estado"],
      properties: {
        carnet: { bsonType: "string" },
        nombre_completo: { bsonType: "string" },
        carrera: { bsonType: "string" },
        telefono: { bsonType: "string" },
        correo: { bsonType: "string" },
        estado: { enum: ["ACTIVO", "INACTIVO"] }
      }
    }
  }
})

// Colección: Usuarios
db.createCollection("usuarios", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["usuario", "correo", "password", "estado", "rol_usuario"],
      properties: {
        usuario: { bsonType: "string" },
        correo: { bsonType: "string" },
        password: { bsonType: "string" },
        estado: { enum: ["ACTIVO", "INACTIVO"] },
        fecha_creacion: { bsonType: "date" },
        rol_usuario: { enum: ["Administrador", "Bibliotecario"] }
      }
    }
  }
})


// Colección: Roles
db.createCollection("roles", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre_rol"],
      properties: {
        nombre_rol: { bsonType: "string" },
        descripcion: { bsonType: "string" }
      }
    }
  }
})

// Colección: Prestamos
use("biblioteca_digital");

db.createCollection("prestamos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["fecha_prestamo", "fecha_devolucion", "estado", "estudiante", "usuario", "libros"],
      properties: {
        fecha_prestamo: { bsonType: "date" },
        fecha_devolucion: { bsonType: "date" },
        estado: { enum: ["ACTIVO", "DEVUELTO"] },
        estudiante: {
          bsonType: "object",
          required: ["carnet", "nombre"],
          properties: {
            carnet: { bsonType: "string" },
            nombre: { bsonType: "string" }
          }
        },
        usuario: {
          bsonType: "object",
          required: ["usuario", "rol_usuario"],
          properties: {
            usuario: { bsonType: "string" },
            rol_usuario: { enum: ["Administrador", "Bibliotecario"] }
          }
        },
        libros: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required: ["codigo_libro", "titulo"],
            properties: {
              codigo_libro: { bsonType: "string" },
              titulo: { bsonType: "string" }
            }
          }
        }
      }
    }
  }
})


// Colección: Reporte
db.createCollection("reporte", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["fecha_reporte", "prestamo", "estado"],
      properties: {
        fecha_reporte: { bsonType: "date" },
        estado: { enum: ["ACTIVO", "DEVUELTO"] },
        prestamo: {
          bsonType: "object",
          required: ["estudiante", "usuario", "libros"],
          properties: {
            estudiante: {
              bsonType: "object",
              required: ["carnet", "nombre"],
              properties: {
                carnet: { bsonType: "string" },
                nombre: { bsonType: "string" }
              }
            },
            usuario: {
              bsonType: "object",
              required: ["usuario", "rol_usuario"],
              properties: {
                usuario: { bsonType: "string" },
                rol_usuario: { enum: ["Administrador", "Bibliotecario"] }
              }
            },
            libros: {
              bsonType: "array",
              items: {
                bsonType: "object",
                required: ["codigo_libro", "titulo"],
                properties: {
                  codigo_libro: { bsonType: "string" },
                  titulo: { bsonType: "string" }
                }
              }
            }
          }
        }
      }
    }
  }
})

