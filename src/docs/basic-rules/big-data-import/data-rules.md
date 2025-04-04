---
title: Reglas de Datos
category: Documentation
star: 9
sticky: 9
article: false
---

## Guía para el Envío de Datos para Carga Masiva de Socios del Negocio (SDN) 

Esta guía detalla cómo deben enviarse los datos para realizar una carga masiva de Socios del Negocio (Clientes, Proveedores, Empleados) en el sistema. 
 
Todos los campos marcados como obligatorios deben completarse correctamente. En caso contrario, los datos faltantes deberán ser cargados manualmente luego de la importación. 

### Campos a completar en la planilla 

|        Campo          |                         Descripción                                        | Obligatorio | 
| --------------------- | -------------------------------------------------------------------------- | ----------- |
|    Organización       | Será definido por el equipo de Solop. No requiere acción del usuario.      |    SI       |
|   Value (Código)      | Código único del SDN. Asignado por el cliente o dejar por valor default    |    SI       |
|   Nombre Fantasía     | Nombre comercial o visible del SDN. Ej.: 'Distribuidora Sur'               |    SI       |
|    Razón Social       | Nombre legal. Coincide o no con dato anterior. Ej.: 'Empresa del Sur S.A.' |    SI       |
|  Cliente/Empl/Prov    | Indicar 'Y' (Sí) o 'N' (No) por columna. Un SDN puede tener múltiple rol   |    SI       |
|  Dirección 1/Dir 2    | Dirección física del SDN. Usar Dir 2 si se requiere espacio adicional      |    SI       |
|       Ciudad          | Escribir mayúscula inicial y el resto en minúscula. Ej.: 'Montevideo'      |    SI       |
|        País           | Código ISO de 2 letras. Ejemplo: Uruguay = 'UY', Argentina = 'AR'          |    SI       |
|      Teléfono         | Número de contacto. Si no se conoce, puede dejarse vacío.                  |  Opcional   |
| Núm de Identificación | Número de RUT o Cédula. Según tipo de entidad (jurídica o natural) y país  |    SI       |
|       Región          | Aplica en país con regiones. Ej.: Buenos Aires/Jalisco                     |    SI       |
|     Grupo SDN         | Categoría del SDN. Ej.: “Clientes”, “Proveedores”, “Empleados”             |    SI       |
|     Contacto          | Nombre de contacto. Si se define, se crea un “Usuario” vinculado.          |  Opcional   |
|    Regla de Pago      | Valor constante para todos o por registro. Ej.: 'Contado', '30 días'.      |    SI       |
|  Grupo de Impuesto    | Identifica si el SDN se rige por RUT o Cédula. Completar según país.       |    SI       |

### Recomendaciones clave 

**Formato exacto:** Algunos campos (como Ciudad o Región) deben coincidir exactamente con lo que ya existe en el sistema. Revisá ortografía, tildes y uso de mayúsculas **(Primera letra Mayúscula y el resto Minúscula)** 

* Ejemplos no aceptados: Bsas, BA, BSAS, b.Aires.  

* Caso aceptado: Buenos Aires 

**Carga incompleta:** Si se omiten campos obligatorios, la información deberá cargarse manualmente después. 

**Grupos SDN:** Si necesitás crear nuevos grupos (por ejemplo, “Distribuidores”), deben ser dados de alta previamente por el equipo técnico. 

::: note
 En caso de que existan datos que no cumplan con la lógica definida por el sistema, la   planilla será devuelta al cliente para su corrección. 
 Si se desea continuar con la carga pese a estos errores, la corrección de los mismos implicará costos adicionales que no están contemplados en el alcance inicial de la carga masiva. 
:::