---
title: Orden de Distribución
category: Documentation
star: 9
sticky: 9
article: false
---

El proceso de Órdenes de Distribución permite gestionar el movimiento de productos entre distintos almacenes o sucursales de la compañía. Asegura que las transferencias de stock se registren de manera controlada y transparente, utilizando un almacén en tránsito como etapa intermedia obligatoria.

## 1. Requerimiento y creación

La orden de distribución permite mover productos entre almacenes u ubicaciones dentro de la organización, utilizando un almacén en tránsito como paso intermedio. Esto garantiza que el traslado no sea inmediato, sino que refleje el tiempo en tránsito.

### Requisitos previos

* Debe existir un almacén en tránsito configurado con su ubicación y marcado como almacén predeterminado.

* Los productos a mover deben tener stock en la ubicación origen.

![Almacén](/assets/img/docs/distribution-management/dim-distribution-image33.png)

Al crear Orden de Distribución se debe definir:

  - Almacén en tránsito en el cabezal de la orden.

  - Ubicación origen (de dónde sale el producto).

  - Ubicación destino (a dónde llegará el producto).

### Pasos

  1. Crear un almacén en tránsito con su ubicación y marcarlo como predeterminado.

  2. Generar una orden de distribución en el sistema:

     - Definir el almacén en tránsito en el cabezal.

     - Completar los campos obligatorios y guardar.

  3. En la línea de la orden:

     - Seleccionar producto.

     - Definir cantidad y cantidad confirmada (la confirmada es la que efectivamente se moverá).

     - Establecer ubicación origen y ubicación destino.

     - Guardar.

  4. Se pueden incluir varios productos en la misma orden, incluso con distintos orígenes y destinos.

  5. Completar la orden de distribución desde el cabezal → se genera un número de documento.

  ![Almacén](/assets/img/docs/distribution-management/dim-distribution-image34.png)

### Notas importantes

- Si la cantidad confirmada es mayor que la existencia en origen, el sistema solo moverá hasta el stock disponible (a menos que la orden esté configurada como regla de entrega forzada).

- Toda orden de distribución genera dos procesos posteriores:

- Envío: movimiento de inventario desde la ubicación origen hacia el almacén en tránsito (realizado por la sucursal que envía).

- Recepción: movimiento de inventario desde tránsito hacia la ubicación destino final.

## 2. Generar movimiento (origen a tránsito)

Este proceso corresponde al primer movimiento físico de la orden de distribución: trasladar productos desde la ubicación origen hasta el almacén en tránsito.

### Requisitos previos

* La orden de distribución debe estar creada y completada (Ver Paso 1).

* Las líneas de la orden deben tener definida la cantidad confirmada, ya que sin este dato el proceso no se mostrará en la lista de pendientes.

### Pasos

  1. Acceder al menú y seleccionar la opción "Generar movimiento".

  2. El sistema mostrará los registros pendientes de mover.

    - No se detallan los productos en columnas, ya que este proceso representa una salida desde el origen hacia tránsito.

    - Solo aparecen las órdenes con cantidades confirmadas.

  3. Seleccionar el registro y presionar Aceptar.

  4. En la ventana emergente, definir la fecha de movimiento y confirmar con Aceptar.

  5. Verificar el resultado:

    - Ir a la orden de distribución.

    - Refrescar la vista en las líneas.

    - Confirmar que la cantidad en tránsito se haya actualizado correctamente.

  ![Generar Movimiento](/assets/img/docs/distribution-management/dim-distribution-image35.png)

  ![Generar Movimiento](/assets/img/docs/distribution-management/dim-distribution-image36.png)

::: note
Si la línea de orden no tiene cantidad confirmada, el proceso no aparecerá en la lista de pendientes, por lo que es obligatorio cargar este dato previamente.
:::

### 3. Generar movimiento (Tránsito a Destino)

Este proceso corresponde a la recepción de productos en el almacén destino. Los productos que se habían movido al almacén en tránsito ahora deben ser confirmados y registrados como entregados en el destino.

### Requisitos previos

  * El movimiento desde el almacén origen a tránsito debe estar generado (ver Parte 2).

  * Los productos deben figurar como disponibles en el almacén tránsito.

### Pasos

  1. Verificar cantidades en tránsito:

    - Consultar el reporte “Detalle de almacenamiento”.

    - Confirmar que los productos estén registrados en el almacén tránsito (ejemplo: 25 unidades).

  2. Acceder al proceso “Recibos de materiales de la Orden”.

  3. Ingresar el número de la orden de distribución en el criterio de búsqueda.

    - El sistema mostrará las líneas de la orden, no los movimientos individuales.

    - Esto se debe a que un camión puede salir con múltiples destinos, y se recepciona según cada ubicación de destino.

  4. Seleccionar el registro correspondiente (línea en tránsito).

  5. Presionar Aceptar.

  6. En la ventana emergente, definir la Fecha de movimiento y confirmar con Aceptar.

  7. Validar el resultado:

    - En la orden de distribución, revisar que la cantidad en tránsito haya disminuido (ejemplo: de 25 → 0).

    - Confirmar que la cantidad entregada se actualizó (ejemplo: 25).

![Generar Movimiento](/assets/img/docs/distribution-management/dim-distribution-image37.png)

4. Notas importantes

  * Una vez recepcionados los productos, la orden queda liberada.

  * En caso de anulación de documentos, los movimientos se revierten:

    - De destino a tránsito.

    - De tránsito a origen.