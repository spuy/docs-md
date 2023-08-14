---
title: Proyecto de Medios
category: Documentation
star: 9
sticky: 9
tag: 
  - Agencia
article: false
---

## Proyecto de Medios



En un Proyecto de Medios se gestionará la Inversión que un cliente quiera realizar sobre los Tipos de Medio y Medios que desee.

Sobre cada proyecto se podrá asignar Órdenes de Compra realizadas a los Medios, Órdenes de Venta (Órdenes de Facturación) a los Clientes así como también el registro de las correspondientes Facturas tanto de compra como de venta.

Las Compras a los medios realizadas para los clientes podrán ser realizadas de dos maneras, solicitando tanto la compra como la publicación en conjunto o bien se podrá realizar una Pre-Compra para luego ir consumiendo el saldo mediante Órdenes de Publicidad independientes.

La idea es que mediante el Proyecto se pueda obtener un vistazo de situación de la compra de medios solicitada por el cliente.

En cada proyecto se definirá los siguientes puntos:

**Clasificación según diferentes “Etiquetas”:** estas pueden ser Cliente, Marca del Cliente, Tipo de Trabajo, Sello, etc.

**Gerente de Proyecto:** este normalmente es el “Ejecutivo de Cuenta” que tenga el cliente pero puede cambiar en algunos proyectos.

**Generación de Órdenes de Venta:** sobre las cuales se podrá gestionar su Facturación.

**Detalle de Línea de Factura:** Opcionalmente

**Reportes:** se podrá generar diferentes Reportes financieros sobre el estado de los proyectos.

### Campos del Proyecto

#### **Campos Manuales**

Se deberán definir manualmente de forma obligatoria los siguientes campos:

* **Socio del Negocio**
* **Nombre**
* **Marca Cliente**
* **Lista de Precios:** Es según la Lista de Precios que se define la Moneda que se manejará en el Proyecto.

La moneda del Proyecto la determina la moneda que Facturará el Proveedor

*En caso que al Cliente se le deba Facturar en otra moneda, la Orden de Venta deberá ser en la misma moneda que se comprará al Proveedor, pero se podrá definir en la Orden de Venta una moneda diferente a ser Facturado junto con su Tasa de Cambio acordada.* 

#### **Campos Automáticos:**

Los siguientes campos, entre otros, se definirán de manera automática (igualmente se podrán modificar si se desea).

* **Moneda**
* **Agente Comercial:** El campo “Agente Comercial” en el cabezal de un Proyecto tomará de forma automática al usuario logueado en el sistema siempre que este tenga el check de “Agente comercial” en “Y”, en la Pestaña “Empleado” de la ventana “Socio de negocio”.
* **Sello Origen:** Cuando se guarda un proyecto se realiza lo siguiente:

  Según la Categoría de Proyecto se definirá el Sello Origen

correspondiente que tenga definido el Contrato del Cliente en sus “Partes del Contrato”.

Según las siguientes Categoría de Proyecto se obtendrá el sello definido para el siguiente tipo de empresa:

Categoría de Proyecto     Tipo de Empresa

Proyecto de Agencia         Agencia Creativa

Proyecto de Medios          Agencia de Medios

Proyecto RRPP                  Agencia RRPP

Proyecto de Medios Digitales Agencia de Medios Digitales

\*Si no se obtuvo sello de origen se lanza una excepción.

* **Almacén:** El almacén en un proyecto se definirá de manera automática según el almacén que tenga definido el Cliente en la pestaña Cliente ventana Socio del Negocio.

### **Tamaño del Proyecto (Campo “Nivel de Línea”)**

Un Proyecto podrá tener diferentes niveles según su complejidad o tamaño. Dentro del Nivel seleccionado, se contará con una pestaña de Líneas donde se podrá definir cada uno de los Productos que se estará manejando. Sobre estos Productos definidos se generará una Orden de Venta al Cliente y una Orden de Compra al Proveedor del Medio.

Los diferentes niveles posibles son: Proyecto, Fase y Tarea.

**Nivel PROYECTO:** No usar Nivel Proyecto para los Proyectos de Medios

**Nivel FASE:** Se utilizará cuando el Proyecto sea de Compra y Consumo (mismo momento).

**Nivel TAREA:** Se utilizará cuando el Proyecto sea de Pre-Compra o Inversión y luego su Consumo (En momentos diferentes).

## Checkin de la Pauta

Luego de contar con una **“Orden de Publicidad (Compra y Consumo)”** en Estado “Completo”, la misma se deberá confirmar mediante el Checking.

El checking se puede acceder desde los Procesos definidos en el Proyecto de Medios que se estará verificando. Para ver los procesos del Proyecto se deberá oprimir el botón de proceso ubicado en la Barra de Herramientas seleccionando “Checking”.

Al realizar la búsqueda desde el SmartBrowser de Checkin, deberá seleccionar las líneas que han sido emitidas, confirmando a su vez la cantidad en cuestión de dicha emisión.

## **Reporte “Detalle de Almacenamiento Simple”**

Se podrá confirmar el ingreso de los productos al almacén mediante el reporte de “Detalle de Almacenamiento Simple” seleccionando el Almacén en cuestión.

## **Proyecto de Medios Compra y Consumo**

Se entiende como “Compra y Consumo” cuando se desee realizar una compra a un Medio en nombre de un Cliente y a su vez, en el mismo documento se solicita también su emisión.

* Proyecto
  * Compra y Consumo en Canal 4 (FASE): Orden de Venta (Compra y Consumo)
    * Línea con Producto a emitir
    * Línea con Producto a emitir
    * Línea con Producto a emitir

Para poder generar una Orden de Compra en nombre de un Cliente, primero se deberá generar una Orden de Venta al Cliente. A continuación se detallan los pasos a seguir para su operativa:

