---
title: Configuración CFE
category: Documentation
star: 9
sticky: 9
article: false
---

## Configuración previa necesaria

El circuito de facturación electrónica requiere setear ciertas definiciones en el sistema para lograr un correcto envío de comprobantes digitales a la entidad fiscal

### Socio de negocio

Es indispensable elegir un socio de negocio válido (cliente) antes de emitir un documento. Ejemplo: Casa Gutiérrez.

#### Grupo de impuestos del socio

El grupo de impuestos asociado al socio de negocio define el tipo de documento fiscal electrónico que se utilizará. Algunos ejemplos:

Cédula/DNI/Pasaporte/Otros → e-Ticket

Empresas u organizaciones → e-Factura

Se debe verificar que estos tipos estén correctamente definidos en el grupo de impuestos correspondiente. Si no hay uno definido, el sistema no podrá completar ni enviar correctamente el documento.

### Tipo de documento fiscal

El tipo de documento fiscal vinculado al documento utilizado para generar CFE posee ciertos requisitos a setear para lograr un envío satisfactorio a la entidad fiscal. 
Esto aplica para todos los tipos de documento que se vayan a generar (Facturas, Nota de crédito, etc.)

El documento debe tener definido:

* Tipo de CFE válido

* “¿Maneja facturación electrónica?” = Sí

* “¿Enviar después de completar?” = Sí

::: note
❗ Importante: Solo debe haber un tipo de documento fiscal por instancia, y no por organización.
:::