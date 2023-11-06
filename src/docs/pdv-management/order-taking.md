---
title: Toma de Pedido
category: Documentation
star: 9
sticky: 9
article: false
---

El proceso toma de pedido consiste en la venta de los productos por medio del documento **Orden de Venta**, en el cual se cargan los datos del cliente, los productos y el cobro. Al realizar el cobro de la misma, se generan de manera automática los documentos **Cobro**, **Entrega** y **Factura por Cobrar**.

El documento del cobro se genera en la ventana **Caja**, con la cuenta caja pos en la cual se realizó dicho cobro. Este es asociado a la línea del registro de cierre de caja de la cuenta **Caja POS**, creado al momento de la apertura de caja.

Adicional a ello, el documento **Factura por Cobrar**, es generado en la ventana **Documentos por Cobrar**. Mientras que el documento **Entrega**, es generado en la ventana **Entrega (Cliente)**.

Para mejor referencia de lo explicado anteriormente, se presenta a continuación el diagrama del proceso **Toma de Pedido POS**, con la finalidad dar a conocer el comportamiento de Solop ERP ante dicho proceso.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image144.png)

Imagen 1. Diagrama de Toma de Pedido POS

## Registro de Pedido

Ubique y seleccione en el menú de Solop ERP, la carpeta **Gestión de Ventas**, luego seleccione la carpeta **Orden de Ventas**, por último seleccione la ventana **Punto de Venta**.

![Campo](/assets/img/docs/sales-management/sam-sales-image304.png)

Imagen 1. Menú de Solop ERP

Podrá visualizar la ventana **Punto de Venta** en Solop ERP.

![Campo](/assets/img/docs/sales-management/sam-sales-image305.png)

Imagen 2. Ventana Punto de Venta

Seleccione el icono **Nueva Orden**, ubicado en la barra de herramientas superior derecha.

![Campo](/assets/img/docs/sales-management/sam-sales-image306.png)

Podrá visualizar la ventana **Selecciona Terminal PDV**, para seleccionar el terminal del punto de venta con el cual va a gestionar la toma de pedido y posteriormente la opción **OK** para cargar la ventana **Punto de Venta** para el terminal seleccionado.

::: note
Esta opción es habilitada cuando el socio del negocio vendedor tiene configurado más de un terminal de punto de venta.
:::

Imagen 3. Icono Registro Nueva Orden

Si desea relacionar su venta a un cliente fiscalmente, puede seleccionar un cliente existente o crear un nuevo cliente:

Para seleccionar cliente existente, proceda a tipear el nombre, RUT o cédula del cliente como lo muetras la Imagen.

![Campo](/assets/img/docs/sales-management/sam-sales-image307.png)

Imagen 4. Búsqueda de Cliente

Para seleccionar cliente existente, proceda a tipear el nombre, RUT o cédula del cliente como lo muetras la Imagen.

![Campo](/assets/img/docs/sales-management/sam-sales-image308.png)

Imagen 4. Nuevo Cliente

Seleccione la opción **Crear Nuevo Socio de Negocio**.

![Campo](/assets/img/docs/sales-management/sam-sales-image309.png)

Imagen 5. Opción Nuevo Cliente

A continuación Seleccione la opción **Crear Nuevo Socio de Negocio**, y se desplegará la siguiente ventana.

![Campo](/assets/img/docs/sales-management/sam-sales-image310.png)

Imagen 6. Ventana Crear Socio de Negocio

A continuación indique el código del cliente (Cédula/RIF) en el campo **Código**.

![Campo](/assets/img/docs/sales-management/sam-sales-image311.png)

Imagen 7. Código Socio de Negocio

::: warning
Solop ERP actualiza de modo automático el campo **Número Identificación**, este campo es utilizado para reportes fiscales (Ejemplo:IGTF).
:::

A continuación indique el nombre o razón social del cliente en el campo **Nombre**.