### **Se comienza generando un Proyecto con nivel de línea “Fase”**

**Una vez con el Proyecto creado se deberá crear una Fase definiendo el Proveedor a quien se realizará la compra. Se deberá generar una Fase por proveedor.**

Luego de definir el Proveedor en la Fase, se deberá ir a la pestaña “Línea de la Fase” donde se deberán definir los Productos a ser Emitidos. En este caso tenemos dos opciones:

* **Crear una línea por Producto: en este Caso se deberá definir en cada línea:**
  * Fechas Desde: Fecha obligatoria a definir a partir de cuando es la Emisión
  * Fecha Hasta: opcionalmente si desea definir un Hasta puede definirlo.
  * Descripción: Datos extra que desea aclarar del Producto.
  * Material
  * Producto
  * Precio
  * Cantidad
* **Crear una línea por Emisión de Producto: esta opción es más detallada definiendo una línea por Emisión y no las cantidades totales en una línea. Se deberán definir los mismos datos el punto a tantas emisiones como hayan.**

Algunas ayudas aplicables:

**Creando una Línea:** Las líneas se desplegarán en formato grilla, para completarlas se deberá hacer click en el primer campo “Fecha Emisión”, para avanzar al siguiente campo podrá hacerlo con la tecla “Intro”.

**Copiar Registro:** Una vez termine de completar una línea, se podrá copiar la misma utilizando el botón de la barra de herramientas “Copiar Registro”, una nueva línea será generada con la misma información, sólo deberá modificar lo que corresponda (Fecha de Emisión, Programa, etc).

**Producto:** En cada una de las líneas se deberá definir el producto que será Emitido. Para seleccionar el producto puede hacer click en el buscador del campo, abriendo la ventana de Información del Producto. En ella podrá realizar los filtros que considere necesario para encontrar el Producto exacto a ser consumido. Dentro de los campos que puede utilizar se recomienda definir el Proveedor del mismo que debería ser el mismo a quién se está generando la Orden de Compra. A su vez, también se podrá apoyar en el campo “Medio” y “Soporte” de los productos.

Una vez definido el Proveedor y los Productos en las líneas, se deberá proceder a realizar una Orden de Venta del tipo “Orden de Venta (Compra y Consumo)” desde el botón “Generar Orden de Venta”.

Al confirmar el proceso, una Orden de Venta será generada apareciendo el número de la misma en la esquina inferior izquierda de la ventana. Para acceder a ella se podrá utilizar el botón de “Visualiza Detalle” en la Barra de Herramientas de la Ventana Proyecto.

La Orden generada también aparecerá en el campo Orden de Venta de la Fase. Para acceder a ella podrá hacer click en el campo “Orden de Venta”.

La Orden de Venta es el Documento que se Facturará al Cliente. La misma tendrá definido a su vez, en el campo “Socio del Negocio Entrega Directa” el Proveedor del Medio al cual se le generará una Orden de Compra Espejo por los Medios correspondientes.

La Orden de Venta se deberá Completar, de manera que se genere automáticamente la Orden de Compra al Proveedor del Medio.

La Orden de Compra será del Tipo “Orden de Publicidad (Compra y Consumo)” se generará en estado Borrador por lo que se deberá navegar a la misma y Completarla para terminar con el proceso.

### **Representación impresa:**

Desde la Ventana Orden de Compra se podrá obtener la Representación Impresa de la misma que deberá ser enviada al Proveedor del Medio.

### **Checkin de la Pauta**

Luego de contar con una “Orden de Publicidad (Compra y Consumo)” en Estado “Completo”, la misma se deberá confirmar mediante el Checking.

El checking se puede acceder desde los Procesos definidos en el Proyecto de Medios que se estará verificando. Para ver los procesos del Proyecto se deberá oprimir el botón de proceso ubicado en la Barra de Herramientas seleccionando “Checking”.

Al realizar la búsqueda desde el SmarBrowser de Checkin, deberá seleccionar las líneas que han sido emitidas, confirmando a su vez la cantidad en cuestión de dicha emisión.

## **Compra paquete por importe**

Se considera una Pre-Compra o Compra con Inversión cuando se realiza una compra a un Medio en nombre de un Cliente para que la misma pueda ser Consumida en un momento diferente a la Compra en cuestión.

El **Nivel de Línea “TAREA”** se deberá utilizar para realizar una **Pre-Compra** en Nombre de un Cliente para su posterior **Consumo**. Esto sería cuando sólo se realiza la compra en un medio de determinado *Importe de Inversión*, sin especificar los Productos que se estarán Consumiendo.

En este caso los niveles serán clasificados de la siguiente manera:

**FASE:** A Nivel de Fase se deberá definir el *Proveedor del Medio* que se realizará la Compra. En caso de ser una Pre-Compra, también se deberá definir en el Producto el correspondiente de “Inversión”. Importante seleccionar un producto con la Tasa de Impuesto que corresponda (Iva Básico o Exento).

**TAREAS:** Dentro de cada Fase se crearán las diferentes TAREAS por cada Consumo que se consumirá la Inversión en cuestión. Los Productos se deberán definir en las Líneas de Tarea, definiendo Producto, Fecha Emisión, Descripción del Programa, Cantidad y Precio.

## **Pre-Compra**

Se comienza generando un Proyecto con nivel de línea “Tarea”:

* En la ventana de Proyecto de Medios se deberá crear un proyecto definiendo:
  * **Cliente**
  * **Marca del Cliente**
  * **Nombre del Proyecto**
  * **Nivel de Línea:** Tarea
  * **Lista de Precios**
  * **Campos Automáticos:** Según el Cliente seleccionado se cargarán los siguientes Campos:
    * Contrato de Servicio
    * Sello
    * Sello Origen
