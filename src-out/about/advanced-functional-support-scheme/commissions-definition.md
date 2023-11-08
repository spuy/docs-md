---
title: Definición de Comisiones
category: Documentation
star: 9
sticky: 9
article: false
---

## Configuración de Comisiones

La ventana Comisiones permite definir cómo se pagarán las comisiones y dar mantenimiento a las reglas usadas para su cálculo.
Es posible generar una Comisión para un Socio del Negocio y Representante de Ventas (agente comercial), que puede ser externo (a la orgenización).
Con esta funcionalidad puede pagar comisiones múltiples  para la misma orden o factura. Por ejemplo a la persona que registra la transacción, a la persona responsable de la venta del producto (categoría) y/o al Socio del Negocio (grupo).

### Proceso de generación de comisión:

1. En la pestaña Comisión se define el Nombre  y la Descripción que indique el motivo por el cual se pagará la comisión.

2. Se debe determinar el Tipo de Frecuencia (por ejemplo, mensualmente) a usar cuando calcule una comisión para  algún Socio del Negocio / Representante de Ventas.

3. Se debe seleccionar un Cargo para determinar el Elemento Contable a usar para la aplicación (por ejemplo Utilerías).

::: note
La Base del Cálculo de Comisión puede ser Orden, Factura o Cobranza.
:::

#### Generación de Líneas de Comisión

* Es posible copiar sus valores de línea desde una Comisión existente, haciendo Clic en el botón "Copiar De"

* Si se desea crear nuevas líneas, se cambia a la pestaña Línea de Comisión donde se definen los registros y el cálculo a usar para generar comisiones.
Es posible tener múltiples líneas que permiten definir diferentes reglas de cálculo para diferentes Socios del Negocio/Grupos o Productos/Categorías.

* Se puede seleccionar entre los siguientes criterios: Organización, Grupo de Socio del Negocio, Socio del Negocio, Categoría de Producto, Producto, Región de Ventas; si se desea restringir la línea de comisión a estos registros.

* Se utiliza el cuadro de verificación Comisión solo en Órdenes Específicas para indicar que únicamente  Órdenes o Facturas en las que este Representante de Ventas  sea introducido, sean incluidas para el cálculo de la comisión.

* El cálculo de comisión está basado en los datos introducidos en las áreas Cantidades o Importes.

* El valor del campo Cantidad Multiplicadora indica el valor por el que deben multiplicarse  las cantidades acumuladas para calcular las comisiones.

* El campo Importe Restado indica el importe a ser restado del importe total acumulado antes de multiplicar.

* El campo Importe Multiplicador indica el Importe por el que debe multiplicarse el importe acumulado para calcular las comisiones.

* Se utiliza el cuadro de verificación Sólo Positivo para indicar que el resultado de la resta se ignora si es negativo. Esto indica que no serían generadas comisiones negativas.

*  Al regresar a la pestaña Comisión, se puede generar la Comisión haciendo Clic en el botón Generar Comisión. Para cada período, inicia el cálculo de la comisión después de que las transacciones para ese período están completas o cerradas. 

### Cálculo de Comisión

1. Se utiliza la ventana Cálculo de Comisión para revisar el resultado de las comisiones generadas y para crear una Factura por Pagar.

2. Para abrir la ventana Cálculo de Comisión en Solop ERP: doble Clic en Cotización-a-Factura < Cálculo de Comisión.

3. La pestaña Cálculo de Comisión despliega la Descripción y el Gran Total para la Comisión Generada.

Se debe cambiar a la pestaña Total de Comisión para verificar el resultados de cada Línea  de Comisión.

::: note
La Línea de la Comisión indica la línea que fue usada para generar este Total de comisión.
:::

El Importe Convertido y Cantidad Actual despliegan el Importe Total y Cantidad  para todos los documentos (por ejemplo Facturas) empleadas  en esta Línea de Comisión.

El Campo Total de la Comisión despliega la comisión total calculada para esta línea de comisión.

Se debe cambiar de la pestaña Detalle de Comisión para verificar las fuentes empleadas para calcular cada Línea de Comisión.

La pestaña  Detalle de Comisión despliega la información del documento que fue empleada  para calcular el Importe de Línea de Comisión.

Una vez que los detalles han sido revisados para la Corrida de Comisión completa, es posible ya sea cambiar cualquiera de las líneas de Comisión y recalcular las comisiones o si los resultados son correctos, regresar a la pestaña Cálculo de Comisión.

Luego se debe seleccionar el botón Crear Factura para generar una Factura de Cuentas por Pagar para el Representante de Ventas.

En la ventana (Crear Facturas) se selecciona OK para crear la Factura.

Cuando se completa el proceso, aparece el mensaje en la parte inferior de la ventana, indicando el número de Factura que fue creado.



