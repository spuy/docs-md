---
title: Asientos Contables por Documentos
category: Documentation
star: 9
sticky: 9
article: false
---

## Gestión de Compras

### Compras Productos / Artículos (Almacenables)

Orden de Compra (Productos Artículos Almacenables)

|           Cuenta             |    Debe    |    Haber   |   Depende de  |          Campo        | Tipo de Aplic. |
| ---------------------------- | ---------- | ---------- | ------------- | --------------------- | -------------- |
| 51100 - Costo de Venta Prod. | 12,000.00  |  0.00      |  Producto     | COGS del Prod.        | Compromisos    |
| 952 - Compras Comprometidas  | 0.00       | 12,000.00  | Esquema Cont. | Conciliac de comprom. | Compromisos    |

### Recepción (Productos Artículos Almacenables)

|           Cuenta             |    Debe    |    Haber   |   Depende de  |          Campo        | Tipo de Aplic. |
| ---------------------------- | ---------- | ---------- | ------------- | --------------------- | -------------- |
| 14120 - Invent. Prod. A      | 100,000.00 |  0.00      |  Producto     | Ingreso Inventario    | Actual         |    
| 21190 - Depós. sin Facturar  | 0.00       | 100,000.00 | Socio de Neg. | Depósit. no Fact.     | Actual         |
| 952 - Compras Comprometidas  | 100,000.00 |  0.00      | Esquema Cont. | Conciliac de comprom. | Compromisos    |
| 51100 - Costo Vta. Producto  | 0.00       | 100,000.00 | Producto      | COGS del Prod.        | Compromisos    |

### Asignación inventario (sin diferencia de Precio)

|           Cuenta                 |    Debe    |    Haber   |   Depende de  |          Campo          |
| -------------------------------- | ---------- | ---------- | ------------- | ----------------------- | 
| 21190 - Depósistos sin Facturar  | 28,352.00  |  0.00      | Socio de Neg. | Depósitos no Facturados | 
| 51290 - Ajustes a Costos de Prod | 0.00       | 28,352.00  | Producto      | Conciliac de Inventario | 


