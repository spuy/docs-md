---
title: Acciones del Punto de Venta
category: Documentation
star: 9
sticky: 9
article: false
---

## Apertura de Caja

El proceso de apertura de caja consiste en realizar una transferencia bancaria desde un proceso específico del punto de venta. Este procedimiento permite efectuar un egreso desde la caja administrativa y un ingreso en la caja donde se realizarán las operaciones de venta. Dichos movimientos se reflejan en la ventana Caja, mediante los documentos Pago y Cobro.

Este procedimiento genera un registro en la ventana Cierre de Caja, con la cuenta Caja, desde la cual egresa el dinero. En la línea correspondiente, se asocia el registro de Pago, generado en la ventana Caja.

Adicionalmente, se crea un registro en Cierre de Caja, con la cuenta Caja POS, a la cual ingresa el dinero. En la línea del registro se asocia el Cobro, generado en Caja por la apertura.

#### Notas Importantes:

* Este proceso debe realizarse antes de iniciar las ventas del día.

* No se debe realizar la apertura de caja sin haber entregado físicamente el dinero correspondiente. De lo contrario, los saldos en Solop ERP no coincidirán con los saldos físicos.

* Es obligatorio seleccionar la opción OK en la ventana Transferencia Bancaria para completar el proceso y reflejar el movimiento monetario en Solop ERP.

* Si se requiere aperturar la caja con más de una moneda, se debe realizar una transferencia por cada moneda.

![Apertura 1](/assets/img/docs/pdv-management/pdm-pdv-image292.png)

![Apertura 2](/assets/img/docs/pdv-management/pdm-pdv-image293.png)

## Consulta de Registros

Para verificar los registros generados, se pueden consultar los valores ingresados en los campos No. del Documento y Documento Destino en la ventana Apertura de Punto de Venta:

* Egreso: En la cuenta Caja Administrativa como pago nacional.

* Ingreso: En la cuenta Caja 04 como cobro nacional.

En la ventana Cierre de Caja, se crean dos registros en estado Borrador, uno para cada caja involucrada.

## Completar Orden Preparada

El proceso de Completar Orden Preparada permite completar la orden de venta y generar automáticamente su factura y entrega en estado Completo. Se utiliza después de concluir la toma de pedido en la ventana Punto de Venta, permitiendo realizar la venta sin un cobro inmediato.

#### Procedimiento:

* Ubicar en el menú de Solop ERP la carpeta Gestión de Ventas > Órdenes de Venta > Punto de Venta y seleccionar la ventana Punto de Venta.

* Luego de la toma de pedido, seleccionar la opción Completar Orden Preparada en el menú desplegable del icono Proceso.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image55.png)

Imagen 1. Diagrama de Completar Orden Preparada POS

## Consulta de Documentos Generados

* En la ventana Orden de Venta, se puede visualizar la orden generada con el número de documento OPOS-58.

* En la opción Documentos por Cobrar, se visualiza la factura generada.

* En la pestaña Facturas Pagadas, se verifica que no hay pagos asociados.

* En la ventana Entrega (Cliente), se encuentra el documento de entrega generado..

## Copiar Orden Desde Otra

El proceso de Copiar Orden Desde Otra permite duplicar una orden de venta manteniendo los precios de los productos y la tasa de cambio utilizada en la orden original. Es especialmente útil para generar notas de crédito desde el punto de venta.

#### Procedimiento:

* Acceder a Solop ERP: Gestión de Ventas > Órdenes de Venta > Punto de Venta.

* Seleccionar la opción Registros Históricos en la ventana Punto de Venta.

* Ubicar y seleccionar la orden de venta a copiar.

* Seleccionar la opción Copiar Orden Desde Otra en el menú desplegable del icono Proceso.

#### Notas Importantes:

* Si el terminal requiere un PIN de usuario, se debe ingresar antes de ejecutar el proceso.

* Una vez copiada, la orden se generará en estado Borrador con la fecha actual.

* Si se va a generar una nota de crédito, la orden debe copiarse antes de realizar la devolución, ya que al generarse la nota de crédito la orden original pasará a estado Cerrado.

## Anular Transacción de Venta

Este proceso permite realizar la devolución total de una venta, generando automáticamente los documentos Orden de Devolución, Devolución y Nota de Crédito en estado Completo.

#### Procedimiento:

* Acceder a Solop ERP: Gestión de Ventas > Órdenes de Venta > Punto de Venta.

* Seleccionar la opción Registros Históricos para localizar la transacción a anular.

* Ejecutar el proceso de anulación desde la ventana Punto de Venta.

## Consulta de Documentos Generados

En la ventana Orden de Devolución (Cliente), se puede visualizar el registro de la orden de devolución con el número de documento OPOS-36106, generado en el reporte de la nota de crédito mostrada anteriormente.

Asimismo, en la ventana Devolución Cliente, se puede visualizar el registro generado desde el proceso mencionado.

Este documento se genera automáticamente cuando existe un documento de entrega asociado a la venta.

::: note
El documento de entrega puede generarse automáticamente según la configuración del tipo de documento, como se indica en el material Gestión PDV.
:::

En la ventana Documentos por Cobrar, se registra la nota de crédito generada automáticamente desde el proceso anterior. Además, se genera un egreso en caja con el tipo de documento Pago Nacional, reflejando el movimiento de egreso realizado al ejecutar la opción Anular Transacción de Venta.

## Devolución de Cliente desde Punto de Venta

Devolución de Cliente desde Punto de VentaPara realizar una devolución de una factura a un cliente, siga estos pasos:

#### 1. Identificar la Orden de Venta:

