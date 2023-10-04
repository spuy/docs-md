---
title: Asientos Contables
category: Documentation
star: 9
sticky: 9
article: false
---

## Gestión de Compras

### Orden de Compra

Si no se manejan “Compromisos” no se realiza asiento contable.

### Recepción

|          Cuenta            |    Debe    |    Haber   |     Depende de    |          Campo          |  
| -------------------------- | ---------- | ---------- | ----------------- | ----------------------- |
| 14120 - inverntario Prod.A | 100,000.00 |  0.00      |  Producto         | Ingreso Inventario      |
| 21190 - Depósitos s)Fact.  | 0.00       | 100,000.00 | Socio del Negocio | Depósitos no Facturados |

### Asignación inventario (sin diferencia de Precio)

|             Cuenta               |    Debe   |   Haber   |   Depende de  |         Campo          |  
| -------------------------------- | --------- | --------- | ------------- | ---------------------- |
| 21190 - Depósitos s/Fact         | 28,352.00 | 0.00      | Socio del Neg | Depósitos no Fact.     | 
| 51290 - Ajustes a Cost. de Prod. | 0.00      | 28,352.00 | Producto      | Conciliación de invent |

### Asignación inventario (Con diferencia de Precio)