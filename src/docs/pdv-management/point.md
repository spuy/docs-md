---
title: Punto de Venta
category: Documentation
star: 9
sticky: 9
article: false
---

## **Punto de Venta (Vue)**

El sistema Punto de Venta en Solop ERP está diseñado para su uso en espacio de venta agil donde es necesario tener control de ventas e inventarios de un negocio de manera facil y eficiente.

Este punto de venta es una herramienta que logra aumentar la productividad de los negocios, permitiendo facturar de una forma muy rápida, y llevando el control de los ingresos en un día operativo, por terminal, cajero, o simplemente por tienda.

En Solop ERP es posible generar una factura de cuentas por cobrar de forma directa mediante el punto de venta. El presente material elaborado por Solop ERP, pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para generar una venta en Solop ERP mediante su punto de venta.

La opcíon puede encontrarse desde el árbol de Menú, o bien, desde el buscador.

Lo primero a configurar al ingresar a la pantalla es la "Caja" del punto de venta.

Posteriormente, debe generarse la "apertura de caja" (gestión de caja).

En este movimiento registramos cual es el importe en dinero con el cual se inicia el punto de venta.

Se selecciona un agente cobrador, el importe, una descripción. Y al aceptar queda la caja en estado de Apertura.

Puntos necesarios para comenzar a utilizar el Punto de Venta (tips):

El Punto de Ventas No deberá tener un Cierre de caja con fecha distinta a la de HOY en estado completo y deberá tener un “Cierre de Caja” en Borrador con fecha HOY. Para que se genere un Cierre de Caja con fecha hoy se debe haber generado una “Apertura de Caja” con fecha HOY.

## Registro de Pedido

Ubique y seleccione en el menú de Solop ERP, la carpeta **Gestión de Ventas**, luego seleccione la carpeta **Orden de Ventas**, por último seleccione la ventana **Punto de Venta**.

![Campo](/assets/img/docs/sales-management/sam-sales-image304.png)

Imagen 1. Menú de Solop ERP

Podrá visualizar la ventana **Punto de Venta** en Solop ERP.

![Campo](/assets/img/docs/sales-management/sam-sales-image305.png)

Imagen 2. Ventana Punto de Venta

Seleccione el icono **Nueva Orden**, ubicado en la barra de herramientas superior derecha.

![Campo](/assets/img/docs/sales-management/sam-sales-image306.png)

Imagen 3. Icono Registro Nueva Orden

Si desea relacionar su venta a un cliente fiscalmente, puede seleccionar un cliente existente o crear un nuevo cliente:

Para seleccionar cliente existente, proceda a tipear el nombre, RUT o cédula del cliente como lo muetras la Imagen.

![Campo](/assets/img/docs/sales-management/sam-sales-image307.png)

Imagen 4. Búsqueda de Cliente

Para seleccionar cliente existente, proceda a tipear el nombre, RUT o cédula del cliente como lo muetras la Imagen.

![Campo](/assets/img/docs/sales-management/sam-sales-image308.png)

Imagen 4. Nuevo Cliente

Seleccione la opción **Crear Nuevo Socio de Negocio**.

![Campo](/assets/img/docs/sales-management/sam-sales-image309.png)

Imagen 5. Opción Nuevo Cliente

A continuación Seleccione la opción **Crear Nuevo Socio de Negocio**, y se desplegará la siguiente ventana.

![Campo](/assets/img/docs/sales-management/sam-sales-image310.png)

Imagen 6. Ventana Crear Socio de Negocio

A continuación indique el código del cliente (Cédula/RIF) en el campo **Código**.

![Campo](/assets/img/docs/sales-management/sam-sales-image311.png)

Imagen 7. Código Socio de Negocio

Warning

Solop ERP actualiza de modo automático el campo **Número Identificación**, este campo es utilizado para reportes fiscales (Ejemplo:IGTF).

A continuación indique el nombre o razón social del cliente en el campo **Nombre**.

|Nombre Cliente|

![Campo](/assets/img/docs/sales-management/sam-sales-image312.png)

Imagen 7. Nombre Socio de Negocio

### Apertura de Punto de Venta

**Desde ZK**

La realiza el que está definido como Agente Comercial en la terminal PDV:

* Debe elegir de qué cuenta bancaria de donde sale la entrada
* Se debe realizar una apertura por moneda (UYU y USD) en caso de ser necesario
* Con esto se realiza el cobro y pago correspondiente para realizar la entrada de dinero inicial en el POS

### Retiro de Dinero PDV

Este proceso debe ser realizado por el Cajero del Punto de Venta antes de realizar el Cierre del Mismo o en cualquier momento a lo largo del día para retirar efectivo.

**Desde ZK**

Tener en cuenta las siguientes consideraciones:

