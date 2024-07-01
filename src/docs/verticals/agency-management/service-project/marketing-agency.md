---
title: Proyecto Agencia de Marketing
category: Documentation
star: 9
sticky: 9
tag: 
  - Agencia
article: false
---

Los Proyectos de Agencia de Marketing se utilizan para crear, implementar y gestionar estrategias y campañas de marketing para ayudar a otras empresas a promover sus productos o servicios. Estas agencias ofrecen una variedad de servicios, que pueden incluir marketing digital, publicidad, relaciones públicas, diseño gráfico, desarrollo de contenido, gestión de redes sociales, SEO (optimización de motores de búsqueda), SEM (marketing en motores de búsqueda) y análisis de datos. Su objetivo principal es aumentar la visibilidad, el alcance y las ventas de sus clientes a través de tácticas efectivas y personalizadas. Solop ERP contempla estos procesos, diseñando un circuito que se adapta a sus necesidades.

## Generación de órdenes de trabajo

Una orden de trabajo es considerado un Proyecto para Solop ERP.
Se trata de una unidad de gestión que agrupa un conjunto de entidades que le dan forma y describen un determinado Servicio.
Además, se trata de una dimensión contable, con el fin de poder obtener reportes financieros por Proyecto.

El primer paso para la creación de una Orden de trabajo es ingresar en la ventana el nombre del cliente (Socio del negocio del cual hereda la dirección y lista de precio), el campo Nombre (nombre de la campaña), fechas (opcionales), seleccionar una categoría de Proyecto, clase de Proyecto y una Descripción (o brief, dato manual opcional).
Al grabado queda generado el registro de orden de trabajo (cabezal).

![Proyecto de Marketing](/assets/img/docs/agency-management/agm-agency1.png)

### Líneas de Orden de Trabajo

Una vez creado el cabezal de la orden de trabajo (Proyecto) el ejecutivo puede crear la/s líneas de la orden.
Se trata de las tareas vinculadas al proyecto, o sea, los diferentes pedidos de un cliente para un determinado negocio.
Este circuito se realiza en dos partes:

* Primero el ejecutivo carga en el campo descripción el pedido específico de la tarea. Ingresa el nombre de la tarea en el campo "Material". Incorpora la cantidad, la unidad de duración (en general es "Hora") y fecha prometida (opcional).

* En un segundo paso el responsable de ejecutivos de cuentas (o quien cotiza) define el producto de las líneas. Cada producto posee un tarifario propio, el cual determina el precio del trabajo a realizar.

![Línea de Proyecto](/assets/img/docs/agency-management/agm-agency2.png)

### Proceso Generar Orden

Cuando cada línea de orden de trabajo posee su producto definido (así como el resto de sus datos obligatorios) el responsable de ejecutivos de cuentas (o quien realiza cotización) corre el proceso "Generar Orden" desde el cabezal de la orden de trabajo definiendo en el campo Sub tipo ov = Propuesta, y en el campo Tipo de Documento = Cotización de Venta.
Esto genera la orden de venta con la correspondiente cotización al cliente.
Es posible imprimir/exportar para envío y aprobación por parte del contacto de nuestro cliente.

![Generar Orden](/assets/img/docs/agency-management/agm-agency3.png)

### Convertir Cotización

Cuando el cliente notifica la aprobación de la cotización enviada, desde el proceso de menú "Convertir Cotización" es posible generar la Orden de Venta firme (definitiva).

Esto realiza en automático la marca de Aprobación por cliente = SI en la Orden de trabajo vinculada, así como la creación de tantas tareas como líneas posea la orden de trabajo (genera solicitudes). También genera el cierre de la Orden de Venta Cotización.

Las tareas pueden visualizarse desde los documentos relacionados o solapa Solicitudes en la misma orden de trabajo.

![Generar Orden](/assets/img/docs/agency-management/agm-agency4.png)

### Asignación de agentes de compañía a las diferentes tareas

Una vez generadas las tareas por cada línea de orden de trabajo, el paso posterior es asignar recurso a cada una de estas tareas (diseñadores) con el fin de dar seguimiento al status de cada trabajo.

La gestión de carga de horas y estado de las tareas se realiza desde Solicitudes (Asunto) y una vez que todas las tareas vinculadas a una orden de trabajo se encuentran finalizadas, la misma podrá ser facturada a cliente.

![Generar Orden](/assets/img/docs/agency-management/agm-agency5.png)

### Crear Marcas de Clientes

Ventana: **"Campaña"**

En la pestña de clientes se debe definir el cliente(s) para un correcto funcionamiento del link del campo, para que desde el Proyecto se muestren las marcas que posee cada cliente (una vez se defina el cliente en el proyecto).

![Generar Orden](/assets/img/docs/agency-management/agm-agency6.png)

![Generar Orden](/assets/img/docs/agency-management/agm-agency7.png)