"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7201],{19078:(e,a,n)=>{n.r(a),n.d(a,{default:()=>t});var r=n(53633);const i=[(0,r.Fv)('<h2 id="transferencia-bancaria-misma-moneda" tabindex="-1"><a class="header-anchor" href="#transferencia-bancaria-misma-moneda" aria-hidden="true">#</a> Transferencia Bancaria misma moneda</h2><p>El Proceso de Transferencia Bancaria se utiliza para debitar y acreditar simultáneamente cuentas bancarias.</p><p>Este Proceso crea de manera automática un Pago en la Cuenta Origen (que emite los fondos) y un Cobro en la Cuenta Destino (que recibe los fondos).</p><p>Estas Transferencias podrán involucrar una misma moneda debitada y acreditada o puede involucrar 2 monedas, una moneda de Origen y otra moneda de Destino. Aquí se verá la transferencia de una misma moneda, ya sea de la moneda esquema de la empresa como de cualquier otra. La Transferencia de distinta moneda se puede ver en Moneda Extranjera.</p><p><img src="/assets/img/docs/balance-management/bam-transfer1.png" alt="Transferencia Bancaria"></p><h3 id="transferencias-en-la-misma-moneda" tabindex="-1"><a class="header-anchor" href="#transferencias-en-la-misma-moneda" aria-hidden="true">#</a> Transferencias en la misma moneda</h3><ul><li><strong>Cuenta Bancaria origen:</strong> Cuenta bancaria que emite los fondos</li><li><strong>Cuenta Bancaria destino:</strong> Cuenta bancaria que recibe los fondos</li><li><strong>Socio de Negocio:</strong> Socio de Negocio involucrado en el origen de la transferencia</li><li><strong>Moneda:</strong> Moneda de la transferencia</li><li><strong>Cargo:</strong> Transferencia</li><li><strong>Nro. de Documento:</strong> Número</li><li><strong>Documento destino:</strong> Documento destino</li><li><strong>Monto:</strong> Monto transferido</li><li><strong>Descripción:</strong> Descripción, si la hubiera</li><li><strong>Fecha de la Transacción:</strong> Será también la fecha de contabilización de los documentos</li></ul><p>En el caso que la transferencia sea en una moneda diferente a la moneda de la empresa (Moneda Esquema), el sistema le solicitará también la Tasa de Cambio.</p><p>Es importante destacar que el Cargo determina el asiento contable que realizará, estipulando la cuenta puente que corresponda, por lo tanto el Cargo debe ser “Transferencia”.</p><h3 id="transferencia-bancaria-multimoneda" tabindex="-1"><a class="header-anchor" href="#transferencia-bancaria-multimoneda" aria-hidden="true">#</a> Transferencia Bancaria Multimoneda</h3><p>Desde el proceso “Transferencia Bancaria Multimoneda”, se podrá realizar una transferencia cuando las monedas de la Cuenta Bancaria origen y Cuenta Bancaria destino son diferentes, es decir, una moneda es la moneda base y la otra es una moneda extranjera.</p><p>Ejemplo: Suponga que requiere realizar una transferencia entre dos cuentas propias del mismo banco de diferente moneda, el monto transferido desde la cuenta USD es USD 1.000 y recibira la cuenta de moneda local UYU $ 30.000.</p><p>Desde el proceso de Transferencia Bancaria Multimoneda.</p><p>La transferencia realiza un Pago de la cuenta bancaria “origen” y un Cobro de la cuenta bancaria “destino”.</p><p>Esta operación debitará la cuenta bancaria USD y acreditará la cuenta Bancaria en la moneda base.</p><p>La elección del cargo “Transferencia”, determinará los asientos contables de compra y venta utilizando la cuenta puente “Diferencia Compra ME”. La diferencia de cambio correspondiente a esta operación quedará como saldo en dicha cuenta.</p><p><img src="/assets/img/docs/balance-management/bam-transfer2.png" alt="Transferencia Bancaria Multimoneda"></p><h3 id="operacion-de-cambio-de-moneda" tabindex="-1"><a class="header-anchor" href="#operacion-de-cambio-de-moneda" aria-hidden="true">#</a> Operación de Cambio de Moneda</h3><p>Para ello se utilizará la ventana Operación de Cambio</p><p>En esta ventana se deberá definir como se desea realizar la compra venta de moneda extranjera.</p><p>Inicialmente solicitará a que tasa se realizará la Compra/Venta, esta tasa es manual ya que normalmente depende de donde se realice la transacción por lo que el usuario deberá digitarla.</p><p>Emisor: se deberá definir de donde se emitirá el dinero (Salida) definiendo la Cuenta Bancaria o Caja y la Forma de Pago. Según la Cuenta definida se definirá automáticamente su moneda</p><p>Receptor: se deberá definir en que cuenta bancaria o Caja se recibirá el dinero así como también la Forma de Pago. Según la Cuenta definida se definirá automáticamente su moneda</p><p>Importe: Se deberá seleccionar los siguientes campos para definir el importe de esta Compra/Venta de Moneda Extranjera. Para ello se deberá definir la “Moneda” en que se definirá el importe y el “Monto” de dicho importe. En base a este importe y según la moneda se aplicará la conversión automáticamente en el Documento contrario que genere, utilizando la Tasa de Cambio definida inicialmente en la transacción.</p><p>Al completar se generará automáticamente un documento de Pago por el importe correspondiente al “Emisor” y un Cobro al “Receptor”</p><p>En cada Pago/Cobro que se genere se definirá por defecto el Cargo “Compra/Venta de Moneda Extranjera”. Este campo tendrá definida una cuenta contable donde se utilizará como Puente entre ambas transferencias (Pago - Cobro), permaneciendo en la misma la Diferencia de Cambio generada por la Cotización definida contra la Tasa de Cambio Contable del día.</p><p><img src="/assets/img/docs/balance-management/bam-transfer3.png" alt="Operación de Cambio"></p><h3 id="operacion-de-cambio-de-moneda-con-seleccion-de-pagos" tabindex="-1"><a class="header-anchor" href="#operacion-de-cambio-de-moneda-con-seleccion-de-pagos" aria-hidden="true">#</a> Operación de Cambio de Moneda con Selección de Pagos</h3><p>Opcionalmente también se puede generar una Operación de Cambio pero que en vez de generar directamente un Pago y un Cobro según los datos definidos, se generará según los datos una “Selección de Pagos” de manera que luego el Departamento de Tesorería pueda avalar la Compra/Venta de los dólares y realizar la transacción desde el Banco.</p><p>Para ello será necesario simplemente seleccionar un Tipo de Documento diferente en la Operación de Cambio.</p>',30)],o={},t=(0,n(33350).A)(o,[["render",function(e,a){return(0,r.uX)(),(0,r.CE)("div",null,i)}]])},54517:(e,a,n)=>{n.r(a),n.d(a,{data:()=>r});const r=JSON.parse('{"key":"v-7e0037a4","path":"/docs/financial-management/payments-methods/transfer-management.html","title":"Gestión de Transferencias","lang":"es-ES","frontmatter":{"title":"Gestión de Transferencias","category":["Documentation"],"star":9,"sticky":9,"article":false,"summary":"Transferencia Bancaria misma moneda El Proceso de Transferencia Bancaria se utiliza para debitar y acreditar simultáneamente cuentas bancarias. Este Proceso crea de manera automáti","head":[["meta",{"property":"og:url","content":"https://ayuda.solopapp.com/docs/financial-management/payments-methods/transfer-management.html"}],["meta",{"property":"og:title","content":"Gestión de Transferencias"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2024-09-16T21:34:57.000Z"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"article:modified_time","content":"2024-09-16T21:34:57.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Transferencia Bancaria misma moneda","slug":"transferencia-bancaria-misma-moneda","children":[{"level":3,"title":"Transferencias en la misma moneda","slug":"transferencias-en-la-misma-moneda","children":[]},{"level":3,"title":"Transferencia Bancaria Multimoneda","slug":"transferencia-bancaria-multimoneda","children":[]},{"level":3,"title":"Operación de Cambio de Moneda","slug":"operacion-de-cambio-de-moneda","children":[]},{"level":3,"title":"Operación de Cambio de Moneda con Selección de Pagos","slug":"operacion-de-cambio-de-moneda-con-seleccion-de-pagos","children":[]}]}],"git":{"createdTime":1697047301000,"updatedTime":1726522497000,"contributors":[{"name":"mgarciaQ76","email":"139590879+mgarciaQ76@users.noreply.github.com","commits":2}]},"readingTime":{"minutes":2.56,"words":767},"filePathRelative":"docs/financial-management/payments-methods/transfer-management.md","localizedDate":"11 de octubre de 2023"}')}}]);