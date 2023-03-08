---
title: Socio del Negocio
category: Documentation
star: 9
sticky: 9
article: false
---

El socio del negocio generalmente es un sujeto jurídico o natural con el que la organización establece una alianza temporal o permanente a fin de obtener un beneficio común.

En ADempiere no es la excepción, en este sentido, es un participante obligatorio en una transacción administrativa, este puede actuar como cliente, proveedor y empleado, es decir, no existe una transacción de egreso (Compras) o ingreso (Ventas) sin la previa definición del proveedor o cliente (Socio del Negocio), no existe una nómina sin un empleado (Socio del Negocio), en otras palabras, es obligatorio la previa configuración de esta entidad en ADempiere para emitir transacciones administrativas y contables.

Este registro tiene un rol determinante en los asientos contables generados en ADempiere, desempeñándose como una de las dimensiones contables más relevantes, permitiendo agrupar la información de forma eficiente para facilitar el control de aquello que deseamos cuantificar, por tal motivo, la correcta definición determinará los resultados en los asientos y reportes contables de los que disponen nuestros clientes, cabe considerar, que estos valores son heredados de forma predeterminada desde el grupo de socio de negocio seleccionado en este registro, no obstante, el usuario tiene la opción de modificar la configuración contable para casos excepcionales.

En esta ocasión **ERPyA** pretende ofrecerle una guía fácil para la definición básica de un socio de negocio en ADempiere, dentro de este orden de ideas, es importante seguir paso a paso cada procedimiento, de ello dependerá el éxito de los registros resultantes.

- Registro de Socio del Negocio
  - Proveedor
  - Cliente
  - Empleado

## Registro de Socio del Negocio

En el menú de ADempiere, ubique y seleccione la carpeta **Relación con Socio del Negocio**, luego seleccione la carpeta **Reglas de Socios del Negocio** y finalmente seleccione la ventana **Socio del Negocio**.

![Menú de ADempiere](/assets/img/docs/master-data/mad-master-menu.png)

Imagen 1. Menú de ADempiere

En esta ventana se registran los datos principales que la empresa requiere del socio del negocio cliente. Cada uno de los campos con el símbolo (*) son obligatorios para el registro.

A continuación visualizará la ventana **Socio del Negocio**, dónde debe seleccionar el icono de **Registro Nuevo** que se encuentra ubicado en la barra de herramientas de ADempiere.

![Ventana Principal Socio del Negocio](/assets/img/docs/master-data/mad-master-window.png)

Imagen 2. Ventana Principal Socio del Negocio

Proceda al llenado de los campos necesarios que a continuación se detallan.

Seleccione la organización en el campo **Organización**.

La organización le permite definir la entidad legal ó una sub-unidad a la cual pertenece el socio de negocio, si la organización es (*), este estará disponible para todas las organizaciones al procesar documentos y transacciones, pero si por el contrario, ha seleccionado una organización diferente, este registro únicamente estará disponible para la organización seleccionada.

![Campo Organización](/assets/img/docs/master-data/mad-master-organization.png)

Imagen 3. Campo Organización

Warning

Generalmente los **Socios de Negocios** son registros compartidos entre entidades organizacionales, por esta razón **ERPyA** recomienda la creación con organización (*) para evitar duplicidad e inconvenientes contables, de esta forma garantizamos la homogeneidad de los datos maestros.

Introduzca el código de socio del negocio en el campo **Código**.

El código es un dato único e irrepetible que protege la entrada de los registros, evitando la duplicidad de los mismos, generalmente se refiere al número de identificación que acredite la identidad de una persona natural una entidad jurídica, por ejemplo, una cédula de identidad o un RIF.

Note

Si no es ingresado un dato en este campo ADempiere genera un dato de tipo numérico autoincrementable.

![Campo Código](/assets/img/docs/master-data/mad-master-code.png)

Imagen 4. Campo Código

Warning

Se recomienda no ingresar caracteres especiales como puntos, guiones u otros que alteren el registro en este campo.

Seleccione el socio de negocio padre en el campo **Socio de Negocio Padre**.

El socio de negocio padre no es un campo obligatorio, sin embargo, es un campo que permite la agrupación de sub-entidades dependientes (socios de negocios hijos) de un socio de negocio, para explicarlo mejor veamos el siguiente ejemplo:

Imaginemos un proveedor de tipo cadena cuyo nombre es **Cadena Única C.A**, esta tendrá dos tiendas físicas, **Cadena Unica Centro C.A** y **Cadena Única Oriente C.A** respectivamente. Para este caso el **Socio de Negocio Padre** es **Cadena Única C.A**,quedando agrupado de forma que las dos tiendas serán hijas de **Cadena Única C.A**, de esta forma al emitir reportes financieros podríamos generarlos desde el Socio de Negocio Padre (**Cadena Única C.A**), agrupando todos los saldos de las tiendas por el padre ó podría generar los reportes únicamente por tienda.

Note

Generalmente esta opción es utilizada para franquicias, cadenas o corporaciones.

Introduzca el nombre del socio del negocio en el campo **Nombre**.

El nombre se refiere a la razón social, siendo esta el nombre ó la denominación con la que está registrado en los documentos legales, el nombre es utilizado a nivel administrativo, formal y jurídico.

![Campo Nombre](/assets/img/docs/master-data/mad-master-name.png)

Imagen 5. Campo Nombre

Introduzca el nombre 2 del socio del negocio en el campo **Nombre 2**.

El nombre 2 varía su uso dependiendo de la naturaleza del socio del negocio (Cliente, Proveedor o Empleado), si es un cliente o un proveedor es opcional, y generalmente se utiliza para colocar la denominación comercial, por el contrario, si es un empleado es obligatorio, siendo este campo correspondiente al apellido, el mismo será impreso en los reportes administrativos y jurídicos.

![Campo Nombre 2](/assets/img/docs/master-data/mad-master-name-2.png)

Imagen 6. Campo Nombre 2

Introduzca una breve descripción referente al socio del negocio cliente en el campo **Descripción**.

La descripción no es un campo obligatorio,sin embargo, le permite dejar descripciones o notas de interés para el registro.

![Campo Descripción](/assets/img/docs/master-data/mad-master-description.png)

Imagen 7. Campo Descripción

Seleccione el checklist **Entidad Acumulada**.

Entidad acumulada no es un campo obligatorio, sin embargo, le permite definir al socio del negocio como entidad sumaria, lo que significa que si el socio de negocio tiene este check activo será un **Socio de Negocio Padre**.

![Campo Entidad Acumulada](/assets/img/docs/master-data/mad-master-entity.png)

Imagen 8. Campo Entidad Acumulada

Seleccione en el campo **Estado de Crédito**.

El estado del crédito no es un campo obligatorio, sin embargo, le permite definir el comportamiento para la gestión del crédito del socio de negocio, actúa conjuntamente con el campo **Saldo Actual** y **Límite de Crédito** ubicado en la pestaña **Cliente**, este puede variar entre las siguiente opciones dependiendo de las necesidades:

**Sin Verificación de Crédito**: Establecido de forma manual, omite la evaluación para los socios de negocios a los que no se evalúa el crédito, equivalente a **Sin límite de Crédito**.

**Crédito Correcto**: Activa la gestión de crédito por estar dentro del límite de cŕedito.

**Crédito Verificación**: Es establecido de forma automática por ADempiere al evaluar el crédito, cuando el saldo actual está por encima del % de crédito en verificación (por defecto es 90%) del límite de crédito pero no alcanza el 100%.

**Crédito Retenido**: Es establecido de forma automática por ADempiere al evaluar el crédito, cuando el saldo actual está por encima del límite de crédito, bloqueando la posibilidad de completar ordenes de ventas, completar facturas y emitir entregas.

**Crédito Detenido**: Establecido de forma manual, bloqueando la posibilidad de completar ordenes de ventas, completar facturas y emitir entregas.

![Campo Estado de Crédito](/assets/img/docs/master-data/mad-master-credit.png)

Imagen 9. Campo Estado de Crédito

Podrá visualizar el saldo actual que posee el cliente en el campo **Saldo Actual**.

