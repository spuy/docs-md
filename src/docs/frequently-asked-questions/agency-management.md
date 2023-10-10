---
title: Gestión de Agencia
category: Documentation
star: 9
sticky: 9
article: false
---

## Gestión de Agencia

### Gestión de Proyectos

#### General de Proyectos

#### Definición de Sello Origen de un Proyecto

Cuando se guarda un proyecto de agencia o de medios, se realiza lo siguiente: Según la Categoría de Proyecto se define el Sello Origen correspondiente que tenga definido el contrato en sus “Partes del Contrato”.

Según las siguientes Categoría de Proyecto se obtendrá el sello definido para el siguiente tipo de empresa:

Categoría de Proyecto:                      Tipo de Empresa  
Proyecto de Agencia                           Agencia Creativa

Proyecto de Medios                            Agencia de Medios

Proyecto de RRP                                 Agencia RRPP

Proyecto de Medios Digitales             Agencia de Medios Digitales

::: note
Si no se obtuvo sello de origen se lanza una excepción.
:::

#### Cómo se define un usuario como “Agente Compañía” de un Proyecto, Orden, Factura o Solicitud.

El campo agente compañía en el cabezal de un Proyecto permitirá elegir a todos aquellos usuarios que tengan asociado un Socio del Negocio que a su vez el mismo tenga marcado el check de "Agente compañia" en "Y", en la Pestaña "Empleado" de la ventana "Socio de negocio".

### Definición del almacén en un Proyecto

El almacén en un proyecto se definirá de manera automática según el almacén que tenga definido el Cliente en la pestaña Cliente ventana Socio del Negocio.

### Definición de honorarios

Los honorarios se definen en la ventana Definición de comisiones.

#### Definición de Tipos de honorario y Porcentajes en un Contrato de servicio

El porcentaje de honorarios que será considerado para el cálculo de Honorarios será obtenido según el “Contrato de Servicio”, de acuerdo a la definición que exista en la pestaña Honorarios, aplicando los filtros definidos en estos registros.

Debe considerarse que estas definiciones actúan como si fuese un Diagrama de Venn, definiendo tantos conjuntos como definiciones se realicen. A medida que se vayan definiendo conjuntos más complejos se debe tener la precaución de no dejar conjuntos que en algún momento puedan duplicar ciertos productos ya que un producto puede estar en diferentes conjuntos según como se definan los mismos. En este proceso se debe actuar en concordancia con la definición de los productos para que se logre una correcta definición de ellos y los Conjuntos que se desean definir.

Para que un producto sea considerado por un Honorario es necesario que por lo menos una que incluya el producto contemple el honorario y que este último no tenga alguna que no esté en el producto.

#### Definición de Comisiones al proveedor

Los porcentajes de Comisiones al proveedor se tomarán según la definición que tenga éste en la ventana Socio del negocio pestaña Comisión de Proveedor.

Opcionalmente, si existieran diferentes porcentajes a aplicar según el Tipo de producto, se podrían hacer tantos registros como diferentes porcentajes existan, de manera que el producto se filtre al porcentaje a aplicar.

#### Requisitos para seleccionar Socios del Negocio en un Proyecto

Para que aquí se visualice un cliente para seleccionar, es importante que:

* El Cliente esté creado con la Organización con la que se encuentra logueado el usuario o con Organización (*).
* El Cliente tenga un contrato activo en la Organización en la que se encuentra logueado el usuario.
* En la ventana Socio de negocio, en su cabezal debe tener marcado el check de "activo" y en la pestaña Cliente el check de "Cliente".

Para que el sistema permita elegir un Proveedor en el campo **Socio del negocio Entrega Directa** es importante que el mismo:

Esté creado con la Organización con la que se encuentra logueado el usuario o con Organzación (*).

* En la ventana Socio de negocio, en su cabezal debe tener marcado el check de "activo" y en la pestaña Proveedor el check de "Proveedor".

