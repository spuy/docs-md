---
title: Uso del Punto de Venta
category: Documentation
star: 9
sticky: 9
article: false
---

## Interfaz de Punto de Venta

Para acceder a la interfaz de Punto de Venta, siga estos pasos:

* En el menú de Solop ERP, vaya a Gestión de Ventas > Órdenes de Venta > Punto de Venta.

* En la ventana Selecciona Terminal PDV, elija el terminal con el que trabajará el vendedor.

* Seleccione OK para acceder al punto de venta correspondiente.

Una vez dentro, visualizará la ventana Punto de Venta, que contiene diferentes iconos, campos y opciones que permiten la gestión eficiente de las ventas.

## Barra de Herramientas del Punto de Venta

La barra de herramientas contiene iconos esenciales para la gestión del punto de venta:

* Registro Nuevo (F2): Crea una nueva orden de venta.
* Imprimir (F12): Genera un reporte de la orden de venta en la ventana Informe.
* Tipo de Documento (F10): Permite cambiar el tipo de documento generado.
* Información de Producto (Alt+I): Abre una ventana con detalles del producto (código, nombre, stock, precio, proveedor, etc.).
* Cliente (Alt+B): Permite seleccionar o registrar un nuevo cliente.
* Proceso: Incluye opciones como Cerrar Caja, Generar Factura Inmediata, Completar Orden Preparada, Anular * Transacción de Venta y Crear Retiro de POS.
* Registros Históricos (F9): Permite buscar órdenes de venta anteriores.
* Pago (F4): Accede al proceso de cobro.
* Anular Orden (F3): Cancela la orden en curso.
* Finalizar Ventana (Alt+L): Cierra la ventana de Punto de Venta.

## Panel de Búsqueda de Productos

Permite buscar productos por:

* Código de Producto
* Nombre del Producto
* Disponibilidad
* Precio Estándar
* Precio de Lista

::: note
La búsqueda se ejecuta automáticamente al ingresar el código del producto.
:::

## Sección de Información de Producto

Muestra detalles de los productos agregados a la orden de venta:

* Código del Producto
* Nombre
* Precio (Estándar y de Lista)
* Unidad de Medida
* Categoría
* Categoría de Impuesto

## Barra de Edición de Productos

Barra de Edición de ProductosDesde aquí se pueden modificar cantidades, precios y descuentos. También se pueden eliminar líneas de productos de la orden.

* Borrar Línea (Ctrl+F3)
* Añadir Cantidad (Ctrl+0)
* Reducir Cantidad (Ctrl+0)
* Navegar entre Registros (Alt+Up/Alt+Down)

## Línea de la Orden de Venta

Aquí se listan los productos agregados con su información detallada:

* Cantidad Ordenada
* Unidad de Medida
* Precio Unitario
* Descuento
* Subtotal sin Impuestos
* Impuestos
* Total con Impuestos

### Información de la Orden

Muestra datos del documento de venta:

* Número de Documento
* Tipo de Documento
* Estado
* Agente Comercial
* Fecha de Creación
* Subtotal, Impuestos y Total

## Panel de Socio del Negocio Cliente

Muestra la información del socio del negocio cliente que esta comprando los productos ingresados al documento **Orden de Venta** realizada por el usuario vendedor.

## Catálogo de Productos

Los productos pueden agruparse en categorías, combos u ofertas para facilitar su selección.

Para agregar un producto:

* Seleccione la categoría o grupo.
* Escoja el producto.
* El producto se agregará automáticamente a la orden.

## Toma de Pedido

El proceso de Toma de Pedido consiste en registrar los productos y el cobro, generando automáticamente los documentos:

* Cobro en la ventana Caja.
* Factura por Cobrar en Documentos por Cobrar.
* Entrega en la ventana Entrega (Cliente).

Para registrar un pedido:

1. Vaya a Gestión de Ventas > Órdenes de Venta > Punto de Venta.
2. Haga clic en Nueva Orden.
3. Seleccione el terminal de PDV.
4. Escoja un cliente o cree uno nuevo.
5. Agregue productos mediante el Catálogo de Productos o el Panel de Búsqueda.
6. Modifique cantidades, descuentos y precios según sea necesario.
7. Revise la información de la orden.

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

Seleccione el icono Pago (F4) para procesar el cobro. Se abrirá un cuadro donde podrá:

* Seleccionar Forma de Pago (efectivo, tarjeta, transferencia, etc.).
* Elegir la Moneda.
* Ingresar el Monto.
* Agregar varias formas de pago si es necesario.
* Ver el Cambio a entregar al cliente.

Si se requiere más de una forma de pago:

1. Presione Más para agregar otra forma de pago.
2. Complete la información.
3. Para eliminar una forma de pago, seleccione Menos.
4. Presione OK para confirmar el cobro.

::: note
Cada forma de pago genera un documento de cobro en la ventana Caja.
:::

#### Procedimiento Regular con una Forma de Pago y una Moneda Específica

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

#### Procedimiento Especial con Diferentes Formas de Pago y Monedas

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

## Consultas de Facturas y Cobros

### Consultar Factura Generada

1. En Órdenes de Venta, seleccione Visualiza Detalle (Donde es Usado).
2. Haga clic en Documentos por Cobrar para visualizar la factura.

### Consultar Cobro Generado

1. En Documentos por Cobrar, vaya a la pestaña Facturas Pagadas.
2. Copie el valor del campo Pago.
3. Busque el cobro en la ventana Caja.

### Consultar Registro en Cierre de Caja

Cada cobro desde el punto de venta genera un documento de ingreso en la ventana Caja y se asocia automáticamente a la pestaña Línea de Cierre de Caja en Cierre de Caja.
