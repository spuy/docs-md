"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6071],{17386:(e,a,o)=>{o.r(a),o.d(a,{default:()=>l});var r=o(78e3);const i=[(0,r.uE)('<h3 id="analizando-la-diferencia-de-cambio-no-realizada" tabindex="-1"><a class="header-anchor" href="#analizando-la-diferencia-de-cambio-no-realizada" aria-hidden="true">#</a> <strong>Analizando la Diferencia de Cambio no Realizada</strong></h3><p>El proceso para realizar la verificación Contable con los Saldos Abiertos que existe en los Auxiliares se puede realizar mediante los siguientes pasos:</p><h3 id="verificacion-del-ajuste-cuentas-por-pagar-y-por-cobrar" tabindex="-1"><a class="header-anchor" href="#verificacion-del-ajuste-cuentas-por-pagar-y-por-cobrar" aria-hidden="true">#</a> <strong>Verificación del Ajuste Cuentas por Pagar y por Cobrar</strong></h3><ol><li>Verificar que todos dan igual según Importe Fuente (Opcional) <ol><li>Obtención de Reporte de Saldos Abiertos cuentas por Cobrar</li><li>Balance de Prueba Cuenta “Cuentas por Cobrar Comerciales”</li><li>Obtención de Reporte de Saldos Abiertos cuentas por Pagar</li><li>Balance de Prueba Cuenta “Cuenta por Pagar Comerciales”</li></ol></li><li>Proceso de “Ajuste de Diferencia de Cambio No Realizada” (Factura Pérdida/Ganancia No Realizada)</li><li>Verificar que da igual reportes Auxiliares y Balance <ol><li>Obtención de Reporte de Saldos Abiertos cuentas por Cobrar</li><li>Balance de Prueba Cuenta “Cuentas por Cobrar Comerciales”</li><li>Obtención de Reporte de Saldos Abiertos cuentas por Pagar</li><li>Balance de Prueba Cuenta “Cuenta por Pagar Comerciales”</li></ol></li></ol><h3 id="explicacion-del-ajuste-realizado-por-el-proceso-de-diferencia-de-cambio-no-realizada" tabindex="-1"><a class="header-anchor" href="#explicacion-del-ajuste-realizado-por-el-proceso-de-diferencia-de-cambio-no-realizada" aria-hidden="true">#</a> <strong>Explicación del Ajuste realizado por el Proceso de DIferencia de Cambio No Realizada</strong></h3><p>El proceso de diferencia de cambio No Realizada puede controlarse, para ello deberá exportar a Excel el Reporte que brinda el proceso del cálculo de Diferencia de Cambio No Realizada al momento que la ejecuta. Cuidado, este reporte presentará el cálculo realizado y no podrá obtenerse nuevamente a menos que genere el proceso una vez más, generando así el Asiento del Ajuste nuevamente.</p><p>En la planilla verá documento por documento sus aplicaciones en moneda fuente, en moneda esquema, los importes revaluados considerando la tasa de cambio seleccionada y las diferencias a revaluar.</p><h2 id="comprobacion-de-calculo-de-diferencia-de-cambio-no-realizada" tabindex="-1"><a class="header-anchor" href="#comprobacion-de-calculo-de-diferencia-de-cambio-no-realizada" aria-hidden="true">#</a> <strong>Comprobación de Cálculo de Diferencia de Cambio no Realizada</strong></h2><p>Como forma de comprobación del proceso realizado usted podrá emitir los siguientes reportes:</p><h3 id="en-documentos-por-pagar-y-documentos-por-cobrar" tabindex="-1"><a class="header-anchor" href="#en-documentos-por-pagar-y-documentos-por-cobrar" aria-hidden="true">#</a> <strong>En Documentos por Pagar y Documentos por Cobrar</strong></h3><p>Emitir Reportes de Saldos Abiertos a la Fecha del proceso de:</p><ul><li>Transacciones de Ventas incluyendo Cheques Diferidos</li><li>No Transacciones de Venta incluyendo Cheques Diferidos</li></ul><p>Considerar sólo las operaciones en Monedas Extranjeras (no hay filtro de MONEDA, las deberá excluir en una planilla externa)</p><h2 id="verificacion-de-diferencias-de-cambio-cuentas-por-pagar-y-cuentas-por-cobrar" tabindex="-1"><a class="header-anchor" href="#verificacion-de-diferencias-de-cambio-cuentas-por-pagar-y-cuentas-por-cobrar" aria-hidden="true">#</a> <strong>Verificación de Diferencias de Cambio Cuentas por Pagar y Cuentas por Cobrar</strong></h2><p>Obtener el Informe Financiero “Balancete de Cuentas Contables” a fecha de Cierre de Ejercicio</p><p>Verificación de Saldos Contables de Cuentas de Documentos:</p><p>En estos casos, las líneas de Ganancia/Pérdida por Diferencia de Cambio Realizada se realizan SIEMPRE con Moneda del Esquema Contable, de manera que no estarán clasificadas como con Moneda USD sino con UYU si su esquema contable está en UYU.</p><ol><li>Seleccione Organización</li><li>Transacción de Ventas: SI</li><li>A Fecha de cierre de fecha de Período Financiero</li><li>Con Cheques Diferidos</li></ol><ul><li><strong>Esquema Contable:</strong> Seleccionar el Esquema Contable que se quiere registrar la Diferencia de Cambio.</li><li><strong>Tipo de Conversión de Revaluación:</strong> Tipo de Conversión de la revaluación.</li><li><strong>Fecha de Revaluación:</strong> Fecha a realizar proceso</li><li><strong>CP-CC: Cuentas por Pagar:</strong> (incluye documentos a Pagar como son los cheques diferidos , Cuentas por Cobrar o ambas.</li><li><strong>Incluir Todas las Monedas:</strong> No hacer click. Dejar Vacío</li><li><strong>Moneda:</strong> Dejar Vacío</li><li><strong>Revalorización Tipo de Documento:</strong> donde genera el asiento de revaluación (GL Document)- General Ledger (Contabilidad)</li></ul><p>Dicho proceso realizará el cálculo necesario para actualizar la aplicación contable de los Saldos de todos aquellos Documentos por Cobrar y Documentos por Pagar que se encuentren Pendientes de Pago/Cobro a la fecha de Revaluación.</p><p>El Resultado lo mostrará en el Reporte de Diferencia de Cambio No Realizada detallando línea a línea los Documentos con el cálculo realizado.</p><h3 id="reporte-de-diferencia-de-cambio-documentos-por-cobrar-y-documentos-por-pagar-no-realizada" tabindex="-1"><a class="header-anchor" href="#reporte-de-diferencia-de-cambio-documentos-por-cobrar-y-documentos-por-pagar-no-realizada" aria-hidden="true">#</a> <strong>Reporte de Diferencia de Cambio Documentos por Cobrar y Documentos por Pagar no Realizada</strong></h3><p>La emisión del Reporte genera un Asiento Contable en borrador detallando línea a línea los ajustes que se estarían realizando documento por documento.</p><p>Este mismo lo podrán encontrar en la Ventana de Diario Contable, en forma de Asiento Contable</p><p>El Lote del Asiento Contable deberá completarse</p><h3 id="anular-el-asiento-de-revaluacion" tabindex="-1"><a class="header-anchor" href="#anular-el-asiento-de-revaluacion" aria-hidden="true">#</a> <strong>Anular el Asiento de Revaluación</strong></h3><p>Si desea anular un Asiento ya Completo deberá Anular y Corregir para que la fecha de anulación sea la misma que la del asiento.</p><p>CUIDADO La acción Anular y Causación crea el asiento con la fecha de hoy.</p><p>Si es necesario, puede realizar la revaluación de las cuentas de Cuentas por cobrar más de una vez durante el mismo período. La revaluación posterior en el mismo período ajusta los resultados de la revaluación anterior, y cada revalorización genera un lote de asientos de extorno automáticamente.</p><h3 id="asiento-de-revaluacion-de-cuentas-por-cobrar" tabindex="-1"><a class="header-anchor" href="#asiento-de-revaluacion-de-cuentas-por-cobrar" aria-hidden="true">#</a> <strong>Asiento de revaluación de Cuentas por Cobrar</strong></h3><p>Cuando se realiza una revaluación de Cuentas por cobrar, el sistema crea un lote de Contabilidad general con los resultados de la revaluación. El lote actualiza la cuenta de ganancia (o pérdida) no realizada especificada para la moneda con el monto de ganancia (o pérdida) calculada en el formulario</p><p>Como resultado del proceso de revaluación, el sistema calcula las ganancias y pérdidas no realizadas y crea un asiento de revaluación con inversión automática. Las ganancias y pérdidas no realizadas resultantes se registran en las cuentas del Libro que especifique</p><p>Usted especifica las cuentas en las que se publican las ganancias y pérdidas no realizadas en los recuadros Cuenta de ganancia no realizada y Cuenta de pérdida no realizada .</p>',33)],n={},l=(0,o(13860).Z)(n,[["render",function(e,a){return(0,r.wg)(),(0,r.iD)("div",null,i)}]])},80637:(e,a,o)=>{o.r(a),o.d(a,{data:()=>r});const r=JSON.parse('{"key":"v-e251fd1a","path":"/docs/accounting-management/accounting-procedures/difference-analysis.html","title":"Análisis de Diferencias","lang":"es-ES","frontmatter":{"title":"Análisis de Diferencias","category":["Documentation"],"star":9,"sticky":9,"article":false,"summary":"Analizando la Diferencia de Cambio no Realizada El proceso para realizar la verificación Contable con los Saldos Abiertos que existe en los Auxiliares se puede realizar mediante lo","head":[["meta",{"property":"og:url","content":"https://ayuda.solopapp.com/docs/accounting-management/accounting-procedures/difference-analysis.html"}],["meta",{"property":"og:title","content":"Análisis de Diferencias"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2024-02-20T20:50:58.000Z"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"article:modified_time","content":"2024-02-20T20:50:58.000Z"}]]},"excerpt":"","headers":[{"level":3,"title":"Analizando la Diferencia de Cambio no Realizada","slug":"analizando-la-diferencia-de-cambio-no-realizada","children":[]},{"level":3,"title":"Verificación del Ajuste Cuentas por Pagar y por Cobrar","slug":"verificacion-del-ajuste-cuentas-por-pagar-y-por-cobrar","children":[]},{"level":3,"title":"Explicación del Ajuste realizado por el Proceso de DIferencia de Cambio No Realizada","slug":"explicacion-del-ajuste-realizado-por-el-proceso-de-diferencia-de-cambio-no-realizada","children":[]},{"level":2,"title":"Comprobación de Cálculo de Diferencia de Cambio no Realizada","slug":"comprobacion-de-calculo-de-diferencia-de-cambio-no-realizada","children":[{"level":3,"title":"En Documentos por Pagar y Documentos por Cobrar","slug":"en-documentos-por-pagar-y-documentos-por-cobrar","children":[]}]},{"level":2,"title":"Verificación de Diferencias de Cambio Cuentas por Pagar y Cuentas por Cobrar","slug":"verificacion-de-diferencias-de-cambio-cuentas-por-pagar-y-cuentas-por-cobrar","children":[{"level":3,"title":"Reporte de Diferencia de Cambio Documentos por Cobrar y Documentos por Pagar no Realizada","slug":"reporte-de-diferencia-de-cambio-documentos-por-cobrar-y-documentos-por-pagar-no-realizada","children":[]},{"level":3,"title":"Anular el Asiento de Revaluación","slug":"anular-el-asiento-de-revaluacion","children":[]},{"level":3,"title":"Asiento de revaluación de Cuentas por Cobrar","slug":"asiento-de-revaluacion-de-cuentas-por-cobrar","children":[]}]}],"git":{"createdTime":1708462258000,"updatedTime":1708462258000,"contributors":[{"name":"mgarciaQ76","email":"139590879+mgarciaQ76@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.79,"words":838},"filePathRelative":"docs/accounting-management/accounting-procedures/difference-analysis.md","localizedDate":"20 de febrero de 2024"}')}}]);