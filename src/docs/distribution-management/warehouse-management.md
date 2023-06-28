---
title: Gestión de Almacén Avanzado
category: Documentation
star: 9
sticky: 9
article: false
---


ADempiere ofrece en su gestión de WMS(Warehouse Management Systems) o en español Sistema para la Gestión de almacenes una herramienta que apoya  las operaciones logísticas del almacén de una empresa:

- Control de inventarios.
- Ubicación de las existencias.
- La distribución de un almacén.
- Coordinación y optimización de los movimientos con método FIFO (First In, First Out)

En general ADempiere satisfacen las necesidades de operaciones logísticas internas de la compañía.

Pero su principio básico es proveer la información para permitir el control eficiente del movimiento de materiales en el almacén. La secuencia operativa de un WMS incluye entre otras tareas:

- Diseño y estructura de almacén
- Seguimiento de Inventario
- Recepción y almacenamiento
- Lista de preparación de Pedido (Picking List)
- Envío a Puerta de Embarque

![WMS (2)](https://github.com/erpcya/docs/assets/9578152/ac99f164-7305-4791-abb2-c29f7d8ba539)


Ahora bien, en Adempiere existen dos formas en las que se puede ejecutar este proceso, de forma automática bajo la siguiente estructura:

- Orden de Venta
- Generación de Orden de Salida Automática
- Generación de Orden de Distribución Automática
- Generación de Movimiento de Inventario desde Almacén Origen a Puerta de Embarque
- Reporte de Planificación de Embarque (Picking List)

También puede generarse de manera manual permitiendo así una agrupación de ordne de venta y planificación de orden de flete, bajo la siguiente estructura:

- Orden de Venta
- Orden de Salida
- Generación de Orden de Distribución Automática
- Generación de Movimiento de Inventario desde Almacén Origen a Puerta de Embarque
- Orden de Flete
- Reporte de Orden de Flete
- Reporte de Planificación de Embarque

 
##  Orden de Salida Manual

1. Cree una orden de Venta de manera habitual ver manual: https://docs.erpya.com/docs/sales-management/order.html
2. Vaya a la sección gestión Avanzada de Almacén

   ![image](https://github.com/erpcya/docs/assets/9578152/30bd3f01-6bf0-45f1-a1da-e18b266be282)
   
4. Luego seleccione la opción Operación de Salida

   ![image](https://github.com/erpcya/docs/assets/9578152/b38bfe7f-422b-404b-b03b-9de62651a355)
   
6. Luego seleccione la opción Generar Orden de Salida desde orden de Venta/Distribución

   ![image](https://github.com/erpcya/docs/assets/9578152/3c08e0fd-7632-469a-b42f-bfa5abad8a3a)
   
7. A continuación verá el siguiente formulario
 
  ![image](https://github.com/erpcya/docs/assets/9578152/9fac4a98-ef2d-452c-a44d-ba9eb1b74066)
  
8. En este formulario se procede a colocar los datos de filtro para la búsqueda
9. Procedemos a selecionar las órdenes de ventas que vamos a enviar a salida
10. Luego las lineas de las órdenes de ventas (Productos)
11. Finalmente seleccionamos la opción ok.

::: info Nota

En este punto de manera automática, se genera la orden de distribución y movimiento de inventario para mover la mercancia a la puerta de embarque o almacén de venta.

:::

12. Finalmente vaya a la opción Gestión de Distribución->Gestión de Flete-> Generar Orden de Flete
13. A continuación verá el siguiente formulario
    
    ![image](https://github.com/erpcya/docs/assets/9578152/93ac3f95-ad7b-4911-b256-b7c3b1cdad7f)
    
15. Seleccione la Orden de Salida previamente generada.
16. Seleccione la fecha en la que se realizará el envío de la mercancia.
17. De igual modo coloque el transporte, Vehículo, y conductor responsable de la carga.


##  Orden de Salida Automática

1. Cree una orden de Venta de manera habitual ver manual: https://docs.erpya.com/docs/sales-management/order.html

::: info Nota

En este punto de manera automática, se genera la orden de Salida,orden de distribución y movimiento de inventario para mover la mercancia a la puerta de embarque o almacén de venta.

:::


