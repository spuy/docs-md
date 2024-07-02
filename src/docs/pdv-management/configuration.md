---
title: Configuración del Punto de Venta
category: Documentation
star: 9
sticky: 9
article: false
---

La configuración del terminal del punto de venta permite definir los parámetros con los que serán generados los egresos e ingresos de las cajas involucradas en el proceso de ventas.

Adicional a ello, se define la impresora, el tipo de conversión, la lista de precios, almacén y supervisor de la caja en la cual serán realizadas las operaciones.

A continuación se explica el procedimiento a seguir para configurar correctamente el terminal del punto de venta.

Ubique y seleccione en el menú de Solop ERP, la carpeta **Gestión de Ventas**, luego seleccione la carpeta **Órdenes de Venta**, por último seleccione la carpeta **Punto de Venta**, finalmente seleccione la ventana **Terminal PDV**.

Podrá visualizar la ventana **Terminal PDV** con diferentes campos que permiten una configuración de la caja, taquilla o auto-servicio en el cual se gestiona la orden, facturación y cobro de los productos por medio del punto de venta.

La ventana **Terminal PDV** cuenta con los siguientes campos que son necesarios para realizar el proceso del punto de venta:

Seleccione en el campo **Organización**, la organización en la cual trabaja el vendedor para el cual se esta configurando el terminal del punto de venta.

Introduzca en el campo **Nombre**, el nombre de la caja, taquilla o auto-servicio en el cual será realizada la gestión de orden, facturación y cobro de los productos.

Introduzca en el campo **Descripción**, una breve descripción de la caja, taquilla o auto-servicio en el cual será realizada la gestión de orden, facturación y cobro de los productos.

Seleccione en el campo **Agente Comercial**, el socio del negocio vendedor para el cual se esta configurando el terminal PDV.

Este campo permite seleccionar el vendedor que realizará las operaciones de las ventas en la caja asociada al terminal PDV.

Introduzca en el campo **Retraso de Cierre de Sesión Automático**, el tiempo para el cierre de sesión automático cuando el terminal se encuentre inactivo.

Seleccione en el campo **Lista de Precios**, la lista de precios establecida para las ventas de la organización.

Este campo permite definir la lista de precios con la cual serán realizadas las operaciones de ventas en la caja asociada al terminal PDV.

Seleccione el check **Modifique el Precio**, para permitir que los precios de venta puedan ser modificados en la caja que se encuentra configurando.

La selección de este check, permite que el supervisor del vendedor asociado al terminal PDV pueda modificar los precios de los productos.

Seleccione en el campo **Caja Menor**, la caja menor de la organización para registrar en ella las transacciones de caja chica.

Seleccione en el campo **Plantilla Socio del Negocio**, el socio del negocio creado para ser utilizado en el registro de los nuevos clientes de forma rápida.

Seleccione en el campo **Cuenta Bancaria**, la cuenta caja creada para registrar las transacciones efectuadas por el vendedor, durante la gestión de orden, facturación y cobro de los productos.

Seleccione en el campo **Transferir transacción de caja a banco**, la cuenta a la cual serán transferidas todas las transacciones de la caja de ventas.

Seleccione el tipo de documento a generar en el campo **Tipo de Documento**, la selección de este define el comportamiento del documento que se esta elaborando, dicho comportamiento se encuentra explicado en el documento Tipo de Documento elaborado por Solop ERP.

Este campo permite definir el tipo de documento con el cual serán generadas las ventas desde el punto de venta. De igual manera, el comportamiento que este tendrá al completar el proceso.

Seleccione en el campo **Regla de Facturación**, el método utilizado para generar las facturas a los clientes.

Este campo establece una condición para facturar la venta en base a lo que se defina en el terminal PDV, el mismo no es obligatorio ya que la facturación puede depender de las reglas del negocio.

Seleccione en el campo **Almacén**, el lugar de almacenamiento de los productos destinados para la venta.

Seleccione en el campo **Regla de Entrega**, el método utilizado para generar las entregas de productos al cliente.

Este campo establece una condición para entregar la venta en base a lo que se defina en el terminal PDV, el mismo no es obligatorio ya que la entrega puede depender de las reglas del negocio.

