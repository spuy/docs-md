"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4596],{32671:(e,a,o)=>{o.r(a),o.d(a,{default:()=>c});var r=o(53633);const n=[(0,r.Fv)('<h2 id="generar-facturas-desde-linea-de-orden" tabindex="-1"><a class="header-anchor" href="#generar-facturas-desde-linea-de-orden" aria-hidden="true">#</a> Generar Facturas desde Línea de Orden</h2><p>Una vez generada la Orden de venta (junto con la orden de compra y documento por pagar desde <strong>&quot;generar orden desde proyecto&quot;</strong>), a través del proceso <strong>&quot;Generar Factura desde línea de orden&quot;</strong> es posible de forma automática crear los documentos por cobrar (factura al cliente).</p><p>Para esto existe un requisito: la Orden de Venta debe estar seteada como <strong>Permite Facturar = SI</strong>. Debe seleccionarse la fecha de facturación, la accion en el documento (si la factura se genera en estado completo o en estado borrador) y el tipo de agrupación (por ejemplo: por orden).</p><p>El proceso cuenta con una sección de Criterio de Búsqueda con diferente parámetros que brindan eficiencia en la búsqueda de los registros a facturar tales como Orden de Venta, Fecha Prometida, Socio del Negocio, Proyecto, Agente Comercial, Categoría de Proyecto.</p><p>En el resultado de la búsqueda podrán visualizarse los datos esenciales de los registros con el objeto de individualizar aquellos que requieren facturarse. Al seleccionar registros y ejecutar el proceso se crean los Documentos por cobrar vinculados a sus correspondientes órdenes de trabajo (en el caso de que seleccionen la acción sobre el documento &quot;Completar&quot;, cambiará el estado de la orden de documentada por &quot;Facturada&quot;).</p><h3 id="tipo-de-agrupacion" tabindex="-1"><a class="header-anchor" href="#tipo-de-agrupacion" aria-hidden="true">#</a> Tipo de Agrupación</h3><p>Seleccionar un tipo de agrupación permite definir la forma en la cual se confeccionará el documento por cobrar. Si se selecciona como tipo de agrupación &quot;Proyecto&quot; se emitirá un documento por cobrar por cada proyecto (previamente seleccionado). En el caso de seleccionar &quot;Contrato&quot;, y elegir registros que estén vinculados a un mismo contrato, se emitirán todos en un mismo documento por cobrar (de existir diferentes contratos, se emitirá un comprobante por cada contrato).</p><p>Si se selecciona agrupar por Unidad, el proceso unificará en un mismo documento por cobrar aquellas wo de mismo Socio del Negocio y mismo dato Unidad (que se ingresa en la orden de trabajo). Este agrupamiento es similar al de PO reference (En este caso en lugar de agrupar por el dato Unidad, lo hará por el de referencia oc Cliente).</p><p>También cuenta con la opción de agrupar por &quot;Socio del Negocio&quot;. En este caso al seleccionar un grupo de órdenes de trabajo para facturar, se agrupará por Socio de Negocio (y por contrato) en cada documento por cobrar. Por último, al agrupar por &quot;Orden&quot; se generarán documentos por cobrar por las líneas de orden de trabajo que correspondan a una misma orden de venta.</p><p><img src="/assets/img/docs/field-services-management/fis-services6.png" alt="Generar Factura desde Línea de orden"></p><h2 id="enviar-facturas-por-email" tabindex="-1"><a class="header-anchor" href="#enviar-facturas-por-email" aria-hidden="true">#</a> Enviar Facturas por Email</h2><p>El navegador Enviar Facturas por Email permite realizar el envío de los Documentos por Cobrar en estado Completo a cada uno de sus clientes.</p><p>Cuenta con una sección de Criterio de Búsqueda para encontrar con mayor eficiencia los registros a ser enviados con parámetros tales como Agente Comercial, Factura, Proyecto, Orden. El parámetro Impreso = NO posibilita visualizar solo aquellos Documentos por cobrar que no se imprimieron manualmente desde la consulta del documento (mientras que seteando SI, se podrán observar los ya impresos de forma individual y al dejar vacío el filtro se verán todos).</p><p>Dentro de los filtros es posible definir en &quot;Enviar Factura A&quot; si se desea enviar al Socio del Negocio (se envía al email definido en la pestaña Localización de Socio del Negocio), o al Representante de Ventas (se envía al email del Contacto vinculado al Socio del Negocio). En el caso de dejar vacío el filtro se enviará a ambos.</p><p>En la grilla se verán reflejado el resultado de la búsqueda con los datos esenciales por columna para identificar los registros que se desean enviar.</p><p>Una vez seleccionados aquellos registros a enviar, se ejecuta el proceso y en ventana emergente se selecciona el formato de Representación Impresa (esto dependiendo de ciertas condiciones como el País puede ser un dato por defecto o seleccionable) y al aceptar se inicia el envío por mail de los comprobantes seleccionados.</p><p>A partir del envío, las notificaciones ingresan en una rutina que envía en lote los correos, por un lapso determinado de tiempo y cantidad de correos (por ejemplo: 40 mails cada cinco minutos).</p><p><img src="/assets/img/docs/field-services-management/fis-services15.png" alt="Enviar Facturas por Mail"></p><h3 id="envio-automatico-al-completar-documento-por-cobrar" tabindex="-1"><a class="header-anchor" href="#envio-automatico-al-completar-documento-por-cobrar" aria-hidden="true">#</a> Envío automático al completar Documento por Cobrar</h3><p>Existe otra función de envío de Email por cada documento por cobrar al consultar individualmente el comprobante y cambiar su estado por &quot;Completar&quot;. Esta acción dispara el envío del documento por mail al cliente.</p><p>Si los documentos por cobrar se generaran desde el navegador de Generar Factura desde Línea de Orden, para utilizar este envío individual deberían generarse masivamente en estado &quot;Borrador&quot; para luego consultarlos y completarlos (disparando el envío por Email).</p><p>Para los casos en los que se generen las facturas desde ese mismo navegador pero en estado completo existe el &quot;Enviar Facturas por Email&quot; detallado en el apartado anterior.</p><h3 id="parametrizacion-de-cola-de-notificacion" tabindex="-1"><a class="header-anchor" href="#parametrizacion-de-cola-de-notificacion" aria-hidden="true">#</a> Parametrización de Cola de Notificación</h3><p>La Cola de Notificaiones funciona como una aplicación que se configura en el Registro de Aplicaciones de Solop ERP y utiliza para el envío de correos la configuración de envío de correos de la Compañía y/o Organización.</p><h3 id="cola-de-notificacion" tabindex="-1"><a class="header-anchor" href="#cola-de-notificacion" aria-hidden="true">#</a> Cola de Notificación</h3><p>Cada evento que ejecuta un envío de información desde el sistema genera un registro de &quot;cola de notificación&quot;. Este registro define el tipo de aplicación (ejemplo: correo electrónico).</p><p>Cuando se dispara una notificación desde el ERP, al generarse registro de cola de notificación, se graba como procesado = No (no enviado) y con el check de Activo = SI</p><p>El envío de notificación tiene diferentes funcionalidades: se puede generar desde</p><ul><li>El usuario</li><li>La organización</li><li>La compañia</li></ul><p>From Account name: desde donde se origina la notificación.</p><p>Desde esta ventana es posible verificar la correcta salida de las notificaciones enviadas. Y esto aplica tanto a los correos enviados por facturas a clientes como también para las notificaciones que se envían a los Agentes comerciales emitidos desde las órdenes de trabajo.</p><h3 id="seleccion-de-pago" tabindex="-1"><a class="header-anchor" href="#seleccion-de-pago" aria-hidden="true">#</a> Selección de Pago</h3><p>Los documentos por pagar (por los servicios realizados por los diferentes agentes comerciales o recursos) se crean automáticamente junto con la orden de compra (al generar la orden de venta en estado completo). Por lo cual, el paso siguiente es generar la Selección de Pago. Esto puede realizarse diariamente, o periódicamente (de forma semanal, quincenal, etc.)</p><p>En la ventana Selección de Pago debe seleccionarse El tipo de documento (Orden de Pago), la cuenta bancaria, la fecha del documento y la moneda. Luego debe setearse la selección de pago en Estado Completo. La selección de pago puede realizarse sobre un agente comercial en particular o bien sobre los documentos por pagar pendientes de pago (uno, varios o todos), mediante el botón de seleccionar Documentos por pagar.</p><p>En paso posterior se selecciona la forma de pago y es posible imprimir el Pago generado (o exportar desde la ventana Imprimir/Exportar pagos).</p><p><img src="/assets/img/docs/field-services-management/fis-services7.png" alt="Selección de Pago"></p>',36)],i={},c=(0,o(89456).A)(i,[["render",function(e,a){return(0,r.uX)(),(0,r.CE)("div",null,n)}]])},49687:(e,a,o)=>{o.r(a),o.d(a,{data:()=>r});const r=JSON.parse('{"key":"v-7a2f3184","path":"/docs/verticals/field-services-management/billings-and-payments.html","title":"2. Facturación y Pagos","lang":"es-ES","frontmatter":{"title":"2. Facturación y Pagos","category":["Documentation"],"star":9,"sticky":9,"article":false,"summary":"Generar Facturas desde Línea de Orden Una vez generada la Orden de venta (junto con la orden de compra y documento por pagar desde \\"generar orden desde proyecto\\"), a través del pro","head":[["meta",{"property":"og:url","content":"https://ayuda.solopapp.com/docs/verticals/field-services-management/billings-and-payments.html"}],["meta",{"property":"og:title","content":"2. Facturación y Pagos"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2024-08-20T21:26:03.000Z"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"article:modified_time","content":"2024-08-20T21:26:03.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Generar Facturas desde Línea de Orden","slug":"generar-facturas-desde-linea-de-orden","children":[{"level":3,"title":"Tipo de Agrupación","slug":"tipo-de-agrupacion","children":[]}]},{"level":2,"title":"Enviar Facturas por Email","slug":"enviar-facturas-por-email","children":[{"level":3,"title":"Envío automático al completar Documento por Cobrar","slug":"envio-automatico-al-completar-documento-por-cobrar","children":[]},{"level":3,"title":"Parametrización de Cola de Notificación","slug":"parametrizacion-de-cola-de-notificacion","children":[]},{"level":3,"title":"Cola de Notificación","slug":"cola-de-notificacion","children":[]},{"level":3,"title":"Selección de Pago","slug":"seleccion-de-pago","children":[]}]}],"git":{"createdTime":1703879362000,"updatedTime":1724189163000,"contributors":[{"name":"mgarciaQ76","email":"139590879+mgarciaQ76@users.noreply.github.com","commits":8}]},"readingTime":{"minutes":3.88,"words":1165},"filePathRelative":"docs/verticals/field-services-management/billings-and-payments.md","localizedDate":"29 de diciembre de 2023"}')}}]);