El saldo actual es un campo solo lectura, actualizado de forma automática, aumentando o disminuyendo al emitir cuentas por cobrar o cuentas por pagar, controlando el estado de crédito.

![Campo Saldo Actual](/assets/img/docs/master-data/mad-master-balance.png)

Imagen 10. Campo Saldo Actual

Podrá visualizar el número de identificación autogenerado a partir del campo **Código** en el campo **Número de Identificación**

El número de identificación se refiere al número que acredita la identidad de una persona natural una entidad jurídica, por ejemplo, una cédula de identidad o un RIF, este campo mantiene incidencia en la generación de documentos fiscales como facturas, retenciones y comprobantes ARC.

Seleccione el checklist **Exento de Impuesto en Venta**.

Exento de Impuesto de Venta, no es un campo obligatorio, por defecto está establecido en falso, permite la omisión de impuestos al generar ordenes de ventas, es decir si un producto es gravado, hará una excepción para este socio de negocio, emitiendo la orden de venta con el producto en cuestión con impuesto (0%).

![Campo Exento de Impuesto en Venta](/assets/img/docs/master-data/mad-master-tax.png)

Imagen 11. Campo Exento de Impuesto en Venta

Seleccione el checklist **Exento de Impuesto en Compra**, para definir al socio del negocio como exento de impuesto.

Exento de Impuesto de Compra, no es un campo obligatorio, por defecto está establecido en falso, permite la omisión de impuestos al generar ordenes de compras, es decir si un producto es gravado, hará una excepción para este socio de negocio, emitiendo la orden de compra con el producto en cuestión con impuesto (0%).

![Campo Exento de Impuesto en Compra](/assets/img/docs/master-data/mad-master-buys.png)

Imagen 12. Campo Exento de Impuesto en Compra

Seleccione el grupo de impuestos en el campo **Grupo de Impuestos**.

![Campo Grupo de Impuestos](/assets/img/docs/master-data/mad-master-group.png)

Imagen 13. Campo Grupo de Impuestos

Introduzca el código DUNS del socio del negocio en el campo **DUNS**.

El código DUNS no es un campo obligatorio, sin embargo, le permite introducir el número DUNS (Data Universal Numbering System o Sistema Universal de Numeración de Datos), el mismo es un un número de identificación proporciona la identidad única a cada empresa a nivel internacional.

![Campo DUNS](/assets/img/docs/master-data/mad-master-duns.png)

Imagen 14. Campo DUNS

Introduzca el número de referencia socio del negocio en el campo **No. de Referencia**.

El número de Referencia no es un campo obligatorio, sin embargo, le permite introducir un número fijo que utiliza el socio de negocio para gestiones administrativas, este tiene incidencia en las órdenes de compra o venta dependiendo la naturaleza de la entidad, siendo establecido de forma automática en las mismas.

![Campo No. de Referencia](/assets/img/docs/master-data/mad-master-reference.png)

Imagen 15. Campo No. de Referencia

Introduzca el código NAICS o SIC del socio del negocio en el campo **NAICS/SIC**.

El código NAICS/SIC no es un campo obligatorio, sin embargo, le permite introducir el código NAICS (American Industry Classification System ó Sistema de Clasificación Industrial de América del Norte), este es un código utilizado en los Estados Unidos, Canadá y México para clasificar la industria y actividades económicas.

![Campo NAICS/SIC](/assets/img/docs/master-data/mad-master-naics.png)

Imagen 16. Campo NAICS/SIC

Introduzca la valuación ABC en el campo **Valuación ABC**.

La valuación ABC no es un campo obligatorio, sin embargo, le permite establecer una evaluación clasificatoria del socio de negocio cliente.

![Campo Valuación ABC](/assets/img/docs/master-data/mad-master-valuation.png)

Imagen 17. Campo Valuación ABC

Seleccione el grupo de socio del negocio en el campo **Grupo de Socio del Negocio**

El grupo de Socio del Negocio, permite categorizar sus socios de negocio de una forma específica, lo cual es eficiente a la hora de emitir asientos contables y reportes, para entenderlo mejor veamos el siguiente ejemplo:

Imaginemos que tenemos una cartera de clientes que manejan diferentes monedas, para categorizar de forma específica sería: **Clientes Nacionales** y **Clientes Internacionales**, de esta forma podría emitir reportes de cuentas por cobrar para clientes nacionales e Internacionales respectivamente.

Adicionalmente, define en el socio de negocio funciones y parámetros a partir de la categoría, entre las que se encuentran:

**Impresión a Color**: Define el color con los que serán mostrados en el arbol.

**Info Confidencial**: Permite ingresar información confidencial en solicitudes Web.

**Lista de Precios Venta**: Define lista de precios empleada en ordenes de venta y factura de cuentas por cobrar.

**Lista de Precios Compra**: Define lista de precios empleada en ordenes de compra y factura de cuentas por pagar.

**Esquema de Descuento OV**: Define esquema de descuento empleado en ordenes de venta y factura de cuentas por cobrar.

**Esquema de Descuento OC**: Define esquema de descuento empleado en ordenes de compra y factura de cuentas por pagar.

**Porcentaje de Crédito en Verificación de Cliente**: Define el porcentaje de crédito disponible para la evaluación del crédito previo a que un socio de negocio pase de crédito correcto a crédito en verificación.

**Porcentaje de Tolerancia OC/Factura**: Define el porcentaje de diferencia que puede existir entre el precio de la orden de compra y el precio de la factura de cuentas por pagar, porcentaje de holgura con el cual podría ser completados estos documentos sin pasar por el flujo de aprobación.

**Contabilidad**: Define cuentas contables en la que se realizarán los asientos contables dependiendo de la naturaleza del socio de negocio (Clientes o Proveedores).

![Campo Grupo de Socio del Negocio](/assets/img/docs/master-data/mad-master-partner.png)

Imagen 18. Campo Grupo de Socio del Negocio

Seleccione el tipo de cuenta en el campo **Tipo de Cuenta”**.

El tipo de cuenta no es un campo obligatorio, sin embargo, le permite a los vendedores conocer con perfección las características de sus clientes y los diferentes tipos de clientes definidos en la empresa y así realizar un mejor estudio de mercado.

![Campo Tipo de Cuenta](/assets/img/docs/master-data/mad-master-account.png)

Imagen 19. Campo Tipo de Cuenta

Seleccione el lenguaje en el campo **Lenguaje**.

El lenguaje no es un campo obligatorio, sin embargo, define el idioma con que será impreso los formatos de impresión asociados a este Socio de Negocio.

![Campo Lenguaje](/assets/img/docs/master-data/mad-master-language.png)

Imagen 20. Campo Lenguaje

Seleccione el tipo de industria en el campo **Tipo de Industria**.

El tipo de industria no es un campo obligatorio, sin embargo, define la tipología de industria en la que se encuentra el Socio de Negocio.

![Campo Tipo de Industria](/assets/img/docs/master-data/mad-master-industry.png)

Imagen 21. Campo Tipo de Industria

Seleccione el segmento en el campo **Segmento**.

El segmento no es un campo obligatorio, sin embargo, permite segmentar socios de negocios de manera rigurosa, identificar patrones que pueden ser usados para asignar un segmento.

![Campo Segmento](/assets/img/docs/master-data/mad-master-segment.png)

Imagen 22. Campo Segmento

Seleccione el grupo de ventas en el campo “Grupo de Ventas”.

El grupo de ventas no es un campo obligatorio, sin embargo, permite categorizar al socio de negocio en un grupo de venta con objetivos referente a marketing y promociones.

![Campo Grupo de Ventas](/assets/img/docs/master-data/mad-master-sales.png)

Imagen 23. Campo Grupo de Ventas

Introduzca la dirección de la página web en el campo **Dirección Web**.

La dirección Web no es un campo obligatorio, sin embargo, permite registrar el sitio web del socio del negocio (Cliente y Proveedores) en el cual se administra la información de contacto de la empresa para solucionar sus inquietudes, realizar compras y gestión de solicitudes, aprovechando oportunidades de negocio que se encuentran en la red.

![Campo Dirección Web](/assets/img/docs/master-data/mad-master-web.png)

Imagen 24. Campo Dirección Web