* Término de pago
* Almacén del cliente

  
La inversión se debe definir desde una FASE del Proyecto de Medios.

En la misma, se deberá definir el Proveedor del Medio que se realizará la Compra.

Para que el sistema permita elegir un Proveedor en el campo **Socio del negocio Entrega Directa** es importante que el mismo:

* Esté creado con la Organización con la que se encuentra logueado el usuario o con Organzación (\*).
* En la ventana Socio de negocio, en su cabezal debe tener marcado el check de “activo” y en la pestaña Proveedor el check de “Proveedor”.

En el Campo de Producto se deberá definir el correspondiente de “Inversión” junto con su correspondiente Importe en el campo “Total Planeado”. Importante seleccionar un producto con la Tasa de Impuesto que corresponda (Iva Básico o Exento).

Una vez definido el Proveedor, el Producto y el importe, se deberá proceder a realizar una Orden de Venta del tipo “Orden de Venta (Inversión)” desde el botón “Generar Orden de Venta”.

Al confirmar el proceso, una Orden de Venta será generada apareciendo el número de la misma en la esquina inferior izquierda de la ventana. Para acceder a ella se podrá utilizar el botón de “Visualiza Detalle” en la Barra de Herramientas de la Ventana Proyecto.

La Orden de Venta es el Documento que se Facturará al Cliente. La misma tendrá definido a su vez, en el campo “Socio del Negocio Entrega Directa” el Proveedor del Medio al cual se le generará una Orden de Compra Espejo por los Medios correspondientes.

La Orden de Venta se deberá Completar, de manera que se genere automáticamente la Orden de Compra al Proveedor del Medio. Para Completar la Orden de Venta el sistema controlará que la misma tenga el Check de “Aprobado por Cliente” en “Y” y que tenga adjunto la aprobación en cuestión. Esta Orden de Compra se definirá en el campo “Orden Enlazada”. La Orden de Compra se generará en estado Borrador a la espera que el Departamento de Compras verifique la misma y la complete.

Desde la Orden de Compra se podrá obtener la Representación Impresa de la misma que deberá ser enviada al Proveedor del Medio.

## Consumo

Desde la tarea se deberá crear una Orden de Venta del Tipo “Orden de Venta (Consumo)” tomando los datos definidos en la misma y en sus líneas. En las Líneas de la Tarea se deberá definir los Productos a ser Consumidos, definiendo Fecha Emisión, Producto, Descripción del Programa, Cantidad y Precio.

Las líneas se desplegarán en formato grilla, para completarlas se puede ir definiendo uno a uno los campos utilizando “Intro” para pasar al siguiente campo. Una vez termine de completar una línea, se podrá copiar la misma utilizando el botón de la barra de herramientas “Copiar Registro”, una nueva línea será generada con la misma información, sólo deberá modificar lo que corresponda (Fecha de Emisión, Programa, etc).

**Producto:** en cada una de las líneas se deberá definir el producto que será Emitido. Para seleccionar el producto puede hacer click en el buscador del campo, abriendo la ventana de Información del Producto. En ella podrá realizar los filtros que considere necesario para encontrar el Producto exacto a ser consumido. Dentro de los campos que puede utilizar se recomienda definir el Proveedor del mismo que debería ser el mismo a quién se está generando la Orden de Compra. A su vez, también se podrá apoyar en el campo “Medio” y “Soporte” de los productos.

Una vez definidas todas las líneas que se desea pautar, se deberá proceder a realizar una Orden de Venta del tipo “Orden de Venta (Consumo)” desde el botón “Generar Orden de Venta”.

Al confirmar el proceso, una Orden de Venta será generada apareciendo el número de la misma en la esquina inferior izquierda de la ventana. Para acceder a ella se podrá utilizar el botón de “Visualiza Detalle” en la Barra de Herramientas de la Ventana Proyecto.

La Orden de Venta (Consumo) se deberá Completar, de manera que se genere automáticamente la Orden de Compra (Consumo) correspondiente. Una vez con la Orden de Compra (Consumo) completa, la misma podrá ser enviada al Proveedor del Medio en cuestión mediante su representación impresa.

Ambas consumirán sus Órdenes de Pre-Compra correspondientes (Orden de Venta y Orden de Compra), quedando a la espera de ser confirmados mediante el “Checking”.

## Checking

Luego de contar con una “Orden de Publicidad (Consumo)” o una “Orden de Publicidad (Compra y Consumo)” en Estado “Completo”, la misma se deberá confirmar mediante el Checking.

El checking se puede acceder de dos maneras, una opción es directo desde los Procesos definidos en el Proyecto de Medios que se estará verificando. Para ver los procesos del Proyecto se deberá oprimir el botón de proceso ubicado en la Barra de Herramientas seleccionando “Checking”. Otra opción es directo desde el proceso Checkin ubicado en el menú, en este caso se podrá filtrar según desee pudiendo ver más de un proyecto a la vez para confirmar.

Al realizar la búsqueda desde el SmarBrowser de Checkin, deberá seleccionar las líneas que han sido emitidas, confirmando a su vez la cantidad en cuestión de dicha emisión.

En caso de querer confirmar la No Emisión se deberá seleccionar la línea, definir la cantidad en 0.

En caso de que dicha Cantidad a su vez deberá Liberar Saldo de una Pre-Compra además se deberá marcar el Check de “Liberar Saldo” en Y.

Creación de un “Proyecto de Medios” donde realizará la Inversión del cliente. La idea es que dentro de un mismo Proyecto se controle lo **Ordenado con lo Facturado**. Como se manejan diferentes criterios de Facturación que de recepción de Productos a inventario, se decide manejar mediante la FASE la “*Inversión”*, y mediante la Tarea y líneas de la Tarea la *“Recepción”*.

