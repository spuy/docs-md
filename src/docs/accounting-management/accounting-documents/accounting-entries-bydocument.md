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

### Asignación inventario (Con diferencia de Precio)

|           Cuenta                 |    Debe    |    Haber   |   Depende de  |          Campo           |
| -------------------------------- | ---------- | ---------- | ------------- | ------------------------ | 
| 21190 - Depósistos sin Facturar  | 30,000.00  |  0.00      | Socio de Neg. | Depósitos no Facturados  | 
| 51290 - Ajustes a Costos de Prod | 0.00       | 28,352.00  | Producto      | Conciliac de Inventario  |
| 58100 - variación en Precio Fact | 0.00       | 1,648.00   | Producto      | Variación Precio Factura |

### Documento por Pagar (Producto Almacenable)

|              Cuenta               |    Debe    |    Haber   |   Depende de    |          Campo        |
| --------------------------------- | ---------- | ---------- | --------------- | --------------------- |
| 152110 - IVA Compras              | 0.00       |  0.00      | Tasa de Imp.    | Impuesto al comprar   |  
| 51290 - Ajustes a Costos de Prod  | 10,000.00  | 0.00       | Producto        | Conciliación de Inven |
| 51290 - Ajustes a Costos de Prod  | 18,352.00  |  0.00      | Producto        | Conciliación de Inven |
| 21110 - Acreedores por Compras    | 0.00       | 28,352.00  | Socio del Neg.  | CxP del Proveedor     |

### Compras Productos /Servicios (No Almacenables)

### Orden de Compra (Productos Artículos No Almacenables)

|           Cuenta             |    Debe    |    Haber   |   Depende de  |          Campo        | Tipo de Aplic. |
| ---------------------------- | ---------- | ---------- | ------------- | --------------------- | -------------- |
| 52100 - COGS Medios          | 12,000.00  |  0.00      |  Producto     | Costos o Gastos Prod. | Compromisos    |
| 952 - Compras Comprometidas  | 0.00       | 12,000.00  | Esquema Cont. | Conciliac de comprom. | Compromisos    |

### Recepción Servicios (No Almacenables)

|              Cuenta             |    Debe    |    Haber   |   Depende de  |          Campo      | Tipo de Aplic. |
| ------------------------------- | ---------- | ---------- | ------------- | ------------------- | -------------- |
| 22200 - Cta Fact. no Entregada  | 12,000.00  |  0.00      | Producto      | Concil. Serv recib. | Actual         | 
| 152110 - IVA Compras            | 2,640.00   |  0.00      | Tasa de Imp.  | Impuesto al comprar | Actual         |
| 21110 - Acreedores por Compras  | 0.00       |  14,640.00 | Socio del Neg | CxP del Proveedor   | Actual         |

### Asignación Recepción-Factura de Servicios (Match Invoice PO)

Sin diferencia de precio.
Al  asociar la Factura con la Recepción.
Se visualiza: Factura/Recepciones de Productos Asignados.

|           Cuenta             |    Debe    |    Haber   |   Depende de  |          Campo        | Tipo de Aplic. |
| ---------------------------- | ---------- | ---------- | ------------- | --------------------- | -------------- |
| 21190 - Serv Entreg no Fact  | 12,000.00  |  0.00      | Gru. Soc. Neg | Serv. No Facturados   | Actual         |    
| 22200 - Cta Fact. no Entreg  | 0.00       | 12,000.00  | Producto      | Concil. Serv recib.   | Actual         |
| 952 - Compras Comprometidas  | 0.00       | 12,000.00  | Esquema Cont. | Conciliac de comprom. | Compromisos    |
| 52100 - COGS Medios          | 12,000.00  | 0.00       | Producto      | Costos o Gastos Prod  | Compromisos    |