Seleccione en el campo **PDV Disposición de la Llave**, la disposición de la llave para el funcionamiento del punto de venta.

El check **Habilitar Búsqueda de Productos POS**, permite la búsqueda manual de los productos.

Seleccione en el campo **Teclado en Pantalla**, el diseño clave para utilizar el teclado en pantalla para campos de texto.

Si el campo se encuentra vacío, no se utilizará el teclado en pantalla.

Seleccione en el campo **Teclado Numérico en Pantalla**, el diseño clave para utilizar el teclado en pantalla para campos númericos.

Si el campo se encuentra vacío, no se utilizará el teclado en pantalla.

Introduzca en el campo **Nombre Impresión**, el nombre de la impresora asignada para el terminal que esta configurando.

Si el campo se encuentra vacío, se utiliza la impresora por defecto.

Introduzca en el campo **Registradora**, la registradora asignada para el terminal que esta configurando.

Introduzca en el campo **Peso Electrónico**, la ruta para las balanzas electrónicas del dispositivo.

Introduzca en el campo \*\*Código de Solicitud de Medida, las medidas de balanzas electrónicas de dispositivos.

Seleccione el checklist **PIN POS Requerido**, para indicar que un PIN de supervisor es obligatorio para ejecutar algunas tareas.

Introduzca en el campo **Tiempo de Entrada de PIN**, la cantidad de tiempo desde la visualización inicial hasta que el cuadro de diálogo de entrada de PIN se agota.

La cantidad de tiempo debe ser ingresada en milisegundos.

En el campo **Clase Para Impresión de Ticket**, se debe ingresar el nombre de la clase para la impresión del ticket.

La información correspondiente a este campo debe ser ingresada por los consultores de Solop ERP.

Seleccione en el campo **Tipo de Conversión**, el tipo de conversión de moneda establecida para la lista de precios de venta seleccionada anteriormente.

Seleccione en el campo **Impresora Fiscal**, la impresora fiscal asignada a la caja, taquilla o auto-servicio, para imprimir las diferentes facturas y notas de crédito emitidas por dicha caja.

Seleccione en el campo **Tipo de Documento para Orden de Devolución**, el tipo de documento establecido para generar la orden de devoluciones de los clientes y finalmente poder generar la nota de crédito a partir de la misma.

Seleccione en el campo **Supervisor**, el supervisor del vendedor para el cual se esta configurando el terminal PDV.

Seleccione el checklist **Vendedor de Pasillo**, para indicar que el socio del negocio empleado es un vendedor de pasillo.

Seleccione el checklist **POS Compartido**, para indicar que el punto de venta es compartido.

Seleccione el icono **Guardar Cambios**, ubicado en la barra de herramientas de Solop ERP para guardar el registro de los campos de la ventana **Terminal PDV**.

### Checks de definición en punto de venta:

* POS compartido: Definir si este punto de venta podrá ser compartido por más de un agente comercial o no Si tiene definido el check será compartido.
* Permitir devolución: este cheque definirá si se podrá permitir realizar devoluciones desde este punto de venta.
* Permitir Cobrar: es definida si se podrá generar cobros desde este punto de venta.
* Permitir Crear orden: este cheque definirá si podremos generar órdenes desde este punto de venta o no .
* Mostrar Monto de impuesto: esteche definirá si se visualizará en el punto de venta en las líneas del punto de venta la columna del impuesto correspondiente a cada línea
* Mostrar descuento este check definirá si se mostrará una columna en las líneas de punto de venta definiendo el descuento de la misma.
* Permitir confirmar entrega: este check definida si se podrá Define confirmar una entrega en este punto de venta.
* Permitir crear Cliente Nuevo: este check definiriá si esta terminal puede generar un nuevo cliente o no

### Definición de Máximo:

Reembolso máximo diario permitido en este campo se podrá definir un importe de reembolso máximo permitido para un día esto se manejara en moneda de la lista de precio del punto de venta si están cero no tendrá máximo definido

Reembolso máximo definido:  este campo definirá el máximo permitido para un reembolso.

