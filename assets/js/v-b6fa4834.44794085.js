"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1303],{25879:(e,a,o)=>{o.r(a),o.d(a,{default:()=>t});var n=o(78e3);const r=[(0,n.uE)('<h2 id="mantenimientos" tabindex="-1"><a class="header-anchor" href="#mantenimientos" aria-hidden="true">#</a> Mantenimientos</h2><h3 id="¿que-es-un-split" tabindex="-1"><a class="header-anchor" href="#¿que-es-un-split" aria-hidden="true">#</a> ¿Qué es un split?</h3><p>Split es un proceso masivo de reparto de ingresos en cada Contrato según la definición de Split que tenga. En el proceso de Split se generan cálculos de Comisión de tipo “Split” y a partir de ellas se generan Órdenes de Compra y Venta en las organizaciones que corresponden.</p><h3 id="¿por-que-motivo-no-se-visualiza-una-orden-de-venta-para-facturar" tabindex="-1"><a class="header-anchor" href="#¿por-que-motivo-no-se-visualiza-una-orden-de-venta-para-facturar" aria-hidden="true">#</a> ¿Por que motivo no se visualiza una Orden de Venta para Facturar?</h3><p>Puede ser por 4 motivos:</p><ul><li>Que NO esté COMPLETA</li><li>Que no tenga el check de “Permite facturar”</li><li>Verificar en la línea de la Orden que no tenga Cantidades facturadas</li><li>Ver que Regla de facturación tiene la misma:</li></ul><div class="custom-container note"><p class="custom-container-title">Nota</p><p>Si la regla de facturacion es &quot;Despues de entrega&quot; entonces la cantidad entregada de la linea debe ser mayor a la facturada</p></div><div class="custom-container note"><p class="custom-container-title">Nota</p><p>Si la regla de facturacion NO es &quot;Despues de entrega&quot; entonces la cant. facturada debe ser distinta a la cant ordenada</p></div><h3 id="¿que-signifirca-este-mensaje-can-t-find-bank-account-al-completar-una-orden-de-venta" tabindex="-1"><a class="header-anchor" href="#¿que-signifirca-este-mensaje-can-t-find-bank-account-al-completar-una-orden-de-venta" aria-hidden="true">#</a> ¿Qué signifirca este mensaje: “Can’t find Bank Account” al completar una Orden de Venta?</h3><p>El problema es que para  este tipo de Orden de Venta se realizará la Factura y el Pago de manera automática. Si la misma es generada desde la ventana de Orden de Venta puede que no encuentre Punto de Venta por lo tanto no tendrá Cuenta Bancaria definida para hacer el Cobro.</p><h3 id="¿por-que-motivo-puede-no-habilitarse-en-las-ordenes-el-boton-de-preparar-completar-ni-tampoco-en-los-procesos" tabindex="-1"><a class="header-anchor" href="#¿por-que-motivo-puede-no-habilitarse-en-las-ordenes-el-boton-de-preparar-completar-ni-tampoco-en-los-procesos" aria-hidden="true">#</a> ¿Por qué motivo puede no habilitarse en las órdenes el botón de preparar/completar ni tampoco en los procesos?</h3><p>En opción &quot;Ventana, pestaña y campo&quot;: Campo &quot;VentanaTipo&quot;, al seleccionar &quot;Transacción&quot;, habilita que se visualice el workflow al apretar los íconos flotantes de la derecha al medio.</p><p>Campo &quot;Is Document&quot; en &quot;Tabla y Columna&quot; habilita la acción de documentos en la barra de herramientas.</p><p>Puede ocurrir en algún Por algún caso que el check isDocument en C_Order esté destildado y por esto no permita completar esos Documentos.</p><h2 id="acciones" tabindex="-1"><a class="header-anchor" href="#acciones" aria-hidden="true">#</a> Acciones</h2><h3 id="¿si-reactivo-una-orden-de-honorarios-le-cambio-el-contrato-la-completo-y-recontabilizo-el-asiento-de-reconocimiento-cambia-el-contrato-en-el-asiento" tabindex="-1"><a class="header-anchor" href="#¿si-reactivo-una-orden-de-honorarios-le-cambio-el-contrato-la-completo-y-recontabilizo-el-asiento-de-reconocimiento-cambia-el-contrato-en-el-asiento" aria-hidden="true">#</a> ¿Si Reactivo una Orden de Honorarios, le cambio el Contrato, la Completo y Recontabilizo el asiento de reconocimiento, cambia el Contrato en el Asiento?</h3><p>No, el contrato no cambia.</p><p>El asiento de reconocimiento se genera desde un proceso de Reconocimiento masivo, no es el asiento del documento Orden de Venta, son documentos diferentes.</p><p>En todo caso, se tendría que también reactivar, modificar el contrato en el Asiento (Lote de Asiento Diario) y modificar ahi el Contrato de servicio. De todos modos esto es riesgoso ya que se estaría haciendo muy manual y uno se podría olvidar de algo.</p><p>Lo mejor en este caso sería realizar el ajuste de un reconocimento generando el Documento NEGATIVO que se desea corregir (IGUAL AL QUE SE GENERO MAL) y generar uno nuevo con el dato correcto.</p><h3 id="¿como-puede-igualarse-las-cantidades-ordenadas-y-entregadas-a-las-cantidades-facturadas" tabindex="-1"><a class="header-anchor" href="#¿como-puede-igualarse-las-cantidades-ordenadas-y-entregadas-a-las-cantidades-facturadas" aria-hidden="true">#</a> ¿Cómo puede igualarse las cantidades ordenadas y entregadas a las cantidades facturadas?</h3><p>Las Cantidades Facturadas y Entregadas son definidas según la o las Entregas que existan con dicha línea de orden y la o las facturas que existan con dicha línea de orden. no hay otra manera de igualarlas que generando documentos.</p><p>Diferente es “Igualar la Cantidad Ordenada a la Cantidad Entregada”.</p><p>Al Cerrar la Orden de Venta / Compra se llevan las cantidades Ordenadas a la cantidad Entregada dejando NINGUNA Cantidad Pendiente de entregar. Esto es “Cerrar una Orden”. a su vez, se actualiza el importe de la orden según la nueva Cantidad definida.</p><h3 id="¿es-posible-cambiarle-la-organizacion-a-una-orden-de-venta" tabindex="-1"><a class="header-anchor" href="#¿es-posible-cambiarle-la-organizacion-a-una-orden-de-venta" aria-hidden="true">#</a> ¿Es posible cambiarle la organización a una orden de venta?</h3><p>No se puede reactivar y cambiar la organización de una orden de venta solo reactivando y cambiando la misma ya que existen &quot;Cantidad Reservada Aplicada para dicha Organización&quot;.</p><p>Para poder modificar la orgnaización, y esto es algo que no está controlado, ya que no debería hacerse de esta manera, aunque podría realizarse siguiendo los siguientes pasos:</p><ol><li>Reactivar la Orden</li><li>Quitar la cantidad ordenada y poner 0</li><li>Complear la orden (de esta manera no habrá más ninguna Cantidad Reservada)</li><li>Reactivar la orden y ahora si cambiar la organización y poner la línea con cantidad y el precio que deseen.</li></ol><h3 id="¿es-posible-que-al-correr-el-proceso-de-generar-orden-desde-menu-o-desde-proyecto-no-se-genere-la-orden-de-compra-en-forma-automatica" tabindex="-1"><a class="header-anchor" href="#¿es-posible-que-al-correr-el-proceso-de-generar-orden-desde-menu-o-desde-proyecto-no-se-genere-la-orden-de-compra-en-forma-automatica" aria-hidden="true">#</a> ¿Es posible que al correr el proceso de Generar Orden (desde menú o desde proyecto) no se genere la orden de compra en forma automática?</h3><p>Los procesos asociados al botón &quot;Generar Orden&quot; desde el proyecto, y el proceso &quot;Generar Orden desde Proyecto&quot;, tienen el check &quot;Costo Asociado&quot; marcado en Y (SI) por defecto. Al tener marcada la Orden Venta el check &quot;Costo Asociado&quot;, es por esa razón que se crea la Orden de Compra. Para que no se genera la OC, debe destildarse el mencionado check.</p><h3 id="es-posible-en-la-ventana-definicion-de-comisiones-filtrar-solo-los-registros-del-agente-comercial-indicado-en-la-pestana-definicion-de-comision" tabindex="-1"><a class="header-anchor" href="#es-posible-en-la-ventana-definicion-de-comisiones-filtrar-solo-los-registros-del-agente-comercial-indicado-en-la-pestana-definicion-de-comision" aria-hidden="true">#</a> Es posible en la ventana Definición de comisiones filtrar solo los registros del Agente Comercial indicado en la pestaña &quot;Definición de Comisión&quot;?</h3><p>Esta acción es posible marcando en la linea de comisión el campo &quot;Comisión sólo en Ordenes Específicas&quot;. De esta forma los registros se generarán solo para el Representante de Ventas especificado.</p><h2 id="procesos" tabindex="-1"><a class="header-anchor" href="#procesos" aria-hidden="true">#</a> Procesos</h2><h3 id="¿como-anular-o-cerrar-masivamente-ordenes-de-venta" tabindex="-1"><a class="header-anchor" href="#¿como-anular-o-cerrar-masivamente-ordenes-de-venta" aria-hidden="true">#</a> ¿Cómo anular o cerrar masivamente órdenes de venta?</h3><p>Es posible accionar masivamente modificando el estado de órdenes de venta desde el proceso &quot;Procesar Órdenes en Lote&quot;. Cuenta con filtros o parámetros con el objeto de ajustar la búsqueda. El campo Estado del Documento es de llenado obligatorio. Una vez seleccionados los filtros, se realiza la búsqueda y esto permite seleccionar un registro, varios o todos. Luego se selecciona la &quot;Acción en el Documento&quot; (el estado que se desea definir para los documentos). Al presionar Ok el proceso ejecutará el cambio de estado en los documentos seleccionados.</p><h3 id="¿el-proceso-reabrir-orden-existe-solamente-para-las-ordenes-de-compra-venta" tabindex="-1"><a class="header-anchor" href="#¿el-proceso-reabrir-orden-existe-solamente-para-las-ordenes-de-compra-venta" aria-hidden="true">#</a> ¿El proceso “Reabrir Orden” existe solamente para las Órdenes de Compra/Venta?</h3><p>SI, sólo existe para las Órdenes tanto de venta como de compra (en este último caso deberá encontrarse destildado el check Transacción de Ventas).</p><h3 id="¿que-funcion-cumple-el-proceso-generar-orden-desde-linea-de-proyecto" tabindex="-1"><a class="header-anchor" href="#¿que-funcion-cumple-el-proceso-generar-orden-desde-linea-de-proyecto" aria-hidden="true">#</a> ¿Qué función cumple el Proceso &quot;Generar Orden desde Línea de Proyecto&quot;?</h3><p>Muestra líneas de proyectos a partir de las cuales se crearán las líneas de órden de venta.</p><h4 id="como-se-obtienen-los-siguientes-datos-de-columnas-desde-la-linea-de-proyecto" tabindex="-1"><a class="header-anchor" href="#como-se-obtienen-los-siguientes-datos-de-columnas-desde-la-linea-de-proyecto" aria-hidden="true">#</a> Cómo se obtienen los siguientes datos de columnas desde la línea de proyecto:</h4><ul><li><p>Cantidad a Facturar: es la cantidad comiteada menos la cantidad facturada</p></li><li><p>Porcentaje Facturado: es el importe facturado multiplicado por 100, y dividido por el importe planeado (si el importe planeado es cero el % facturado será cero)</p></li><li><p>Porcentaje a Facturar: es el % de trabajo terminado menos el % facturado</p></li><li><p>Importe a Facturar: es la cantidad a facturar multiplicado por el precio planeado</p></li></ul><p>Al procesar se debe indicar la fecha de las OV a crear y el estado para las mismas.</p><div class="custom-container note"><p class="custom-container-title">Nota</p><p>El proceso generará una Orden de Venta por cada proyecto, en el estado y fecha seleccionados</p></div><h3 id="¿cual-es-la-condicion-o-parametro-que-utiliza-el-proceso-de-generar-orden-desde-proyecto-para-crear-en-forma-automatica-la-orden-de-compra" tabindex="-1"><a class="header-anchor" href="#¿cual-es-la-condicion-o-parametro-que-utiliza-el-proceso-de-generar-orden-desde-proyecto-para-crear-en-forma-automatica-la-orden-de-compra" aria-hidden="true">#</a> ¿Cuál es la condición o parámetro que utiliza el proceso de &quot;Generar Orden desde Proyecto&quot; para crear en forma automática la Orden de Compra?</h3><p>Posee un parámetro para indicar si se debe asignar los datos de entrega directa a la Orden de Venta generada, siendo estos los datos siguientes:</p><ul><li>Check &quot;Costo Asociado&quot;</li><li>Socio Del Negocio &quot;Entrega Directa&quot;</li><li>Dirección Entrega Directa</li></ul><p>Al tener estos datos la Orden de Venta, al completarse va a generar automáticamente la Orden de Compra enlazada. Para que la OC se complete durante el proceso, se creó un configurador del sistema (el valor por defecto del configurador, en caso de no existir, es N).</p><h2 id="reportes" tabindex="-1"><a class="header-anchor" href="#reportes" aria-hidden="true">#</a> Reportes</h2><h3 id="¿cual-es-la-diferencia-entre-el-listado-de-ordenes-y-el-listado-de-ordenes-completo" tabindex="-1"><a class="header-anchor" href="#¿cual-es-la-diferencia-entre-el-listado-de-ordenes-y-el-listado-de-ordenes-completo" aria-hidden="true">#</a> ¿Cuál es la diferencia entre el Listado de Órdenes y el Listado de Órdenes completo?</h3><ul><li><p>El listado de órdenes muestra las líneas de las Órdenes, tanto Órdenes de Venta como Órdenes de Compra. indicando Transacción de Venta: SI/NO Este informe no muestra las órdenes de inversión, honorarios, comisiones.</p></li><li><p>El listado de órdenes completo muestra en detalle la totalidad de líneas de órdenes, incluyendo las de inversión, honorarios y comisiones. También se muestran datos relacionados al reconocimiento de la orden, para los casos en que la línea tenga plan de reconocimento.</p></li></ul><p>El reporte obtiene la tasa de cambio a utilizar de tipo AVERAGE, para convertir de USD a UYU, según la fecha de ejecución del reporte.</p><p>Se consideran órdenes cuyo tipo de documento no sea de nombre &quot;Descuento de Venta Paquete&quot;.</p><p>Además, se considera órdenes en estado COMPLETO cuando el tipo de documento de la orden se encuentra definido en el campo &quot;Tipo de documento para la orden&quot;, en una definición de comisión activa, y su base del cálculo es &quot;Honorarios&quot; o &quot;Comisión&quot;. Si esto no se cumple, entonces se considera el estado COMPLETO o CERRADO.</p><p>Filtros Estado:</p><p>Pendiente de Facturar: órdenes que están en Estado Completo o Cerrado con &quot;Permite Facturar = Y&quot; y &quot;Facturado completamente = NO&quot;.</p><p>Pendiente de OK para Facturar: órdenes que estén en Estado Completo o Cerrado con el check de &quot;Permite Facturar&quot; = NO, y que el tipo de documento de la orden tenga definido el campo &quot;Tipo de documento para la factura&quot; y que la orden no tenga marcado el check &quot;Factura Directa a Cliente&quot;.</p><p>Ordenes Entregadas no Facturadas: líneas de orden sin cantidad disponible para entregar y con cantidad disponible para facturar, y que el tipo de documento de la orden tenga definido el campo &quot;Tipo de documento para la factura&quot;.</p><p>Ordenes Facturadas no Entregadas: líneas de orden con cantidad disponible para entregar y sin cantidad disponible para facturar.</p>',58)],d={},t=(0,o(13860).Z)(d,[["render",function(e,a){return(0,n.wg)(),(0,n.iD)("div",null,r)}]])},60598:(e,a,o)=>{o.r(a),o.d(a,{data:()=>n});const n=JSON.parse('{"key":"v-b6fa4834","path":"/docs/frequently-asked-questions/orders.html","title":"Gestión de Órdenes","lang":"es-ES","frontmatter":{"title":"Gestión de Órdenes","category":["Documentation"],"star":9,"sticky":9,"article":false,"summary":"Mantenimientos ¿Qué es un split? Split es un proceso masivo de reparto de ingresos en cada Contrato según la definición de Split que tenga. En el proceso de Split se generan cálcul","head":[["meta",{"property":"og:url","content":"https://ayuda.solopapp.com/docs/frequently-asked-questions/orders.html"}],["meta",{"property":"og:title","content":"Gestión de Órdenes"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2024-05-22T20:17:24.000Z"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"article:modified_time","content":"2024-05-22T20:17:24.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Mantenimientos","slug":"mantenimientos","children":[{"level":3,"title":"¿Qué es un split?","slug":"¿que-es-un-split","children":[]},{"level":3,"title":"¿Por que motivo no se visualiza una Orden de Venta para Facturar?","slug":"¿por-que-motivo-no-se-visualiza-una-orden-de-venta-para-facturar","children":[]},{"level":3,"title":"¿Qué signifirca este mensaje: “Can’t find Bank Account” al completar una Orden de Venta?","slug":"¿que-signifirca-este-mensaje-can-t-find-bank-account-al-completar-una-orden-de-venta","children":[]},{"level":3,"title":"¿Por qué motivo puede no habilitarse en las órdenes el botón de preparar/completar ni tampoco en los procesos?","slug":"¿por-que-motivo-puede-no-habilitarse-en-las-ordenes-el-boton-de-preparar-completar-ni-tampoco-en-los-procesos","children":[]}]},{"level":2,"title":"Acciones","slug":"acciones","children":[{"level":3,"title":"¿Si Reactivo una Orden de Honorarios, le cambio el Contrato, la Completo y Recontabilizo el asiento de reconocimiento, cambia el Contrato en el Asiento?","slug":"¿si-reactivo-una-orden-de-honorarios-le-cambio-el-contrato-la-completo-y-recontabilizo-el-asiento-de-reconocimiento-cambia-el-contrato-en-el-asiento","children":[]},{"level":3,"title":"¿Cómo puede igualarse las cantidades ordenadas y entregadas a las cantidades facturadas?","slug":"¿como-puede-igualarse-las-cantidades-ordenadas-y-entregadas-a-las-cantidades-facturadas","children":[]},{"level":3,"title":"¿Es posible cambiarle la organización a una orden de venta?","slug":"¿es-posible-cambiarle-la-organizacion-a-una-orden-de-venta","children":[]},{"level":3,"title":"¿Es posible que al correr el proceso de Generar Orden (desde menú o desde proyecto) no se genere la orden de compra en forma automática?","slug":"¿es-posible-que-al-correr-el-proceso-de-generar-orden-desde-menu-o-desde-proyecto-no-se-genere-la-orden-de-compra-en-forma-automatica","children":[]},{"level":3,"title":"Es posible en la ventana Definición de comisiones filtrar solo los registros del Agente Comercial indicado en la pestaña \\"Definición de Comisión\\"?","slug":"es-posible-en-la-ventana-definicion-de-comisiones-filtrar-solo-los-registros-del-agente-comercial-indicado-en-la-pestana-definicion-de-comision","children":[]}]},{"level":2,"title":"Procesos","slug":"procesos","children":[{"level":3,"title":"¿Cómo anular o cerrar masivamente órdenes de venta?","slug":"¿como-anular-o-cerrar-masivamente-ordenes-de-venta","children":[]},{"level":3,"title":"¿El proceso “Reabrir Orden” existe solamente para las Órdenes de Compra/Venta?","slug":"¿el-proceso-reabrir-orden-existe-solamente-para-las-ordenes-de-compra-venta","children":[]},{"level":3,"title":"¿Qué función cumple el Proceso \\"Generar Orden desde Línea de Proyecto\\"?","slug":"¿que-funcion-cumple-el-proceso-generar-orden-desde-linea-de-proyecto","children":[]},{"level":3,"title":"¿Cuál es la condición o parámetro que utiliza el proceso de \\"Generar Orden desde Proyecto\\" para crear en forma automática la Orden de Compra?","slug":"¿cual-es-la-condicion-o-parametro-que-utiliza-el-proceso-de-generar-orden-desde-proyecto-para-crear-en-forma-automatica-la-orden-de-compra","children":[]}]},{"level":2,"title":"Reportes","slug":"reportes","children":[{"level":3,"title":"¿Cuál es la diferencia entre el Listado de Órdenes y el Listado de Órdenes completo?","slug":"¿cual-es-la-diferencia-entre-el-listado-de-ordenes-y-el-listado-de-ordenes-completo","children":[]}]}],"git":{"createdTime":1705956280000,"updatedTime":1716409044000,"contributors":[{"name":"mgarciaQ76","email":"139590879+mgarciaQ76@users.noreply.github.com","commits":8}]},"readingTime":{"minutes":4.99,"words":1498},"filePathRelative":"docs/frequently-asked-questions/orders.md","localizedDate":"22 de enero de 2024"}')}}]);