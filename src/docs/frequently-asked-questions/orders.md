---
title: Gestión de Órdenes
category: Documentation
star: 9
sticky: 9
article: false
---

## Órdenes

### ¿Cómo anular o cerrar masivamente órdenes de venta?

Es posible accionar masivamente modificando el estado de órdenes de venta desde el proceso "Procesar Órdenes en Lote".
Cuenta con filtros o parámetros con el objeto de ajustar la búsqueda.
El campo Estado del Documento es de llenado obligatorio.
Una vez seleccionados los filtros, se realiza la búsqueda y esto permite seleccionar un registro, varios o todos. 
Luego se selecciona la "Acción en el Documento" (el estado que se desea definir para los documentos).
Al presionar Ok el proceso ejecutará el cambio de estado en los documentos seleccionados.

#### ¿Qué es un split?

Split es un proceso masivo de reparto de ingresos en cada Contrato según la definición de Split que tenga. En el proceso de Split se generan cálculos de Comisión de tipo “Split” y a partir de ellas se generan Órdenes de Compra y Venta en las organizaciones que corresponden.

#### ¿Si Reactivo una Orden de Honorarios, le cambio el Contrato, la Completo y Recontabilizo el asiento de reconocimiento, cambia el Contrato en el Asiento?

No, el contrato no cambia.

El asiento de reconocimiento se genera desde un proceso de Reconocimiento masivo, no es el asiento del documento Orden de Venta, son documentos diferentes.

En todo caso, se tendría que también reactivar, modificar el contrato en el Asiento (Lote de Asiento Diario) y modificar ahi el Contrato de servicio. De todos modos esto es riesgoso ya que se estaría haciendo muy manual y uno se podría olvidar de algo.

Lo mejor en este caso sería realizar el ajuste de un reconocimento generando el Documento NEGATIVO que se desea corregir (IGUAL AL QUE SE GENERO MAL) y generar uno nuevo con el dato correcto.

### ¿Cuál es la diferencia entre el Listado de Órdenes y el Listado de Órdenes completo?

* El listado de órdenes muestra las líneas de las Órdenes, tanto Órdenes de Venta como Órdenes de Compra.
indicando Transacción de Venta: SI/NO
Este informe no muestra las órdenes de inversión, honorarios, comisiones.

* El listado de órdenes completo muestra en detalle la totalidad de líneas de órdenes, incluyendo las de inversión, honorarios y comisiones. También se muestran datos relacionados al reconocimiento de la orden, para los casos en que la línea tenga plan de reconocimento.

El reporte obtiene la tasa de cambio a utilizar de tipo AVERAGE, para convertir de USD a UYU, según la fecha de ejecución del reporte.

Se consideran órdenes cuyo tipo de documento no sea de nombre "Descuento de Venta Paquete".

Además, se considera órdenes en estado COMPLETO cuando el tipo de documento de la orden se encuentra definido en el campo "Tipo de documento para la orden", en una definición de comisión activa, y su base del cálculo es "Honorarios" o "Comisión". Si esto no se cumple, entonces se considera el estado COMPLETO o CERRADO.

Filtros Estado:

Pendiente de Facturar: órdenes que están en Estado Completo o Cerrado con "Permite Facturar = Y" y "Facturado completamente = NO".

Pendiente de OK para Facturar: órdenes que estén en Estado Completo o Cerrado con el check de "Permite Facturar" = NO, y que el tipo de documento de la orden tenga definido el campo "Tipo de documento para la factura" y que la orden no tenga marcado el check "Factura Directa a Cliente".

Ordenes Entregadas no Facturadas: líneas de orden sin cantidad disponible para entregar y con cantidad disponible para facturar, y que el tipo de documento de la orden tenga definido el campo "Tipo de documento para la factura".

Ordenes Facturadas no Entregadas: líneas de orden con cantidad disponible para entregar y sin cantidad disponible para facturar.

#### ¿El proceso “Reabrir Orden” existe solamente para las Órdenes de Compra/Venta?

SI, sólo existe para las Órdenes tanto de venta como de compra (en este último caso deberá encontrarse destildado el check Transacción de Ventas).

#### ¿Qué signifirca este mensaje: “Can’t find Bank Account” al completar una Orden de Venta?

El problema es que para  este tipo de Orden de Venta se realizará la Factura y el Pago de manera automática. Si la misma es generada desde la ventana de Orden de Venta puede que no encuentre Punto de Venta por lo tanto no tendrá Cuenta Bancaria definida para hacer el Cobro. 

#### ¿Por que motivo puede NO VISUALIZARSE una Orden de Venta para Facturar?

Puede ser por 4 motivos:

* Que NO esté COMPLETA
* Que no tenga el check de “Permite facturar”
* Verificar en la línea de la Orden que no tenga Cantidades facturadas
* Ver que Regla de facturación tiene la misma:

**Si la regla de facturacion es "Despues de entrega" entonces la cantidad entregada de la linea debe ser mayor a la facturada**

**Si la regla de facturacion NO es  "Despues de entrega" entonces la cant.  facturada debe ser distinta a la cant ordenada**

#### ¿Cómo puede igualarse las cantidades ordenadas y entregadas a las cantidades facturadas?

Las Cantidades Facturadas y Entregadas son definidas según la o las Entregas que existan con dicha línea de orden y la o las facturas que existan con dicha línea de orden. no hay otra manera de igualarlas que generando documentos.

Diferente es “Igualar la Cantidad Ordenada a la Cantidad Entregada”. 

Al Cerrar la Orden de Venta / Compra se llevan las cantidades Ordenadas a la cantidad Entregada dejando NINGUNA Cantidad Pendiente de entregar. Esto es “Cerrar una Orden”. a su vez, se actualiza el importe de la orden según la nueva Cantidad definida. 