## Compra Inventario

### **Se comienza generando un Proyecto con nivel de línea “Tarea”**

* En la ventana de Proyecto de Medios se deberá crear un proyecto definiendo:
  * **Cliente**
  * **Marca del Cliente**
  * **Nombre del Proyecto**
  * **Nivel de Línea:** Tarea
  * **Lista de Precios**
  * **Campos Automáticos:** Según el Cliente seleccionado se cargarán los siguientes Campos:
    * Contrato de Servicio
    * Sello
    * Sello Origen
* Término de pago
* Almacén del cliente

### **Definición del Proveedor de la Inversión:**

### **En la Fase del Proyecto se deberá definir el Proveedor donde se realizará la inversión**

Para que el sistema permita elegir un Proveedor en el campo **Socio del negocio Entrega Directa** es importante que el mismo:

* Esté creado con la Organización con la que se encuentra logueado el usuario o con Organización (\*).
* En la ventana Socio de negocio, en su cabezal debe tener marcado el check de “activo” y en la pestaña Proveedor el check de “Proveedor”.

## Orden de Inventario:

Desde la Tarea se crea la **Orden de Inventario** donde se definirán los Productos a comprar. El proceso de generar una Compra de Inventario deberá comenzar realizando la definición de todos los Productos que se estarán adquiriendo para consumir en el futuro dentro las líneas de una Tarea de Proyecto.

Para ello se deberá detallar cada uno de los productos que se estarán adquiriendo en “Líneas de Tarea” con el Precio acordado de los mismos. Una vez se tengan todos los Productos definidos en Líneas de Tarea, se podrá ver el TOTAL en el campo “Total Planeado” de la Tarea.

Una vez confirmado el importe se deberá generar la “Orden de Inventario” desde el Proceso “Generar Orden”. IMPORTANTE la Orden de Inventario es una orden de Sub tipo de OV “Propuesta”.

La Orden de Venta se definirá en el Campo Orden de Venta de la Tarea. Se debe navegar hacia la Orden de Venta para poder Completarla.

Al Completar la Orden de Venta se generará la Orden de Compra al Proveedor definido. Se podrá navegar a la Orden de Venta desde el campo “Orden enlazada” desde la Orden de Venta

Al completar la Orden de Compra de tipo de documento “Orden de Compra Inventario”, los Productos definidos en ella se habrán recepcionado automáticamente en el Almacén definido en el Proyecto. Ésta Almacén debería ser el Almacén definido para el Cliente por el cual se compró los productos.

## **Reporte “Detalle de Almacenamiento Simple”**

Se podrá confirmar el ingreso de los productos al almacén mediante el reporte de “Detalle de Almacenamiento Simple” seleccionando el Almacén en cuestión.

## **Orden de Venta y Orden de Compra a Facturar**

Desde la **FASE** se deberá crear una “Orden de Venta Inversión”, ésta será realizada según el Producto genérico definido en la FASE (Ej: Inversión TV) y por el Importe Total. Este producto será el que finalmente será facturado, tanto al Cliente como por el Proveedor.

Para el caso que una Orden de Venta u Orden de Compra deba ser Facturada en diferentes “Cuotas” se deberá:

* **Producto a Facturar:** Como la facturación no se realizará producto a Producto que fue solicitado, se debe definir un Producto Genérico que será el que finalmente será facturado.
* **Descripción:** Escribir en la Descripción de la FASE cómo se desea que sea Facturado para que Administración se entere.
* **Cantidad:** Además se deberá definir en Cantidad las diferentes Cuotas que tendrá. Además en el Campo “Cantidad” de la Fase se deberá definir la Cantidad de Cuotas que se desea Facturar, ya sea por el Medio o al Cliente. Ver que como Precio Unitario se deberá visualizar el importe de cada una de las cuotas a ser Facturado.

## **Consumo de Inventario**

Cuando un cliente cuente con inventario previamente comprado y se quiera consumir parte del mismo, se deberá crear directamente una Orden de Venta del tipo “Orden de Pauta”. En la misma se deberá definir el *Proveedor* y el *Almacén* del Cliente definiendo “Entrega Directa” = N. En las líneas se deberá definir cada uno de los Productos que se desean emitir así como su Cantidad correspondiente. Esta Orden de Pauta una vez se confirme es la que generará la Entrega del Inventario bajándolo de stock.

* Pendiente de definir: Ver cómo se quiere gestionar el Precio en las Órdenes de Pauta.
* Esta Orden de Pauta no será facturada nunca ya que se entiende que ya se facturó mediante la Orden de Venta Inversión que se compró el Inventario.

## **Conversión de Productos en Inventario**

Los productos que existan en inventario podrán ser canjeados por otros productos desde la ventana de “Inventario Uso Interno” (podrá definirse el nombre que deseen). En esta ventana se podrá realizar una Conversión entre un Producto que está actualmente en inventario por otro nuevo, disminuyendo el inventario de uno y aumentando el otro. Esta Conversión se realizará sin ningún tipo de control, siendo responsabilidad del usuario controlar que dicha conversión sea según lo acordado con el Proveedor.

Contablemente el sistema actualmente Descuenta el importe en cuestión por el producto que se va, pero no está haciendo la entrada del producto que se recibe. Confirmar si se desea:

Se quiere que contabilice correctamente dando la entrada contablemente del nuevo producto. No se desea realizar ningún asiento contable por esta transacción.

## Errores frecuentes

### **Error 1: No me aparece el Cliente para elegir en el proyecto:**

**Solución:**

Un Proyecto se podrá generar sólo a un Cliente que tenga un Contrato Activo en la Organización que estoy logueado.