Seleccione el checklist **Prospecto Activo**.

Prospecto Activo no es un campo obligatorio, por defecto está establecido en falso, sin embargo al seleccionarlo indica que el socio de negocio de tipo cliente está activo.

![Campo Prospecto Activo](/assets/img/docs/master-data/mad-master-prospect.png)

Imagen 25. Campo Prospecto Activo

Seleccione la opción **Liga Organización**, para ejecutar el proceso.

El proceso liga organización es ejecutado para los casos en los que la organización en gestión requiere generar documentos o solicitudes que son cubiertas por otra organización, para entenderlo mejor veamos el siguiente ejemplo:

Imaginemos que tenemos una organización (**Inversión del Norte**) donde existe un proveedor **Inversión del Sur C.A**, este es ligado a la organización **Inversión del Sur**.

Cuando **Inversión del Norte** emite una orden de compra configurada para emitir contra documento con el proveedor **Inversión del Sur C.A**, es emitida una orden de venta para **Inversión del Norte** que satisface la orden de compra.

Para ejecutar este proceso debe tomar en cuenta los siguientes parámetros:

**Organización Existente**: Seleccione una organización existente, si el campo queda vacío, se creará una organización con el nombre del socio de negocio de forma automática.

**Tipo de Organización**: Seleccione tipo de organización previa definición.

**Límite de Acceso al Rol**: Seleccione un rol existente si desea que sólo un rol específico tenga acceso a esta organización, si el campo queda vacío, el rol ClientAdmin y ClientUser tendrán acceso a esta organización.

Seleccione la opción **OK** y será ejecutado el proceso.

Nota

Las configuraciones por límite de acceso a rol es modificable desde los roles.

![Campo Liga Organización](/assets/img/docs/master-data/mad-master-league.png)

Imagen 26. Campo Liga Organización

Warning

La organización puede ser ligada únicamente a un socio de negocio, para corregir un error en la asignación de la organización, ejecute el proceso: Desliga de Socio de Negocio a organización.

Introduzca el valor de ingresos en el campo **Valor Esperado**.

El valor esperado no es un campo obligatorio, sin embargo, permite ingresar un monto informativo de la rentabilidad esperada, basada en una estimación ingresos de un cliente.

![Campo Valor Esperado](/assets/img/docs/master-data/mad-master-value.png)

Imagen 27. Campo Valor Esperado

Podrá visualizar el valor total de transacciones que posee el cliente en el campo **Valor Total Transacciones**.

El valor total transacciones es un campo solo lectura, actualizado de forma automática, sumando cada ingreso generado por este cliente, el mismo permite evaluar la rentabilidad de un cliente potencial.

![Campo Valor Total Transacciones](/assets/img/docs/master-data/mad-master-total.png)

Imagen 28. Campo Valor Total Transacciones

Introduzca el costo de adquisición en el campo **Costo de Adquisición**.

El costo de adquisición no es un campo obligatorio, sin embargo, permite registrar el monto total correspondiente al costo generado para lograr convertir un prospecto a cliente.

![Campo Costo de Adquisición](/assets/img/docs/master-data/mad-master-acquisition.png)

Imagen 29. Campo Costo de Adquisición

Introduzca la cantidad de empleados en el campo **Empleados**.

Empleados no es un campo obligatorio, sin embargo, le permite evaluar la cantidad de empleados de una empresa prospecto, funge como un dato informativo para ser utilizada en cotizaciones por ejemplo.

![Campo Empleados](/assets/img/docs/master-data/mad-master-employes.png)

Imagen 30. Campo Empleados

Introduzca el porcentaje de participación en el campo **Participación**.

La participación no es un campo obligatorio, sin embargo, le permite mantener el control porcentualmente de la proporción obtenidas de las compras del cliente en la producción o distribución de productos o servicios.

Esto puede generar fidelización del cliente, dando la oportunidad de evaluar promociones y descuentos para aquellos clientes en los cuales su participación sea alta, y a su vez, mayor oportunidad en el aumento de la cartera de cliente creando programas para ventas cruzadas y sugestivas, comercializando así más productos y servicios.

![Campo Participación](/assets/img/docs/master-data/mad-master-participation.png)

Imagen 31. Campo Participación

Introduzca el número de ventas total en el campo **Volumen de Ventas**.

El volumen de ventas no es un campo obligatorio, sin embargo, permite registrar el número de ventas efectivas de un cliente, estas cifras generalmente son auditadas en reuniones directivas para evaluar la rentabilidad y expansión del negocio o si por el contrario sus ventas disminuyen.

Adicionalmente este datos es producto de supervisión para controlar volumen de ventas en comparación a pronósticos de ventas, estableciendo una estimación de cantidades mínimas a vender para mantener un equilibrio en la organización.

![Campo Volumen de Ventas](/assets/img/docs/master-data/mad-master-volume.png)

Imagen 32. Campo Volumen de Ventas

Introduzca la fecha de la primera venta en el campo **Primera Venta**.

La primera venta no es un campo obligatorio, sin embargo, permite registrar la fecha de la primera venta de forma informativa, útil para evaluar descuentos y promociones por aniversarios

![Campo Primera Venta](/assets/img/docs/master-data/mad-master-first.png)

Imagen 33. Campo Primera Venta

Seleccione el check **Entrega Directa**

El check entrega directa no es un campo obligatorio, sin embargo, permite registrar el socio de forma informativa, útil para generar reportes e indicar que los envíos de las notas se envían del vendedor directamente al cliente.

![Check Entrega Directa](/assets/img/docs/master-data/mad-master-direct.png)

Imagen 34. Check Entrega Directa

Seleccione el tipo de persona en el campo **Tipo de Persona**.

El tipo de persona se refiere a la forma legal como está está constituida una organización, entre las cuales tenemos las siguientes opciones:

**Jurídica Domiciliada**: Persona Jurídica Domiciliada es una empresa constituida dentro del territorio nacional, que cumple sus obligaciones y resguarda la empresa con su patrimonio.

**Jurídica No Domiciliada**: Persona Jurídica No Domiciliada es una empresa constituida fuera del territorio nacional, que cumple sus obligaciones y resguarda la empresa con su patrimonio.

**Natural Residente**: Persona Natural Residente es una persona residente en el país que asume las obligaciones, responsabilidades y resguarda las obligaciones con patrimonio propio.

**Natural No Residente**: Persona Natural No Residente es una persona residente fuera del país, que asume las obligaciones, responsabilidades y resguarda las obligaciones con patrimonio propio.

![Campo Tipo de Persona](/assets/img/docs/master-data/mad-master-person.png)

Imagen 35. Campo Tipo de Persona

Adjunte el logo de la empresa en el campo **Logo**.

El logo no es un campo obligatorio, sin embargo permite guardar logotipos de socios de negocios.

![Campo Logo](/assets/img/docs/master-data/mad-master-logo.png)

Imagen 36. Campo Logo

Seleccione el icono **Guardar Cambios** ubicado en la barra de herramientas para guardar los datos ingresados.

![Icono Guardar Cambios](/assets/img/docs/master-data/mad-master-keep.png)

Imagen 37. Icono Guardar Cambios

Warning

Recuerde guardar el registro de los campos cada vez que se vaya a posicionar en una pestaña de la ventana socio del negocio.

- Proveedor
  - Registro de Proveedor
- Cliente
  - Registro de Cliente
- Empleado
  - Registro de Empleado

## Proveedor

Un socio del negocio proveedor es aquella persona u organización que provee de productos y servicios a otra que lo necesite para su consumo, los transforme para su venta o los compre para venderlos sin modificaciones.

ADempiere tiene la funcionalidad de permitirle a las organizaciones llevar un control de las transacciones realizadas con proveedores internos y externos.
Un proveedor interno puede ser un proveedor nacional, este puede presentarse bajo tres (3) condiciones, proveedor empleado de la organización, proveedor cliente nacional de la organización o simplemente proveedor nacional.

De igual manera, un proveedor externo puede ser un proveedor internacional, este puede presentarse bajo dos (2) condiciones, proveedor cliente internacional de la organización o simplemente proveedor internacional. A continuación se define el proceso para la creación de socio del negocio proveedor en ADempiere.