|Nombre Cliente|

![Campo](/assets/img/docs/sales-management/sam-sales-image312.png)

Imagen 7. Nombre Socio de Negocio

Seleccionar Cliente para la Venta

::: note
Recuerde que debe cambiar la información del socio **Cliente Unico** por la información del cliente real de la venta, ya que esta información saldrá impresa en la factura fiscal generada al concluir la venta.
:::

Puede proceder a cargar los productos desde el Catálogo de Productos. De igual manera, puede realizar este proceso desde el Panel de Búsqueda de Productos

Luego de cargar todos los productos a la orden de venta, la información detallada de los mismos podrá ser visualizada en la Sección de Información de Producto. De igual manera, se puede apreciar en la Línea de la Orden de Venta.

La cantidad a vender de cada producto, el descuento a aplicar y su respectivo precio, pueden ser modificados en la Barra de Edición de Productos.

Finalmente, podrá visualizar la Información de la Orden y sus Totales (Bs.S).

## Cobrar Pedido

Luego de haber cargado todos los productos de la venta en la orden, debe seleccionar el icono **Pago** para generar el cobro de los mismos.

La selección de este icono, habilita el recuadro del cobro, mostrando el total a pagar de la orden, los campos para ingresar la forma de pago, la moneda y el monto. Así como también, las opciones para agregar otro pago o eliminar un pago existente.

Adicional a ello, se muestra los siguientes campos:

El campo **Total del Pago**, indica la suma de todos los montos ingresados en las diferentes formas de pago seleccionadas.

El campo **Abierto**, indica el monto pendiente por pagar de la orden de venta.

El campo **Cambio**, indica el monto total que debe ser devuelto al cliente por el concepto **Cambio del Pago**.

El check **Cobro Completo**, debe ser utilizado cuando se presente un caso de cobro en efectivo de monto con decimales y se requiera realizar un cobro mayor (completo), para posteriormente generar el egreso por el cambio del mismo. Solop ERP, refleja en el campo **Cambio**, el monto correspondiente al cambio que debe ser entregado al cliente.

::: note
Cuando el monto a pagar en efectivo es en divisas y con decimales, se tilda el check **Cobro Completo** y se ingresa el monto real a cobrar en el campo **Monto**.
:::

Suponiendo que el día **10/02/2021**, se tiene la orden de venta **OPOS-5184** con monto total a pagar de **75.917.563,54** y el cliente decide cancelar con dólares en efectivo, los siguientes datos serían:

Tasa de Cambio USD: 1.933.493,43

Forma de Pago Seleccionada: Caja (efectivo)

Moneda Seleccionada: USD

Monto Total de la Orden en Moneda USD: 39,264453844045 (monto resultante del **Monto Total de la Orden** entre la **Tasa de Cambio** de la moneda seleccionada)

Monto Real a Pagar: 40,00 (monto que debe ser ingresado en el campo **Monto**)

Cambio en Moneda UYU: 1.422.173,66 (cambio que debe ser entregado al cliente)

Cobro Completo: SI (tildar)

El cobro de los productos cargados en la orden de venta se puede ejecutar de diferentes formas, explicadas a continuación.

## Procedimiento Regular con una Forma de Pago y una Moneda Específica

Seleccione en el campo **Forma de Pago**, la forma utilizada por el cliente para pagar los productos cargados en la orden de venta.

::: note
Para la forma de pago **Caja**, no es obligatorio ingresar un valor en el campo **No. de Referencia**. Sin embargo, se utiliza para ingresar el serial del billete recibido o cualquier otra forma de identificación del cobro.
:::

Adicional a ello, para las otras formas de pago si es un valor obligatorio y corresponde al número de referencia de la transacción efectuada en el banco. Este valor es necesario al momento de realizar las conciliaciones bancarias.

Seleccione en el campo **Moneda**, la moneda utilizada por el cliente para pagar los productos cargados en la orden de venta.

