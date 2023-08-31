---
title: Configuración de Terminal PDV
category: Documentation
star: 9
sticky: 9
article: false
---

La configuración del terminal del punto de venta permite definir los parámetros con los que serán generados los egresos e ingresos de las cajas involucradas en el proceso de ventas.

Adicional a ello, se define la impresora, el tipo de conversión, la lista de precios, almacén y supervisor de la caja en la cual serán realizadas las operaciones.

A continuación se explica el procedimiento a seguir para configurar correctamente el terminal del punto de venta.

Ubique y seleccione en el menú de Solop ERP, la carpeta **Gestión de Ventas**, luego seleccione la carpeta **Órdenes de Venta**, por último seleccione la carpeta **Punto de Venta**, finalmente seleccione la ventana **Terminal PDV**.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image62.png)

Imagen 1. Menú de Solop ERP

Podrá visualizar la ventana **Terminal PDV** con diferentes campos que permiten una configuración de la caja, taquilla o auto-servicio en el cual se gestiona la orden, facturación y cobro de los productos por medio del punto de venta.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image63.png)

Imagen 2. Ventana Terminal PDV

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
