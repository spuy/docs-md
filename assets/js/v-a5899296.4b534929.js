"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5299],{24576:(e,a,o)=>{o.r(a),o.d(a,{default:()=>d});var r=o(53633);const i=[(0,r.Fv)('<h2 id="proceso-de-distribucion" tabindex="-1"><a class="header-anchor" href="#proceso-de-distribucion" aria-hidden="true">#</a> Proceso de Distribución</h2><p>El proceso de distribución para una distribuidora es el conjunto de actividades que permite gestionar de manera integral la logística y el flujo de productos desde el proveedor hasta el cliente final. Este circuito abarca varias funciones claves como la gestión de inventarios, pedidos, transporte, almacenamiento y facturación. El objetivo es optimizar las operaciones de distribución, mejorando la eficiencia y minimizando costos.</p><p>Funciones principales del proceso de distribución en un ERP para distribuidoras:</p><ul><li><p>Gestión de inventarios: Controla el stock en tiempo real, asegurando que siempre haya suficientes productos para satisfacer la demanda sin generar sobreinventario.</p></li><li><p>Procesamiento de pedidos: Automatiza la recepción, validación y ejecución de pedidos, asegurando que se procesen de manera eficiente y rápida.</p></li><li><p>Control de logística: Planifica y organiza el transporte de productos desde el almacén hasta el cliente final, optimizando rutas de entrega y controlando los costos de transporte.</p></li><li><p>Gestión de almacenes: Coordina la entrada, almacenamiento y salida de mercancías, asegurando un correcto manejo del espacio, la ubicación de los productos y su accesibilidad.</p></li><li><p>Facturación y finanzas: Integra el flujo de información con el área financiera para emitir facturas, registrar pagos y gestionar cuentas por cobrar, facilitando el control contable y financiero.</p></li><li><p>Optimización de la cadena de suministro: El ERP permite una visión completa del proceso, facilitando la toma de decisiones informadas para ajustar los niveles de inventario, mejorar tiempos de entrega y asegurar que los productos lleguen a tiempo.</p></li></ul><p>Para iniciar el circuito de distribución el primer paso es crear una Orden de Venta. Estos documentos presentan diferentes tipos, y a su vez, cada tipo de orden de venta posee un sub tipo con un determinado comportamiento. Para mayor detalle sobre órdenes de venta: - <a href="../sales-management/sales-orders/order">Orden de Venta</a></p><p>y sobre Tipos de Documentos (Tipo documento destino y subtipo OV): - <a href="../sales-management/sales-orders/document-type">Tipos de Documentos</a></p><h3 id="orden-de-venta-distribucion" tabindex="-1"><a class="header-anchor" href="#orden-de-venta-distribucion" aria-hidden="true">#</a> Orden de Venta Distribución:</h3><p>La orden de venta de una distribuidora es un documento clave dentro del proceso comercial que representa el compromiso de un cliente de adquirir un determinado producto o servicio. Es generada cuando un cliente realiza un pedido y detalla la información relevante sobre la transacción, como los productos solicitados, cantidades, precios, fechas de entrega y condiciones de pago.</p><p>Es una instrucción formal para preparar y enviar los productos a un cliente. En un ERP, la orden de venta se crea automáticamente o manualmente cuando se recibe un pedido y puede incluir varios datos esenciales:</p><ul><li>Información del cliente (nombre, dirección de envío, términos de pago).</li><li>Descripción de los productos o servicios solicitados (código de producto, cantidades).</li><li>Precios, impuestos aplicables y descuentos.</li><li>Fechas de entrega y lugar de envío.</li><li>Condiciones de pago y facturación.</li></ul><p>El ERP gestiona esta orden y la vincula con otros procesos del sistema, como la gestión de inventarios, la logística, y la facturación.</p><p>Se debe seleccionar el socio de negocio.</p><p>Desde línea de orden se pueden elegir los productos. En los casos de ventas recurrentes, existe la posibilidad de copiar líneas de una orden anterior.</p><p>Esta función (copiar líneas) copia las líneas tal como fueron generadas en la orden de venta original (hereda descuentos).</p><p>En el negocio de retail, la lista de precios utilizada ya posee el impuesto incluido (así está configurado en el check correspondiente, en la entidad lista de precios).</p><p>En la orden de venta, la regla de pago se setea por defecto según el socio de negocio seleccionado.</p><p>La dirección también la hereda del socio de negocio (pestaña Localización) y se encuentra vinculada a una región de ventas. Esto permite asignar un vendedor para cada región de ventas.</p><p>Es importante en la orden de venta la regla de facturación. En general, se utiliza &quot;después de entrega&quot;, con el objeto de generar factura por aquello que ha sido efectivamente entregado y evitar así diferencias por falta de stock.</p><p>Luego de setear todos los datos obligatorios se completa la orden de venta. Esto genera los documentos que correspondan según el tipo de orden de venta (en este caso en el cual el tipo es: orden de venta, no genera otros documentos).</p><p>Los descuentos en la orden de venta pueden ingresarse manualmente o bien setearse en el socio de negocio.</p><p>Una vez generada la orden de venta el siguiente paso es generar la Orden de salida:</p><h3 id="generar-orden-de-salida" tabindex="-1"><a class="header-anchor" href="#generar-orden-de-salida" aria-hidden="true">#</a> <em>Generar Orden de Salida</em></h3><p>Una orden de salida de una distribuidora es un documento o instrucción que autoriza el despacho de productos desde el almacén hacia el cliente u otro destino, como una sucursal o centro de distribución. Está directamente relacionada con una orden de venta, ya que es el paso donde se ejecuta físicamente la entrega de los productos solicitados.</p><p>Indica al personal de almacén que deben preparar y despachar los productos de un pedido. Contiene toda la información relevante para que los productos se extraigan del inventario, se preparen para su envío y se realice la entrega.</p><p>Esta orden incluye:</p><ul><li>El listado de productos y cantidades a despachar.</li><li>El almacén o ubicación de donde deben extraerse los productos.</li><li>Las instrucciones de embalaje, transporte y ruta de entrega.</li><li>La identificación del cliente y la dirección de envío.</li><li>La fecha en que debe realizarse la salida y cualquier información sobre plazos de entrega.</li></ul><p>Luego de completar las órdenes de venta, el paso siguiente es <strong>&quot;Generar orden de salida&quot;</strong>. En esta ventana se da origen al proceso de distribución.</p><p>Se debe seleccionar la organización y el almacén. Luego puede filtrarse por región de ventas y/o por fecha documento (no es obligatorio).</p><p>Al seleccionar &quot;buscar&quot;, muestra todas las órdenes pendientes de entrega (según los filtros utilizados).</p><p>A medida que se van seleccionando las órdenes a entregar en la parte superior, en la parte inferior se van agregando las <strong>líneas de esas órdenes</strong>.</p><p>Dentro de esas líneas, si se utliza el inventario correctamente, el ERP realiza una comparación entre la cantidad a entregar y la cantidad en existencia.</p><div class="custom-container note"><p class="custom-container-title">Nota</p><p>Desde el proceso Generar Orden de Salida desde OV se puede visualizar la columna Cantidad Existencia, que muestra la cantidad en existencia para el producto y el almacén de la Orden de Venta.</p></div><p>También es posible configurar la secuencia de carga (orden en la cual se realizarán las entregas).</p><p>En el extremos inferior de la ventana existe una sección (resumen de inventario por producto) donde es posible visualizar en qué almacén se encuentra la cantidad en existencia por cada producto.</p><p>También permite definir una ubicación (ubicación lógica) para el armado del pedido. Se trata de una ubicación dentro del almacén donde se realizará el pickinig.</p><p>Al aceptar, el sistema genera mensaje de insuficiente cantidad disponible por aquellos productos con stock por debajo de lo solicitado en las órdenes a entregar.</p><p>Al aceptar (con existencia suficiente por producto), el ERP brinda la opción de imprimir orden (de salida).</p><p>Esta impresión actúa como &quot;hoja de ruta&quot; para preparar los pedidos (realizar la búsqueda en el almacén). La impresión cuenta con diferentes formatos (tipos de agrupación): por producto, por factura, por orden de venta.</p><p>Al momento de aceptar la orden de salida es importante seleccionar la acción que se ejecutará sobre el documento: puede ser &quot;completo&quot; o &quot;en proceso&quot;.</p><p>En este caso se recomienda setear &quot;en proceso&quot;, porque aun en esta instancia se encuentra pendiente realizar el &quot;pickeo&quot; para determinar la existencia real de los productos para completar los pedidos. <img src="/assets/img/docs/distribution-management/dim-distribution-image23.png" alt="Generar Orden de Salida"></p><h3 id="generar-orden-de-salida-desde-ov" tabindex="-1"><a class="header-anchor" href="#generar-orden-de-salida-desde-ov" aria-hidden="true">#</a> <em>Generar Orden de salida desde OV</em></h3><p>En este proceso, el smart browser no está abierto por línea de OV, sino que se visualiza <strong>por cabezales de orden</strong>.</p><p>Se genera una orden de salida que incluye a todas las líneas de OV, de todas las OV seleccionadas en el browser.</p><p><strong>Parámetros</strong></p><p><img src="/assets/img/docs/distribution-management/dim-distribution-image24.png" alt="Parámetros"></p><h3 id="reporte-de-orden-de-salida" tabindex="-1"><a class="header-anchor" href="#reporte-de-orden-de-salida" aria-hidden="true">#</a> <em>Reporte de Orden de Salida</em></h3><p>El reporte de orden de salida de distribuidora es un informe generado por el sistema que recopila y muestra información detallada sobre las órdenes de salida emitidas desde el almacén. Este reporte proporciona una visión clara del estado de los productos que han sido despachados o están en proceso de serlo, permitiendo a los responsables de la logística y la distribución tener un control completo sobre las operaciones de salida.</p><p>Es un documento que puede generarse en cualquier momento y que detalla la información relevante sobre las órdenes de salida en el sistema, tales como:</p><ul><li>Número de la orden de salida.</li><li>Cliente al que se le envía el pedido.</li><li>Productos incluidos en la orden (descripción, cantidades, unidades).</li><li>Estado de la orden (pendiente, en proceso, completada).</li><li>Fecha de emisión y fecha de salida programada.</li><li>Almacén o ubicación desde donde se despachan los productos.</li><li>Método de envío y transportista encargado.</li><li>Comentarios adicionales o instrucciones especiales de entrega.</li></ul><p>El reporte puede variar según las necesidades del negocio y puede ser personalizado para incluir información específica de la operación logística.</p><p>El paso posterior a generar la Orden de salida es imprimir el reporte de Orden de Salida para realizar la búsqueda de los productos a distribuir (el pickeo). Este reporte presenta diferentes formatos de acuerdo a lo que se requiera:</p><ul><li><p>Un formato con listado general de los productos incluidos en la Orden de Salida para (generar Picking)</p></li><li><p>Un formato de listado por Socio del Negocio (por cliente) para armar cada pedido individual (generar Packing).</p></li><li><p>Un formato de listado más detallado incluyendo importes para el transportista (generar el Shiping)</p></li></ul><p>Dicho proceso puede ubicarse desde el Menú, y también es posible ejecutarlo directo desde la ventana para la orden actual:</p><p><img src="/assets/img/docs/distribution-management/dim-distribution-image28.png" alt="Proceso"></p><h3 id="generar-picking-y-entregas-desde-orden-de-salida" tabindex="-1"><a class="header-anchor" href="#generar-picking-y-entregas-desde-orden-de-salida" aria-hidden="true">#</a> <em>Generar picking y entregas desde orden de salida</em></h3><p>El proceso de <em>Generar picking y entregas desde la orden de salida</em> de distribuidora es un flujo clave que permite organizar la preparación y entrega de productos de manera eficiente. Este proceso involucra dos etapas principales: el picking (selección y recolección de productos en el almacén) y la entrega (despacho y transporte de los productos al cliente final).</p><p>Está directamente vinculado con la orden de salida, que es la autorización para que los productos sean despachados del almacén.</p><p><strong>Picking:</strong></p><p>Es el proceso de recolección de productos en el almacén para cumplir con un pedido o una orden de salida. El ERP genera una lista de los productos que deben ser recogidos (picking list), que indica el almacén, la ubicación exacta de los productos, la cantidad solicitada y cualquier detalle adicional para asegurar que se recojan los productos correctos. El sistema también puede optimizar el picking, sugiriendo la mejor ruta dentro del almacén para minimizar el tiempo de recolección.</p><p><strong>Entrega:</strong></p><p>Una vez que los productos han sido recogidos, el ERP gestiona la etapa de entrega, que incluye la preparación del envío, la coordinación del transporte y la emisión de los documentos de entrega, como las guías de remisión o etiquetas de envío. El ERP puede registrar cuándo los productos han sido enviados, generar un número de seguimiento, y actualizar el estado de la entrega hasta que los productos lleguen al cliente.</p><p>Se debe marcar todo lo que se encontró de los productos a entregar (resultado del picking) y se modifican las cantidades de acuerdo a las existencias reales.</p><p>Al completar documento, define en estado completo la orden de salida y realiza las entregas.</p><p>El motivo por el cual puede haber diferencias entre la existencia que muestra el ERP y el resultado del pickeo responde a que no se encuentra correctamente actualizado el stock del producto.</p><p>En esta instancia, al consultar una orden de venta (vinculada a nuestra orden de salida con estado completo) se puede observar la cantidad &quot;entregada&quot;. Aun no se visualizará cantidad facturada.</p><p><img src="/assets/img/docs/distribution-management/dim-distribution-image25.png" alt="Filtros picking"></p><h3 id="crear-facturas-masivamente" tabindex="-1"><a class="header-anchor" href="#crear-facturas-masivamente" aria-hidden="true">#</a> Crear Facturas Masivamente</h3><p>Una vez generado el picking y entrega, el paso siguiente es <strong>crear las facturas masivamente</strong>.</p><p>La facturación se realiza desde la orden de salida (en estado completo) en la ventana &quot;Generar factura desde orden de salida&quot;: - <a href="../sales-management/receivable-document/bill">Generar Factura desde Orden de Salida</a></p><p><img src="/assets/img/docs/distribution-management/dim-distribution-image26.png" alt="Filtros Facturas"></p><p>::: Los procesos &quot;Generar picking y entregas desde orden de salida&quot; y &quot;Generar factura desde orden de salida&quot;, permiten entregar y facturar por cantidad mayor a la ordenada (por ejemplo para aquellos productos que se vendan por bolsa y su valor sea por unidad, pero su peso pueda variar). :::</p><h3 id="generar-cobros-desde-orden-de-salida" tabindex="-1"><a class="header-anchor" href="#generar-cobros-desde-orden-de-salida" aria-hidden="true">#</a> <em>Generar Cobros desde Orden de Salida</em></h3><p>El proceso de Generar cobros desde la orden de salida de distribuidora consiste en la automatización de la gestión de cobros relacionados con las órdenes de salida, que están directamente vinculadas a las ventas y a los despachos de productos. Este proceso facilita la gestión de las transacciones financieras derivadas de la venta de productos, desde la entrega de los mismos hasta el cobro de las facturas correspondientes.</p><p>Implica que, una vez que se ha generado y completado una orden de salida y los productos han sido despachados al cliente, el ERP puede iniciar la fase de cobro. Esto puede realizarse mediante la emisión de facturas vinculadas a la orden de salida o a la orden de venta original, y facilita el registro y control de los pagos que los clientes deben realizar.</p><p>El último paso de este proceso es <strong>Generar los cobros desde orden de salida.</strong> Se debe seleccionar la orden de salida.</p><p>En esta opción (Generar cobros desde orden de salida) se visualizarán todas aquellas facturas cuyo medio de pago se haya configurado como &quot;contado&quot; (no es a crédito), como por ejemplo cheque, efectivo, etc.</p><p>En el caso de cheque, se ingresa el número (número de pago), se selecciona en parámetros la cuenta bancaria que corresponda y la fecha de pago.</p><p>Al seleccionar aceptar se podrá observar el documento por cobrar marcado como &quot;pagado&quot; y el pago generado correspondiente (registro de pago/cobro).</p><p><img src="/assets/img/docs/distribution-management/dim-distribution-image27.png" alt="Filtros Cobros"></p>',79)],n={},d=(0,o(33350).A)(n,[["render",function(e,a){return(0,r.uX)(),(0,r.CE)("div",null,i)}]])},11912:(e,a,o)=>{o.r(a),o.d(a,{data:()=>r});const r=JSON.parse('{"key":"v-a5899296","path":"/docs/distribution-management/distribution-process.html","title":"Proceso de Distribución","lang":"es-ES","frontmatter":{"title":"Proceso de Distribución","category":["Documentation"],"star":9,"sticky":9,"article":false,"summary":"Proceso de Distribución El proceso de distribución para una distribuidora es el conjunto de actividades que permite gestionar de manera integral la logística y el flujo de producto","head":[["meta",{"property":"og:url","content":"https://ayuda.solopapp.com/docs/distribution-management/distribution-process.html"}],["meta",{"property":"og:title","content":"Proceso de Distribución"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2024-09-30T20:14:00.000Z"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"article:modified_time","content":"2024-09-30T20:14:00.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Proceso de Distribución","slug":"proceso-de-distribucion","children":[{"level":3,"title":"Orden de Venta Distribución:","slug":"orden-de-venta-distribucion","children":[]},{"level":3,"title":"Generar Orden de Salida","slug":"generar-orden-de-salida","children":[]},{"level":3,"title":"Generar Orden de salida desde OV","slug":"generar-orden-de-salida-desde-ov","children":[]},{"level":3,"title":"Reporte de Orden de Salida","slug":"reporte-de-orden-de-salida","children":[]},{"level":3,"title":"Generar picking y entregas desde orden de salida","slug":"generar-picking-y-entregas-desde-orden-de-salida","children":[]},{"level":3,"title":"Crear Facturas Masivamente","slug":"crear-facturas-masivamente","children":[]},{"level":3,"title":"Generar Cobros desde Orden de Salida","slug":"generar-cobros-desde-orden-de-salida","children":[]}]}],"git":{"createdTime":1700488056000,"updatedTime":1727727240000,"contributors":[{"name":"mgarciaQ76","email":"139590879+mgarciaQ76@users.noreply.github.com","commits":6}]},"readingTime":{"minutes":7.76,"words":2329},"filePathRelative":"docs/distribution-management/distribution-process.md","localizedDate":"20 de noviembre de 2023"}')}}]);