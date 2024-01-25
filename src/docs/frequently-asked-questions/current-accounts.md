---
title: Cuentas Corrientes
category: Documentation
star: 9
sticky: 9
article: false
---

## Mantenimientos

### ¿ Por qué se ven Facturas ya pagadas en el Estado de Cuenta Corriente y en Saldos pendientes?

En el estado de cuenta se ven las facturas Pagas porque muestra todos los documentos (facturas y pagos) sin filtrar si se encuentra o no pagada (no muestra los documentos con estado cerrado).
No se muestran en el reporte Saldos Pendientes justamente porque este reporte muestra solo facturas con saldo abierto o pendiente.

### Por qué no se muestra vinculado un Pago a un Proveedor en el estado de cuenta corriente?

Si el Pago tiene asignado un "Cargo" no se visualizará en el estado de cuenta corriente del proveedor.

### ¿Por qué motivo pueden mostrarse saldos pendientes en documentos por pagar y que no puedan ajustarse en el proceso de Dar de baja CxC y CxP?

El sistema antes consideraba una tolerancia de +- 0.99 para marcar como asignada una factura, lo que hacía que a las facturas se les marque el check de PAGADO cuando existe un saldo abierto que entra en dicha tolerancia. Esta tolerancia se quitó, para que las facturas queden con el check de PAGADO = NO, y puedan ser consideradas por este proceso (Dar de baja CxC y CxP). Por lo cual estos casos solo pueden darse en documentos antiguos.
Este proceso solo ajusta documentos por pagar o Documentos por cobrar.

## Acciones

### ¿Qué representa el SALDO INICIAL en el reporte de estado de cuenta corriente?

Representa el saldo de todos los documentos de tiempo pasado, su saldo abierto.

Si se emite el reporte desde la "fecha desde" pero hacia el pasado debería dar el mismo importe.