Además se deberá verificar que el contrato que se obtenga para ese Cliente tenga definido un Sello Origen en Contrato en cuestión para el Tipo de Proyecto que se esté generando (Medios, Creativo, Digital, RRPP).

### **Error 2: No se encuentra Sello Origen**

**Solución:**

Cuando esto sucede es probable que el contrato del proyecto en cuestión no tenga definido un sello origen para este Tipo de empresa, por lo que deberemos navegar al Contrato y en la pestaña Partes del contrato crear el sello origen correspondiente.

## Agencia Creativa

### Proyecto de Agencia Creativa

El Proyecto de Agencia Creativa será donde se deba ingresar todo pedido realizado por el cliente. Desde el Proyecto se vinculará todos los documentos que se haya generado a causa dicho Pedido a lo largo de toda la organización (Solicitudes, Orden de Compra, Orden de Venta, Cotizaciones, Tareas, etc) y será desde donde se defina la facturación a realizar.

Cada Proyecto de Agencia podrá tener un Brief, este será la descripción del servicio solicitado por el Cliente. Este se puede definir tanto en un Campo Texto o bien adjuntando un archivo directo en el Proyecto. Según el tamaño y complejidad del mismo, este podrá Fases, Tareas y Solicitudes vinculadas separando así el trabajo a realizar.

A su vez, directo desde un Proyecto se podrá generar las Órdenes de Venta definiendo lo que deberá facturar en relación al mismo.

Se deberán definir obligatoriamente en el cabezal los siguientes Campos:

Socio del Negocio Nombre Marca Categoría del Proyecto Nivel de línea Fecha Inicio (creación) Fecha Límite Lista de Precios

Campos Automáticos:

Según la Lista de precio seleccionada:

Moneda

Según el Cliente seleccionado:

Término de pago. Almacén del Cliente: El almacén en un proyecto se definirá de manera automática según el almacén que tenga definido el Cliente en la pestaña Cliente ventana Socio del Negocio. Contrato de Servicio: (En caso que el Cliente posea más de uno, el sistema tomará el primer Contrato creado que encuentre, por lo que se sugiere en estos casos elegir el Contrato en este campo de forma manual). Sello. Sello Origen: Cuando se guarda un proyecto se realiza lo siguiente:

Según la Categoría de Proyecto se definirá el Sello Origen correspondiente que tenga definido el contrato en sus “Partes del Contrato”.

Según las siguientes Categoría de Proyecto se obtendrá el sello definido para el siguiente tipo de empresa:

Categoría de Proyecto

Tipo de Empresa

Proyecto de Agencia

Agencia Creativa

Proyecto de Medios

Agencia de Medios

Proyecto RRPP

Agencia RRPP

Proyecto de Medios Digitales

Agencia de Medios Digitales

\*Si no se obtuvo sello de origen se lanza una excepción.

Según el usuario logueado en el sistema:

Agente Comercial: Este campo en el cabezal de un Proyecto tomará de forma automática al usuario logueado en el sistema siempre que este tenga el check de “Agente comercial” en “Y”, en la Pestaña “Empleado” de la ventana “Socio de negocio”.

## **Cotización para Clientes**

El Ejecutivo de Cuentas creará un Proyecto en el cual definirá lo solicitado por el cliente. En caso de que el mismo incluya realizar una Cotización de determinados servicios/productos a diferentes proveedores externos se deberá seleccionar un Tipo de Proyecto que contemple la “Cotización”.

Los Tipos de Proyecto pueden ser:

Producción Interna + Cotización: En caso que se necesite trabajos de creatividad como también cotización a proveedores. Al seleccionarla se crearán automáticamente 2 Fases:

Cotización: En caso que sólo se deba gestionar la cotización de determinados servicios o trabajos. Al seleccionarla se creará automáticamente 1 Fase:

En ambos Tipos de Proyecto se deberá también definir el Nivel de Línea “Tarea”.

Dentro de la Fase *Producción*, el Ejecutivo de Cuenta deberá crear como TAREAS todos las diferentes Cotizaciones que se deberán realizar clasificando según “Tema a Cotizar”.

En cada TAREA se podrá definir una *Categoría* de “Cotización a Proveedores” para que facilite su identificación. Además se podrá asignar a un *Responsable* de la misma (Considerar que para poder asignar como responsable a un usuario, el mismo deberá estar definido como “Miembro del Proyecto”).

Fase generada automáticamente. Sólo se deberá agregar en el campo “Detalle Cotización” el detalle de lo que se desea Cotizar.

*Descripción*: se deberá definir el el texto que se enviará al Proveedor en la Solicitud de Cotización. Este podrá ser modificado si se desea luego por Producción.

Campo “Ayuda”: se podrá agregar un comentario para que Producción considere en caso de ser necesario para realizar la cotización.

## **Generar Orden de Venta desde Solicitud de Cotización**

Una vez generada la Solicitud de Cotización (RFQ-Request for Quotation), evaluadas las respuestas, y aceptado una Respuesta de Cotización por el Cliente, se deberá proceder a generar una Orden de Venta al Cliente para que la misma se pueda aprobar mediante el flujo de aprobación estándar de la Orden de Venta.

La Orden de Venta se podrá generar directo desde la Solicitud de Cotización desde el botón “Crear Orden de Venta”.

Seleccione el Tipo de Orden de Venta “Orden de Venta con Aprobación”. Esta se generará con las líneas de la Solicitud de Cotización en cuestión, tomando la Respuesta de Cotización seleccionada como “Ganador Seleccionado” para definir los campos *Precio* según el definido en el campo “Precio Factura” y como “Socio del Negocio de Entrega Directa” al Proveedor de la misma.

Luego de generarla desde el proceso ubicado en el botón “Crear Orden de Venta”. Se podrá navegar a la misma desde el campo “Orden de Venta” existente al lado del botón.

