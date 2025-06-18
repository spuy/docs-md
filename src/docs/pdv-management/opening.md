---
title: Acciones del Punto de Venta
category: Documentation
star: 9
sticky: 9
article: false
---

## Apertura de Caja

El proceso de apertura de caja consiste en realizar una transferencia bancaria desde un proceso específico del punto de venta. Este procedimiento permite efectuar un egreso desde la caja administrativa y un ingreso en la caja donde se realizarán las operaciones de venta. Dichos movimientos se reflejan en la ventana Caja, mediante los documentos Pago y Cobro.

Este procedimiento genera un registro en la ventana Cierre de Caja, con la cuenta Caja, desde la cual egresa el dinero. En la línea correspondiente, se asocia el registro de Pago, generado en la ventana Caja.

Adicionalmente, se crea un registro en Cierre de Caja, con la cuenta Caja POS, a la cual ingresa el dinero. En la línea del registro se asocia el Cobro, generado en Caja por la apertura.

#### Procedimiento

1. Ubicarse en la solapa [Opciones Rápidas del Punto de Ventas], en sección [Gestión de Caja].

2. Seleccionar la opción [Apertura].

3. Definir el importe para aperturar.

4. Definir en campo [Usar Fondos de Caja] la caja origen para el ingreso de apertura.

5. Seleccionar opción [Transferir Fondos].

6. Aceptar.


::: note
* Este proceso debe realizarse antes de iniciar las ventas del día.

* No se debe realizar la apertura de caja sin haber entregado físicamente el dinero correspondiente. De lo contrario, los saldos en Solop ERP no coincidirán con los saldos físicos.

* Es obligatorio seleccionar la opción OK en la ventana Transferencia Bancaria para completar el proceso y reflejar el movimiento monetario en Solop ERP.

* Si se requiere aperturar la caja con más de una moneda, se debe realizar una transferencia por cada moneda.
:::

![Apertura 1](/assets/img/docs/pdv-management/pdm-pdv-image292.png)

![Apertura 2](/assets/img/docs/pdv-management/pdm-pdv-image293.png)

## Completar Orden Preparada

El proceso de Completar Orden Preparada permite completar la orden de venta y generar automáticamente su factura y entrega en estado Completo. Se utiliza después de concluir la toma de pedido en la ventana Punto de Venta, permitiendo realizar la venta sin un cobro inmediato.

#### Procedimiento:

* Ubicarse en la solapa [Opciones Rápidas del Punto de Ventas] en sección [Orden de Venta]

* Luego de la toma de pedido, seleccionar la opción Completar Orden Preparada 

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image55.png)

## Copiar Orden Desde Otra

El proceso de Copiar Orden Desde Otra permite duplicar una orden de venta manteniendo los precios de los productos y la tasa de cambio utilizada en la orden original. Es especialmente útil para generar de manera ágil, órdenes recurrentes de ciertos Clientes desde el punto de venta.

#### Procedimiento:

* Ubicarse en la solapa [Opciones Rápidas del Punto de Ventas] en sección [Orden de Venta]

* Seleccionar Orden a copiar desde la opción Registros Históricos en la ventana Punto de Venta.

* Ubicar y seleccionar la orden de venta a copiar.

* Seleccionar la opción Copiar Orden.


::: note
* Si el terminal requiere un PIN de usuario, se debe ingresar antes de ejecutar el proceso.

* Una vez copiada, la orden se generará en estado Borrador con la fecha actual.

* Si se va a generar una nota de crédito, la orden debe copiarse antes de realizar la devolución, ya que al generarse la nota de crédito la orden original pasará a estado Cerrado.
:::

## Anular Transacción de Venta

Este proceso permite realizar la devolución total de una venta, generando automáticamente los documentos Orden de Devolución, Devolución y Nota de Crédito en estado Completo.

#### Procedimiento:

* Ubicarse en la solapa [Opciones Rápidas del Punto de Ventas] en sección [Orden de Venta]

* Seleccionar la orden desde opción Registros Históricos para localizar la transacción a anular.

* Seleccionar opción [Anular Transacción de Venta].

![Anular Transacción de venta](/assets/img/docs/pdv-management/pdm-pdv-image291.png)

## Retiro Detallado de Punto de Venta

Un retiro de fondos ocurre cuando se extrae dinero de una caja del punto de venta, ya sea por alivio de caja, cancelación de un gasto, entre otros.

#### Ejecución del Proceso

1. Ubicarse en la solapa [Opciones Rápidas del Punto de Ventas], en sección [Gestión de Caja].

2. Seleccione la opción [Retiro].

3. Configure los filtros según su necesidad:

* Terminal PDV: Terminal del punto de venta.
* Definir Caja (origen) en [Usar Fondos de Caja]
* Socio del Negocio: Vendedor asociado.
* Tipo de Pago y Moneda.
* Seleccionar [Transferir Fondos].
* Aceptar

::: note
Por cada retiro realizado, Solop ERP genera en la ventana Caja:
* Un documento de pago asociando la caja POS.
* Un documento de cobro asociando la caja administrativa.
:::

Si el punto de venta tiene transacciones en efectivo y tarjeta, se deben realizar dos retiros por separado

## 💱 Cobro y Cambio en Moneda Diferente a la Factura

Esta funcionalidad permite realizar cobros y entregar cambio en una moneda distinta a la de la factura, siempre que la configuración del punto de venta lo permita.

### 🔄 Cobros en Moneda Diferente