Campaña por defecto: este campo definirá una campaña por defecto que se le Define al punto de venta y todas las órdenes generadas desde el mismo la campaña podrá ser modificada desde el punto de venta.

Máximo descuento: este campo define el máximo descuento que se podrá brindar en el punto de venta

### Operaciones permitidas para El vendedor

* Permitir asignar vendedor: si tiene el check definido El vendedor podrá asignar un nuevo vendedor a una orden de venta.
* Permitir uso concurrente: Esto permitirá que un punto de venta pueda ser utilizado a la misma vez por más de un vendedor.
* Permitir Apertura de Caja: Este cheque definirá si se podrá hacer una apertura de caja desde el punto de venta.
* Permitir Retiro de Caja: Este check define si se podrán realizar retiros de caja desde el punto de venta.

### Documentos por defecto:

* Documento de apertura punto de venta: Este documento será el utilizado para realizar las aperturas del punto de venta desde el punto de venta. Se deberá definir en este Tipo de Documento como Documento Controlado y se deberá definir una secuencia única.
* Documento para retiro de caja: Este documento será el utilizado para realizar los retiros desde el punto de venta. Se deberá definir en este Tipo de Documento como Documento Controlado y se deberá definir una secuencia única.
* Documento para cobro: Este documento será en utilizado para generar los cobros desde el punto de venta
* Documento para Reembolso: Este documento se han utilizado Para realizar las devoluciones o reembolsos.
* Tipo de documento para devoluciones: este tipo de documento será el utilizado para realizar las devoluciones de mercadería

### Pestañas de Terminal punto de venta

**Asignación de almacenes:** en esta pestaña se podrá definir las almacenes Qué podrá ser seleccionadas desde el punto de venta

**Asignación de Formas de Pago:** En este en esta pestaña se podrán definir las diferentes formas de pago que serán aceptadas en el punto de venta.

En cada definición del método de pago se podrá habilitar también el mismo para realizar las devoluciones o reembolsos, definiendo también el *reembolso máximo diario permitido* y el *reembolso máximo permitido por reembolso*.

A su vez podrá definirse si se realiza un reembolso la moneda de referencia para dicho reembolso puntos de esta manera se podrá realizar un reembolso en moneda diferente a la de la factura.

Adicionalmente se podrá definir de permitir un reembolso pendiente según cada medio de pago.

Requiere verificación de pago: este check define que el Pago requiere una verificación extra por en esta forma de pago

**Asignación de Listas de Precio:**

En esta pestaña se definirán las listas de precio que puedan ser seleccionadas desde el punto de venta.

En cada lista de precio se podrá definir a su vez sí requiere la el control del pin o no

**Asignación de Tipo de Documento**

En esta pestaña se definirán los tipos de documentos que podrán ser seleccionados desde el punto de venta

En cada tipo de documento se podrá definir Si requiere el control de Pin o no

**Esquema de descuentos asignados**

En esta pestaña se definirán los esquemas de descuentos que podrán ser utilizados en el punto de venta

### Vendedores asignados

En esta pestaña se definirán aquellos vendedores que podrán utilizar el punto de venta.

En cada vendedor se podrá habilitar cada una de las acciones disponibles en el punto de venta punto entre ellas encontramos asignación de vendedor cierre de caja apertura de caja retiro de caja cobranza de orden confirmación de entrega creación de orden modificar descuento modificar cantidad autorizar una devolución o modificar precio

También definirá si puede crear un nuevo cliente este vendedor desde este punto de venta

Cómo editar los Productos Favoritos del PDV?

Puedes agregar o modificar productos desde la pestaña Llave PDV. Desde aquí también puedes definir Foto a cada uno de los productos.

Se puede generar una nueva fácilmente desde el proceso de “Generar Llave Punto de Venta”. Puedes seleccionar una categoría de producto para crear una llave por categoría.

### Cajas de Punto de Venta

En cada terminal PDV se deberá definir cuál es su caja asignada. En esta caja se deberá definir el Socio del Negocio (Normalmente se define el de la Organización), así como también los Cargos por defecto que se desea aplicar para la “Apertura” y para los “Retiros”.