Al Completar la Orden de Venta luego de la aprobación del Cliente, automáticamente se generará la Orden de Compra Enlazada según Entrega Directa.

## **Orden de Venta con Margen**

En caso de contar con “% de Margen” (Mark-Up), el precio real enviado por la Cotización se definirá en la línea de la Orden de Compra. En caso de no existir “Mark-Up” los precios de la Orden de Venta y los precios de la Orden de Compra serán iguales.

## **Compra Directa a un Proveedor en nombre de Cliente**

Cuando el Proyecto incluya realizar una compra específica a un proveedor pero que no es necesario pasar por el proceso de generar una Solicitud de Cotización (RFQ), se podrá gestionar la misma de forma directa desde una Fase.

En este caso, los pasos a seguir serán:

Definir el Proyecto mínimo con Nivel de Línea “Fase”

En la Fase activar el check Entrega Directa

Definir un Proveedor como “Socio del Negocio de Entrega Directa”

En las Líneas de Tarea definir el Producto, precio y cantidad

Desde la Fase generar una Orden de Venta al Cliente pero Generar la Orden desde el botón de Generar Orden de Venta ubicado en la Fase.

Seleccionar Tipo de Orden “Orden de Venta con Aprobación”

Dicho Proceso generará una Orden de Venta con el Proveedor definido como Entrega Directa. Esto hará que al completarse la Orden de Venta, se genera automáticamente una Orden de Compra al Proveedor enlazada con esta Orden de Venta.

La Orden de Compra se podrá encontrar en el campo “Orden enlazada” de la Orden de Venta.

IMPORTANTE: Tener en cuenta que el Producto definido en la línea de la Orden de Venta, deberá estar definido tanto en la Lista de Precios de la Orden de Venta, como también en la Lista de Precios que el Proveedor tenga definida por defecto en su definición de Socio del Negocio. Para evitar esto podemos dejar el campo Lista de Precios de Compra del Proveedor vacío.

## **Checking**

Luego de contar con una “Orden de Compra” en Estado “Completo”, la misma se deberá confirmar mediante su delivery mediante el Checkin.

El checking se puede acceder de dos maneras:

1. Barra de Herramientas/Procesos (engranaje). Desde los Procesos definido en el Proyecto que se estará verificando el delivery. Para ver los procesos del Proyecto se deberá oprimir el botón de proceso ubicado en la Barra de Herramientas seleccionando “Checkin”.
2. Menú. Desde el proceso Checkin ubicado en el menú, en este caso se podrá filtrar según desee pudiendo ver más de un proyecto a la vez para confirmar.

Documentos sobre los que se debe realizar checking:

* Se debe realizar checking sobre todas las órdenes de venta inversión del cliente menos la “OV compra paquete” dónde el checking se realiza sobre las órdenes de consumo.

Los Procesos desde la Barra de Herramientas no se actualizan automáticamente, por lo que si lo presionó desde la Fase, recordará los Procesos de la Fase. para solucionarlo deberá ingresar nuevamente a la ventana y presionar “Procesos” desde la pestaña de proyecto.

## **Nivel de Línea**

### **Nivel de Línea: Proyecto (Creativo Simple) / Primer Nivel**

El Nivel Proyecto se deberá utilizar cuando la Campaña o Trabajo (Job) a realizar es simple. Esto quiere decir que el Proyecto tendrá directamente los “To-Do” a realizar, sin contar con ningún nivel o agrupación intermedia.

* Proyecto
  * “To-Do” (Solicitud)
  * “To-Do” (Solicitud)
  * “To-Do” (Solicitud)

### **Nivel de Línea: Fase (Campaña Multimedia) / Segundo Nivel**

La Fase es el segundo nivel del Proyecto. Se deberá utilizar en los siguientes casos:

Cuando una Campaña cuente con diferentes “Materiales” se deberá definir el nivel de Fases con el fin de contar con una Fase por cada Material de la Campaña (Proyecto).

* Proyecto
  * Material 1 (FASE)
    * Solicitud (“To-Do”)
    * Solicitud (“To-Do”)
    * Solicitud (“To-Do”)
  * Material 2 (FASE)
    * Solicitud (“To-Do”)

### **Nivel de Línea: Tarea (Producción o Campaña Multimedia) / Tercer Nivel**

El Nivel de Proyecto hasta TAREA agrega un nivel adicional (3er Nivel) al Proyecto antes de llegar a la definición de Solicitudes (To-Do).

Este nivel se utilizará por ejemplo cuando existan Fases de Producción, donde se deba realizar Cotizaciones de Proveedores.

En este caso los niveles serán clasificados de la siguiente manera:

FASE: se clasificará el trabajo “Creativo” y “Producción” tendrá dentro las Solicitudes de Creatividad a realizar.

TAREAS: Dentro de cada Fase se crearán las diferentes TAREAS a realizar. En el caso de Producción, se deberá crear una Tarea por Cada Cotización a realizar.

* Proyecto (Tipo de Proyecto: Creativo)
  * Material 1 (FASE)
    * TAREA 1
      * Solicitud (“To-Do”)
      * Solicitud (“To-Do”)
      * Solicitud (“To-Do”)
    * TAREA 2
      * Solicitud (“To-Do”)
      * Solicitud (“To-Do”)
  * Material 2 (FASE)
    * TAREA 2
      * Solicitud (“To-Do”)
      * Solicitud (“To-Do”)
* Proyecto (Tipo de Proyecto: Cotización)
  * Producción (FASE)
    * TAREA 1 (Tema a Cotizar)
    * TAREA 2 (Tema a Cotizar)
    * TAREA 3 (Tema a Cotizar)

## **Miembros del Proyecto**

