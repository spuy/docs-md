"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4792],{18599:(e,a,o)=>{o.r(a),o.d(a,{default:()=>c});var n=o(78e3);const r=[(0,n.uE)('<h2 id="acciones" tabindex="-1"><a class="header-anchor" href="#acciones" aria-hidden="true">#</a> Acciones</h2><h3 id="gestion-de-cheques-diferidos" tabindex="-1"><a class="header-anchor" href="#gestion-de-cheques-diferidos" aria-hidden="true">#</a> Gestión de Cheques Diferidos</h3><h3 id="libretas-resmas-de-cheques-propios" tabindex="-1"><a class="header-anchor" href="#libretas-resmas-de-cheques-propios" aria-hidden="true">#</a> Libretas/Resmas de Cheques Propios</h3><p>Cómo primer paso para emitir cheques manuales en libretas, se deberán crear las libretas/resmas en el sistema, así como las secuencias para las mismas en las ventanas “Libreta/Resma Cheques” y “Secuencia de Documentos Controlados”. Se debe generar un nuevo registro en la ventana “Libreta/Resma Cheques”, completando el Nombre y la cuenta bancaria de la misma.</p><ol><li>Navegar en el campo “Numeración de Libreta”, abriendo la ventana Secuencia de Documentos Controlados.</li><li>Aquí se debe ingresar el nombre, descripción opcional, número de inicio y fin de la libreta, y si fuera necesario un sufijo o prefijo para la numeración.</li><li>Guardar el registro, mediante el botón “Generar Líneas”</li><li>De regreso en la ventana de libreta/resma de cheques, se debe ingresar el nombre, nombre a ser impreso, cuenta bancaria y la secuencia del documento (definida anteriormente).</li></ol><p>En la pestaña “Cheques” se visualiza el estado de los mismos.</p><h3 id="cheque-diferido-por-pagar" tabindex="-1"><a class="header-anchor" href="#cheque-diferido-por-pagar" aria-hidden="true">#</a> Cheque Diferido Por Pagar</h3><p>La emisión de cheques diferidos propios se debe realizar mediante la ventana “Cheque Diferido Por Pagar”.  En el cabezal de la misma se deberá completar los siguientes campos:</p><p>Libreta, Nro. Cheque, Fecha Emisión, Socio del Negocio, Dirección del Socio de Negocio.</p><p>Luego, debe ingresar a la pestaña embebida y abrir una “Línea” accionando Nuevo, clickeando en la línea, se debe ingresar el importe del cheque (el Cargo aparecerá de manera predeterminada).</p><h3 id="anular-un-cheque-diferido-por-pagar" tabindex="-1"><a class="header-anchor" href="#anular-un-cheque-diferido-por-pagar" aria-hidden="true">#</a> Anular un cheque diferido por pagar</h3><p>Para anular un cheque diferido por pagar el mismo NO debe estar en Estado de Cheque &quot;Entregado&quot;.</p><p>El estado del cheque se modifica cuando el mismo se &quot;Entrega&quot; en un Recibo de Pago.</p><p>Para anular el cheque primero hay que anular el recibo y luego si permitirá anular el Cheque diferido por pagar.</p><h3 id="deposito-de-un-cheque-diferido" tabindex="-1"><a class="header-anchor" href="#deposito-de-un-cheque-diferido" aria-hidden="true">#</a> Depósito de un cheque diferido</h3><p>Para hacer un depósito de cheque diferido vamos a la ventana “Depósito de cheques” aplicamos los filtros que deseemos aplicar y realizamos la búsqueda “Smart browser”.</p><p>Luego seleccionamos los cheques a depositar indicando la Cuenta bancaria destino y la Fecha de la transacción y hacemos click en la opción “OK”.</p><h3 id="check-conciliado-al-anular-un-pago-cobro" tabindex="-1"><a class="header-anchor" href="#check-conciliado-al-anular-un-pago-cobro" aria-hidden="true">#</a> Check Conciliado al Anular un Pago/Cobro</h3><p>Al anularse un depósito de cheque de tercero, al reversar el documento se consulta si para el payment hay una linea de conciliación con dicho payment, si no la hay entonces se le marca el check de conciliado a ambos documentos.</p><h3 id="rechazo-de-cheque" tabindex="-1"><a class="header-anchor" href="#rechazo-de-cheque" aria-hidden="true">#</a> Rechazo de Cheque</h3><p>Para hacer un rechazo de un pago/cobro se debe utilizar el siguiente proceso:</p><p>En el mismo se debe indicar el tipo de documento de rechazo y la fecha.</p><p>En este caso se indicó que el nuevo cheque es el 1235, al momento de hacer el depósito.</p><h3 id="cuando-se-crea-un-cheque-diferido-por-cobrar-¿que-banco-se-define" tabindex="-1"><a class="header-anchor" href="#cuando-se-crea-un-cheque-diferido-por-cobrar-¿que-banco-se-define" aria-hidden="true">#</a> Cuándo se crea un Cheque Diferido por Cobrar ¿Qué BANCO se define?</h3><p>Se define un Banco, no una Cuenta Bancaria.</p><p>El banco que se define es el del “CHEQUE DIFERIDO” que el cliente nos está entregando.</p><p>Las cuentas bancarias son con Nro de cuenta y no es necesario al momento de crear un cheque diferido del cliente.</p><p>Ahora cuando se deba depositar este cheque diferido si necesitaremos saber exactamente la cuenta bancaria NUESTRA donde se debe depositar.</p><h3 id="¿como-se-si-una-cuenta-bancaria-es-propia-o-de-un-cliente" tabindex="-1"><a class="header-anchor" href="#¿como-se-si-una-cuenta-bancaria-es-propia-o-de-un-cliente" aria-hidden="true">#</a> ¿Cómo sé si una cuenta bancaria es propia o de un cliente?</h3><p>Todas las cuentas bancarias esas son propias.</p><p>Las Cuentas bancarias del Cliente se definen en la ventana del SDN, pestaña Cuenta bancaria</p><h3 id="¿en-que-afecta-cambiarle-el-numero-o-nombre-a-una-cuenta-contable" tabindex="-1"><a class="header-anchor" href="#¿en-que-afecta-cambiarle-el-numero-o-nombre-a-una-cuenta-contable" aria-hidden="true">#</a> ¿En qué afecta cambiarle el número o nombre a una cuenta contable?</h3><p>Los registros y las definiciones se rigen por ID de cuenta, no por nombre ni número; lo mismo con los SDN, Productos, etc</p><p>Como las cuentas se manejan por ID, y no por el número ( a diferencia de Memory por ejemplo); cambiarle el número o el nombre no afecta en nada en toda la definición, el histórico va a pasar a ese número o nombre también.</p><h3 id="¿que-socio-del-negocio-se-debe-definir-si-se-quiere-hacer-una-transferencia-entre-cuentas-propias" tabindex="-1"><a class="header-anchor" href="#¿que-socio-del-negocio-se-debe-definir-si-se-quiere-hacer-una-transferencia-entre-cuentas-propias" aria-hidden="true">#</a> ¿Qué Socio del Negocio se debe definir si se quiere hacer una transferencia entre cuentas propias?</h3><p>Se debería definir el Socio del Negocio definido en cada Organización. Si no tiene un Socio del Negocio creado con el nombre de la Organización debería generarlo para estos casos.</p><h3 id="¿como-encontrar-un-pago-en-una-conciliacion" tabindex="-1"><a class="header-anchor" href="#¿como-encontrar-un-pago-en-una-conciliacion" aria-hidden="true">#</a> ¿Cómo encontrar un pago en una conciliación?</h3><p>Desde la conciliación: Para buscarlo hay que saber en qué Línea de la Conciliación está el Pago, luego ese nro. se puede ver en la descripción.</p><p>Desde el Pago: si el pago está conciliado entonces se podría visualizar la la línea de Conciliación donde se encuentra conciliado en la pestaña “Bank Statement Line” en la ventana Pago/Cobro.</p><p>no se puede reactivar y cambiar la organización de una orden de venta reactivando y cambiando la misma ya que existen &quot;Cantidad Reservada Aplicada para dicha Organización&quot; Para poder modificar la orgnaización, y esto es algo que no está controlado ya que no debería hacerse de esta manera, aunque podría siguiendo los siguientes pasos:</p><ol><li>Reactivar la Orden</li><li>quitar la cantidad ordenada y poner 0</li><li>Complear la orden (de esta manera no habrá más ninguna Cantidad Reservada)</li><li>Reactivar la orden y ahora si cambiar la organización y poner la línea con cantidad y el precio que deseen.</li></ol><h3 id="¿-cual-es-el-comportamiento-del-sistema-cuando-anulo-un-cobro-que-se-encuentra-en-una-linea-de-conciliacion" tabindex="-1"><a class="header-anchor" href="#¿-cual-es-el-comportamiento-del-sistema-cuando-anulo-un-cobro-que-se-encuentra-en-una-linea-de-conciliacion" aria-hidden="true">#</a> ¿ Cuál es el comportamiento del sistema cuando anulo un cobro que se encuentra en una línea de conciliación?</h3><p>cuando se anula un pago/cobro que se encuentra en una conciliación bancaria que no está completa, tanto el pago/cobro anulado como el reversado quedarán con el check de &quot;Conciliado&quot; = N</p><p>Si la conciliación está completa, el pago/cobro anulado quedará con el check &quot;Conciliado&quot; = Y, y el reversado con &quot;Conciliado&quot; = N</p><p>Este comportamiento es el deseado, debido a que de no realizarse de esta manera (o sea, si se marcaran como Conciliado = Y) el saldo de la conciliación quedaría mal a menos que se borre la línea manualmente.</p><h3 id="¿como-se-puede-sortear-los-controles-de-cuenta-controlada-en-los-asientos-diarios" tabindex="-1"><a class="header-anchor" href="#¿como-se-puede-sortear-los-controles-de-cuenta-controlada-en-los-asientos-diarios" aria-hidden="true">#</a> ¿Cómo se puede sortear los controles de Cuenta Controlada en los asientos diarios?</h3><p>Para poder sortear los controles de &quot;Cuenta Controlada&quot; en los asientos diarios en Lote se debe marcar en Y el check de Apertura/Cierre de Ejercicio. CUIDADO esto no se debe realizar sin verificación de un consultor.</p><h3 id="¿se-puede-rechazar-un-cheque-diferido-de-tercero-como-un-cheque-diferido-propio" tabindex="-1"><a class="header-anchor" href="#¿se-puede-rechazar-un-cheque-diferido-de-tercero-como-un-cheque-diferido-propio" aria-hidden="true">#</a> ¿Se puede rechazar un cheque diferido de tercero como un cheque diferido propio?</h3><p>No es posible, pero no por ser de terceros sino por ser “diferido”. Para Rechazar un cheque hay que primero depositarlo, el cheque diferido en si no se deposita sino que se genera otro tipo de documento de “Depósito de cheque” que es quién se deposita (el Depósito actúa como un PAGO/COBRO y un Cheque Diferido actúa como una FACTURA). Para rechazar un Ch. Diferido habría que primero depositarlo y lo que se rechazaría sería el Depósito, no el cheque diferido.</p><h2 id="procesos" tabindex="-1"><a class="header-anchor" href="#procesos" aria-hidden="true">#</a> Procesos</h2><h3 id="debito-automatico-de-cheques-diferidos-por-pagar" tabindex="-1"><a class="header-anchor" href="#debito-automatico-de-cheques-diferidos-por-pagar" aria-hidden="true">#</a> Débito automático de cheques diferidos por Pagar</h3><p>Proceso que corre en la noche para generar los Débitos de los cheques diferidos por pagar ya entregados.</p><h3 id="conciliacion-de-cheque-comun-devuelto" tabindex="-1"><a class="header-anchor" href="#conciliacion-de-cheque-comun-devuelto" aria-hidden="true">#</a> Conciliación de Cheque Común Devuelto</h3><p>Cheque a Pagar</p><p>Se debe anular el pago del cheque original.</p><p>Se concilia el “Rechazo del Cheque” que está positivo con la “Reversión”  del Pago.</p><p>El asiento se neutraliza.</p><h3 id="conciliacion-bancaria" tabindex="-1"><a class="header-anchor" href="#conciliacion-bancaria" aria-hidden="true">#</a> Conciliación Bancaria</h3><ul><li>Una conciliación sube y se baja con el pago que tenga asignado.</li></ul><p>Al navegar al pago deberíamos ver el movimiento de la cuenta que deja en 0 a la misma.</p><div class="custom-container note"><p class="custom-container-title">Nota</p><p>El Saldo Inicial no permite editarlo con 0. El campo saldo inicial se puede modificar a mano, pero nunca podrá ser cero.</p></div><p>En la conciliación, al seleccionar la cuenta bancaria, el campo &quot;Saldo Inicial&quot; se carga automáticamente el importe del campo &quot;Saldo Actual&quot; de la cuenta bancaria (pestaña Cuenta de la ventana Banco).</p><p>El “Saldo Actual” de la Cuenta Bancaria  (pestaña Cuenta de la ventana Banco).</p><p>se calcula con los saldos de las conciliaciones Completas o Cerradas (que es un estado posterior a Completo).</p><div class="custom-container note"><p class="custom-container-title">Nota</p><p>Es importante que no haya conciliaciones en estado CERRADO, ya que pueden no ser consideradas en los reportes.</p></div><h3 id="¿en-el-proceso-de-generar-cobro-contado-en-recibo-de-cobro-en-el-campo-cuenta-bancaria-aparecen-las-cuentas-bancarias-de-los-clientes-o-propias-tambien" tabindex="-1"><a class="header-anchor" href="#¿en-el-proceso-de-generar-cobro-contado-en-recibo-de-cobro-en-el-campo-cuenta-bancaria-aparecen-las-cuentas-bancarias-de-los-clientes-o-propias-tambien" aria-hidden="true">#</a> ¿En el proceso de “Generar Cobro Contado” en Recibo de Cobro, en el campo “Cuenta bancaria” aparecen las cuentas bancarias de los clientes o propias también?</h3><p>Aparecen Cuentas Bancarias propias. Las cuentas Bancarias de Clientes no se definen de esta manera.</p><p>Si bien se puede manejar las cuentas bancarias de clientes, esto es desde la pestaña “Cuenta Bancaria” de la ventana del SDN.</p><p>Todas esas cuentas bancarias son las de la Organización. Es de donde se envía o desde donde se extrae el dinero de la empresa.</p><h3 id="¿que-proceso-debe-utilizarse-para-hacer-una-transferencia" tabindex="-1"><a class="header-anchor" href="#¿que-proceso-debe-utilizarse-para-hacer-una-transferencia" aria-hidden="true">#</a> ¿Qué proceso debe utilizarse para hacer una transferencia?</h3><p>Este proceso es &quot;Transferencia bancaria multimoneda&quot;.</p><h3 id="¿en-el-proceso-transferencia-bancaria-multimoneda-que-numero-debera-definirse-en-nro-documento-destino" tabindex="-1"><a class="header-anchor" href="#¿en-el-proceso-transferencia-bancaria-multimoneda-que-numero-debera-definirse-en-nro-documento-destino" aria-hidden="true">#</a> ¿En el proceso &quot;Transferencia bancaria multimoneda&quot; Qué número deberá definirse en nro. Documento destino?</h3><p>El nro. que debe definirse en este campo es el mismo que se defina en el campo anterior “nro Documento origen”. para mayor facilidad de encontrar el Pago y el Cobro que se generará se sugiere definir el mismo número tanto de origen como de destino.</p><h3 id="transferencia-bancaria-entre-bancos-propios-con-cobro-sin-conciliar" tabindex="-1"><a class="header-anchor" href="#transferencia-bancaria-entre-bancos-propios-con-cobro-sin-conciliar" aria-hidden="true">#</a> Transferencia bancaria entre bancos propios con cobro &quot;sin conciliar&quot;</h3><p>Puede existir la posibilidad de que en la transferencia solo se realice la &quot;Conciliación&quot; del &quot;PAGO&quot;, y que no deseen conciliar el &quot;COBRO&quot;. Cuando se requiere &quot;Contabilizar&quot; el Cobro (de la transferencia) en una cuenta contable del &quot;BANCO&quot; y no una cuenta de Tránsito como lo es &quot;CHEQUES EN TRANSITO&quot; (cuenta puente) pero no lo quieren CONCILIAR -&gt; entonces deben definir la cuenta contable del banco en el campo de &quot;Pagos sin Conciliar&quot; y ahi quedará correctamente contabilizado (en ventana Banco, pestaña Contabilidad).</p><h2 id="reportes" tabindex="-1"><a class="header-anchor" href="#reportes" aria-hidden="true">#</a> Reportes</h2><h3 id="¿que-funcionalidad-tiene-la-ventana-informe-financiero" tabindex="-1"><a class="header-anchor" href="#¿que-funcionalidad-tiene-la-ventana-informe-financiero" aria-hidden="true">#</a> ¿Qué funcionalidad tiene la ventana Informe Financiero?</h3><p>Desde esta ventana se podrán emitir Informes financieros como Balances, Balancetes, Centro de Costos, etc.</p><p>Ejemplo de Informes Financieros</p><ul><li>Balance Mes y Acumulado</li><li>Informe por Centro de Costos Acumulado</li><li>Informe por Centro de Costos MES</li></ul><h3 id="¿por-que-motivo-puede-ocurrir-que-en-el-balance-comparativo-mensual-falten-columnas-de-ciertos-meses" tabindex="-1"><a class="header-anchor" href="#¿por-que-motivo-puede-ocurrir-que-en-el-balance-comparativo-mensual-falten-columnas-de-ciertos-meses" aria-hidden="true">#</a> ¿Por qué motivo puede ocurrir que en el Balance comparativo mensual falten columnas de ciertos meses?</h3><p>De manera aleatoria puede ocurrir que al solicitar el mismo reporte en diferentes fechas quede guardada en memoria la búsqueda anterior y en la nueva búsqueda le falten columnas de meses. Para corregirlo debería bastar con una de las siguientes opciones:</p><ol><li>Refrescar directo el reporte desde el formato HTML</li><li>Borrar Caché y volver a generar el reporte</li><li>Salir y volver a ingresar al sistema</li></ol><h3 id="¿como-puedo-emitir-un-balance-mensual" tabindex="-1"><a class="header-anchor" href="#¿como-puedo-emitir-un-balance-mensual" aria-hidden="true">#</a> ¿Cómo puedo emitir un balance mensual ?</h3><p>Los balances mensuales se generan desde la ventana “Informe financiero&quot;.</p><h3 id="¿que-representa-la-columna-total-en-un-balance-mensual" tabindex="-1"><a class="header-anchor" href="#¿que-representa-la-columna-total-en-un-balance-mensual" aria-hidden="true">#</a> ¿Qué representa la columna Total en un Balance mensual ?</h3><p>Esta columna representa el total acumulado de la cuenta, es decir, el saldo del mes para el que generamos el balance más el saldo anterior.</p><h3 id="¿como-puedo-visualizar-el-mayor-contable-de-una-cuenta" tabindex="-1"><a class="header-anchor" href="#¿como-puedo-visualizar-el-mayor-contable-de-una-cuenta" aria-hidden="true">#</a> ¿Cómo puedo visualizar el Mayor contable de una cuenta?</h3><p>El reporte que se utiliza para visualizar el Mayor contable de una cuenta es <strong>“Balance de prueba</strong>”.</p><p>¿Cómo se compone el Mayor contable de la cuenta de activo “Cuentas por Cobrar Comerciales”?</p><p>Los débitos del Mayor contable de esta cuenta se componen por:.</p><ol><li>Un Saldo inicial,</li><li>Las Facturas</li><li>Los Reversos de facturas anuladas (en negativo)</li><li>Parte positiva de las Asignaciones</li></ol><p>Los créditos se componen por :</p><ol><li>Los Cobros</li><li>Parte negativa de las Asignaciones.</li></ol><h3 id="¿-que-representan-los-saldos-iniciales-que-aparecen-en-los-mayores" tabindex="-1"><a class="header-anchor" href="#¿-que-representan-los-saldos-iniciales-que-aparecen-en-los-mayores" aria-hidden="true">#</a> ¿ Qué representan los Saldos iniciales que aparecen en los mayores?</h3><p>Representan el Saldo acumulado dentro del ejercicio para el cual emito el Mayor, es decir, si solicito un Mayor para el período 01/04 - 30/04 figurará en éste un Saldo inicial que corresponderá al saldo acumulado del 01/01 al 31/03.</p><h3 id="¿como-puedo-obtener-un-reporte-de-las-ventas-o-de-la-facturacion-mensual" tabindex="-1"><a class="header-anchor" href="#¿como-puedo-obtener-un-reporte-de-las-ventas-o-de-la-facturacion-mensual" aria-hidden="true">#</a> ¿Cómo puedo obtener un reporte de las Ventas o de la Facturación mensual?</h3><p>Esta información puede obtenerse mediante el reporte “Diario Compras y Ventas” marcando el check de Transacción de Ventas,.</p><p>¿Cómo hacer el depósito de un cheque diferido?</p><p>Para hacer un depósito de cheque diferido vamos a la ventana “Depósito de cheques” aplicamos los filtros que deseemos aplicar y realizamos la búsqueda “Smart browser”.</p><p>Luego seleccionamos los cheques a depositar indicando la Cuenta bancaria destino y la Fecha de la transacción y hacemos click en la opción “OK”.</p>',101)],i={},c=(0,o(13860).Z)(i,[["render",function(e,a){return(0,n.wg)(),(0,n.iD)("div",null,r)}]])},46477:(e,a,o)=>{o.r(a),o.d(a,{data:()=>n});const n=JSON.parse('{"key":"v-0132c484","path":"/docs/frequently-asked-questions/financial-management.html","title":"Gestión Financiera","lang":"es-ES","frontmatter":{"title":"Gestión Financiera","category":["Documentation"],"star":9,"sticky":9,"article":false,"summary":"Acciones Gestión de Cheques Diferidos Libretas/Resmas de Cheques Propios Cómo primer paso para emitir cheques manuales en libretas, se deberán crear las libretas/resmas en el siste","head":[["meta",{"property":"og:url","content":"https://ayuda.solopapp.com/docs/frequently-asked-questions/financial-management.html"}],["meta",{"property":"og:title","content":"Gestión Financiera"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2024-04-24T20:57:08.000Z"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"article:modified_time","content":"2024-04-24T20:57:08.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Acciones","slug":"acciones","children":[{"level":3,"title":"Gestión de Cheques Diferidos","slug":"gestion-de-cheques-diferidos","children":[]},{"level":3,"title":"Libretas/Resmas de Cheques Propios","slug":"libretas-resmas-de-cheques-propios","children":[]},{"level":3,"title":"Cheque Diferido Por Pagar","slug":"cheque-diferido-por-pagar","children":[]},{"level":3,"title":"Anular un cheque diferido por pagar","slug":"anular-un-cheque-diferido-por-pagar","children":[]},{"level":3,"title":"Depósito de un cheque diferido","slug":"deposito-de-un-cheque-diferido","children":[]},{"level":3,"title":"Check Conciliado al Anular un Pago/Cobro","slug":"check-conciliado-al-anular-un-pago-cobro","children":[]},{"level":3,"title":"Rechazo de Cheque","slug":"rechazo-de-cheque","children":[]},{"level":3,"title":"Cuándo se crea un Cheque Diferido por Cobrar ¿Qué BANCO se define?","slug":"cuando-se-crea-un-cheque-diferido-por-cobrar-¿que-banco-se-define","children":[]},{"level":3,"title":"¿Cómo sé si una cuenta bancaria es propia o de un cliente?","slug":"¿como-se-si-una-cuenta-bancaria-es-propia-o-de-un-cliente","children":[]},{"level":3,"title":"¿En qué afecta cambiarle el número o nombre a una cuenta contable?","slug":"¿en-que-afecta-cambiarle-el-numero-o-nombre-a-una-cuenta-contable","children":[]},{"level":3,"title":"¿Qué Socio del Negocio se debe definir si se quiere hacer una transferencia entre cuentas propias?","slug":"¿que-socio-del-negocio-se-debe-definir-si-se-quiere-hacer-una-transferencia-entre-cuentas-propias","children":[]},{"level":3,"title":"¿Cómo encontrar un pago en una conciliación?","slug":"¿como-encontrar-un-pago-en-una-conciliacion","children":[]},{"level":3,"title":"¿ Cuál es el comportamiento del sistema cuando anulo un cobro que se encuentra en una línea de conciliación?","slug":"¿-cual-es-el-comportamiento-del-sistema-cuando-anulo-un-cobro-que-se-encuentra-en-una-linea-de-conciliacion","children":[]},{"level":3,"title":"¿Cómo se puede sortear los controles de Cuenta Controlada en los asientos diarios?","slug":"¿como-se-puede-sortear-los-controles-de-cuenta-controlada-en-los-asientos-diarios","children":[]},{"level":3,"title":"¿Se puede rechazar un cheque diferido de tercero como un cheque diferido propio?","slug":"¿se-puede-rechazar-un-cheque-diferido-de-tercero-como-un-cheque-diferido-propio","children":[]}]},{"level":2,"title":"Procesos","slug":"procesos","children":[{"level":3,"title":"Débito automático de cheques diferidos por Pagar","slug":"debito-automatico-de-cheques-diferidos-por-pagar","children":[]},{"level":3,"title":"Conciliación de Cheque Común Devuelto","slug":"conciliacion-de-cheque-comun-devuelto","children":[]},{"level":3,"title":"Conciliación Bancaria","slug":"conciliacion-bancaria","children":[]},{"level":3,"title":"¿En el proceso de “Generar Cobro Contado” en Recibo de Cobro, en el campo “Cuenta bancaria” aparecen las cuentas bancarias de los clientes o propias también?","slug":"¿en-el-proceso-de-generar-cobro-contado-en-recibo-de-cobro-en-el-campo-cuenta-bancaria-aparecen-las-cuentas-bancarias-de-los-clientes-o-propias-tambien","children":[]},{"level":3,"title":"¿Qué proceso debe utilizarse para hacer una transferencia?","slug":"¿que-proceso-debe-utilizarse-para-hacer-una-transferencia","children":[]},{"level":3,"title":"¿En el proceso \\"Transferencia bancaria multimoneda\\" Qué número deberá definirse en nro. Documento destino?","slug":"¿en-el-proceso-transferencia-bancaria-multimoneda-que-numero-debera-definirse-en-nro-documento-destino","children":[]},{"level":3,"title":"Transferencia bancaria entre bancos propios con cobro \\"sin conciliar\\"","slug":"transferencia-bancaria-entre-bancos-propios-con-cobro-sin-conciliar","children":[]}]},{"level":2,"title":"Reportes","slug":"reportes","children":[{"level":3,"title":"¿Qué funcionalidad tiene la ventana Informe Financiero?","slug":"¿que-funcionalidad-tiene-la-ventana-informe-financiero","children":[]},{"level":3,"title":"¿Por qué motivo puede ocurrir que en el Balance comparativo mensual falten columnas de ciertos meses?","slug":"¿por-que-motivo-puede-ocurrir-que-en-el-balance-comparativo-mensual-falten-columnas-de-ciertos-meses","children":[]},{"level":3,"title":"¿Cómo puedo emitir un balance mensual ?","slug":"¿como-puedo-emitir-un-balance-mensual","children":[]},{"level":3,"title":"¿Qué representa la columna Total en un Balance mensual ?","slug":"¿que-representa-la-columna-total-en-un-balance-mensual","children":[]},{"level":3,"title":"¿Cómo puedo visualizar el Mayor contable de una cuenta?","slug":"¿como-puedo-visualizar-el-mayor-contable-de-una-cuenta","children":[]},{"level":3,"title":"¿ Qué representan los Saldos iniciales que aparecen en los mayores?","slug":"¿-que-representan-los-saldos-iniciales-que-aparecen-en-los-mayores","children":[]},{"level":3,"title":"¿Cómo puedo obtener un reporte de las Ventas o de la Facturación mensual?","slug":"¿como-puedo-obtener-un-reporte-de-las-ventas-o-de-la-facturacion-mensual","children":[]}]}],"git":{"createdTime":1692111508000,"updatedTime":1713992228000,"contributors":[{"name":"mgarciaQ76","email":"139590879+mgarciaQ76@users.noreply.github.com","commits":9}]},"readingTime":{"minutes":6.59,"words":1977},"filePathRelative":"docs/frequently-asked-questions/financial-management.md","localizedDate":"15 de agosto de 2023"}')}}]);