* Se deberá realizar uno por moneda
* **Caja Destino:** se entregará el Dinero retirado del Punto de Venta desde donde se genera.
* Cargo por defecto: “Retiro de Caja”. Este cargo es el que será utilizado como “Puente” entre el Retiro de la Caja del POS y la Caja donde ingresará dicho importe.
* Definir cuánto dinero por Tipo de Pago se está retirando en la Moneda seleccionada
* Tarjeta de Crédito: Si se desea hacer un Retiro por Cierre de Lote de Tarjeta se recomienda hacer tantos retiros como lotes de Tarjetas se deseen. 
  * En la columna “Tarjeta de Crédito” podrá seleccionar cada lote a que Tarjeta corresponde.
  * En Número de Referencia pueden detallar el Número de Lote.

**Desde VUE**

### Cierre del Punto de Venta

Cada uno de los Cobros realizados desde un Punto de Venta son ingresados a un Cierre de Caja (Conciliación Bancaria), cuando se realiza el cierre simplemente se debe verificar dicha conciliación, analizando las diferencias que puede tener.

### Quién realiza el Cierre de Caja?

Lo realiza el supervisor, desde el SmartBrowser “Cierre del Punto de Venta”. Puede seleccionar el período que desee, se sugiere que sea uno por día y aparecerán todos los movimientos no conciliados.

Se cargarán los siguientes campos:

* **Total de la Línea:**  Suma de Gran Total de **Órdenes de Venta** en estado Completo generadas por el POS seleccionado para el rango de fechas elegido\*\*,\*\* tal que se encuentre un estado de cuentas bancario (no completo ni cerrado) en el cual exista un pago para dicha orden. 
  * **Tiene todo lo que se facturó en el PDV en el período seleccionado.**
* **Total pagado: Suma de montos de pagos asociados al POS y rango de fechas seleccionados, tal que se encuentre un estado de cuentas bancarias para la Cuenta Bancaria del cierre actual, en estado Completo o Cerrado, y en el cual exista un línea asociada a dicho pago, y que el mismo esté asociado a una orden.** 
  * **Sumariza todos los pagos de este PDV en el período seleccionado.**
* **Total abierto: Facturas emitidas desde el Punto de Venta a Crédito.**

**Verificación:** Si todo está bien -> Total de la Línea - Total Abierto debería ser igual a Total Pagado

* **Diferencia Monto: es la suma de montos de pagos, convertidos a moneda de la Caja del POS más el monto de saldo inicial del estado de cuentas que contiene dichos pagos. El filtro de rango de fechas se aplica para la fecha de los pagos.** 
  * **Esto significa que si se generó mal el Balance Bancario sin hacer el Cierre del Día anterior este saldo quedará mal.**
  * **Es editable, se puede modificar.**

### Control de Diferencia en Cierre de Caja

El proceso de Cierre de Caja debería dar 0 ya que es la sumatoria de todos los cobros realizados por un POS menos los Retiros que realizó al final del turno. En caso de existir una diferencia en el campo “Diferencia Monto” es porque se realizó un Retiro del POS por un importe menor del que figura en el sistema por lo que se debe decidir qué hacer con esta diferencia (considerar que para que este control sea correctamente aplicado se deberá realizar un Retiro por el 100% del dinero existente en el POS) .

**Aceptar Diferencia**

Si se Acepta la diferencia se tiene que marcar el check de “Sobre/Sub Pago” y se tiene que indicar a qué cargo se va a enviar la diferencia (Por ejemplo Pérdida por diferencia de quebranto de caja)

Se deberá indicar una descripción y la fecha que se va a hacer la conciliación

Tener en cuenta que la columna monto es el monto en la moneda transacción mientras que la columna monto convertido es el monto convertido a la moneda que tiene definido el POS.

## Terminal PDV / Punto de Venta

**Configuración de la Terminal PDV**

Para comenzar las pruebas del punto de venta es vital parametrizar de manera correcta la terminal del punto de venta a utilizar.

Dentro de esta ventana veremos la configuración general en la primera pestaña donde se tendrán que definir las características generales del punto de venta .

En la pestaña principal de la terminal de punto de venta se podrá definir los campos este por defecto que utilizará la el punto de venta Quién es el agente comercial definido para estar en el campo agente comercial tendrá un check también le modifique el precio si el punto de venta permite la modificación de precios.

Plantilla de socio de negocio: en este campo se deberá definir el socio de negocio por defecto para los las ventas que no está identificado el socio de negocio por defecto se sugiere usar el socio de negocio mostrador.

Tipo de documento: se definirá el tipo de documento por defecto que utilizará el punto de venta. Este podrá ser modificado desde el punto de venta se deberá definir “POS Order e-ticket'' cuando la venta sea con cédula o sin identificar el cliente o se podrá cambiar manualmente para el “POS Order e-factura” cuando corresponda generar una factura desde el punto de venta.