- Registro de Proveedor
  - Pestaña Cuenta Bancaria
  - Pestaña Localización
  - Pestaña Contacto

### Registro de Proveedor

  Para registrar un proveedor, es necesario que sea realizado el procedimiento regular explicado en el documento **Registro de Socio del Negocio**, elaborado por **ERPyA**.

  Luego de culminar el procedimieto de registro de socio del negocio, seleccione la pestaña **Proveedor** que se encuentra del lado izquierdo de la ventana socio del negocio, para identificar al socio del negocio como proveedor de la empresa.

  Esta pestaña le indica a ADempiere si el socio del negocio que se esta registrando es un proveedor

![Pestaña Proveedor](/assets/img/docs/master-data/mad-master-proveedor.png)

   Imagen 1. Pestaña Proveedor

  Nota
  La pestaña “Proveedor” se compone de:

  - Un checklist “Proveedor”.
  - Los datos principales del socio del negocio donde los campos “Compañía”, “Organización”, “Código” y “Nombre”, vienen cargados de la ventana principal “Socio  del Negocio”.
  - Ademas posee un grupo de campos que definen la configuración de retenciones a aplicar al socio del negocio, dichos campos se encuentran explicados en los documentos Configuración Esencial de la Retención de IVA, Configuración Esencial de la Retención de ISLR y Configuración Esencial de la Retención Municipal.

  Seleccione el checklist **Proveedor** para habilitar en ADempiere el socio del negocio como proveedor de la compañía u organización.

![Checklist Proveedor](/assets/img/docs/master-data/mad-master-checklist.png)

 Imagen 2. Checklist Proveedor 

Warning
De no ser tildado el checklist “Proveedor”, ADempiere no tomará el socio del negocio como proveedor.

Al tildar el checklist **Proveedor** podrá apreciar un grupo de campos necesarios para la compra de productos al mismo, dichos campos no son obligatorios ya que pueden ser definidos en el documento **Orden de Compra** al momento de su elaboración.

![Grupo de Campos Generados por el Checklist Proveedor](/assets/img/docs/master-data/mad-master-checklist-2.png)

Imagen 3. Grupo de Campos Generados por el Checklist Proveedor

El campo **Regla de Pago** establece la regla de pago definitiva para las compras al socio del negocio proveedor que se esta registrando, para este ejemplo la regla de pago utilizada es **A Crédito**.

![Campo Regla de Pago](/assets/img/docs/master-data/mad-master-regla.png)

Imagen 4. Campo Regla de Pago

El campo **Lista de Precios de Compra** establece la lista de precios definitiva para las compras al socio del negocio proveedor que se esta registrando, para este ejemplo la lista de precios utilizada es **Compra (VES)**.

![Campo Lista de Precios de Compra](/assets/img/docs/master-data/mad-master-price.png)

Imagen 5. Campo Lista de Precios de Compra

El campo **Término Pago Orden de Compra** establece el término de pago definitivo para las compras al socio del negocio proveedor que se esta registrando, para este ejemplo el término de pago utilizado es **Crédito a 15 días**.

![Campo Término de Pago Orden de Compra](/assets/img/docs/master-data/mad-master-term.png)

Imagen 6. Campo Término de Pago Orden de Compra

El campo **Esquema del Descuento en OC** establece el descuento definitivo para las compras al socio del negocio proveedor que se esta registrando, para este ejemplo el esquema de descuento utilizado es **Compras Porcentaje Simple**.

![Campo Esquema de Descuento en OC](/assets/img/docs/master-data/mad-master-schema.png)

Imagen 7. Campo Esquema de Descuento en OC

El campo **Exento de (IGTF)** establece que no se aplicará el impuesto **IGTF** al socio del negocio proveedor que se esta registrando

![Campo Exento de (IGTF)](/assets/img/docs/master-data/mad-master-igtf.png)

Imagen 8. Campo Exento de (IGTF)

### Pestaña Cuenta Bancaria

En esta pestaña se registran los datos bancarios del socio del negocio proveedor, con el checklist **Activo** se pueden registrar los datos de la tarjeta de crédito del socio del negocio. Así mismo, con el checklist **ACH** se pueden registrar los datos de la cuenta bancaria del socio del negocio.

Seleccione la pestaña **Cuenta Bancaria** que se encuentra ubicada del lado izquierdo de la ventana socio del negocio. Por defecto se encuentra tildado el checklist **Activo**.

![Pestaña Cuenta Bancaria](/assets/img/docs/master-data/mad-master-count.png)

Imagen 9. Pestaña Cuenta Bancaria

### Checklist Activo

Seleccione en el campo **Tarjeta de Crédito**, el tipo de tarjeta de crédito que posee el socio del negocio proveedor que esta registrando.

![Campo Tarjeta de Crédito](/assets/img/docs/master-data/mad-master-card.png)

Imagen 10. Campo Tarjeta de Crédito

Introduzca en el campo **Número**, el número de tarjeta de crédito del socio del negocio proveedor que esta registrando.

![Campo Número](/assets/img/docs/master-data/mad-master-number.png)

Imagen 11. Campo Número

Introduzca en el campo **Código Verificación**, el código de verificación de la tarjeta de crédito del socio del negocio proveedor que esta registrando, este código son los últimos tres números del reverso de la tarjeta.

![Campo Código Verificación](/assets/img/docs/master-data/mad-master-check.png)

Imagen 12. Campo Código Verificación

Introduzca en el campo **Mes de Expiración**, el mes de expiración de la tarjeta de crédito del socio del negocio proveedor que esta registrando.

![Campo Mes de Expiración](/assets/img/docs/master-data/mad-master-month.png)

Imagen 13. Campo Mes de Expiración

Introduzca el año de expiración de la tarjeta de crédito del socio del negocio proveedor que esta registrando en el campo **Año de Expiración**.

![Campo Año de Expiración](/assets/img/docs/master-data/mad-master-year.png)

Introduzca el nombre de referencia de la tarjeta en el campo **Nombre**, en este campo va el nombre del titular de la tarjeta de crédito que esta registrando.

![Campo Nombre de Referencia de la Tarjeta](/assets/img/docs/master-data/mad-master-reference-card.png)

Imagen 15. Campo Nombre de Referencia de la Tarjeta

Warning
Este proceso se realiza con la finalidad de registrar la tarjeta de crédito del socio del negocio.

### Checklist ACH

Para registros de cuentas bancarias, tilde el checklist **ACH**, a continuación se reflejarán los campos para el registro de la cuenta bancaria del socio del negocio proveedor.

![Checklist ACH](/assets/img/docs/master-data/mad-master-ach.png)

Imagen 16. Checklist ACH

En el campo **Banco** seleccione el banco a registrar con ayuda del icono identificador (adjunto imagen).

![Campo Banco](/assets/img/docs/master-data/mad-master-bank.png)

Imagen 17. Campo Banco

A continuación visualizará la siguiente ventana con los diferentes bancos, dónde debe seleccionar el banco que posee el socio del negocio proveedor y la opción **OK** para cargar los datos a la ventana.

![Ventana Bancos](/assets/img/docs/master-data/mad-master-windows.png)

Imagen 18. Ventana Bancos

Seleccione en el campo **Tipo de Cuenta Bancaria**, el tipo de cuenta correspondiente a la cuenta del socio del negocio proveedor.

![Campo Tipo de Cuenta Bancaria](/assets/img/docs/master-data/mad-master-banking.png)

Imagen 19. Campo Tipo de Cuenta Bancaria

Introduzca en el campo **No. De Cuenta**, el número de cuenta del socio del negocio proveedor que esta registrando.

![Campo No. De Cuenta](/assets/img/docs/master-data/mad-master-no.png)

Imagen 20. Campo No. De Cuenta

Introduzca en el campo **Nombre**, el nombre del titular de la cuenta bancaria que esta registrando.

![Campo Nombre del Titular de la Cuenta](/assets/img/docs/master-data/mad-master-title.png)

Imagen 21. Campo Nombre del Titular de la Cuenta

### Pestaña Localización

La localización de un socio del negocio es muy importante por diferentes motivos y más si el socio del negocio es proveedor. Ya que las transacciones de compras serán realizadas al mismo, en esta pestaña se deben registrar con exactitud los datos de la dirección del socio del negocio.

