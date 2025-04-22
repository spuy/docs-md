---
title: Cierre de Caja del Punto de Venta
category: Documentation
star: 9
sticky: 9
article: false
---

## Cierre de Caja del Punto de Venta

Cada cobro realizado en un Punto de Venta se registra en un Cierre de Caja. Su finalidad es conciliar los ingresos y detectar diferencias.

#### Pasos para el cierre de caja:

* Apertura de caja desde el punto de venta.

* Venta de productos.

* Retiro de fondos.

Cada proceso genera documentos automáticamente vinculados a la ventana Cierre de Caja. Al ejecutar el proceso de cierre, Solop ERP deja el registro en estado Borrador, permitiendo su validación manual antes de completarlo.

A continuación, se específica el procedimiento que se debe realizar para ejecutar correctamente el cierre de caja POS.

#### Ejecución del Proceso

Para ejecutar correctamente el cierre de caja en Solop ERP, siga estos pasos:

1. Ubicarse en la solapa [Opciones Rápidas del Punto de Ventas], en sección [Gestión de Caja].

2. Seleccione la opción [Cierre]

3. Se mostrarán los ingresos así como los retiros. Al aceptar se generará el cierre de caja (define el cierre de caja del día y punto de venta actual en estado completo).

### Consulta de Registro en Cierre de Caja

Tras ejecutar el cierre de caja, los registros generados pueden consultarse en la pestaña Línea de Cierre de Caja, donde se mostrarán:

* Apertura: Registro de ingresos en caja.

* Cobros: Registros de documentos de cobro.

* Retiros de Fondos: Documentos de egreso generados en caja.

### Control de Diferencia en Cierre de Caja

Si el cierre de caja no cuadra y muestra una diferencia, siga estos pasos:

* Verifique la columna Diferencia Monto.

* Si la diferencia es aceptada, marque la casilla Sobre/Sub Pago.

* Indique el cargo al que se asignará la diferencia (ej. "Pérdida por diferencia de quebranto de caja").

* Introduzca una descripción y la fecha de conciliación.

### Traspaso a Banco

Para registrar un traspaso monetario de caja a banco:

* Si solo hay transacciones con tarjeta, ejecute Depósito de Caja y luego Cierre de Caja.

* Si hay pagos por transferencia bancaria, realice una Transferencia Bancaria y luego el Cierre de Caja.

* Si existen ambos tipos de pagos, realice primero el Depósito de Caja, luego la Transferencia Bancaria y, por último, el Cierre de Caja.

### Retiro de Dinero en PDV

Este proceso debe realizarse antes del cierre del punto de venta. Pasos:

* Seleccione [Retiro] desde solapa Opciones Rápidas del Punto de Ventas.

* Defina el monto y la moneda.

* Seleccione la caja destino.

* Indique el cargo "Retiro de Caja".

* En caso de cierre de lote de tarjetas, realice retiros separados por cada lote.

### Cierre de Caja Final

Para completar el proceso de cierre de caja:

* Seleccione la caja a cerrar y transfiera el saldo al banco.

* Filtre las transacciones por Cuenta Bancaria y Fecha de Estado de Cuenta.

* Seleccione Crear a partir de Caja para incluir los movimientos de Depósito y Transferencia Bancaria.

* Haga clic en OK para finalizar el cierre.