Para que sea posible cobrar en una moneda distinta a la de la factura, el método de pago configurado en el punto de venta no debe tener una moneda predeterminada.

#### ✅ Ejemplo funcional: El método de pago Mastercard permite seleccionar una moneda diferente porque no tiene moneda fija asignada.

::: note
❌ Excepción: El método de pago Efectivo tiene una moneda fija configurada, por lo tanto no permite seleccionar otra moneda al momento del cobro.
:::

### 🌍 Monedas disponibles para el cobro

Las monedas que se muestran en el punto de venta para seleccionar dependen de los siguientes criterios:

* Que la moneda tenga una tasa de conversión configurada.

* Que dicha tasa esté configurada para el mismo tipo de conversión que utiliza la moneda principal del punto de venta.

Q* ue la tasa esté vigente a la fecha actual.

### 💵 Cambio en Otra Moneda

* La lógica para el cambio en otra moneda es similar a la del cobro:

* Si el método de pago tiene una moneda predeterminada, no se podrá seleccionar otra.

* Si no tiene moneda asignada, sí se podrá seleccionar otra al momento de entregar el cambio.

### ✔️ Recomendación

Para habilitar el cambio en otra moneda:

* Crear un nuevo método de pago, por ejemplo llamado Cambio.

* Asociarlo al mismo tipo de método de pago que “Efectivo”.

* Activar el campo “Is Allowed To Refund”.

::: note
Este check es indispensable para que el método de pago esté disponible en la pantalla de cambio.
:::

Cambio Predeterminado:

![Predeterminado](/assets/img/docs/pdv-management/pdm-pdv-image294.png)

Pago Diferido:

![Pago Diferido](/assets/img/docs/pdv-management/pdm-pdv-image295.png)

Ajuste:

![Ajuste](/assets/img/docs/pdv-management/pdm-pdv-image296.png)

Resultado:

![Ajuste](/assets/img/docs/pdv-management/pdm-pdv-image297.png)

## 🧾 Creación de un Socio de Negocio desde la Ventana de Punto de Venta

### 🎯 Objetivo

Crear directamente un nuevo Socio de Negocio desde la ventana de ventas del POS, con la posibilidad de ingresar número de cédula o RUT.

### ✅ Pasos:

* Abrir el Punto de Venta (POS):

Ingresar al POS con la terminal configurada (Ver Configuración del Punto de Venta)

* Iniciar una nueva orden de venta:

Crear una nueva orden y seleccionar la opción de crear un nuevo socio de negocio.

* Seleccionar tipo de identificación:

Elegir si se va a ingresar una cédula o un RUT.

Si es persona física seleccionar el template de cédula.

Si es empresa seleccionar el template de RUT.

* Completar datos del nuevo socio:

Nombre del cliente o empresa

Correo electrónico

Teléfono

Dirección (Calle, Departamento, País)

* Confirmar creación:

Al guardar, se crea automáticamente el socio de negocio y se vincula a la orden.

* Validación automática de documentos:

Si el tipo de documento es “POS Order” y está configurado para emitir factura electrónica:

a. Se genera la factura 

b. Se emite el ticket sin requerir etiquetas adicionales

* Notas adicionales:

Si se vuelve a ingresar un RUT ya definido, el sistema lo detecta automáticamente y reutiliza el socio.

El proceso está automatizado para facilitar la operación en POS

## 🧾 FUNCIONALIDAD: Precio convertido en punto de venta

### 🛠️ CONFIGURACIÓN DE LISTA DE PRECIOS

En la terminal PDV se utiliza una lista de precios principal (por ejemplo, Ventas POS) que puede tener productos con precio definido o en cero.

Esta lista puede referenciar una lista de precios de respaldo o referencia (por ejemplo, en otra moneda como USD).

El sistema aplica la lógica de conversión solo si se cumplen ambas condiciones:

El producto está en la lista de precios activa del punto de venta.

El producto tiene precio cero en esa lista.

### 🧾 FUNCIONALIDAD EN PUNTO DE VENTA

Si al cargar un producto su precio está en cero en la lista de precios activa, el sistema busca el mismo producto en la lista de precios de referencia.

Si lo encuentra, toma ese valor, lo convierte a la moneda local (la del punto de venta) utilizando la tasa de cambio vigente, y lo carga automáticamente en la orden.

Este proceso de conversión ocurre únicamente en los siguientes casos:

* Al agregar una nueva línea en la orden de venta.

* Al cambiar de producto en una línea ya existente.

No se aplica la conversión si:

Se modifica la cantidad: simplemente se multiplica por el precio ya asignado.

Se edita manualmente el precio en la línea: en ese caso se respeta el valor ingresado y no se vuelve a calcular.

Esta funcionalidad permite mantener listas de precios simplificadas en moneda local, tomando como base precios definidos en moneda extranjera, sin necesidad de duplicar valores o mantener listas paralelas completas.

#### EJEMPLO ILUSTRATIVO
Producto: Zapatilla Modelo X

Lista de precios activa en PDV: Ventas POS (moneda: Pesos ARS)
→ Precio definido: $0

Lista de precios de referencia: Precios USD Público (moneda: Dólares USD)
→ Precio definido: USD 10

Tasa de cambio del día: 1 USD = $950

#### Resultado en PDV al agregar el producto:

El sistema detecta que el precio está en cero en la lista activa.

Busca en la lista de referencia y encuentra el precio: USD 10.

Aplica la conversión:
USD 10 × $950 = $9.500

El producto se carga automáticamente con $9.500 en la orden de venta.