Seleccione la pestaña **Localización** que se encuentra ubicada del lado izquierdo de la ventana socio del negocio.

![Pestaña Localización](/assets/img/docs/master-data/mad-master-location.png)

Imagen 22. Pestaña Localización

A continuación visualizará la siguiente ventana, dónde debe resourcesdsocio-proveedorr la dirección exacta del socio del negocio proveedor que esta registrando.

![Ventana de Localización](/assets/img/docs/master-data/mad-master-location-2.png)

Imagen 23. Ventana de Localización

Warning
Recuerde guardar el registro de los campos cada vez que se vaya a posicionar en una pestaña de la ventana socio del negocio.

### Pestaña Contacto

En esta pestaña se registran todos los datos de contacto que se tengan del socio del negocio proveedor.

Seleccione la pestaña **Contacto** que se encuentra ubicada del lado izquierdo de la ventana socio del negocio, para proceder a llenar los campos necesarios.

![Pestaña Contacto](/assets/img/docs/master-data/mad-master-contac.png)

Imagen 24. Pestaña Contacto

Introduzca en el campo **Nombre**, el nombre del socio del negocio contacto para las transacciones entre las empresas.

![Campo Nombre de Contacto](/assets/img/docs/master-data/mad-master-contac-2.png)

Imagen 25. Campo Nombre de Contacto

Introduzca en el campo **Email**, el email del socio del negocio contacto para las transacciones entre las empresas.

![Campo Email](/assets/img/docs/master-data/mad-master-email.png)

Imagen 26. Campo Email

Introduzca en el campo **Teléfono**, el teléfono del socio del negocio contacto para las transacciones entre las empresas.

![Campo Teléfono](/assets/img/docs/master-data/mad-master-telephone.png)

Imagen 27. Campo Teléfono

Note
Este procedimiento realizado aplica solo para los Socios del Negocio que cumplan el rol de Proveedor.

## Cliente

Si es usted un usuario en etapa de iniciación le recomendamos leer el capítulo anterior, Socios del Negocio de ADempiere, donde respondimos la interrogante común: **¿Qué es un Socio de Negocio?**, esto con la intención de proveer en este material una información más digerible.

Como resultado de lo anteriormente expuesto, se puede concluir que un socio de negocio que actúa como cliente, es una entidad jurídica o natural que adquiere productos o servicios provenientes de la empresa,estos pueden ser:

- **Clientes Nacionales:** Realizan transacciones que generan ingresos a la empresa (Ventas) dentro del territorio.
- **Clientes Internacionales:** Realizan transacciones que generan ingresos a la empresa(Ventas) fuera del territorio, esto se conoce como exportación.

Esta categorización en ADempiere es conocida como **Grupo de Socio de Negocio** y es la base contable (en su mayoría) para las operaciones emitidas a partir de este registro maestro, no obstante, el usuario tiene la opción de realizar configuraciones excepcionales para ciertos clientes.

Para este caso, usted tendría por categoría diferentes cuentas contables, Cuenta por Cobrar Nacionales y Cuenta por Cobrar Internacionales respectivamente.

Ahora bien, si es usted usuario de ADempiere, seguramente se ha hecho preguntas que le han complicado la operativa de algún modo. Para facilitar su día a día **ERPyA** quiere responder algunas preguntas frecuentes con las que nos topamos en nuestra experiencia como consultores e implementadores de ADempiere:

**¿Si un socio de negocio es proveedor o empleado, y ahora funge como cliente, debo crearlo nuevamente?**

No, esto ha ocasionado en innumerables oportunidades duplicidades de registros e incongruencias en resultados. Bastará con ubicar con el código del socio del negocio al mismo y configurar como lo indica este material.

**Si la categoría es por ejemplo Cliente Nacional, ¿cómo actúa contablemente siendo cliente y proveedor?**

Pues bien, la categoría generalmente hace referencia a la agrupación contable a la que pertenece el socio de negocio cuando es registrado por primera vez, la misma contempla en su definición las cuentas contables a establecer en la pestaña de cliente y en la de proveedor, esto de alguna manera solventa la inquietud de no poder colocar dos tres grupos de socios de negocios, si desea conocer más del ¿cómo opera esta agrupación? de la que hablo vaya a **Grupo de Socio de Negocio**.

**¿Cómo agrupar por vendedor a mis clientes para emitir un reporte?**

Para ofrecer una eficiente administración en distribución y seguimiento de clientes y pedidos generados, ADempiere ofrece al usuario dos opciones:

- **Por Región de Ventas:** De esta forma se asigna la región de venta a un cliente, a su vez, ésta depende de un asesor de ventas.Esto permite una mayor facilidad en el mantenimiento por ausencia de vendedores, si su cliente posee más de una dirección podría configurar más de un asesor.
- **Por Asesor Especifico:** De esta forma se asigna un vendedor especifico al cliente directamente, omitiendo configuraciones en la localización.

**¿Qué columnas configuradas en el cliente es información transferida a la orden de venta?**

Existen múltiples reglas que permiten predefinir valores en transacciones dependiendo de la configuración:

- **Regla de facturación:** Define si la facturación después del pedido será después de la entrega, programada con el cliente o inmediatamente.
- **Regla de entrega:** Define si la entrega después del pedido será después del cobro, a disponibilidad del producto o forzado.
- **Descuentos:** Define esquemas de descuentos basados en volumen de ventas, promociones o % estáticos.
- **Vendedor o Asesor de Ventas:** Define el agente que garantiza la satisfacción y el cumplimiento de las demandas del cliente.
- **Regla de pago:** Define la metodología con la que generalmente el cliente cancela sus deudas.
- **Programas de Pago:** Define esquemas de pagos y estructuras de cuotas para la cancelación de sus deudas.
- **Lista de Precio:** Define lista de precio y moneda con la que generalmente el cliente cancela sus deudas.

Entre muchos otros campos más que son predeterminados desde el socio de negocio, pasando por la orden de venta y la factura, ellos definen comportamientos en funcionalidades versátiles dentro de ADempiere.

**¿Cómo configuro un descuento para el cliente?**

ADempiere le permite aplicar un Esquema de Descuentos(previamente configurado) al cliente, en este sentido, el usuario podrá definir reglas específicas aplicando % de descuentos planos o basado en volumen, si desea profundizar más el tema, le invitamos a ver nuestro instructivo de **Esquema de Descuentos**.

**¿Cómo bloqueo el límite de crédito para el cliente?**

Podrá configurar estados de crédito para definir el comportamiento del análisis del crédito en el Socio de Negocio, el mismo actúa junto al **Saldo Actual** y **Límite de Crédito** para realizar la evaluación, si desea profundizar más el tema, le invitamos a ver nuestro instructivo de Socio del Negocio.

**¿Cómo configuro un cliente exento de impuesto?**

Para concluir el preámbulo, le invitamos a tomar en cuenta cada una de estas acotaciones, de seguro serán de utilidad, y a futuro le garantizará un eficiente manejo de una herramienta tan potente como lo es ADempiere.

- Registro de Cliente
  - Pestaña Cuenta Bancaria
  - Pestaña Localización
  - Pestaña Contacto

## Registro de Cliente

Para registrar un cliente, es necesario que sea realizado el procedimiento regular explicado en el documento **Registro de Socio del Negocio**, elaborado por **ERPyA**.

Luego de culminar el procedimieto de registro de socio del negocio, seleccione la pestaña **Cliente** que se encuentra del lado izquierdo de la ventana socio del negocio, para identificar al socio del negocio como cliente de la empresa.

En esta pestaña es registrada la información que la empresa requiere del socio del negocio cliente al momento de una venta al mismo. Cada uno de los campos que la misma contiene son necesarios en algún punto de la transacción de ventas.

![Pestaña Cliente](/assets/img/docs/master-data/mad-master-client.png)

Imagen 1. Pestaña Cliente

A continuación visualizará la siguiente imagen, dónde debe tildar el checklist **Cliente**.

![Checklist Cliente](/assets/img/docs/master-data/mad-master-checklist-client.png)

Imagen 2. Checklist Cliente