* Acceda a Opciones Rápidas del Punto de Venta (parte izquierda de la pantalla).

* Dentro de Orden de Venta, seleccione Histórico de Órdenes.

* Utilice los filtros para buscar la orden (Procesada = SÍ y fecha correspondiente). Si el cliente está identificado, búsquelo por Socio del Negocio.

* Seleccione la orden y confirme.

![Anular Transacción de venta](/assets/img/docs/pdv-management/pdm-pdv-image291.png)

#### 2. Anular la Transacción de Venta:

* Vuelva a Opciones Rápidas del Punto de Venta.
* Seleccione Anular Transacción de Venta.
* Ingrese el motivo de la anulación y confirme.

El sistema realizará las siguientes acciones:

* Cerrará la orden de venta original, dejándola inactiva.
* Generará una nueva orden de venta con las mismas características de la original.
* Registrará un documento por cobrar del tipo Nota de Crédito.
* Generará un egreso de caja para cancelar la transacción y reflejar la conciliación del día.
* Registrará una devolución de cliente que actualizará el inventario.

## Retiro Detallado de Punto de Venta

Un retiro de fondos ocurre cuando se extrae dinero de una caja del punto de venta, ya sea por alivio de caja, cancelación de un gasto, entre otros.

#### Ejecución del Proceso

1. En el menú de Solop ERP, acceda a:

* Gestión de Ventas > Órdenes de Venta > Punto de Venta.

2. En la ventana Punto de Venta, seleccione Retiro de Caja (Detallado) desde el icono Proceso en la barra de herramientas.

3. Configure los filtros según su necesidad:

* Terminal PDV: Terminal del punto de venta.
* Cuenta Bancaria: Cuenta de la caja POS asociada.
* Socio del Negocio: Vendedor asociado.
* Tipo de Pago y Moneda.
* Fecha de la Transacción.

4. Haga clic en Comenzar Búsqueda y seleccione los movimientos correspondientes al retiro.

5. Configure los siguientes campos:

* Fecha de la Transacción para los documentos generados.
* Cuenta Bancaria para el ingreso de los movimientos.
* Tipo de Documento para Retiros y Depósitos (Ejemplo: Egreso Caja e Ingreso Caja).
* Cargo para justificar el retiro (Ejemplo: Efectivo en Tránsito Administración).
* Conciliar Automáticamente (opcional).

6. Seleccione OK para ejecutar el proceso.

::: note
Por cada retiro realizado, Solop ERP genera en la ventana Caja:
* Un documento de pago asociando la caja POS.
* Un documento de cobro asociando la caja administrativa.
:::

Si el punto de venta tiene transacciones en efectivo y tarjeta, se deben realizar dos retiros por separado.

## Consulta de Pago y Cobro Generados en Caja

Para visualizar los registros creados:

1. Acceda a la ventana Caja.

2. Busque por el número de documento ingresado en Retiro de Caja (Detallado).

3. Visualice el registro de Pago.

4. Use el icono Próximo Registro para ver el Cobro.

## Consultar Registro en Cierre de Caja

Cada forma de pago y moneda genera un documento de egreso y uno de ingreso en la ventana Caja. Estos registros se reflejan en la pestaña Línea de Cierre de Caja dentro de la ventana Cierre de Caja.

::: note
En el reporte Detalles de Caja, se pueden visualizar ingresos por método de pago (filtrando por fecha, cuenta del Punto de Venta y estado COMPLETO) para analizar posibles diferencias de caja.
:::

## Cierre de Caja del Punto de Venta

Cada cobro realizado en un Punto de Venta se registra en un Cierre de Caja. Su finalidad es conciliar los ingresos y detectar diferencias.

#### Pasos para el cierre de caja:

* Apertura de caja desde el punto de venta.

* Venta de productos.

* Retiro de fondos.

Cada proceso genera documentos automáticamente vinculados a la ventana Cierre de Caja. Al ejecutar el proceso de cierre, Solop ERP deja el registro en estado Borrador, permitiendo su validación manual antes de completarlo.

El siguiente diagrama muestra el flujo del proceso Cierre de Caja en Solop ERP.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image26.png)

Imagen 1. Diagrama de Cierre de Caja POS

A continuación, se específica el procedimiento que se debe realizar para ejecutar correctamente el cierre de caja POS.

#### Ejecución del Proceso

Para ejecutar correctamente el cierre de caja en Solop ERP, siga estos pasos:

1. Acceda al menú Gestión de Ventas > Órdenes de Venta > Punto de Venta.

2. En la ventana Punto de Venta, seleccione la opción Cerrar Caja del Punto de Venta desde el icono Proceso.

3. Filtre la información utilizando los siguientes campos:

* Terminal PDV: Muestra el terminal asociado al socio del negocio vendedor.

* Cuenta Bancaria: Indica la cuenta caja configurada para el terminal PDV.

* Fecha de la Transacción: Permite filtrar por fecha de toma de pedidos.

* Tipo de Licitación: Filtra por tipo de pago.

* Cobros: Indica si las transacciones fueron cobradas o no.

4. Haga clic en Comenzar Búsqueda para obtener el listado de transacciones realizadas.

5. Seleccione todos los registros de transacciones antes de ejecutar el cierre de caja.

6. Verifique los siguientes campos:

* Total de la Línea: Suma total de órdenes de venta.

* Total Pagado: Suma total de pagos recibidos.

* Total Abierto: Monto pendiente de cobro en ventas a crédito.

* Diferencia Monto: Diferencia entre apertura, cobros y retiros.

7. Seleccione la opción OK para completar el cierre de caja.

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

* Seleccione Retiro de Caja.

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