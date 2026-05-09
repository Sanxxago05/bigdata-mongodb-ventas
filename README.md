# Proyecto Big Data - MongoDB Ventas

## Descripción

Este proyecto implementa una solución de almacenamiento y consulta de datos utilizando MongoDB como base de datos NoSQL para un escenario de análisis de ventas.

El sistema permite almacenar información de productos, categorías, precios, cantidades y ciudades, realizando operaciones CRUD, filtros y consultas de agregación para obtener métricas relevantes.

---

# Caso de uso

Se desarrolló un caso de análisis de ventas con el objetivo de demostrar el funcionamiento de MongoDB en entornos Big Data.

La colección utilizada almacena información relacionada con:

- Producto
- Categoría
- Precio
- Cantidad
- Ciudad

---

# Tecnologías utilizadas

- MongoDB 8.0
- Ubuntu Server 24.04
- GitHub
- Mongo Shell (mongosh)

---

# Base de datos

## Base de datos:
ventas_db

## Colección:
ventas

---

# Estructura del documento

Ejemplo de documento almacenado:

```json
{
  "producto": "Mouse Gamer",
  "categoria": "Tecnologia",
  "precio": 120000,
  "cantidad": 2,
  "ciudad": "Bogota"
}