Introduzca en el campo **Monto**, el monto pagado por el cliente con la forma de pago y moneda seleccionada.

Tilde el check **Cobro Completo**, para que posteriormente sea generado el egreso por el cambio del monto pagado por el cliente.

Seleccione la opción **OK**, para generar el cobro de los productos cargados en la orden de venta.

Seleccione el icono **Cancelar**, para cancelar el registro del cobro que encuentra realizando.

## Procedimiento Especial con Diferentes Formas de Pago y Monedas

Seleccione en el campo **Forma de Pago**, la forma utilizada por el cliente para pagar los productos cargados en la orden de venta.

::: note
Para la forma de pago **Caja**, no es obligatorio ingresar un valor en el campo **No. de Referencia**. Sin embargo, se utiliza para ingresar el serial del billete recibido o cualquier otra forma de identificación del cobro.
:::

Adicional a ello, para las otras formas de pago si es un valor obligatorio y corresponde al número de referencia de la transacción efectuada en el banco. Este valor es necesario al momento de realizar las conciliaciones bancarias.

Seleccione en el campo **Moneda**, la moneda utilizada por el cliente para pagar los productos cargados en la orden de venta.

Introduzca en el campo **Monto**, el monto pagado por el cliente con la forma de pago y moneda seleccionada.

Introduzca en el campo **No. de Referencia**, el número de referencia correspondiente a la transacción efectuada en el banco.

Seleccione en el campo **Banco**, el banco donde fue efectuada la transacción.

Seleccione el icono **Más**, para habilitar otro grupo de campos de pago e ingresar la siguiente forma de pago utilizada por el cliente para terminar de cancelar la orden de venta.

::: note
Si requiere cargar otra forma de pago adicional a las dos anteriores, puede seleccionar nuevamente el icono **Más** y proceder a cargar el cobro con dicha forma de pago.
:::

Para eliminar una forma de pago ya seleccionada previamente, seleccione el icono **Menos**.

Seleccione la opción **OK**, para generar el cobro de los productos cargados en la orden de venta.

::: note
Al completar el proceso para generar el cobro de los productos ingresados a la orden de venta POS, se crea automáticamente un documento de cobro en la ventana **Caja**, por cada forma de pago utilizada.
:::

Adicional a ello, se crea una factura por cobrar en la ventana **Documento por Cobrar**, asociada a la orden de venta POS y los diferentes cobros asignados a dicha orden.

Es importante resaltar que al completar el proceso, todos los documentos son generados en estado **Completo**.

## Consultar Factura Generada

Ubique la orden de venta generada en la ventana **Órdenes de Venta**, luego seleccione el icono **Visualiza Detalle (Donde es Usado)** y finalmente haga clic sobre la opción **Documentos por Cobrar**, para acercar la factura de la venta.

Al acercar el documento por cobrar, podrá visualizarlo de la siguiente manera

## Consultar Cobro Generado

Ubique el documento de cobro generado en la ventana **Documentos por Cobrar** y luego seleccione la pestaña **Facturas Pagadas**, para visualizar las asignaciones de los diferentes documentos de cobro generados en la ventana **Caja**.

Seleccione el icono **Cambiar Mono/Multi Registro** ubicado en la barra de herramientas de Solop ERP para cambiar la vista y visualizar la línea del registro de asignación del cobro que requiere acercar, posteriormente copie el valor del campo **Pago**.

Ubique el registro del cobro en la ventana **Caja**, con ayuda del valor copiado anteriormente del campo **Pago**.

Consultar Registro en Cierre de Caja
Cada cobro desde el punto de venta genera un documento de ingreso en la ventana **Caja**, por cada documento de cobro generado se crea una línea con el cobro asociado en la pestaña **Línea de Cierre de Caja**, de la ventana **Cierre de Caja** correspondiente al registro de la **Caja 04**, creado en estado Borrador al realizar la apertura de caja.