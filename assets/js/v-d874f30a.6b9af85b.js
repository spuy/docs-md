"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8853],{31294:(e,a,r)=>{r.r(a),r.d(a,{default:()=>l});var o=r(53633);const n=[(0,o.Fv)('<p>El proceso de facturación de un proyecto de Cnstructora es el conjunto de procedimientos mediante los cuales la empresa genera y emite facturas a sus clientes por los servicios prestados o los bienes suministrados durante el desarrollo del proyecto. Este proceso es esencial para documentar los ingresos, asegurar el pago por los trabajos realizados y mantener un control financiero adecuado a lo largo del proyecto.</p><p>El proceso de facturación implica la creación de documentos fiscales (facturas) que reflejan las cantidades de trabajo realizado, los materiales utilizados, y otros costos asociados a las obras de construcción. La factura detalla el monto total a pagar, las fechas de vencimiento, y las condiciones de pago, además de cualquier impuesto o gravamen aplicable.</p><p>El proceso varía según el tipo de proyecto y el modelo de facturación acordado entre la constructora y el cliente. Por ejemplo, en proyectos de gran envergadura, la facturación puede ser por avance de obra, lo que implica la emisión de facturas en función del porcentaje de trabajo completado.</p><h2 id="generar-orden-desde-linea-de-proyecto" tabindex="-1"><a class="header-anchor" href="#generar-orden-desde-linea-de-proyecto" aria-hidden="true">#</a> <em>Generar orden desde Línea de Proyecto</em></h2><p>Es un navegador cuya funcionalidad permite crear una orden de venta a partir de las líneas de un proyecto específico. Este proceso es clave en la gestión de proyectos de construcción.</p><p>En este paso, este Navegador permite generar orden de venta por líneas de proyecto (permite la preparación para facturar de el avance de un determinado proyecto).</p><p>Desde un grupo de parámetros permite individualizar las líneas sobre las cuales se realizará la orden de venta y luego se define el tipo de documento, la fecha y la acción sobre el documento (preparar o completar).</p><p>En una primera instancia se generará una exportación (a excel por ejemplo) de aquellas líneas que estén en situación de ser facturadas para enviar y notificar al cliente.</p><p>Esta exportación brinda información del avance del proyecto, de los productos con cantidad cotizada, cantidad cometida y cantidad a facturar.</p><p>Luego de la aprobación del cliente se procede a completar la orden de venta para su posterior facturación.</p><p><img src="/assets/img/docs/construction-management/com-image6.png" alt="Generar Orden"></p><h2 id="generar-factura-desde-linea-de-orden" tabindex="-1"><a class="header-anchor" href="#generar-factura-desde-linea-de-orden" aria-hidden="true">#</a> <em>Generar Factura desde Línea de Orden</em></h2><p>El Navegador Generar Factura desde Línea de Orden implica convertir las órdenes de venta realizadas por los clientes en facturas que reflejan el detalle de los bienes y servicios proporcionados. Este proceso es crucial para documentar los ingresos de la empresa y asegurar el cobro adecuado de los proyectos o servicios vendidos.</p><p>El proceso comienza cuando se realiza una orden de venta para adquirir bienes o servicios de la constructora (por ejemplo, materiales de construcción o servicios de obra). Cada orden de venta incluye líneas que detallan los productos o servicios solicitados, sus cantidades, precios y condiciones de entrega.</p><p>El ERP permite que, una vez cumplida la orden de venta (entrega de bienes o ejecución de servicios), las líneas de esa orden de venta se utilicen para generar automáticamente una factura. La factura es el documento que formaliza la transacción comercial y que el cliente debe abonar.</p><p>Este Navegador permite visualizar las líneas de órdenes de venta en estado completo, que se encuentran en situación de generar la factura a cliente.</p><p>Es posible seleccionar el tipo de agrupación para generar facturas: por proyecto, por orden, etc. y al seleccionar las líneas de orden y ejecutar el proceso generará tantas facturas (documentos por cobrar) como correspondan según la agrupación seleccionada.</p><p>Se selecciona la fecha del documento y la acción sobre el documento (preparar o completar).</p><p>En el caso de seleccionar la acción &quot;Completar&quot; ingresa en el circuito de envío de facturas a la entidad fiscal (según corresponda) así como el envío de la representación gráfica a los clientes vía e mail.</p><div class="custom-container note"><p class="custom-container-title">Nota</p><p>La condición para que se encuentre una orden de venta pendiente de facturar es que se defina a la misma como Permite Facturar = SI</p></div><p><img src="/assets/img/docs/construction-management/com-image7.png" alt="Generar Factura"></p><p><strong>Para mayor información sobre Generar Factura desde Línea de Orden:</strong> - <a href="../../sales-management/receivable-document/billing-from-orderline">Facturación desde línea de Orden de Venta</a></p><h2 id="reporte-detalle-de-avance-de-proyecto" tabindex="-1"><a class="header-anchor" href="#reporte-detalle-de-avance-de-proyecto" aria-hidden="true">#</a> Reporte &quot;Detalle de Avance de Proyecto&quot;</h2><p>Es un informe que proporciona un análisis detallado sobre el estado actual de un proyecto de construcción respecto a sus diferentes &quot;Fases&quot; y Líneas de Fase. Este reporte incluye información clave como el porcentaje de avance físico, los costos incurridos, las tareas completadas, los recursos utilizados y la comparación entre el progreso planificado y el real.</p><p>Sirve como una herramienta fundamental para monitorear y controlar el desempeño del proyecto a lo largo del tiempo.</p><p>Ofrece una visión detallada y en tiempo real del estado del proyecto de construcción en términos de:</p><ul><li>Tareas completadas versus tareas pendientes.</li><li>Recursos utilizados y necesarios para las próximas fases.</li><li>Costos acumulados en comparación con el presupuesto original.</li><li>Cumplimiento del cronograma planificado.</li><li>Desviaciones en plazos o costos que pueden afectar la entrega final.</li></ul><p>Este informe se genera automáticamente en el ERP a partir de los datos ingresados sobre las diferentes actividades del proyecto y los recursos asociados, como mano de obra, materiales, equipos, y costos.</p><p>El reporte &quot;Detalle de Avance de Proyecto&quot; muestra los mismos datos que el Navegador <em>Generar Orden desde Línea de Proyecto</em>. Permite filtrar por parámetros de Proyecto y Fase de Proyecto.</p><h3 id="detalle-de-columnas" tabindex="-1"><a class="header-anchor" href="#detalle-de-columnas" aria-hidden="true">#</a> Detalle de columnas</h3><ul><li><p>Total Planeado: es el total planeado de la línea de proyecto</p></li><li><p>Cant. Planeada: es la cantidad planeada de la línea de proyecto</p></li><li><p>Cuenta Facturada: es el importe de cuenta facturada de la línea de proyecto</p></li><li><p>Cant. Facturada: es la cantidad facturada de la línea de proyecto</p></li><li><p>Cant. Cometida: es la cantidad cometida de la línea de proyecto</p></li><li><p>% Trabajo Terminado: es el % de trabajo terminado de la línea de proyecto</p></li><li><p>% Facturado: si la cant. planeada de la línea de proyecto es mayor a cero entonces será el resultado de (cuenta facturada * 100)/cant. planeada, de lo contrario el valor de esta columna será cero</p></li><li><p>% a Facturar: es el resultado de (% trabajo terminado - % facturado)</p></li><li><p>Cant. a Facturar: es el resultado de (cant. cometida - cant. facturada)</p></li><li><p>Importe a Facturar: es el resultado de (cant. a facturar * precio planeado de línea de proyecto)</p></li></ul><h3 id="reporte-disponible-para-los-roles" tabindex="-1"><a class="header-anchor" href="#reporte-disponible-para-los-roles" aria-hidden="true">#</a> Reporte disponible para los roles:</h3><ul><li><p>Administrador</p></li><li><p>Constructora - Admin</p></li></ul>',33)],t={},l=(0,r(33350).A)(t,[["render",function(e,a){return(0,o.uX)(),(0,o.CE)("div",null,n)}]])},40:(e,a,r)=>{r.r(a),r.d(a,{data:()=>o});const o=JSON.parse('{"key":"v-d874f30a","path":"/docs/verticals/construction-management/Billing.html","title":"3. Facturación","lang":"es-ES","frontmatter":{"title":"3. Facturación","category":["Documentation"],"star":9,"sticky":9,"article":false,"summary":"El proceso de facturación de un proyecto de Cnstructora es el conjunto de procedimientos mediante los cuales la empresa genera y emite facturas a sus clientes por los servicios pre","head":[["meta",{"property":"og:url","content":"https://ayuda.solopapp.com/docs/verticals/construction-management/Billing.html"}],["meta",{"property":"og:title","content":"3. Facturación"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2024-10-10T21:32:24.000Z"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"article:modified_time","content":"2024-10-10T21:32:24.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Generar orden desde Línea de Proyecto","slug":"generar-orden-desde-linea-de-proyecto","children":[]},{"level":2,"title":"Generar Factura desde Línea de Orden","slug":"generar-factura-desde-linea-de-orden","children":[]},{"level":2,"title":"Reporte \\"Detalle de Avance de Proyecto\\"","slug":"reporte-detalle-de-avance-de-proyecto","children":[{"level":3,"title":"Detalle de columnas","slug":"detalle-de-columnas","children":[]},{"level":3,"title":"Reporte disponible para los roles:","slug":"reporte-disponible-para-los-roles","children":[]}]}],"git":{"createdTime":1719859150000,"updatedTime":1728595944000,"contributors":[{"name":"mgarciaQ76","email":"139590879+mgarciaQ76@users.noreply.github.com","commits":6}]},"readingTime":{"minutes":3.4,"words":1020},"filePathRelative":"docs/verticals/construction-management/Billing.md","localizedDate":"1 de julio de 2024"}')}}]);