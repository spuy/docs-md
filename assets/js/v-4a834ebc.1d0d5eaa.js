"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8362],{83360:(e,o,a)=>{a.r(o),a.d(o,{default:()=>c});var r=a(53633);const n=[(0,r.Fv)('<p>Esta documentación está destinada a definir cada uno de los procedimientos de la elaboración de órdenes de compra en Solop ERP para cualquier organización, es importante seguir al pie de la letra cada uno de los procedimientos descritos aquí recuerde que de eso dependerá el buen uso del ERP.</p><ul><li>Crear Orden de Compra desde Requisición <ul><li>Registro de Orden de Compra desde Requisición</li><li>Consultar y Completar Orden de Compra Generada</li></ul></li><li>Crear Orden de Compra desde Líneas de la Requisición <ul><li>Crear Orden de Compra desde Líneas de la Requisición</li></ul></li><li>Orden de Compra Directa <ul><li>Registro de Orden de Compra Directa</li></ul></li><li>Orden de Compra Multimoneda</li></ul><h2 id="crear-orden-de-compra-desde-requisicion" tabindex="-1"><a class="header-anchor" href="#crear-orden-de-compra-desde-requisicion" aria-hidden="true">#</a> Crear Orden de Compra desde Requisición</h2><p>En Solop ERP es posible generar automáticamente mediante el proceso <strong>Crear OC desde Requisición</strong>, un documento de <strong>Orden de Compra</strong> con la información suministrada en el documento de <strong>Requisición</strong> previamente elaborado.</p><p>La ventana del proceso <strong>Crear OC desde Requisición</strong>, contiene diferentes campos que permiten generar la orden de compra según lo seleccionando en los mismos.</p><p>El proceso consiste en seleccionar el documento de requisición en el campo <strong>Requisición de Material</strong> y culminar el mismo seleccionando la opción <strong>OK</strong> para que posteriormente sea generado el documento <strong>Orden de Compra</strong>, indicando en la ventana del proceso el número de dicho documento.</p><p>El presente material elaborado por Solop ERP, pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para generar en Solop ERP una orden de compra desde una requisición, en su versión 3.9.2.</p><ul><li>Registro de Orden de Compra desde Requisición</li><li>Consultar y Completar Orden de Compra Generada</li></ul><h3 id="registro-de-orden-de-compra-desde-requisicion" tabindex="-1"><a class="header-anchor" href="#registro-de-orden-de-compra-desde-requisicion" aria-hidden="true">#</a> Registro de Orden de Compra desde Requisición</h3><p>Para ejemplificar el registro de crear orden de compra desde requisición, es utilizado el documento de requisición.</p><p><img src="/assets/img/docs/purchase-management/pum-purchase-image315.png" alt="Campo"></p><p>Imagen 1. Documento de Requisición</p><p>Ubique y seleccione en el menú de Solop ERP, la carpeta <strong>Gestión de Compras</strong>, luego seleccione el proceso <strong>Crear OC desde Requisición</strong>.</p><p><img src="/assets/img/docs/purchase-management/pum-purchase-image316.png" alt="Campo"></p><p>Imagen 2. Menú de Solop ERP</p><p>Podrá visualizar la ventana del proceso <strong>Crear OC desde Requisición</strong> con diferentes campos que pueden ser utilizados para generar la orden de compra según lo requerido por el usuario.</p><p><img src="/assets/img/docs/purchase-management/pum-purchase-image317.png" alt="Campo"></p><p>Imagen 3. Ventana del Proceso Crear OC desde Requisición</p><p>Seleccione en el campo <strong>Requisición de Material</strong>, el documento de requisición por el cual será generado el documento de <strong>Orden de Compra</strong>.</p><p>Seleccione en el campo <strong>Organización</strong>, la organización para la cual esta realizando el documento <strong>Orden de Compra</strong>.</p><p>Seleccione en el campo <strong>Almacén</strong>, el nombre del almacén donde serán almacenados los productos registrados en el documento de requisición seleccionado.</p><p>Para generar una orden de compra desde una requisición determinada, los campos principales son <strong>Requisición de Material</strong>, <strong>Organización</strong> y <strong>Almacén</strong>. La selección de los campos <strong>F. Documento</strong>, <strong>Fecha Requerida</strong>, <strong>Prioridad</strong>, <strong>Usuario</strong>, <strong>Producto</strong>, <strong>Categoría del Producto</strong> y <strong>Grupo de Socio del Negocio</strong>, quedan a criterio de lo requerido por el usuario. De igual forma el checklist <strong>Consolidado en un Documento</strong>.</p><p>Seleccione la opción <strong>OK</strong>, para generar la orden de compra desde la requisición seleccionada anteriormente.</p><p>Podrá visualizar en la ventana del proceso <strong>Crear OC desde Requisición</strong>, el número del documento de <strong>Orden de Compra</strong> generado.</p><h3 id="consultar-y-completar-orden-de-compra-generada" tabindex="-1"><a class="header-anchor" href="#consultar-y-completar-orden-de-compra-generada" aria-hidden="true">#</a> Consultar y Completar Orden de Compra Generada</h3><p>Ubique y seleccione en el menú de Solop ERP, la carpeta <strong>Gestión de Compras</strong>, luego seleccione la ventana <strong>Órdenes de Compra</strong>.</p><p><img src="/assets/img/docs/purchase-management/pum-purchase-image323.png" alt="Campo"></p><p>Imagen 9. Menú de Solop ERP</p><p>Al buscar el documento <strong>Orden de Compra</strong> con ayuda del número de documento generado en la ventana del proceso <strong>Crear OC desde Requisición</strong>, se puede visualizar el mismo de la siguiente manera.</p><p><img src="/assets/img/docs/purchase-management/pum-purchase-image324.png" alt="Campo"></p><p>Imagen 10. Orden de Compra Generada desde el Proceso Crear OC desde Requisición</p><div class="custom-container note"><p class="custom-container-title">Nota</p><p>El proceso genera el documento <strong>Orden de Compra</strong> en estado <strong>Borrador</strong> y la opción establecida de estado del documento es <strong>Preparar</strong>.</p></div><p>Seleccione en el campo <strong>Agente Compañía</strong>, el usuario que esta realizando la orden de compra.</p><p>Seleccione la pestaña <strong>Línea Orden Compra</strong>, para ingresar el precio unitario de los productos solicitados.</p><p><img src="/assets/img/docs/purchase-management/pum-purchase-image326.png" alt="Campo"></p><p>Imagen 12. Pestaña Línea Orden Compra</p><p>Introduzca en el campo <strong>Precio</strong>, el precio unitario de los productos solicitados en el documento <strong>Requisición</strong>.</p><p>Seleccione la pestaña <strong>Orden de Compra</strong> para regresar a la ventana principal del registro, luego seleccione la opción <strong>Preparar</strong>, ubicado en la parte inferior derecha del documento para completar el mismo.</p><p><img src="/assets/img/docs/purchase-management/pum-purchase-image328.png" alt="Campo"></p><p>Imagen 14. Opción Preparar</p><p>Seleccione la acción <strong>Completar</strong> y la opción <strong>OK</strong>, para completar el documento <strong>Orden de Compra</strong>.</p><h3 id="crear-orden-de-compra-desde-lineas-de-la-requisicion" tabindex="-1"><a class="header-anchor" href="#crear-orden-de-compra-desde-lineas-de-la-requisicion" aria-hidden="true">#</a> Crear Orden de Compra desde Líneas de la Requisición</h3><p>En Solop ERP es posible generar automáticamente mediante el proceso <strong>Crear Orden de Compra desde Líneas de la Requisición</strong>, un documento de <strong>Orden de Compra</strong> con la información suministrada en el documento de <strong>Requisición</strong> previamente elaborado.</p><p>El presente material elaborado por Solop ERP, pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para generar en Solop ERP una orden de compra desde las líneas de la requisición.</p><p>Crear Orden de Compra desde Líneas de la Requisición</p><h3 id="crear-orden-de-compra-desde-lineas-de-la-requisicion-1" tabindex="-1"><a class="header-anchor" href="#crear-orden-de-compra-desde-lineas-de-la-requisicion-1" aria-hidden="true">#</a> Crear Orden de Compra desde Líneas de la Requisición</h3><p>Para ejecutar el procedimiento de manera correcta, debe existir obligatoriamente un registro de requisición en estado <strong>Completo</strong>.</p><p><img src="/assets/img/docs/purchase-management/pum-purchase-image330.png" alt="Campo"></p><p>Imagen 1. Requisición</p><p>Dicha requisición contiene dos (2) líneas.</p><p><img src="/assets/img/docs/purchase-management/pum-purchase-image331.png" alt="Campo"></p><p>Imagen 2. Pestaña Línea Requisición</p><p>Ubique y seleccione en el menú de Solop ERP, la carpeta <strong>Gestión de Compras</strong>, luego seleccione el proceso <strong>Crear Orden de Compra desde líneas de la Requisición</strong>.</p><p><img src="/assets/img/docs/purchase-management/pum-purchase-image332.png" alt="Campo"></p><p>Imagen 3. Menú de Solop ERP</p><p>Podrá visualizar la ventana del proceso <strong>Crear Orden de Compra desde líneas de la Requisición</strong>, con diferentes campos que le permite al usuario filtrar la información en base a lo requerido para generar la orden de compra con las líneas seleccionadas de dicha requisición.</p><p><img src="/assets/img/docs/purchase-management/pum-purchase-image333.png" alt="Campo"></p><p>Imagen 4. Ventana del Proceso Crear Orden de Compra desde Líneas de Requisición</p><p>Introduzca en el campo <strong>No. del Documento</strong>, el número de documento de la requisición por la cual requiere filtrar la información.</p><p>Seleccione en el campo <strong>Organización</strong>, la organización para la fue realizada la requisición.</p><p>Seleccione en el campo <strong>Tipo de Documento</strong>, el tipo de documento con el cual fue generada la requisición.</p><p>Seleccione en el campo <strong>Prioridad</strong>, la prioridad con la cual fue generada la requisición.</p><p>Seleccione en el campo <strong>Fecha Requerida</strong>, la fecha en la que fueron requeridos los productos cargados a las líneas de la requisición.</p><p>Seleccione en el campo <strong>F. Documento</strong>, la fecha en la que fue generado el documento de requisición.</p><p>Seleccione en el campo <strong>Usuario</strong>, el usuario que genero el documento de requisición.</p><p>Seleccione en el campo <strong>Almacén</strong>, el almacén utilizado para generar la requisición.</p><p>Seleccione en el campo <strong>Lista de Precios</strong>, la lista de precios utilizada para generar la requisición.</p><p>Introduzca en el campo <strong>Descripción</strong>, la descripción ingresada en la requisición.</p><p>Introduzca en el campo <strong>Total de Líneas</strong>, el total de las líneas de la requisición.</p><p>Seleccione en el campo <strong>Socio del Negocio</strong>, el socio del negocio seleccionado en las líneas de la requisición.</p><p>Seleccione en el campo <strong>Orden de Venta</strong>, la orden de venta relacionada a la requisición.</p><p>Seleccione en el campo <strong>Producto</strong>, el producto seleccionado en las líneas de la requisición.</p><p>Seleccione en el campo <strong>Cargo</strong>, el cargo relacionado a la requisición.</p><p>Introduzca en el campo <strong>Cantidad</strong>, la cantidad del producto ingresada en las líneas de la requisición.</p><p>Introduzca en el campo <strong>Neto de Línea</strong>, el neto de la línea de la requisición.</p><p>Seleccione en el campo <strong>Organización de la Transacción</strong>, la organización de la transacción de la requisición.</p><p>Seleccione en el campo <strong>Actividad</strong>, la actividad por la cual requiere filtrar la información.</p><p>Seleccione en el campo <strong>Campaña</strong>, la campaña por la cual requiere filtrar la información.</p><p>Seleccione en el campo <strong>Proyecto</strong>, el proyecto por el cual requiere filtrar la información.</p><p>Seleccione en el campo <strong>Centro de Costos</strong>, el centro de costos por el cual requiere filtrar la información.</p><p>Seleccione en el campo <strong>Usuario 2</strong>, el usuario dos (2) por el cual requiere filtrar la información.</p><p>Seleccione en el campo <strong>Usuario e</strong>, el usuario tres (3) por el cual requiere filtrar la información.</p><p>Seleccione en el campo <strong>Usuario 4</strong>, el usuario cuatro (4) por el cual requiere filtrar la información.</p><p>Seleccione la opción <strong>Comenzar Búsqueda</strong>, para filtrar la información en base a lo seleccionado en los campos nombrados anteriormente.</p><p>Podrá visualizar los resultados de la búsqueda, donde se refleja la información ingresada en las líneas de la requisición.</p><p><img src="/assets/img/docs/purchase-management/pum-purchase-image360.png" alt="Campo"></p><p>Imagen 31. Resultados de Búsqueda</p><p>Seleccione las líneas de la requisición para crear la orden de compra desde las mismas.</p><div class="custom-container note"><p class="custom-container-title">Nota</p><p>Al seleccionar cualquiera de los registros, se habilitan diferentes campos que le permiten al usuario ingresar o modificar los valores en los mismos.</p></div><p>Seleccione en el campo <strong>Tipo de Documento</strong>, el tipo de documento con el cual será generado el documento <strong>Orden de Compra</strong>.</p><p><img src="/assets/img/docs/purchase-management/pum-purchase-image362.png" alt="Campo"></p><p>Imagen 33. Campo Tipo de Documento</p><p>Seleccione en el campo <strong>Prioridad</strong>, la prioridad con la cual será generado el documento <strong>Orden de Compra</strong>.</p><p>Seleccione en el campo <strong>Socio del Negocio</strong>, el socio del negocio con el cual será generada la orden.</p><p>Seleccione en el campo <strong>Dirección del Socio del Negocio</strong>, la dirección del socio del negocio seleccionado para la orden.</p><p>Seleccione en el campo <strong>Fecha de la Orden</strong>, la fecha de la orden con la cual será generada la orden.</p><p>Seleccione en el campo <strong>Fecha Prometida</strong>, la fecha prometida con la cual será generada la orden.</p><p>Seleccione en el campo <strong>Agente Comercial</strong>, el agente comercial con el cual será generada la orden.</p><p>Seleccione en el campo <strong>Termino de Pago</strong>, el termino de pago con el cual será generado el documento <strong>Orden de Compra</strong>.</p><p>Seleccione en el campo <strong>Lista de Precios</strong>, la lista de precios con la cual será generada la orden.</p><p>Introduzca en el campo <strong>Referencia de Orden de Socio del Negocio</strong>, la referencia de orden de socio del negocio.</p><p>Seleccione en el campo <strong>Acción del Documento</strong>, la acción de documento con la cual será generado al documento <strong>Orden de Compra</strong>.</p><p>Seleccione la opción <strong>OK</strong>, para generar el documento <strong>Orden de Compra</strong> en base a lo seleccionado en los campos nombrados anteriormente.</p><p>Al ubicar en la ventana <strong>Órdenes de Compra</strong>, el registro de la orden de compra creado, podrá visualizar que el mismo fue generado en estado <strong>Borrador</strong>.</p><p><img src="/assets/img/docs/purchase-management/pum-purchase-image374.png" alt="Campo"></p><p>Imagen 45. Registro de Orden de Compra</p><p>Seleccione la pestaña <strong>Línea Orden Compra</strong>, de la ventana <strong>Órdenes de Compra</strong>.</p><p><img src="/assets/img/docs/purchase-management/pum-purchase-image375.png" alt="Campo"></p><p>Imagen 46. Pestaña Línea de Orden</p><p>Introduzca en el campo <strong>Precio</strong>, el precio del producto correspondiente al registro de la línea en la que se encuentra.</p><div class="custom-container note"><p class="custom-container-title">Nota</p><p>Recuerde guardar el registro de los campos en pestaña <strong>Línea Orden Compra</strong></p></div><p>Seleccione la pestaña principal <strong>Orden de Compra</strong> para proceder a completar el registro.</p><p>Seleccione la opción <strong>Preparar</strong>, ubicado en la parte inferior de la ventana <strong>Órdenes de Compra</strong>.</p><p>Seleccione la acción <strong>Completar</strong> y la opción <strong>OK</strong>, para completar el proceso.</p><p><img src="/assets/img/docs/purchase-management/pum-purchase-image379.png" alt="Campo"></p><p>Imagen 50. Acción Completar y Opción OK</p><h2 id="orden-de-compra-directa" tabindex="-1"><a class="header-anchor" href="#orden-de-compra-directa" aria-hidden="true">#</a> Orden de Compra Directa</h2><p>Una orden de compra es un documento elaborado por el departamento de compras de una empresa determinada, contiene los productos y servicios que dicha empresa necesita, la cantidad y los precios acordados con el proveedor a la que va dirigida, así como el sello del departamento de compras y la firma del jefe de dicho departamento.</p><p>En Solop ERP es posible generar una orden de compra directa. El presente material elaborado por Solop ERP, pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para generar en Solop ERP una orden de compra, en su versión 3.9.2.</p><p>Registro de Orden de Compra Directa</p><h3 id="registro-de-orden-de-compra-directa" tabindex="-1"><a class="header-anchor" href="#registro-de-orden-de-compra-directa" aria-hidden="true">#</a> Registro de Orden de Compra Directa</h3><p>Una Orden de Compra en Solop ERP, es un tipo de documento emitido por la empresa para realizar pedidos a sus diferentes proveedores. En ella se detalla: la cantidad a comprar, el tipo de producto, precio y condiciones de pago, así como también la forma de entrega.</p><p>Para el registro de un documento en Solop ERP debe tener en cuenta que existen campos que son de carácter obligatorio, estos campos están identificados con el carácter especial:(*) de color rojo.</p><div class="custom-container warning"><p class="custom-container-title">Aviso</p><p>Asegúrese de que cada campo que se encuentre identificado como carácter obligatorio, contenga la información requerida, de lo contrario no podrá completar el registro.</p></div><p>Ubique en el menú de Solop ERP la carpeta <strong>Gestión de Compras</strong>, luego seleccione la ventana <strong>Órdenes de Compra</strong>, adjunto imagen para referencia.</p><p>Seleccione el icono <strong>Registro Nuevo</strong> en la barra de herramientas de Solop ERP para crear un nuevo documento.</p><p><img src="/assets/img/docs/purchase-management/pum-purchase-image381.png" alt="Campo"></p><p>Imagen 2. Registro Nuevo</p><p>Seleccione en el campo <strong>Compañía</strong>, el nombre de la compañía de la cual se emite el documento <strong>Orden de Compra</strong>.</p><p>Seleccione en el campo <strong>Organización</strong>, el nombre de la organización de la cual se está emitiendo el documento <strong>Orden de Compra</strong>.</p><p>El valor en el campo organización debe ser diferente del símbolo (*) ya que éste símbolo hace referencia a todas las Organizaciones.</p><p>En el campo <strong>No. de Documento</strong>, no es necesario ingresarlo en forma manual, al momento de realizar un registro, Solop ERP genera un número de secuencia automáticamente para el documento, al seleccionar la opción guardar del nuevo registro de orden de compra.</p><p>En el campo <strong>Descripción</strong>, Puede introduzca una breve descripción referente a la orden de compra que se está realizando, este campo es opcional.</p><p>Seleccione el tipo de documento a generar, en el campo <strong>Tipo de Documento Destino</strong>, la selección de éste define el comportamiento del documento que se está elaborando, dicho comportamiento se encuentra definido en el documento Tipo de Documento elaborado por Solop ERP</p><p>Seleccione en el campo <strong>Fecha de la Orden</strong>, la fecha de elaboración del documento <strong>Orden de Compra</strong>.</p><p>Seleccione en el campo <strong>Fecha Prometida</strong>, la fecha de entrega de la orden, prometida por el proveedor.</p><p>En el campo <strong>Socio del Negocio</strong>, debe seleccionar el nombre del socio del negocio (proveedor) al que se le emite el documento <strong>Orden de Compra</strong>.</p><p>Si el Socio de negocio, tiene más de una dirección registrada, debe seleccionar la dirección del socio del negocio, caso contrario, si posee dirección única, esta información se refleja automáticamente en el campo <strong>Dirección del Socio del Negocio</strong> una vez haya seleccionado el nombre del socio de negocio.</p><p>En la sección de <strong>Entrega</strong>, se encuentran los siguientes grupos de campos: almacén, entrega directa y usuario, estos hacen referencia a:</p><ul><li><p>Almacén, en el cual se requiere el producto o servicio (Es de Carácter obligatorio)</p></li><li><p>Entrega Directa, Indica que el proveedor realizará la entrega directamente al cliente.</p></li><li><p>Usuario, Indica el Nombre del usuario de sistema.</p></li></ul><p>En el campo seleccionable <strong>Vía de Entrega</strong>, debe seleccionar la opción que indique, de qué manera serán entregados los productos o servicios de la orden.</p><p>En el campo seleccionable <strong>Regla de Costo de Flete</strong>, debe seleccionar la regla para cargar los costos del flete, por lo general se establece: Flete Incluido.</p><p>Seleccione la prioridad de la orden en el campo <strong>Prioridad</strong>, este campo indica la urgencia de los productos o servicios que se están ordenando en el documento, sin embargo, el documento trae predeterminado la opción <strong>Media</strong>.</p><p>En la sección de <strong>Facturación</strong>, se encuentran los siguientes grupos de campos, (Todos de carácter obligatorio, para el registro de la orden que será emitida)</p><p><strong>Lista de Precios</strong>, siempre debe ser Compras, esta determina el precio, margen y costo de los artículos comprados.</p><p><strong>Moneda</strong>, dependerá del Tipo de Documento seleccionado, es decir, si el tipo de documento es : <strong>Orden de Compra Nacional</strong> la moneda será (VES) moneda nacional en curso. Caso contrario, <strong>Orden de Compra Importación</strong> la moneda será, cualquier moneda extranjera que sea utilizada por la compañía para realizar este tipo de compras, ejemplo:(USD,EUR,COP, entre otros).</p><p><strong>Agente de la Compañía</strong>, será el agente de compras para el documento.</p><p><strong>Término de pago</strong>, indica las condiciones, método y tiempo de pago de la compra.</p><p>Recuerde guardar el registro de la ventana, seleccionando el icono <strong>Guardar</strong> ubicado en la barra de herramientas, una vez guardado el nuevo registro, podrá avanzar a la pestaña <strong>Línea Orden Compra</strong>.</p><p>Seleccione la pestaña <strong>Línea Orden Compra</strong> y proceda seleccionando el Producto o Servicio a ordenar. Si la orden de compra contiene varios productos, el campo <strong>Nro. de Línea</strong>, indicará el orden y despliegue de los mismos dentro del documento. Una vez que guarde el primer producto, deberá seleccionar nuevo, incrementando así el número de líneas por productos en el documento.</p><p>Los campos <strong>Compañía</strong>, <strong>Organización</strong>, <strong>Orden de Compra</strong>, <strong>Socio del Negocio</strong> y <strong>Dirección del Socio del Negocio</strong>, vienen precargados de la ventana principal <strong>Orden de Compra</strong>.</p><p><img src="/assets/img/docs/purchase-management/pum-purchase-image401.png" alt="Campo"></p><p>Imagen 22. Línea Orden Compra</p><p>En la Sección <strong>Cantidades</strong>, se encuentra el siguiente grupo de Campos: cantidad, unidad de medida, cantidad ordenada, cantidad facturada. cantidad reservada y cantidad entregada.</p><p><strong>Cantidad</strong>, indica la cantidad del producto en la compra.</p><p>**Unidad de Medida, indica la unidad de medida del producto ordenado.</p><p>**Cantidad Facturada, indica la cantidad de un producto que ha sido facturado.</p><p>**Cantidad Reservada, indica la cantidad del producto que ha sido reservado para otras órdenes.</p><p>**Cantidad Entregada, indica la cantidad de un producto que ha sido entregado.</p><p>En la sección Cantidades, solo deberá ingresar la información en el primer campo, el cual es Cantidad. Los demás, presentaran movimientos sólo sí se se han realizado para la orden de compra, más de una recepción, en relación a la cantidad total de la compra.</p><p>Seleccione en el campo <strong>Cantidad</strong>, la cantidad a ordenar del producto o servicio seleccionado.</p><p>Seleccione la unidad de medida del producto seleccionado en el campo <strong>UM</strong>, esta puede ser unidad, gramos, kilos, toneladas, entre otras.</p><p>En la Sección <strong>Totales</strong> se encuentran los siguientes grupos de campos:</p><p><strong>Precio</strong>, este precio está basado en la unidad de medida.</p><p><strong>Precio de Costo</strong>, indica el precio por unidad de medida, incluyendo todos los costos (Fletes, Traslados, entre otros)</p><p><strong>Precio Actual</strong>, indica el precio para un producto en la moneda fuente.</p><p><strong>Precio Lista</strong>, indica el precio de la lista oficial en la moneda del documento.</p><p><strong>Impuesto</strong>, indica el tipo de impuesto para esta línea del documento.</p><p><strong>Descuento</strong>, indica el impuesto aplicado o tomado como un porcentaje.</p><p>Introduzca el precio unitario del producto seleccionando en el campo <strong>Precio</strong>, este precio es el establecido por el socio del negocio proveedor.</p><p>Seleccione el impuesto en el campo <strong>Impuesto</strong>, este puede variar dependiendo del impuesto aplicable al producto seleccionado.</p><p>Recuerde guardar el registro de la pestaña <strong>Línea Orden Compra</strong> con el icono <strong>Guardar</strong> de la barra de herramientas de Solop ERP, antes de cambiar a la ventana principal <strong>Orden de Compra</strong>.</p><p>Regrese a la ventana principal <strong>Orden de Compra</strong> y seleccione la opción <strong>Completar</strong> ubicada en la parte inferior derecha del documento.</p><h2 id="orden-de-compra-multimoneda" tabindex="-1"><a class="header-anchor" href="#orden-de-compra-multimoneda" aria-hidden="true">#</a> Orden de Compra Multimoneda</h2><p>Ubique y seleccione en el menú de Solop ERP, la carpeta <strong>Gestión de Compras</strong>, luego seleccione la ventana <strong>Órdenes de Compra</strong>.</p><p>Seleccione el icono <strong>Registro Nuevo</strong> en la barra de herramientas de Solop ERP para crear un nuevo documento.</p><p>Seleccione en el campo <strong>Organización</strong>, el nombre de la organización de la cual se está emitiendo el documento <strong>Orden de Compra Multimoneda</strong>.</p><p>El valor en el campo organización debe ser diferente del símbolo (*) ya que éste símbolo hace referencia a todas las Organizaciones.</p><p>En el campo <strong>No. de Documento</strong>, no es necesario ingresarlo en forma manual, al momento de realizar un registro, Solop ERP genera un número de secuencia automáticamente para el documento, al seleccionar la opción guardar del nuevo registro de orden de compra multimoneda.</p><p>En el campo <strong>Descripción</strong>, Puede introduzca una breve descripción referente a la orden de compra multimoneda que se está realizando, este campo es opcional.</p><p>Seleccione el tipo de documento a generar, en el campo <strong>Tipo de Documento Destino</strong>, la selección de éste define el comportamiento del documento que se está elaborando, dicho comportamiento se encuentra definido en el documento Tipo de Documento elaborado por Solop ERP.</p><p>Para realizar una orden de compra multimoneda, puede ser utilizado cualquier tipo de documento de orden de compra.</p><p>Seleccione en el campo <strong>Fecha de la Orden</strong>, la fecha de elaboración del documento <strong>Orden de Compra Multimoneda</strong>.</p><p>Seleccione en el campo <strong>Fecha Prometida</strong>, la fecha de entrega de la orden, prometida por el proveedor.</p><p>En el campo <strong>Socio del Negocio</strong>, debe seleccionar el nombre del socio del negocio (proveedor) al que se le emite el documento <strong>Orden de Compra Multimoneda</strong>.</p><p>Seleccione en el campo <strong>Socio del Negocio a Facturar</strong>, el socio del negocio a facturar.</p><p>Si el socio de negocio, tiene más de una dirección registrada, debe seleccionar la dirección del socio del negocio, caso contrario, si posee dirección única, esta información se refleja automáticamente en el campo <strong>Dirección del Socio del Negocio</strong> una vez haya seleccionado el nombre del socio de negocio.</p><p>Seleccione en el campo <strong>Dirección Factura</strong>, la dirección del socio del negocio para la factura.</p><p>Seleccione en el campo <strong>Usuario</strong>, el usuario del socio del negocio seleccionado.</p><p>Seleccione en el campo <strong>Contacto Entrega Directa</strong>, el usuario de contacto para la entrega directa.</p><p>Seleccione en el campo <strong>Almacén</strong>, el almacén en el cual se requiere el producto o servicio</p><p>Seleccione el check <strong>Entrega Directa</strong>, que indica que el proveedor realizará la entrega directamente al cliente.</p><p>La selección de este check es obligatoria y permite generar un documento por pagar (factura), en una moneda diferente a la moneda de la orden de compra.</p><p>De no ser tildado el check <strong>Entrega Directa</strong>, no se podrá generar un documento por pagar (factura) con una moneda diferente a la moneda con la que fue realizada la orden de compra.</p><p>Al tildar el check <strong>Entrega Directa</strong>, se habilitan los siguientes campos</p><p>Seleccione en el campo <strong>Socio del Negocio Entrega Directa</strong>, el socio del negocio al cual serán entregados los productos incluidos en la orden.</p><p>Seleccione en el campo <strong>Dirección Entrega Directa</strong>, la dirección de localización del socio para la entrega.</p><p>Seleccione en el campo <strong>Contacto Entrega Directa</strong>, el usuario de contacto del socio para la entrega.</p><p>En el campo seleccionable <strong>Vía de Entrega</strong>, debe seleccionar la opción que indique, de qué manera serán entregados los productos o servicios de la orden.</p><p>En el campo seleccionable <strong>Regla de Costo de Flete</strong>, debe seleccionar la regla para cargar los costos del flete, por lo general se establece: Flete Incluido.</p><p>Seleccione la prioridad de la orden en el campo <strong>Prioridad</strong>, este campo indica la urgencia de los productos o servicios que se están ordenando en el documento, sin embargo, el documento trae predeterminado la opción <strong>Media</strong>.</p><p>Seleccione en el campo <strong>Lista de Precios</strong>, la lista de precios con la cual será generada la orden de compra.</p><p>Por tratarse de una orden de compra multimoneda, la lista de precios que se debe seleccionar debe ser <strong>Compras (USD)</strong> o <strong>Compras (UYU)</strong>. Esta determina el precio, margen y costo de los artículos comprados.</p><p>El valor en el campo <strong>Moneda</strong>, dependerá de la lista de precios seleccionada en el campo <strong>Lista de Precios</strong>.</p><p>El campo se encuentra solo lectura por lo que su valor solo puede ser modificado cambiando la lista de precios para establecer en el mismo, cualquier moneda extranjera que sea utilizada por la compañía para realizar este tipo de compras..</p><p>Seleccione en el campo <strong>Tipo de Conversión</strong>, el tipo de conversión con el cual fue negociada la compra con el proveedor.</p><p>Recuerde que debe tener creado el tipo de conversión con su respectiva tasa de conversión antes de completar el proceso. Si desconoce el procedimiento, puede consultar el material Conversión Manual, el mismo explica de manera detallada los procesos a realizar para crear un Tipo de Conversión, su Tasa de Conversión desde la Ventana Moneda y su Tasa de Conversión desde la Ventana Tasa de Cambio.</p><p>Seleccione en el campo <strong>Agente Compañía</strong>, el agente de compras para el documento.</p><p>Seleccione el check <strong>Imprimir Descuento</strong>, para imprimir el descuento en la factura y la orden.</p><p>Seleccione en el campo <strong>Término de pago</strong>, las condiciones, método y tiempo de pago de la compra.</p><p>Recuerde guardar el registro de la ventana, seleccionando el icono <strong>Guardar</strong> ubicado en la barra de herramientas, una vez guardado el nuevo registro, podrá avanzar a la pestaña <strong>Línea Orden Compra</strong>.</p><p>Seleccione la pestaña <strong>Línea Orden Compra</strong> y proceda al llenado de los campos seleccionando el producto o servicio a ordenar. Si la orden de compra contiene varios productos, el campo <strong>Nro. de Línea</strong>, indicará el orden y despliegue de los mismos dentro del documento. Una vez que guarde el primer producto, deberá seleccionar el icono <strong>Registro Nuevo</strong>, incrementando así el número de líneas por productos en el documento.</p><p>Los campos <strong>Compañía</strong>, <strong>Organización</strong>, <strong>Orden de Compra</strong>, <strong>Socio del Negocio</strong> y <strong>Dirección del Socio del Negocio</strong>, vienen precargados de la ventana principal <strong>Orden de Compra</strong>.</p><p>Seleccione en el campo <strong>Producto</strong>, el producto correspondiente a la orden de compra que se encuentra realizando.</p><p>Introduzca en el campo <strong>Cantidad</strong>, la cantidad del producto seleccionado.</p><p>Seleccione en el campo <strong>Unidad de Medida</strong>, la unidad de medida del producto seleccionado.</p><p>Esta unidad de medida puede ser unidad, gramos, kilos, toneladas, entre otras.</p><p>En el campo <strong>Cantidad Ordenada</strong>, se indica la cantidad ordenada del producto seleccionado.</p><p>Este campo toma de manera automática, el valor ingresado en el campo <strong>Cantidad</strong>.</p><p>En el campo <strong>Cantidad Entregada</strong>, se indica la cantidad del producto que ha sido recepcionada.</p><p>Este campo estará en cero (0), hasta que sea generado un documento de recepción con dicho producto, asociando la orden de compra.</p><p>En el campo <strong>Cantidad Reservada</strong>, se indica la cantidad del producto que ha sido reservado para otras órdenes.</p><p>Seleccione en el campo <strong>Cantidad Facturada</strong>, la cantidad de un producto que ha sido facturado.</p><p>Este campo estará en cero (0), hasta que sea generado un documento de cuentas por pagar (factura) con dicho producto, asociando la orden de compra.</p><p>Introduzca en el campo <strong>Precio</strong>, el precio del producto seleccionado.</p><p>Este precio está basado en la unidad de medida del producto, lo que quiere decir, que si el producto seleccionado tiene unidad de medida <strong>Caja</strong> y dicha caja contiene seis (6) unidades, Solop ERP tomará el precio ingresado como precio de la caja y no como precio de cada unidad que compone la caja.</p><p>Introduzca en el campo <strong>Precio de Costo</strong>, el precio de costo del producto seleccionado.</p><p>Este precio indica el precio por unidad de medida, incluyendo todos los costos (fletes, traslados, entre otros)</p><p>En el campo <strong>Precio Actual</strong>, se indica el precio para un producto en la moneda fuente.</p><p>Introduzca en el campo <strong>Precio Lista</strong>, el precio de lista oficial en la moneda del documento.</p><p>Seleccione en el campo <strong>Impuesto</strong>, el tipo de impuesto para esta línea del documento.</p><p>Introduzca en el campo <strong>Descuento</strong>, el descuento aplicado o tomado como un porcentaje.</p><p>En el campo <strong>Neto de Línea</strong>, se indica el total neto de la línea basado en la cantidad y el precio actual. Cualquier cargo adicional o flete no es incluido.</p><p>Recuerde guardar el registro de la pestaña <strong>Línea Orden Compra</strong> con el icono <strong>Guardar</strong> de la barra de herramientas de Solop ERP, antes de cambiar a la ventana principal <strong>Orden de Compra</strong>.</p><p>Regrese a la pestaña principal <strong>Orden de Compra</strong> y seleccione la opción <strong>Completar</strong> ubicada en la parte inferior derecha del documento.</p><p>Seleccione la acción <strong>Completar</strong> y la opción <strong>OK</strong>.</p>',236)],d={},c=(0,a(33350).A)(d,[["render",function(e,o){return(0,r.uX)(),(0,r.CE)("div",null,n)}]])},61763:(e,o,a)=>{a.r(o),a.d(o,{data:()=>r});const r=JSON.parse('{"key":"v-4a834ebc","path":"/docs/purchase-management/purchase-order.html","title":"Órdenes de Compra","lang":"es-ES","frontmatter":{"title":"Órdenes de Compra","category":["Documentation"],"star":9,"sticky":9,"article":false,"summary":"Esta documentación está destinada a definir cada uno de los procedimientos de la elaboración de órdenes de compra en Solop ERP para cualquier organización, es importante seguir al ","head":[["meta",{"property":"og:url","content":"https://ayuda.solopapp.com/docs/purchase-management/purchase-order.html"}],["meta",{"property":"og:title","content":"Órdenes de Compra"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2024-01-05T20:44:57.000Z"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"article:modified_time","content":"2024-01-05T20:44:57.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Crear Orden de Compra desde Requisición","slug":"crear-orden-de-compra-desde-requisicion","children":[{"level":3,"title":"Registro de Orden de Compra desde Requisición","slug":"registro-de-orden-de-compra-desde-requisicion","children":[]},{"level":3,"title":"Consultar y Completar Orden de Compra Generada","slug":"consultar-y-completar-orden-de-compra-generada","children":[]},{"level":3,"title":"Crear Orden de Compra desde Líneas de la Requisición","slug":"crear-orden-de-compra-desde-lineas-de-la-requisicion","children":[]},{"level":3,"title":"Crear Orden de Compra desde Líneas de la Requisición","slug":"crear-orden-de-compra-desde-lineas-de-la-requisicion-1","children":[]}]},{"level":2,"title":"Orden de Compra Directa","slug":"orden-de-compra-directa","children":[{"level":3,"title":"Registro de Orden de Compra Directa","slug":"registro-de-orden-de-compra-directa","children":[]}]},{"level":2,"title":"Orden de Compra Multimoneda","slug":"orden-de-compra-multimoneda","children":[]}],"git":{"createdTime":1679398095000,"updatedTime":1704487497000,"contributors":[{"name":"mgarciaQ76","email":"139590879+mgarciaQ76@users.noreply.github.com","commits":6},{"name":"markinpadilla","email":"mjpc27@gmail.com","commits":2},{"name":"yamelsenih","email":"ysenih@erpya.com","commits":1}]},"readingTime":{"minutes":15.98,"words":4794},"filePathRelative":"docs/purchase-management/purchase-order.md","localizedDate":"21 de marzo de 2023"}')}}]);