Requisitos para visualizar una Orden de venta a facturar desde el proceso Generar factura desde linea de orden:

1. La Orden de venta debe estar COMPLETA.
2. Tener el ckeck de PERMITE FACTURAR en “Y”.
3. Se debe tener en cuenta el campo “Regla de facturación” de la misma.

#### Ventana “Project” (“Proyecto”):

En esta ventana, el Botón "Set Project Type" sirve para definir el Tipo de Proyecto que se estará trabajando. Esta funcionalidad se puede utilizar o no, dependiendo de la operativa. El Project Type puede definir al proyecto una Planilla pre definida de Fases o Tareas. Se Puede ver las mismas ingresando a la ventana de "Project Type" desde el Rol Administrador. Si  se deja el Mouse sobre un campo se despliega una ayuda del mismo.

¿Qué determina que aparezca una línea de Orden de venta para facturar en el proceso Generar factura desde linea de orden?

Lo que determina que aparezca o no la linea de orden para facturar en el proceso Generar factura desde linea de orden son las cantidades facturadas de la orden. Si ya se encuentran todas sus cantidades facturadas ésta no figurará. Por el contrario, se mostrarán cuando presente un pendiente de facturación.

#### ¿Por qué razón puede ser que un Cálculo de comisión solo haya considerado la línea de la orden que está facturada?

Si al generar el Cálculo luego de haber facturado genera este error justamente porque encuentra solo lo facturado. En estos casos lo mejor seria que esto se corrija a mano.

#### ¿Si Reactivo una Orden de Honorarios, le cambio el Contrato, la Completo y Recontabilizo el asiento de reconocimiento, cambia el Contrato en el Asiento?

En este caso no lo cambia.

El asiento de reconocimiento se genera desde un proceso de Reconocimiento masivo, no es el asiento del documento Orden de Venta, son documentos diferentes.

En todo caso, se tendría que también reactivar, modificar el contrato en el Asiento (Lote de Asiento Diario) y modificar ahi el Contrato de servicio. De todos modos esto es riesgoso ya que se estaría haciendo muy manual y uno se podría olvidar de algo.

Lo mejor en este caso sería realizar el ajuste de un reconocimento generando el Documento NEGATIVO que se desea corregir (IGUAL AL QUE SE GENERO MAL) y generar uno nuevo con el dato correcto.

Caso concreto: se generó proyecto y OV (orden de venta) pero no le calculó el honorario en automático. Respuesta: Al proyecto de medios se le vinculó un contrato de servicio sin honorarios.

#### ¿Por qué razón puede ser que un Cálculo de comisión solo tome en cuenta la linea que está facturada de una Orden?

El cálculo de comisión que se genera desde la Orden de Compra para que funcione bien no debe tener FACTURADO PARCIALMENTE ninguna línea ya que si lo tiene, el cálculo se realizará considerando dicha cantidad facturada y no la totalidad.

SOLUCIÓN: Si esto pasa lo más fácil es simplemente hacer una Orden de Venta Comisión MANUALMENTE por el total. Recordar definir todos los campos que tienen las OV Comisión automáticas (Proyecto y Contrato de Servicios).

#### ¿Por qué puede no referenciarse un Proyecto en una factura?

El Proyecto se referenciará en la factura siempre que el criterio de agrupación que se haya elegido para agrupar las lineas de Orden al correr el proceso Generar factura desde línea de Orden haya sido “Proyecto”.

Por ejemplo se puede tener N proyectos por Contrato pero solo Un Contrato por cada proyecto. Por lo que si se agrupa por Contrato, como las lineas de orden pueden ser de varios proyectos, al generar la factura no establece el campo de Proyecto en el cabezal.

#### ¿Cómo se Actualizan los Cálculos de Comisiones?

Al ejecutar el proceso de actualización de cálculos de comisión, los cálculos anteriores no se cierran si tienen una factura definida.

Además al cerrar el cálculo a mano desde la ventana, se genera la solicitud de NC.