Warning
Al tildar el checklist **Cliente**, podrá apreciar diferentes campos que establecen los términos o reglas para las transacciones de ventas al socio del negocio cliente que esta registrando. Dichos campos no son obligatorios porque pueden ser establecidos al momento de generar la orden de venta al socio del negocio.

Introduzca en el campo **Copias del Documento**, el número de copias a ser impresas de cada documento generado al socio del negocio cliente.

![Campo Copias del Documento](/assets/img/docs/master-data/mad-master-document.png)

Imagen 3. Campo Copias del Documento

Seleccione en el campo **Regla de Facturación**, la regla establecida para facturar al socio del negocio cliente.

![Campo Regla de Facturación](/assets/img/docs/master-data/mad-master-factura.png)

Imagen 4. Campo Regla de Facturación

Seleccione en el campo **Programa de Facturación**, la frecuencia usada cuando se generan las facturas.

![Campo Programa de Facturación](/assets/img/docs/master-data/mad-master-program.png)

Imagen 5. Campo Programa de Facturación

Seleccione en el campo **Regla de Entrega**, la regla establecida para entregar al cliente los productos o servicios.

![Campo Regla de Entrega](/assets/img/docs/master-data/mad-master-delivery.png)

Imagen 6. Campo Regla de Entrega

Seleccione en el campo **Vía de Entrega**, como serán entregados los productos o servicios de la orden.

![Campo Vía de Entrega](/assets/img/docs/master-data/mad-master-via.png)

Imagen 7. Campo Vía de Entrega

Seleccione en el campo **Lista de Precios**, la lista de precios establecida para las ventas al socio del negocio cliente que esta registrando.

![Campo Lista de Precios](/assets/img/docs/master-data/mad-master-list.png)

Imagen 8. Campo Lista de Precios

Seleccione en el campo **Esq List Precios/Desc**, el esquema para calcular el porcentaje de descuento comercial.

![Campo Esq List Precios/Desc](/assets/img/docs/master-data/mad-master-list-price.png)

Imagen 9. Campo Esq List Precios/Desc

Podrá apreciar en el campo **% Descuento**, el porcentaje de descuento configurado en el esquema de descuento.

![Campo % Descuento](/assets/img/docs/master-data/mad-master-desc.png)

Imagen 10. Campo % Descuento

Seleccione en el campo **Regla de Pago**, la forma de pago de las facturas establecida para el socio del negocio cliente que esta registrando.

![Campo Regla de Pago](/assets/img/docs/master-data/mad-master-rule.png)

Imagen 11. Campo Regla de Pago

Seleccione en el campo **Término de Pago**, las condiciones de pago de las facturas establecida para el socio del negocio que esta registrando.

![Campo Término de Pago](/assets/img/docs/master-data/mad-master-term-price.png)

Imagen 12. Campo Término de Pago

Seleccione en el campo **Agente Comercial**, asignado a la región donde se encuentra el socio del negocio cliente.

![Campo Agente Comercial](/assets/img/docs/master-data/mad-master-agent.png)

Imagen 13. Campo Agente Comercial

Seleccione en el campo **Morosidad**, la regla de morocidad para facturas vencidas.

![Campo Morosidad](/assets/img/docs/master-data/mad-master-morosidad.png)

Imagen 14. Campo Morosidad

Introduzca en el campo **Referencia de Orden de Socio del Negocio**, el número estándar de referencia para las órdenes de compra.

![Campo Referencia de Orden de Socio del Negocio](/assets/img/docs/master-data/mad-master-business.png)

Imagen 15. Campo Referencia de Orden de Socio del Negocio

Seleccione el checklist **Imprimir Descuento**, si desea imprimir en la factura y en la orden de venta el descuento aplicado.

![Campo Imprimir Descuento](/assets/img/docs/master-data/mad-master-print.png)

Imagen 16. Campo Imprimir Descuento

Introduzca en el campo **Descripción de Orden**, una descripción estándar para se utilizadas en las órdenes a generar al socio del negocio cliente que esta registrando.

![Campo Descripción de Orden](/assets/img/docs/master-data/mad-master-description-2.png)

Imagen 17. Campo Descripción de Orden

Seleccione en el campo **Formato de Impresión**, el formato de impresión a utilizar en las facturas del socio del negocio cliente.

![Campo Formato de Impresión](/assets/img/docs/master-data/mad-master-format.png)

Imagen 18. Campo Formato de Impresión

Introduzca en el campo **Mín de Vida útil %**, tiempo mínimo de vida útil que tienen los productos.

![Campo Mín de Vida útil %](/assets/img/docs/master-data/mad-master-util.png)

Imagen 19. Campo Mín de Vida útil %

Introduzca en el campo **Límite de Crédito**, el límite de crédito establecido para el socio del negocio cliente que esta registrando.

![Campo Límite de Crédito](/assets/img/docs/master-data/mad-master-limit.png)

Imagen 20. Campo Límite de Crédito

Podrá visualizar en el campo **Crédito Usado**, el crédito usado por el socio del negocio cliente que esta registrando.

![Campo Crédito Usado](/assets/img/docs/master-data/mad-master-credit-used.png)

Imagen 21. Campo Crédito Usado

Introduzca en el campo **Tiempo Gracia Cobro**, los días de gracia que tiene el socio del negocio antes de que el agente comercial le realice el cobro.

![Campo Tiempo de Gracia Cobro](/assets/img/docs/master-data/mad-master-time.png)

Imagen 22. Campo Tiempo de Gracia Cobro

### Pestaña Cuenta Bancaria

En esta pestaña se registran los datos bancarios del socio del negocio cliente, con el checklist **Activo** se pueden registrar los datos de la tarjeta de crédito del socio del negocio. Así mismo, con el checklist **ACH** se pueden registrar los datos de la cuenta bancaria del socio del negocio.

Seleccione la pestaña **Cuenta Bancaria** que se encuentra ubicada del lado izquierdo de la ventana socio del negocio. Por defecto se encuentra tildado el checklist **Activo**.

![Pestaña Cuenta Bancaria](/assets/img/docs/master-data/mad-master-banking-2.png)

Imagen 23. Pestaña Cuenta Bancaria

### Checklist Activo

Seleccione en el campo **Tarjeta de Crédito**, el tipo de tarjeta de crédito que posee el socio del negocio cliente que esta registrando.

![Campo Tarjeta de Crédito](/assets/img/docs/master-data/mad-master-card-credit.png)

Imagen 24. Campo Tarjeta de Crédito

Introduzca en el campo **Número**, el número de tarjeta de crédito del socio del negocio cliente que esta registrando.

![Campo Número](/assets/img/docs/master-data/mad-master-number-2.png)

Imagen 25. Campo Número

Introduzca en el campo **Código Verificación**, el código de verificación de la tarjeta de crédito del socio del negocio cliente que esta registrando, este código son los últimos tres números del reverso de la tarjeta.

![Campo Código de Verificación](/assets/img/docs/master-data/mad-master-check-2.png)

Imagen 26. Campo Código de Verificación

Introduzca en el campo **Mes de Expiración**, el mes de expiración de la tarjeta de crédito del socio del negocio cliente que esta registrando.

![Campo Mes de Expiración](/assets/img/docs/master-data/mad-master-month-2.png)

Imagen 27. Campo Mes de Expiración

Introduzca el año de expiración de la tarjeta de crédito del socio del negocio cliente que esta registrando en el campo **Año de Expiración**.

![Campo Año de Expiración](/assets/img/docs/master-data/mad-master-year-2.png)

Imagen 28. Campo Año de Expiración

Warning

Este proceso se realiza con la finalidad de registrar la tarjeta de crédito del socio del negocio.

### Checklist ACH

Para registros de cuentas bancarias, tilde el checklist **ACH**, a continuación se reflejarán los campos para el registro de la cuenta bancaria del socio del negocio.

![Checklist ACH](/assets/img/docs/master-data/mad-master-ach-2.png)

Imagen 29. Checklist ACH

Introduzca en el campo **IBAN**, el código IBAN conformado por el código del país (2 dígitos) más el código de control de la localidad donde se encuentra la sucursal del banco (2 dígitos). Para ejemplificar el registro es utilizado el código **VE21**