Disposición de la llave: se definirá la estructura que se utilizará para visualizar los productos en la sección derecha del punto de venta. Dentro de una disposición de la llave se podrá definir diferentes estructuras jerárquicas o agrupaciones para poder seleccionar los productos simplemente clickeando sobre ellos para visualizar la foto se podrá ceder a definir la misma en cada uno de los productos.

Nombre Impresora: en este campo se deberán definir el nombre de la impresora la cual se imprimir se deberá imprimir el ticket de manera automática.

Tipo de conversión: El campo tipo de conversión considerara Qué tipo de conversión se deberá aplicar para convertir monedas en el punto de venta esto es cuando se maneja una lista de precios en moneda nacional por ejemplo Si se desea realizar el pago con moneda extranjera se tomará la tasa que corresponda según el tipo de conversión establecido en este campo.

Supervisor: defina quién es el encargado del punto de venta. Según el supervisor definido se considerará luego El pin para poder hacer alguna acción que requiera la aprobación del encargado o del supervisor.

Vendedor de pasillo (Check): sirve para definir este punto de venta podrá ser utilizado desde el pasillo y se podrán crear órdenes de venta para que luego puedan ser abonadas desde un punto de venta con caja aclarar ese punto.

Moneda para mostrar: este campo sirve para definir qué moneda se va a mostrar la conversación en las líneas del punto de venta en el caso de que su lista de precios sea en moneda nacional Pero además desee Mostrar el precio convertido a moneda extranjera en este campo se deberá definir dicha moneda extranjera a continuación.

Checks de definición en punto de venta:

* Permitir modificar cantidad: este cheque Define si se podrá modificar cantidades desde el punto de venta o no punto aclarar
* POS compartido: Definir si este punto de venta podrá ser compartido por más de un agente comercial o no Si tiene definido el check será compartido.
* Permitir devolución: este cheque definirá si se podrá permitir realizar devoluciones desde este punto de venta.
* Permitir Cobrar: es definida si se podrá generar cobros desde este punto de venta.
* Permitir Crear orden: este cheque definirá si podremos generar órdenes desde este punto de venta o no .
* Mostrar Monto de impuesto: esteche definirá si se visualizará en el punto de venta en las líneas del punto de venta la columna del impuesto correspondiente a cada línea
* Mostrar descuento este check definirá si se mostrará una columna en las líneas de punto de venta definiendo el descuento de la misma.
* Permitir confirmar entrega: este check definida si se podrá Define confirmar una entrega en este punto de venta.
* Permitir crear Cliente Nuevo: este check definiriá si esta terminal puede generar un nuevo cliente o no

**Definición de Máximo:**

Reembolso máximo diario permitido en este campo se podrá definir un importe de reembolso máximo permitido para un día esto se manejara en moneda de la lista de precio del punto de venta si están cero no tendrá máximo definido

Reembolso máximo definido:  este campo definirá el máximo permitido para un reembolso.

Campaña por defecto: este campo definirá una campaña por defecto que se le Define al punto de venta y todas las órdenes generadas desde el mismo la campaña podrá ser modificada desde el punto de venta.

Máximo descuento: este campo define el máximo descuento que se podrá brindar en el punto de venta

**Operaciones permitidas para El vendedor**

* Permitir asignar vendedor: si tiene el check definido El vendedor podrá asignar un nuevo vendedor a una orden de venta.
* Permitir uso concurrente: Esto permitirá que un punto de venta pueda ser utilizado a la misma vez por más de un vendedor.
* Permitir Apertura de Caja: Este cheque definirá si se podrá hacer una apertura de caja desde el punto de venta.
* Permitir Retiro de Caja: Este check define si se podrán realizar retiros de caja desde el punto de venta.

**Documentos por defecto:**

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

**Vendedores asignados**

En esta pestaña se definirán aquellos vendedores que podrán utilizar el punto de venta.

En cada vendedor se podrá habilitar cada una de las acciones disponibles en el punto de venta punto entre ellas encontramos asignación de vendedor cierre de caja apertura de caja retiro de caja cobranza de orden confirmación de entrega creación de orden modificar descuento modificar cantidad autorizar una devolución o modificar precio

También definirá si puede crear un nuevo cliente este vendedor desde este punto de venta

Cómo editar los Productos Favoritos del PDV?

Puedes agregar o modificar productos desde la pestaña Llave PDV. Desde aquí también puedes definir Foto a cada uno de los productos.

Se puede generar una nueva fácilmente desde el proceso de “Generar Llave Punto de Venta”. Puedes seleccionar una categoría de producto para crear una llave por categoría.

### Cajas de Punto de Venta