Por esto, si luego se cierra manualmente la OV también dispara otra solicitud de nota de cŕedito.

##### Actualización de Cálculo de comisiones para Honorarios

Se deberán seguir los siguientes pasos:

* Desde el Contrato de servicio, pestaña Honorarios modificaremos el campo “Multiplicador” al Honorario en cuestión que queramos modificar, indicando aquí el nuevo valor. Guardamos el registro.
* Luego desde la Orden de venta a la que se aplicaron los honorarios correremos el proceso “Actualizar Cálculo de Comisión de Orden”

De esta manera los Cálculos de comisiones generados antes de aplicar este proceso serán Cerrados al igual que su Orden de venta Honorarios.

Se generarán los nuevos  Cálculos de comisiones aplicando los nuevos porcentajes definidos y una nueva Orden de venta honorarios en estado Completo.

#### ¿Cómo se genera la Orden de Venta Honorarios?

La Orden de Venta de Honorarios se generará automáticamente desde el Cálculo de Comisiones siempre y cuando éste tenga un importe mayor a 0.

Podremos acceder a la misma desde la ventana Cálculo de Comisiones mediante el ícono de documentos relacionados.

#### ¿Cuándo se calculan los Honorarios?

Al momento de completar la Orden de venta se generarán tantos Cálculos de comisiones como Tipos de Honorarios se tengan definidos. Según cada Tipo de Honorarios se verificará si los productos definidos en la línea de la Orden de Venta están definidos dentro de los Honorarios del Contrato de Servicio en cuestión. En caso de que se encuentre que un Producto está contemplado en los Honorarios del Contrato, el cálculo de comisiones considerará dicha línea y aplicará el % correspondiente. En el caso de que la Orden de Venta no tenga ningún producto que esté definido en los criterios de un Honorario específico este se creará con importe 0.

Podremos acceder a los cálculos de Comisión realizados mediante el botón de “Documentos Relacionados” desde la Barra de Herramientas.

¿Se pueden crear 2 socios de negocio con el mismo rut?

Hay un control que verifica que no se permita hacer eso, pero en ciertos clientes cuando aplicamos el control como tenían duplicados los rut no se pudo aplicar ese control, hasta q no lo solucionen.

#### ¿El check de fabricate en “Y” en la pestaña Proveedor de la ventana Socio del Negocio es requisito para que se calcule una comisión?

En ese caso no es requisito.

#### Con respecto a las comisiones del Proveedor, estas se definen en la ventana Socio del negocio del mismo pestaña Proveedor: **¿Esta definición toma en cuenta los campos Categoria de Producto o Clasificación del producto (por ejemplo), para calcular la comisión o no?**

Si claro, considera todo lo que se defina de filtro a aplicar.

#### ¿Por qué sucede el siguiente Error de campo Almacén obligatorio al Actualizar Cálculos de comisión si el Almacén está definido?

Este error se produce porque no elegimos Almacen al momento de loguearnos.

#### ¿Cómo se define para informar al sistema que una Orden de compra deba generar comisiones u honorarios?

Se define según el Tipo de Documento. En el Tipo de documento debe tener definido en el campo "Tipo de Comisión" que comisión debe generar al completar el mismo.

Las Ordenes de Venta deben tener seteado "HONORARIOS"

Las órdenes de Compra deben tener configurado "Comisiones"

#### ¿Por que motivo puede NO VISUALIZARSE una Orden de Venta para Facturar?

Puede ser por 3 motivos:

* Que NO esté COMPLETA
* Que no tenga el check de “Permite facturar”
* Ver que Regla de facturación tiene la misma
* Verificar en la línea de la Orden que no tenga Cantidades facturadas

#### ¿Por qué no se visualiza al correspondiente Socio de Negocio cuando quiero seleccionar el mismo desde el cabezal de la ventana Proyecto de Medios?