En cada Proyecto se podrá agregar Miembros. Los Miembros del Proyecto serán todos aquellos usuarios, internos como externos que estén involucrados con el Proyecto.

Estos pueden ser definidos manualmente desde el botón “Crear Desde” ubicado en el cabezal del Proyecto, como también automáticamente.

Al crearle un Proyecto a un Cliente, automáticamente se definirá como Miembros del Proyecto a todos los usuarios que que dicho Cliente tenga asignados a su Cuenta.

La asignación de Miembros de una Cuenta se definirá dentro de la Ventana *Socio del Negocio*, Pestaña *Miembros por Defecto*.

\*Pestaña “Miembros por Defecto” en Ventana Socio del Negocio.

### **Solicitudes del Proyecto**

Dentro de cada Proyecto se podrá crear diferentes Solicitudes asociadas al mismo. La ventaja de generar las Solicitudes desde un Proyecto, Fase o Tarea es que tomará del contexto toda la información que necesite, como Proyecto, Cliente, etc.

Desde la ventana Proyecto se podrá visualizar todas las Solicitudes relacionadas, tanto desde la Pestaña de Solicitudes correspondiente como desde la Barra de herramientas (Ver todas las solicitudes).

## **Proyecto Pestaña Solicitudes de Fase**

### **Solicitud (To-Do)**

Una Solicitud refiere a una Tarea específica (To-Do) que tiene determinado *Asunto*, *Descripción* y está *Asignado A* un Usuario con determinada *Fecha de Siguiente Acción* y *Fecha de Fin*.

Esta Solicitud a su vez, puede estar vinculada a diferentes documentos a lo largo del sistema, como por ejemplo un Proyecto, un Cliente, una Orden de Venta, una Factura, una Marca, un Sello, etc.

Dentro de una Solicitud se podrá agregar *Comentarios* y modificar el “*Asignado A”* o el *Estado* de la misma a medida que avanza el desarrollo de la misma. Cada Solicitud se podrá visualizar el histórico de Actualizaciones que la misma tuvo desde la pestaña de *“Actualizaciones”* detallando la Fecha-Hora, Usuario, Comentario así como demás cambios en los campos que fue realizando.

Cada Actualización que se realice sobre la Solicitud, el sistema estará enviando automáticamente notificaciones a cada usuario que esté vinculado a la misma. El tipo de Notificación a enviar dependerá de la Configuración de Notificaciones que cada usuario tenga definida (e-mail o aviso interno).

*\*para ver más en detalle sobre las notificaciones ver “Notificaciones del Sistema”.*

## **Ventana Todas las Solicitudes**

### **Solicitudes Asignadas a uno**

Esta ventana será la que el usuario siempre ingresará para ver todo lo que tiene pendiente de realizar, viendo claramente todo lo que tiene pendiente.

En la ventana “Solicitudes” se podrán visualizar todas las Solicitudes que estén asignadas a uno mismo (su Usuario) o al Departamento que uno pertenece.

## **Ventana Solicitud**

### **Acceso directo a la ventana**

Esta ventana será de muy fácil acceso, existiendo un acceso directo desde la Bandeja de Entrada del usuario con el Botón “Solicitudes”. Al costado del nombre del botón se podrá visualizar la cantidad de sus Solicitudes que tiene “Vencidas”

### **Todas las Solicitudes**

En esta Ventana de “Todas las Solicitudes” se podrá visualizar todas las Solicitudes que estén creadas en el sistema. Cada usuario podrá ver las que le permita su Rol y en la misma se podrá aplicar los filtros deseados para buscar las que necesite ver.

### **Solicitudes de Cuentas**

La Ventana de “Solicitudes de Cuentas” está creada para que los Ejecutivos de cuenta específicamente (que serán “Gerentes de Proyecto” de todos aquellos proyectos que estén bajo su control) puedan visualizar en una misma ventana todas las Solicitudes que están pendientes dentro de los sus Proyectos.

Estas podrán estar asignadas a ellos o a cualquier otro usuario.

### **Historial de Actualizaciones de Solicitud (Feed)**

Dentro de cada Solicitud se podrá visualizar el historial de actualizaciones que tuvo la misma a lo largo del tiempo. En cada Actualización se podrá visualizar el cambio realizado y por quién fue realizado. En caso de haber adjuntado una imagen la misma se podrá visualizar en modo “Registro único” sin tener que ver el adjunto en la Barra de Herramientas.

### **Notificaciones de Actualización**

Cada Solicitud envía notificaciones de sus actualizaciones a los usuarios definidos como:

* Asignado A
* Creado Por
* Departamento
* Aviso de Actualización

Como verá, además de los usuarios vinculados, dentro de cada Solicitud se podrá agregar diferentes usuarios para que les llegue vía correo electrónico las notificaciones por actualización de las mismas, independientemente de los demás criterios. Para ello simplemente se deberá navegar a la pestaña “Aviso de Actualización” y agregar manualmente el o los usuarios a recibir notificaciones.

## **Solicitud Pestaña Aviso de Actualizaciones**

### **Tipo de Proyecto**

El sistema brinda diferentes “Plantillas” donde se puede definir una estructura Tipo en la cual basarse para crear un Proyecto. Esta puede utilizarse o no, según desee el usuario. La principal ventaja sería la creación automática de Fases o Tareas según el Tipo de Proyecto seleccionado ahorrando a uno crearlas manualmente. Principalmente es útil para los Proyectos donde existan cotizaciones.

Dentro de los diferentes Tipos de proyecto encontramos:

* **Creativo:** Estructura más simple, al seleccionarlo no se crean ninguna Fase ni Tarea por defecto. Simplemente define un conjunto de Estados de Proyecto así como también categoriza el proyecto en cuestión.
* **Creativo + Cotización:** Utilizado cuando existe Creatividad y Cotización. Crea una Fase para cada una. Se necesita nivel de Proyecto “Tarea”
* **Cotización:** Utilizado cuando es sólo para realizar una Cotización al Cliente. Crea una Fase de Cotización. Se necesita nivel de Proyecto “Tarea”

### **Orden de Venta desde Proyecto**

En cada Proyecto, cuando un trabajo deba ser facturado al Cliente, se deberá generar una Orden de Venta vinculada al mismo.

Para generar una Orden de Venta desde un Proyecto, se deberá definir en la Línea del Proyecto:

* el Producto/Servicio
* el Precio
* la Cantidad
* una Descripción

La ubicación de la Pestaña de “Línea” dependerá del *Nivel de Línea* seleccionado en el Proyecto, desplegando según corresponda Línea del Proyecto, Línea de la Fase o Línea de la Tarea.

Una vez definido el *Producto/Servicio* en la Línea que corresponda, se deberá generar una Orden de Venta desde el Botón “Generar Orden” ubicado en el Cabezal del Proyecto, en el Grupo de Campos “Acción”. La misma será generada tomando toda la información que se haya definido en las Líneas.

Las Órdenes de Venta generadas desde un Proyecto se pueden visualizar de diferentes maneras.

### **Vista de la Orden de Venta desde la Pestaña del Proyecto**

Una opción es desde la pestaña de “Orden de Venta” definida mismo en la Ventana de Proyecto de Agencia. En ella podrán ver de manera resumida todos los datos referente a una Orden de Venta que necesitan.

### **Vista de la Orden de Venta navegando desde el Proyecto**

Otra opción puede ser utilizando la Navegación a Documentos Relacionados existente en todos los documentos

Tener en cuenta que la Orden de Venta que se genere siempre tendrá en su Descripción el nombre del Proyecto / Fase / Tarea desde donde se generó. Además, se definirá en la Descripción de la línea de Orden de Venta la *Descripción* que se defina en la línea del Proyecto.

### **Controles en la Orden de Venta**

* Aprobado por Cliente
* Archivo Adjunto

Las Órdenes de Venta cuentan con un control de Aprobación de Clientes. Para poder completar la Orden de Venta se deberá Marcar en “Y” el Check “Aprobado por Cliente” y además contar con un archivo adjunto a dicha Orden. La idea es que se adjunte la autorización que se tuvo del cliente para proceder con dicho pedido.

## **Agencia de Producción**

### **Cotizaciones**

### **Cotización para Clientes**

El Ejecutivo de Cuentas creará un Proyecto en el cual definirá lo solicitado por el cliente.

En caso de que incluya la Cotización de determinados servicios/productos a proveedores externos se deberá seleccionar un Tipo de Proyecto que contemple la “Cotización”.

Estos pueden ser:

* **Creatividad + Cotización:** En caso que se necesite trabajos de creatividad como también cotización a proveedores. Al seleccionarla se crearán automáticamente 2 Fases:
  * Fase Creativa
  * Fase de Producción
* **Cotización:** En caso que sólo se deba gestionar la cotización de determinados servicios o trabajos. Al seleccionarla se creará automáticamente 1 Fase:
  * Fase de Producción

**El nivel de línea de un Proyecto con Cotización debe ser “Tarea”.**

Dentro de la Fase *Producción*, el Ejecutivo de Cuenta deberá crear como TAREAS todos las diferentes Cotizaciones que se deberán realizar clasificando según “Tema a Cotizar”.

En cada TAREA se podrá definir una *Categoría* de “Cotización a Proveedores” para que facilite su identificación. Además se podrá asignar a un *Responsable* de la misma; (para hacerlo el mismo deberá estar definido como “Miembro del Proyecto”).

## **Fase generada automáticamente.**

Sólo se deberá agregar en el campo “Detalle Cotización” el detalle de lo que se desea Cotizar.

### **Tareas con cada Cotización a realizar.**

* **Descripción:** Se deberá definir el el texto que se enviará al Proveedor en la Solicitud de Cotización. Este podrá ser modificado si se desea luego por Producción.
* **Ayuda:** Se podrá agregar un comentario para que Producción considere en caso de ser necesario para realizar la cotización.

## **Generando Cotizaciones (Producción)**

### **Ventana: Tarea de Proyecto**

Dentro de la ventana Tarea de Proyecto, Producción podrá visualizar todas las Tareas que se deberán realizar en cada uno de los Proyectos.

Se recomienda definir un Filtro en *Búsqueda Avanzada* “A Cotizar” para que sólo se considere las Tareas de Categoría “Cotización a Proveedores”. En caso de ser necesario, cada usuario también podría aplicar un filtro para sólo ver las Tareas que uno esté asignado como “Responsable” de la misma.

El Cabezal de la Ventana Tarea de Proyecto presenta las Tareas tal como se visualizan dentro de los Proyectos junto con la Pestaña de Líneas de Tarea correspondientes.

La idea es que Tarea a Tarea, se defina en las Líneas de Tarea los Productos/Servicios que se deben Cotizar, así como la Descripción de los mismos.

En caso de requerir cotizar diferentes cantidades, en la definición de la línea de Tarea sugerimos detallarlas solamente en la descripción, no utilizando las Cantidades (más adelante explicaremos con mayor detalle)

**Fecha Límite:** Tener en cuenta que es obligatorio contar con el campo “Fecha Límite” definido en la tarea para poder generar la Solicitud de Cotización. Dicha Fecha será utilizada para definir la Fecha Límite que se necesita contar con la Respuesta de Cotización entregada por el Proveedor.

**Si no se ingresa Fecha Límite, se desplegará el siguiente mensaje de error en la parte inferior izquierda de la ventana.**