![Campo IBAN](/assets/img/docs/master-data/mad-master-iban.png)

Imagen 30. Campo IBAN

En el campo **Banco** seleccione el banco a registrar con ayuda del ícono identificador (adjunto imagen).

![Campo Banco](/assets/img/docs/master-data/mad-master-bank-2.png)

Imagen 31. Campo Banco

A continuación visualizará la siguiente ventana con los diferentes bancos, dónde debe seleccionar el banco que posee el socio del negocio cliente y la opción **OK** para cargar los datos al formulario.

![Opción OK](/assets/img/docs/master-data/mad-master-ok-2.png)

Imagen 32. Opción OK

Seleccione el tipo de cuenta correspondiente a la cuenta del socio del negocio cliente en el campo **Tipo de Cuenta Bancaria**.

![Campo Tipo de Cuenta Bancaria](/assets/img/docs/master-data/mad-banking-3.png)

Imagen 33. Campo Tipo de Cuenta Bancaria

Introduzca en el campo **No. De Cuenta**, el número de cuenta del socio del negocio cliente que esta registrando.

![Campo No. De Cuenta](/assets/img/docs/master-data/mad-no-2.png)

Imagen 34. Campo No. De Cuenta

Warning

Este proceso se realiza con la finalidad de registrar la cuenta del socio del negocio.

Introduzca el nombre de referencia en el campo **Nombre**, en este campo va el nombre del titular de la tarjeta de crédito o de la cuenta bancaria que esta registrando.

![Campo Nombre de Titular de Cuenta](/assets/img/docs/master-data/mad-master-title-2.png)

Imagen 35. Campo Nombre de Titular de Cuenta

Introduzca en el campo **Dirección**, la dirección de la entidad bancaria poseedora de la tarjeta de crédito.

![Campo Dirección de Entidad Bancaria](/assets/img/docs/master-data/mad-master-direcc.png)

Imagen 36. Campo Dirección de Entidad Bancaria

Introduzca en el campo **Ciudad**, el nombre de la ciudad donde se encuentra la entidad bancaria poseedora de la tarjeta de crédito.

![Campo Ciudad de Entidad Bancaria](/assets/img/docs/master-data/mad-master-city.png)

Imagen 37. Campo Ciudad de Entidad Bancaria

Introduzca en el campo **Código Postal**, el código postal de la ciudad donde se encuentra la entidad bancaria poseedora de la tarjeta de crédito.

![Campo Código Postal](/assets/img/docs/master-data/mad-master-postal.png)

Imagen 38. Campo Código Postal

Introduzca en el campo **Estado**, el nombre del estado donde se encuentra la entidad bancaria poseedora de la tarjeta de crédito.

![Campo Estado de Entidad Bancaria](/assets/img/docs/master-data/mad-master-state.png)

Imagen 39. Campo Estado de Entidad Bancaria

Introduzca en el campo **País Cuenta**, el nombre del país donde se encuentra la entidad bancaria poseedora de la tarjeta de crédito.

![Campo País Cuenta](/assets/img/docs/master-data/mad-master-country.png)

Imagen 40. Campo País Cuenta

Introduzca en el campo **Licencia de Conducir**, el número de licencia de conducir del socio del negocio cliente que esta registrando.

![Campo Licencia de Conducir](/assets/img/docs/master-data/mad-master-license.png)

Imagen 41. Campo Licencia de Conducir

Introduzca en el campo **No. Seguro Social**, el número de cédula del titular de la tarjeta de crédito o cuenta bancaria que esta registrando.

![Campo No. Seguro Social](/assets/img/docs/master-data/mad-master-sure.png)

Imagen 42. Campo No. Seguro Social

Introduzca en el campo **Cta. Correo Electrónico**, el correo electrónico asociado a la tarjeta de crédito o cuenta bancaria que esta registrando.

![Campo Cta. Correo Electrónico](/assets/img/docs/master-data/mad-master-mail.png)

Imagen 43. Campo Cta. Correo Electrónico

Seleccione en el campo **Dirección Verificada**, si la dirección de la entidad bancaria se encuentra verificada.

![Campo Dirección Verificada](/assets/img/docs/master-data/mad-master-direcc-2.png)

Imagen 44. Campo Dirección Verificada

Seleccione en el campo **Código Postal Verificado**, si el código postal de la entidad bancaria se encuentra verificado.

![Campo Código Postal Verificado](/assets/img/docs/master-data/mad-master-postal-2.png)

Imagen 45. Campo Código Postal Verificado

### Pestaña Localización

La localización de un socio del negocio cliente es muy importante por diferentes motivos, ya que las transacciones de ventas serán realizadas al mismo, en esta pestaña se deben registrar con exactitud los datos de la dirección del socio del negocio.

Seleccione la pestaña **Localización** que se encuentra ubicada del lado izquierdo de la ventana socio del negocio.

![Pestaña Localización](/assets/img/docs/master-data/mad-master-location-3.png)

Imagen 46. Pestaña Localización

Introduzca en el campo **Localización / Dirección**, la dirección de localización del socio del negocio cliente con ayuda del identificador.

![Campo Localización / Dirección](/assets/img/docs/master-data/mad-master-location-direcc.png)

Imagen 47. Campo Localización / Dirección

Seleccione en el campo **País**, el país donde se encuentra domiciliado el socio del negocio que esta registrando

![Campo País](/assets/img/docs/master-data/mad-master-country-2.png)

Imagen 48. Campo País

Seleccione en el campo **Estado**, el estado donde se encuentra domiciliado el socio del negocio que esta registrando.

![Campo Estado](/assets/img/docs/master-data/mad-master-state-2.png)

Imagen 49. Campo Estado

Seleccione en el campo **Ciudad**, la ciudad donde se encuentra domiciliado el socio del negocio que esta registrando.

![Campo Ciudad](/assets/img/docs/master-data/mad-master-city-2.png)

Imagen 50. Campo Ciudad

Introduzca la dirección detallada del socio del negocio cliente en el campo **Dirección 1** y seleccione la opción **OK**

![Campo Dirección 1](/assets/img/docs/master-data/mad-master-direcc-4.png)

Imagen 51. Campo Dirección 1

Introduzca en el campo **Teléfono**, el número de teléfono local para contactar al socio del negocio cliente.

![Campo Teléfono](/assets/img/docs/master-data/mad-master-telephone-2.png)

Imagen 52. Campo Teléfono

Introduzca en el campo **Teléfono Móvil**, el número de teléfono móvil para contactar al socio del negocio cliente.

![Campo Teléfono Móvil](/assets/img/docs/master-data/mad-master-telephone-movil.png)

Imagen 53. Campo Teléfono Móvil

Introduzca en el campo **Fax**, el fax para contactar al socio del negocio cliente.

![Campo Fax](/assets/img/docs/master-data/mad-master-fax.png)

Imagen 54. Campo Fax

Introduzca en el campo **ISDN**, el ISDN para contactar al socio del negocio cliente.

![ISDN](/assets/img/docs/master-data/mad-master-isdn..png)

Imagen 55. ISDN

Podrá apreciar tildados los checklist **Dirección Entregar-A**, **Dirección Facturar-A**, **Dirección Pagar-Desde** y **Dirección Remitir-A**, indicando cada uno de ellos un comportamiento diferente.

![Campo Dirección Entregar-A](/assets/img/docs/master-data/mad-master-direcc-a.png)

Imagen 56. Campo Dirección Entregar-A

El checklist **Dirección Facturar-A** establece la localización ingresada como la dirección para facturar.

![Campo Dirección Facturar-A](/assets/img/docs/master-data/mad-master-factura-a.png)

Imagen 57. Campo Dirección Facturar-A

El checklist **Dirección Pagar-Desde** establece la localización ingresada como la dirección desde donde paga las facturas el socio del negocio y donde son enviadas las cartas de morosidad.

![Campo Dirección Pagar-Desde](/assets/img/docs/master-data/mad-master-price-desde.png)

Imagen 58. Campo Dirección Pagar-Desde

El checklist **Dirección Remitir-A** establece la localización ingresada como la dirección para el envío de los pagos.