Esto puede suceder porque el Socio de Negocio esté definido en otra Organización distinta a la que estoy logueado. O bien es posible que se encuentre seteado como Activo = NO.

#### ¿Dónde definir Cantidad de Cuotas y Forma de facturación en Proyecto de medios Compra inventario?

Se realiza en la fase, en los campos:

* **Descripción:** Escribir en la Descripción de la FASE cómo se desea que sea Facturado para que Administración se entere y
* **Cantidad:** Además en el Campo “Cantidad” de la Fase se deberá definir la Cantidad de Cuotas que se desea Facturar, ya sea por el Medio o al Cliente. Ver que como Precio Unitario se deberá visualizar el importe de cada una de las cuotas a ser Facturado.

#### ¿Puedo modificar los importes de una factura si el proveedor no entrega exactamente lo solicitado?

Es posible, en el caso que el proveedor **no entrega** exactamente lo solicitado:

El sistema permite modificar las cantidades en las líneas.

El sistema NO permite modificar importes.

Por lo tanto, para modificar un importe será necesario modificar las cantidades.

Si lo que se conoce de una factura al registrarla es únicamente el importe final, se deberá definir en cantidad la cantidad exacta (con decimales) para que el importe de la factura del proveedor coincida.

Ajuste del registro de la factura proveedor al comprobante físico.

Existen 2 maneras de ajustar el registro de la factura al documento físico:

* Ajustando las cantidades, y el importe se ajustará automáticamente
* Incorporando una línea adicional por el concepto “Ajuste”

#### ¿Por qué motivo al completar una Orden de Venta Compra consumo no se genera Orden de Compra enlazada?

Esto puede suceder frecuentemente cuando al generar el Proyecto desde la fase no se marca el check de "Entrega directa" en “Y”, para luego poder seleccionar el Proveedor como “Socio del Negocio de Entrega Directa”.

SOLUCIÓN: en estos casos sería anular esta Orden de Venta, seguir estos pasos y luego si, generar la misma desde la Fase y completarla.

¿Por qué sucede que luego de haber creado un producto me dirijo a seleccionarlo en la pestaña Líneas fase del Proyecto y al filtrar el producto creado el sistema no lo encuentra?

En estos casos debe verificarse que al crearse el producto quedaron definidos todos los campos que luego utilizarán los filtros para encontrarlo. Por ejemplo, si cuando se creó el producto no quedó definida ni la Versión de lista de precios, ni el Proveedor; cuando se intente filtrar por estos criterios el sistema no encontrará ningún producto asociado a los mismos.

#### ¿Cuándo se generan los cálculos de comisiones?

Los Cálculos de comisiones se generan al completar una Orden de venta o al correr el proceso desde la barra de herramientas.

#### ¿Cómo se pudo haber generado Cálculos de comisión duplicados en una orden?

Se pudieron haber generado varias veces si la reactivaron N veces o corrieron el proceso de “recálculo de comisión” N veces.

#### ¿Cómo se puede ver la Orden de Compra de Costo asociado de una Orden de venta?

La Orden de Compra por Costo asociado aparecerá en el campo “Orden enlazada” desde la Orden de venta ubicado en el grupo de campos “Entrega”.

#### ¿Si tengo una OV que generó honorarios y se reconoció, y quiero mantener la OV pero no los honorarios, como tengo que hacer para "anular" esos honorarios?

Para que se genere un nuevo Honorario se puede correr el proceso de "Actualizar Cálculo de Comisiones" desde la Orden de Venta

Esto lo que hará es cerrar el cálculo de comisión que calculó los honorarios correspondientes y generar un nuevo cálculo de comisión según el % de Honorarios actual.

Si no se desea que se calcule honorarios en esta orden no tenemos actualmente la opción que si existe en las comisiones de definir un % especial de Comisión a la orden.

Lo que se puede hacer es por un momento dejar el honorario variable definido en el contrato que estaría obteniendo esta orden en 0, correr el proceso de "actualizar cálculo de comisión" para que genere la negativa y genere la nueva pero en 0.

