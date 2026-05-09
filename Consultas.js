// ==========================================
// Proyecto: Análisis de ventas con MongoDB
// Base de datos: ventas_db
// Colección: ventas
// ==========================================

// 1. Crear / seleccionar base de datos
use ventas_db

// 2. Crear colección
db.createCollection("ventas")

// 3. Insertar 100 documentos de prueba
for (let i = 1; i <= 100; i++) {
  db.ventas.insertOne({
    producto: "Producto_" + i,
    categoria: i % 2 === 0 ? "Tecnologia" : "Hogar",
    precio: Math.floor(Math.random() * 100000) + 10000,
    cantidad: Math.floor(Math.random() * 5) + 1,
    ciudad: i % 3 === 0 ? "Bogota" : (i % 3 === 1 ? "Medellin" : "Cali")
  });
}

// 4. Validar cantidad de documentos
db.ventas.countDocuments()

// ==========================================
// CONSULTAS CRUD
// ==========================================

// 5. Insertar un documento
db.ventas.insertOne({
  producto: "Mouse Gamer",
  categoria: "Tecnologia",
  precio: 120000,
  cantidad: 2,
  ciudad: "Bogota"
})

// 6. Consultar documentos
db.ventas.find().limit(5)

// 7. Consultar documento específico
db.ventas.find({ producto: "Mouse Gamer" })

// 8. Actualizar documento
db.ventas.updateOne(
  { producto: "Mouse Gamer" },
  { $set: { precio: 150000 } }
)

// 9. Validar actualización
db.ventas.find({ producto: "Mouse Gamer" })

// 10. Eliminar documento
db.ventas.deleteOne({ producto: "Mouse Gamer" })

// 11. Validar eliminación
db.ventas.find({ producto: "Mouse Gamer" })

// ==========================================
// CONSULTAS CON FILTROS
// ==========================================

// 12. Filtrar por categoría
db.ventas.find({ categoria: "Tecnologia" }).limit(5)

// 13. Filtrar por ciudad
db.ventas.find({ ciudad: "Bogota" }).limit(5)

// 14. Filtrar productos con precio mayor a 50000
db.ventas.find({ precio: { $gt: 50000 } }).limit(5)

// 15. Filtrar por categoría y ciudad
db.ventas.find({
  categoria: "Tecnologia",
  ciudad: "Bogota"
}).limit(5)

// ==========================================
// CONSULTAS DE AGREGACIÓN
// ==========================================

// 16. Contar documentos por categoría
db.ventas.aggregate([
  {
    $group: {
      _id: "$categoria",
      totalDocumentos: { $sum: 1 }
    }
  }
])

// 17. Sumar ventas por categoría
db.ventas.aggregate([
  {
    $group: {
      _id: "$categoria",
      totalVentas: {
        $sum: {
          $multiply: ["$precio", "$cantidad"]
        }
      }
    }
  }
])

// 18. Promedio de precio por categoría
db.ventas.aggregate([
  {
    $group: {
      _id: "$categoria",
      promedioPrecio: { $avg: "$precio" }
    }
  }
])

// 19. Sumar ventas por ciudad
db.ventas.aggregate([
  {
    $group: {
      _id: "$ciudad",
      totalVentas: {
        $sum: {
          $multiply: ["$precio", "$cantidad"]
        }
      }
    }
  }
])
