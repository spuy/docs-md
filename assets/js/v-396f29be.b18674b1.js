"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7056],{92773:(a,e,o)=>{o.r(e),o.d(e,{default:()=>r});var t=o(53633);const i=[(0,t.Fv)('<h2 id="carga-de-alumno-contrato-educacion" tabindex="-1"><a class="header-anchor" href="#carga-de-alumno-contrato-educacion" aria-hidden="true">#</a> Carga de Alumno-Contrato (Educación)</h2><p>Mediante esta ventana se permite generar la importación de un contrato y todas sus entidades relacionadas (alumno, familia, miembros, contactos), pero de forma manual, en vez de utilizar una planilla excel.</p><h3 id="_1-datos-alumno-y-localizacion" tabindex="-1"><a class="header-anchor" href="#_1-datos-alumno-y-localizacion" aria-hidden="true">#</a> 1. Datos Alumno y Localización</h3><p>En este grupo de datos se define la información del ALUMNO (hijo) y su localización. La mayoría de los datos son obligatorios.</p><p>Se controla que el Socio del Negocio (SDN) alumno no exista, mediante el código de SDN igual a nro. de identificación, email y nombre (se intenta obtener mediante estos tres parámetros), en caso de existir se asigna el mensaje de error correspondiente en la línea y no se procesa ese registro.</p><p><img src="/assets/img/docs/basic-rules/bid-import-SDN.png" alt="Datos de Socio del Negocio"></p><h3 id="_2-datos-contrato" tabindex="-1"><a class="header-anchor" href="#_2-datos-contrato" aria-hidden="true">#</a> 2. Datos Contrato</h3><p>Aquí se definen los datos relacionados al contrato y la familia. Para la familia se puede seleccionar una ya existente en el campo &quot;Familia&quot;, o ingresando el nombre de familia en &quot;Nombre de Familia&quot; se creará una nueva. Es válido mencionar que si se ingresa el nombre de una familia existente, se vincularán tanto el estudiante, como el contrato y los contactos a esa familia previamente creada (función de utilidad para cuando sea necesario cargar hermanos u otros contactos a una misma familia). Respecto al contrato es importante definir el rango fecha entre Fecha inicio y Fin programado (y Fin de Terminación) que generalmente se configura por año calendario.</p><p><img src="/assets/img/docs/basic-rules/bid-import-contract.png" alt="Datos del Contrato"></p><h3 id="_3-datos-contactos-rp-y-familiares" tabindex="-1"><a class="header-anchor" href="#_3-datos-contactos-rp-y-familiares" aria-hidden="true">#</a> 3. Datos Contactos (RP y familiares)</h3><p>Existen tres grupos de contacto, donde &quot;Contacto 1&quot; es destinado al responsable de pago (sea Madre, Padre, etc.) mientras que a los dos contactos restantes se los podrá cargar como familiares del alumno (si bien no serán responsables de pago, es posible marcarlos como &quot;envía Email&quot;, caso en el cual serán notificados de las cuotas pendientes).</p><p>Se busca obtener el SDN a facturar (con el mismo método usado para el alumno), si el mismo no existe entonces se crea al realizar la importación.</p><p>Si se ingresa nombre de contacto 1, 2 o 3, se ponen como obligatorios los demás campos necesarios para su creación.</p><p><img src="/assets/img/docs/basic-rules/bid-import-contact.png" alt="Datos de Contactos"></p><h3 id="_4-ejecutar-importacion" tabindex="-1"><a class="header-anchor" href="#_4-ejecutar-importacion" aria-hidden="true">#</a> 4. Ejecutar importación</h3><p>Para proceder a importar el contrato y demás entidades, se debe ir a la opción &quot;Importación de Contrato&quot;, ubicada en el ícono de Procesos, según imágen siguiente:</p><p><img src="/assets/img/docs/basic-rules/bid-import-importation.png" alt="Proceso de Importación"></p><p><img src="/assets/img/docs/basic-rules/bid-import-doc-action.png" alt="Datos de Acción sobre Documento"></p><p>La &quot;Acción del Documento&quot; que se seleccione, aplicará al Contrato, según se desee que el mismo queden en estado &#39;Completo&#39; o &#39;En Proceso&#39;.</p><p>Luego de finalizado el proceso, se mostrará un aviso con la información de los registros generados en el sistema, y para el caso de entidades que hayan tenido error, los mismos se podrán visualizar en el siguiente campo:</p><p><img src="/assets/img/docs/basic-rules/bid-import-error-message.png" alt="Mensajes de Error"></p><h3 id="ejemplo-de-importacion-alumno-contrato" tabindex="-1"><a class="header-anchor" href="#ejemplo-de-importacion-alumno-contrato" aria-hidden="true">#</a> Ejemplo de Importación Alumno-Contrato:</h3><p><img src="/assets/img/docs/basic-rules/bid-import-example.mp4" alt="Ejemplo de importación"></p><h3 id="validacion-de-entidades-generadas-por-importacion" tabindex="-1"><a class="header-anchor" href="#validacion-de-entidades-generadas-por-importacion" aria-hidden="true">#</a> Validación de entidades generadas por importación:</h3><p><img src="/assets/img/docs/basic-rules/bid-import-verification.mp4" alt="Validación de Datos Importación"></p><div class="custom-container note"><p class="custom-container-title">Nota</p><p>Este funcionamiento es similar al de todos los demás procesos de importación en el sistema (diario contable, estados de cuenta, etc).</p></div>',26)],n={},r=(0,o(33350).A)(n,[["render",function(a,e){return(0,t.uX)(),(0,t.CE)("div",null,i)}]])},65937:(a,e,o)=>{o.r(e),o.d(e,{data:()=>t});const t=JSON.parse('{"key":"v-396f29be","path":"/docs/verticals/education-management/import-contracts-manual-education.html","title":"Carga de contratos manual (Educación)","lang":"es-ES","frontmatter":{"title":"Carga de contratos manual (Educación)","category":["Documentation"],"star":9,"sticky":9,"tag":["Educación"],"article":false,"summary":"Carga de Alumno-Contrato (Educación) Mediante esta ventana se permite generar la importación de un contrato y todas sus entidades relacionadas (alumno, familia, miembros, contactos","head":[["meta",{"property":"og:url","content":"https://ayuda.solopapp.com/docs/verticals/education-management/import-contracts-manual-education.html"}],["meta",{"property":"og:title","content":"Carga de contratos manual (Educación)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-12-27T20:45:23.000Z"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"article:tag","content":"Educación"}],["meta",{"property":"article:modified_time","content":"2023-12-27T20:45:23.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Carga de Alumno-Contrato (Educación)","slug":"carga-de-alumno-contrato-educacion","children":[{"level":3,"title":"1. Datos Alumno y Localización","slug":"_1-datos-alumno-y-localizacion","children":[]},{"level":3,"title":"2. Datos Contrato","slug":"_2-datos-contrato","children":[]},{"level":3,"title":"3. Datos Contactos (RP y familiares)","slug":"_3-datos-contactos-rp-y-familiares","children":[]},{"level":3,"title":"4. Ejecutar importación","slug":"_4-ejecutar-importacion","children":[]},{"level":3,"title":"Ejemplo de Importación Alumno-Contrato:","slug":"ejemplo-de-importacion-alumno-contrato","children":[]},{"level":3,"title":"Validación de entidades generadas por importación:","slug":"validacion-de-entidades-generadas-por-importacion","children":[]}]}],"git":{"createdTime":1702324098000,"updatedTime":1703709923000,"contributors":[{"name":"mgarciaQ76","email":"139590879+mgarciaQ76@users.noreply.github.com","commits":2}]},"readingTime":{"minutes":1.88,"words":565},"filePathRelative":"docs/verticals/education-management/import-contracts-manual-education.md","localizedDate":"11 de diciembre de 2023"}')}}]);