En cada terminal PDV se deberá definir cuál es su caja asignada. En esta caja se deberá definir el Socio del Negocio (Normalmente se define el de la Organización), así como también los Cargos por defecto que se desea aplicar para la “Apertura” y para los “Retiros”.

**Cierre de Caja**

Al realizar la apertura de Caja se genera un registro de cierre de caja por el recibo de apertura.

En el caso que se omita este paso de realizar la apertura. El ERP debería generar el registro de cierre de caja desde el primer cobro. Aun así, se han detectado casos en los cuales el registro de cierre de caja no se realiza.

Para estos casos, posteriormente, se debió generar el registro de cierre de caja de forma manual vinculando las transacciones del día a la caja correspondiente (con el objeto de poder realizar el cierre del punto de venta).

Se configura como Tipo documento apertura: recibo de caja.

Cada vez que se genera un cobro o pago se crea una línea al registro de cierre de caja.

Se trata de una conciliación bancaria aplicada a las cuentas de Caja.

La cuenta de caja es un Bank account excepto que es una definición de caja (cuenta de caja, y no bancaria).

Debe definirse un cargo predeterminado por apertura, de lo contrario no podrá operar el punto de venta.

Al generar una nueva orden se visualizarán valores pre seteados para el punto de venta pero que pueden ser modificados. Tal como el tipo de documento (e ticket o e factura), Socio de negocio (por default estará configurado como "Mostrador" (socio no identificado) pero se podrán seleccionar diferentes socio clientes o bien crear uno nuevo (si el usuario posee permisos para dicha función.

Para completar la orden de venta, primero debe cobrarse.

Al generar el cobro, se mostrarán los diferente métodos de pago vinculados al punto de venta.

Al crear el cobro se la orden de venta queda en estado completo. Se genera documento por cobrar (estado pagado) y el pago/cobro correspondiente.

Se agrega el movimiento (de la orden de venta cobrada) al cierre de caja en estado borrador (no la concilia).

El paso anterior al cierre de caja es realizar un retiro de caja: se elige un agente cobrador y se genera un movimiento retiro de caja como línea del cierre de caja.

### Devolución

#### Devolución de Cliente desde Punto de Venta

Para realizar una devolución a un cliente de una Factura se deberá realizar los siguientes pasos:

1. Identificar la Orden de Venta la cuál se está devolviendo. Para ello se deberá ir a las “Opciones Rápidas del Punto de Venta” ubicadas ocultas en la parte izquierda del Punto de Venta. Dentro de la sección “Orden de Venta” hacer click en la opción “Histórico de Órdenes”. Se abrirá una ventana emergente donde podrá realizar una búsqueda de la orden de venta correspondiente. Utilizar los filtros existentes para acotar las órdenes a mostrar. Marcar Procesada = SI y la Fecha de la misma. Opcionalmente si el cliente está identificado también podrá buscar por el Socio del Negocio. Una vez encuentre la Orden que corresponde, seleccionarla con un click y darle OK a la ventana. La Orden de Venta será cargada en el Punto de Venta con sus líneas correspondientes.
2. Una vez tengamos la orden de venta sobre la que se desea realizar la devolución se deberá ir nuevamente a las opciones rápidas del Punto de Venta y hacer click en la acción “Anular Transacción de Venta”. Esta acción abrirá una pequeña ventana de “Descripción” donde se deberá detallar el motivo de la misma. Al hacer click en el Check del proceso, se generará la correspondiente devolución, creando la Nota de Crédito en cuestión así como también la devolución de mercadería y el Pago por la salida de dinero.

Al anular una transacción de venta el sistema lo que realizará será los siguientes:

* La orden de venta original será cerrada quedando la misma inactiva inactiva.
* De los documentos  asociados a la misma sin ser modificados es decir la factura en cuestión quedará así la orden de venta original será cerrada quedando la misma inactiva  inactiva.
* De los documentos  asociados a la misma sin ser modificados es decir la factura en cuestión quedar asignada con el cobro realizado originalmente.
* Por otro lado se generará una nueva orden de venta = las características de la orden de venta original pero sobre la misma se generará un documento por cobrar del tipo nota de crédito un pago es decir una salida de caja haciendo la cancelación correspondiente y quedando la misma asignada a la conciliación del día de la caja en cuestión y también una devolución cliente que realice moverá el inventario gnada con el cobro realizado originalmente.
* Por otro lado se generará una nueva orden de venta = las características de la orden de venta original pero sobre la misma se generará un documento por cobrar del tipo nota de crédito un pago es decir una salida de caja haciendo la cancelación correspondiente y quedando la misma asignada a la conciliación del día de la caja en cuestión y también una devolución cliente que realice moverá el inventario

**Cierre de Punto de Venta**

Se selecciona el punto de venta a cerrar y la fecha.

Una vez generado el cierre de punto de venta queda en estado completo el registro de cierre de caja.
