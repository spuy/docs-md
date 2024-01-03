---
title: 1. Órdenes de Trabajo
category: Documentation
star: 9
sticky: 9
article: false
---

### Generación de órdenes de trabajo

Una orden de trabajo es considerado un Proyecto para Solop ERP.
Se trata de una unidad de gestión que agrupa un conjunto de entidades que le dan forma y describen un determinado Servicio.

El primer paso para la creación de una Orden de trabajo es ingresar en la ventana el nombre del cliente (Socio del negocio del cual hereda la dirección y precio de lista), la fecha de inicio del servicio a realizar y seleccionar una categoría de Proyecto (y la unidad o departamento).
En este paso solo se genera el evento (no se asignan recursos o productos).

![Orden de Trabajo](/assets/img/docs/field-services-management/fis-services2.png)

### Asignación de Recursos

Desde la ventana de Navegador de Proyectos es posible visualizar aquellas órdenes de trabajo que aun no posean agente comercial (es quien realizará el servicio).
Una vez asignado a un agente comercial, el sistema le envía una notificación (solicitud) por el servicio a realizar al agente comercial en cuestión (es posible configurar el envío del mensaje por diferentes vehículos de comunicación).
El agente comercial podrá aceptar el servicio a realizar. Y posteriormente a haberlo realizado, podrá enviar una confirmación del trabajo realizado (esto habilita los pasos posteriores para generar las órdenes y la facturación).

![Navegador de Proyectos](/assets/img/docs/field-services-management/fis-services3.png)

### Confirmación de Servicio realizado

Una vez realizado el servicio (ejemplo: painting), el agente comercial enviará una notificación confirmando el trabajo realizado.
Esto permite al departamento de Administración entrar en la orden de trabajo vinculada a ese servicio y generar una línea de orden de trabajo (de Proyecto) agregando el/los productos confirmados por el agente comercial y dejar preparado el proyecto para la generación de órdenes y su posterior facturación.

![Línea de Proyecto](/assets/img/docs/field-services-management/fis-services4.png)

### Generar Orden desde Proyecto

Una orden de trabajo ya confirmada y con su correspondiente línea de orden generada con los productos vinculados al sericio realizado se encuentra en condiciones de facturar.
Para esto, desde el proceso de Generar orden desde proyecto se la selecciona y le crea en forma automática (heredando los datos de la orden de trabajo) una orden de venta, una orden de compra y un documento por pagar (este último corresponde al servicio realizado por el agente comercial o recurso).

![Generar Orden desde Proyecto](/assets/img/docs/field-services-management/fis-services5.png)