#### ¿Pueden generarse Órdenes de venta por Honorarios y Comisiones al Proveedor en más de una cuota?

El funcionamiento actual del sistema es el siguiente:

**1. Con respecto a la Orden de Venta Honorarios:**

Al momento de completar la Orden de venta se calcularán tantos Cálculos de comisiones como Tipos de honorarios tenga definido el Contrato de servicio.

La Orden de Venta de Honorarios se generará automáticamente desde el Cálculo de Comisiones siempre y cuando éste tenga un importe mayor a 0.

Por lo tanto al generarse la Orden de venta Honorarios esta no discrimina por cantidad de cuotas de la Orden de venta que lo generó.

**2. Con respecto a la Orden de Venta por las Comisiones al Proveedor:**

Tendremos una "Orden de Venta Comisión" por el Cálculo de Comisión generado sobre la "Orden de Compra Inversión" original, una vez esta "Orden de Compra Inversión" sea Facturada por el Proveedor se volverá a realizar el Cálculo de Comisión sobre el importe Facturado de dicha Orden de Compra, generando la comisión correspondiente al importe que efectivamente haya sido facturado. Esto es debido a que se entiende que sólo se podrá descontar el importe de Comisión según el % definido pero sobre lo Facturado, ya que lo restante de la Orden de Compra si aún no fue facturado aún no podrá ser Canjeado entre la Agencia y el Proveedor.

A medida que vayan llegando las Facturas de Proveedor por lo restante de la Orden de Compra se irán calculando las comisiones correspondientes.

Cuando se genera una Orden de Venta Comisión desde una Factura de Proveedor, siempre se generará una negativa por el mismo importe, justamente para no alterar el "IMPORTE TOTAL DE LA COMISION" que siempre será definido según el Cálculo de Comisión generado sólo desde la Orden de Compra.

#### ¿Qué sucede en caso de no visualizarse el Cálculo de comisiones al Proveedor por el total de las mismas?

Lo que se debe hacer en este caso es correr el Proceso de "Actualizar Cálculo de Comisiones" desde la Orden de Compra correspondiente para que muestre el total de comisiones.

### ¿Cómo se define un Proveedor en un Producto?

Para definir un Proveedor en un producto se debe ir a la ventana Producto / Pestaña Compras y definir el SDN a quien se compra este producto. es según este dato que se hace la búsqueda de los productos tan fácil desde una fase o línea de fase.

### Cuales son los niveles de acceso de los usuarios

#### Nivel de Acceso a Datos en ROL:

Según el Rol se puede definir un nivel de Acceso a Datos determinado. Esto significa que según el nivel de dicho Rol definirá los documentos que pueda visualizar en el sistema.

Por ejemplo si se desea que determinado Rol sólo visualice Documentos de determinada Organización, se deberá definir el nivel “Organización”.

#### Nivel de Acceso a Datos en Tabla:

También se puede definir en determinada tabla el nivel de acceso a datos posible de la misma. Si un Rol tiene un Nivel menor al que tiene definido una tabla los usuarios no podrán guardar ni modificar ningún campo de la misma.

#### Roles Incluídos

Se utiliza para ir creando roles manuales de manera creciente en cuanto a los accesos o  ventanas que se le asigna a cada uno.

### BÚSQUEDA INTELIGENTE (SMARTBROWSER)

Los procesos que se encuentran dentro de los "Navegadores Inteligentes" permiten una gestión fácil y rápida de los registros sobre los cuales se desea correr cierto proceso.

Lamentablemente estos Navegadores presentan algunas limitaciones que son las siguientes:

1. No se puede alterar el ordenamiento presentado por el Navegador, los datos se deben simplemente filtrar pero no se puede "Ordenar" según un criterio diferente al presentado.