![Dirección Remitir-A](/assets/img/docs/master-data/mad-master-remitir.png)

Imagen 59. Dirección Remitir-A

Seleccione en el campo **Región de Ventas**, la región o área de ventas en la que se encuentra localizado el socio del negocio cliente.

![Campo Región de Ventas](/assets/img/docs/master-data/mad-master-region.png)

Imagen 60. Campo Región de Ventas

Note

Para conocer más sobre las regiones de ventas que puede tener una compañía u organización, visite el documento **Registro de Región de Ventas**, elaborado por **ERPyA**.

Introduzca en el campo **Código SICA**, el código SICA del socio del negocio cliente.

![Campo Código SICA](/assets/img/docs/master-data/mad-master-sica.png)

Imagen 61. Campo Código SICA

Warning

Recuerde guardar el registro de los campos cada vez que se vaya a posicionar en una pestaña de la ventana socio del negocio.

### Pestaña Contacto

En esta pestaña se registran todos los datos de contacto que se posea el socio del negocio cliente. De igual manera, es creado su usuario de acceso en ADempiere.

Seleccione la pestaña **Contacto** que se encuentra ubicada del lado izquierdo de la ventana socio del negocio, para proceder a llenar los campos necesarios.

![Pestaña Contacto](/assets/img/docs/master-data/mad-master-contact.png)

Imagen 62. Pestaña Contacto

Warning

El contacto (Usuario) permite registrar las diferentes personas de contacto que tiene la empresa con el socio del negocio cliente que esta registrando. Un ejemplo de esta pestaña puede ser, un jefe o persona de contacto por departamento para que a la hora de alguna venta de productos o servicios al socio del negocio cliente, se contacte a la persona correspondiente.

Introduzca en el campo **Nombre**, el nombre completo de la persona de contacto con el socio del negocio cliente que esta registrando.

![Nombre de Contacto](/assets/img/docs/master-data/mad-master-name-contact.png)

Imagen 63. Nombre de Contacto

Introduzca en el campo **Descripción**, una breve descripción de la persona de contacto con el socio del negocio cliente que esta registrando

![Campo Descripción](/assets/img/docs/master-data/mad-master-description-3.png)

Imagen 64. Campo Descripción

Introduzca en el campo **Comentarios**, los comentarios o información adicional sobre el registro de la persona de contacto con el socio del negocio cliente.

![Campo Comentarios](/assets/img/docs/master-data/mad-master-coment.png)

Imagen 65. Campo Comentarios

El checklist **Activo**, indica que el registro se encuentra activo en el sistema.

![Checklist Activos](/assets/img/docs/master-data/mad-master-checklist-3.png)

Imagen 66. Checklist Activo

Seleccione el checklist **Es Gerente de Proyecto**, para indicar que la persona de contacto con el socio del negocio cliente es gerente de proyecto.

![Campo Es Gerente de Proyecto](/assets/img/docs/master-data/mad-master-manager.png)

Imagen 67. Campo Es Gerente de Proyecto

Seleccione el checklist **Es Miembro de un Proyecto**, para indicar que la persona de contacto con el socio del negocio cliente es miembro de un proyecto.

![Campo Es Miembro de un Proyecto](/assets/img/docs/master-data/mad-master-proyect.png)

Imagen 68. Campo Es Miembro de un Proyecto

Seleccione el checklist **Usuario de Autenticación** para que sean reflejados los campos necesarios para crear el usuario del socio del negocio cliente.

![Usuario de Autenticación](/assets/img/docs/master-data/mad-master-user.png)

Imagen 69. Usuario de Autenticación

Seleccione el checklist **Usuario Interno**, para indicar que la persona de contacto con el socio del negocio cliente es usuario interno.

![Campo Usuario Interno](/assets/img/docs/master-data/mad-master-internal.png)

Imagen 70. Campo Usuario Interno

Introduzca en el campo **Código**, el usuario de la persona de contacto con el socio del negocio cliente para ingresar a ADempiere.

![Campo Código](/assets/img/docs/master-data/mad-master-code-2.png)

Imagen 71. Campo Código

Warning

ERPyA tiene establecido como estándar de creación de usuario y contraseña en ADempiere, la inicial del primer nombre en minúscula, seguido del primer apellido completo, con la primera letra del mismo en mayúscula.

Introduzca en el campo **Contraseña**, la contraseña de la persona de contacto con el socio del negocio cliente para ingresar a ADempiere.

![Campo Contraseña](/assets/img/docs/master-data/mad-master-password.png)

Imagen 72. Campo Contraseña

Warning

ERPyA tiene establecido como estándar de creación de usuario y contraseña en ADempiere, la inicial del primer nombre en minúscula, seguido del primer apellido completo, con la primera letra del mismo en mayúscula.

Seleccione el checklist **Usuario de Tienda Web**, para indicar que la persona de contacto con el socio del negocio es usuario de tienda web.

![Checklist Usuario de Tienda Web](/assets/img/docs/master-data/mad-master-web-2.png)

Imagen 73. Checklist Usuario de Tienda Web

Introduzca en el campo **Email**, el correo electrónico de la persona de contacto con el socio del negocio para las transacciones entre las empresas.

![Campo Email](/assets/img/docs/master-data/mad-master-email-2.png)

Imagen 74. Campo Email

Seleccione en el campo **Saludo**, la forma de saludar a la persona de contacto con el socio del negocio en los documentos a ser enviados.

![Campo Saludo](/assets/img/docs/master-data/mad-master-saludo.png)

Imagen 75. Campo Saludo

Seleccione en el campo **Dirección del Socio del Negocio**, la dirección de ubicación de la persona de contacto con el socio del negocio.

![Campo Dirección del Socio del Negocio](/assets/img/docs/master-data/mad-master-partner-2.png)

Imagen 76. Campo Dirección del Socio del Negocio

Introduzca en el campo **Título**, el nombre del socio del negocio cliente.

![Campo Título](/assets/img/docs/master-data/mad-master-title-3.png)

Imagen 77. Campo Título

Seleccione en el campo **Cumpleaños**, la fecha de nacimiento de la persona de contacto con el socio del negocio.

![Campo Cumpleaños](/assets/img/docs/master-data/mad-master-birthday.png)

Imagen 78. Campo Cumpleaños

Introduzca en el campo **Teléfono**, el teléfono para localizar a la persona de contacto con el socio del negocio para las transacciones entre las empresas.

![Campo Teléfono de Contacto](/assets/img/docs/master-data/mad-master-telephone-contact.png)

Imagen 79. Campo Teléfono de Contacto

Introduzca en el campo **Teléfono Móvil**, el teléfono móvil para localizar a la persona de contacto con el del socio del negocio.

![Campo Teléfono Móvil](/assets/img/docs/master-data/mad-master-movil.png)

Imagen 80. Campo Teléfono Móvil

Introduzca en el campo **Fax**, el fax de contacto del socio del negocio.

![Campo Fax](/assets/img/docs/master-data/mad-master-fax-2.png)

Imagen 81. Campo Fax

Seleccione en el campo **Tipo de Notificación**, la forma de enviar notificaciones a la persona de contacto con el socio del negocio.

![Campo Tipo de Notificación](/assets/img/docs/master-data/mad-master-notification.png)

Imagen 82. Campo Tipo de Notificación

Seleccione en el campo **Posición**, la posición de trabajo de la persona de contacto con el socio del negocio.

![Campo Posición](/assets/img/docs/master-data/mad-master-position.png)

Imagen 83. Campo Posición

Podrá apreciar el checklist **Acceso Total Socio del Negocio**, que al estar tildado indica que la persona de contacto con el socio del negocio cliente posee acceso total a su rol.

![Campo Acceso Total Socio del Negocio](/assets/img/docs/master-data/mad-master-access.png)

Imagen 84. Campo Acceso Total Socio del Negocio

Seleccione el icono **Guardar Cambios** en la barra de herramientras de ADempiere, para guardar el registro de los campos.

![Icono Guardar Cambios](/assets/img/docs/master-data/mad-master-save.png)

Imagen 85. Icono Guardar Cambios

Note

Este procedimiento realizado aplica solo para los Socios del Negocio que cumplan el rol de Cliente.