2. No se puede correr más de 1 vez un proceso desde un Navegador Inteligente, esto quiere decir que sí realizó una selección y corrió un proceso, si desea generar un nuevo proceso con nuevos filtros se deberá abrir una nueva ventana del navegador inteligente para realizar la nueva consulta y el nuevo Proceso.

### Guardar Búsquedas Avanzadas en una Ventana

Es posible que hayan ciertas búsquedas que se repiten y se usan constantemente, en esos casos puede resultar útil guardar la consulta con un nombre para poder seleccionarla y utilizarla rápidamente. Para ello:

1. Abrir la ventana que contiene la información que se desea
2. Clic en el icono de la lupa  para buscar.
3. Seleccionar “Buscar registros” (en algunos casos la ventana se abre directamente).
4. Clic en la pestaña “Avanzado”.
5. Agregar el/los criterios de búsqueda con los filtros de acuerdo a la información de la ventana.
6. Colocar un nombre a la consulta y guardarla con el disquete como indica la figura:

   La próxima vez que entre en esta ventana, en la pestaña “Avanzado”, encontrara esta búsqueda en la ventana desplegable con el nombre establecido.

### Reiniciar Cache

En algunos casos no hay acceso a la información, o por ejemplo no da acceso a botones de la barra de herramientas cuando de forma normal estarían habilitados. Por ejemplo: El usuario se puede comunicar indicando que está generando una Factura (Documentos Por Cobrar), genera el cabezal y cuando va a agregar “Líneas” el botón de registro nuevo está deshabilitado.

Otros casos del uso de Reinicia Cache es cuando se ha creado un formulario o reporte nuevo y no se visualiza el cambio en la apariencia del reporte por ejemplo.

Para reiniciar desde Solop ERP, en el cajón de búsqueda se escribe “Reinicia cache”, se selecciona, y se abrirá la ventana, con un botón en la parte inferior derecha con aspecto de “check”. Dar clic y se mostrará un mensaje en azul indicando que el cache se ha reiniciado.

### Exportar registros desde una Ventana

1. Abrir la ventana que contiene la información deseada.
2. Clic en el botón “Informe”.
3. Se despliega un documento (formato PDF por defecto), en la barra de herramientas, clic en la lupa, se abre la ventana, seleccionar pestaña “Avanzado”:
4. Seleccionar los campos por los que quiera Filtrar la información (Rango de fechas por ejemplo):
5. Para un rango de fechas, tener presente el operador utilizado.
6. Clic en Ok.
7. En la barra de herramientas del reporte, seleccionar la ventana desplegable ubicada en el extremo izquierdo:  y seleccionar el formato deseado (XLSX, HTML, etc.).
8. El reporte será descargado en el navegador.

### Acciones sobre un Documento

Las acciones sobre el Documento son:

* Cerrar
* Reversar - Causación
* Reversar - Corregir
* Anular

#### **Cerrar un Documento**

**__Cerrar Orden de Venta/Compra:__**

Al Cerrar todas las Cantidades serán llevadas a la Cantidad Entregada. modificando así el importe total de la Orden.

**En caso de haber cerrado una Orden por error, existe un proceso que se llama “Reabrir Orden” que la vuelve al estado “Completo” (desde el menú):**

**__Reversar - Causación__**

Restaurar extornando la transacción con la fecha de HOY.

**__Reversar - Corregir__**

Restaurar extornando la transacción con la fecha del Documento extornado.  
Anular

Setea en valor cero las cantidades.

##### Barra de Herramientas

##### No me aparece un Proceso desde los Procesos de la Barra de Herramientas

Los Procesos desde la Barra de Herramientas no se actualizan automáticamente, por lo que si por ejemplo se selecciona desde la Pestaña “Fase” de la Ventana “Proyecto”, recordará los Procesos que existen para dicha pestaña y si luego los quiere visualizar desde la pestaña Padre como puede ser “Proyecto” no se visualizarán. Para solucionarlo deberá ingresar nuevamente a la ventana y presionar “Procesos” desde la pestaña Padre (por ej de proyecto).