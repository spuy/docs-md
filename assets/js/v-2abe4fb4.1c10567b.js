"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9332],{5537:(e,o,a)=>{a.r(o),a.d(o,{default:()=>s});var i=a(53633);const r=[(0,i.Fv)('<h2 id="acciones" tabindex="-1"><a class="header-anchor" href="#acciones" aria-hidden="true">#</a> Acciones</h2><h3 id="al-crear-nuevo-soocio-del-negocio-proveedor-¿se-definen-en-automatico-los-datos-lista-de-precio-compra-y-esquema-descuento" tabindex="-1"><a class="header-anchor" href="#al-crear-nuevo-soocio-del-negocio-proveedor-¿se-definen-en-automatico-los-datos-lista-de-precio-compra-y-esquema-descuento" aria-hidden="true">#</a> Al crear nuevo Soocio del Negocio proveedor, ¿se definen en automático los datos Lista de precio compra y esquema descuento?</h3><p>Pueden setearse de forma automática al crear el Proveedor, siempre y cuando esos datos de Lista de precio compra y esquema descuento se encuentren previamente definidos en el Grupo de Socio de Negocio al que corresponda.</p><h3 id="¿es-posible-cargar-manualmente-comprobantes-del-sistema-anterior-con-un-tipo-de-documento-diferente-al-que-se-utiliza-para-emitir-los-nuevos-documentos-por-cobrar" tabindex="-1"><a class="header-anchor" href="#¿es-posible-cargar-manualmente-comprobantes-del-sistema-anterior-con-un-tipo-de-documento-diferente-al-que-se-utiliza-para-emitir-los-nuevos-documentos-por-cobrar" aria-hidden="true">#</a> ¿Es posible cargar manualmente comprobantes del sistema anterior con un tipo de documento diferente al que se utiliza para emitir los nuevos documentos por cobrar?</h3><p>Esto es posible definiendo un tipo de documento diferente desde el proceso Generar Factura desde línea de orden (el tipo de documento para cargar las manuales del sistema anterior es &quot;invoice V-cita&quot;).</p><p>Si se deja vacío (el campo tipo de documento) entonces se define el tipo de documento por defecto definido en el Tipo de Orden de Venta que se esté facturando: En su caso será &quot;Invoice&quot;, ya que es el que tiene definido el tipo de Orden de venta &quot;Sales Order&quot;.</p><h3 id="existe-una-ventana-para-poder-visualizar-claramente-los-precios-de-productos-y-actualizarlos-cuando-sea-necesario" tabindex="-1"><a class="header-anchor" href="#existe-una-ventana-para-poder-visualizar-claramente-los-precios-de-productos-y-actualizarlos-cuando-sea-necesario" aria-hidden="true">#</a> Existe una ventana para poder visualizar claramente los precios de productos y actualizarlos cuando sea necesario?</h3><p>Tanto para consulta de precios de producto como para actualizar precios, se cuenta con la ventana &quot;Versión de Lista de Precio&quot;.</p><p>Desde ella es posible tener una visual completa de los productos con sus precios y gestionar cualquier cambio relacionado al importe/valor por producto.</p><h3 id="¿como-se-define-la-localizacion-de-socio-del-negocio" tabindex="-1"><a class="header-anchor" href="#¿como-se-define-la-localizacion-de-socio-del-negocio" aria-hidden="true">#</a> ¿Cómo se define la Localización de Socio del Negocio?</h3><p>El configurador del sistema &quot;UY_SET_BPLOCATION_NAME_FROM_COUNTRY&quot; indica si el nombre de la localización de Socio Del Negocio se debe generar a partir del formato definido en el país.</p><p>En ese caso se obtiene primero la dirección/es (address1, address2, address3, address4), y luego según el formato definido en el país en el campo &quot;Formato de impresión de dirección&quot;, se concatenan los demás datos de ciudad, región y código postal. El texto resultante será el definido en el nombre de la localización del Socio Del Negocio.</p><h2 id="procesos" tabindex="-1"><a class="header-anchor" href="#procesos" aria-hidden="true">#</a> Procesos</h2><h3 id="¿existe-un-proceso-para-agilizar-la-creacion-del-socio-de-negocio-con-su-correspondiente-contrato-de-servico-y-lista-de-precio" tabindex="-1"><a class="header-anchor" href="#¿existe-un-proceso-para-agilizar-la-creacion-del-socio-de-negocio-con-su-correspondiente-contrato-de-servico-y-lista-de-precio" aria-hidden="true">#</a> ¿Existe un proceso para agilizar la creación del Socio de Negocio con su correspondiente Contrato de servico y Lista de Precio?</h3><p>Esto es posible realizarlo desde el proceso &quot;Crear Contrato y Lista de Precios&quot;, accesible desde los procesos en ventana de socio del negocio.</p><p>Este proceso crea la lista de precios de venta y la asocia al SDN en cuestión, y además si se marcó el check &quot;Crear Contrato&quot;, crea un contrato en estado completo para dicho Socio del Negocio.</p><p>El proceso se ejecutá correctamente si se cumplen las siguientes condiciones:</p><ul><li><p>El socio del negocio tiene marcado el check de &quot;Es Cliente&quot;</p></li><li><p>El socio del negocio no posee asignada lista de precio</p></li><li><p>El socio del negocio tiene definida una localización y se marcó el check de &quot;Crear Contrato&quot;</p></li><li><p>El socio del negocio tiene definido el agente comercial y se marcó el check de &quot;Crear Contrato&quot;</p></li></ul><p>El proceso genera mensaje restrictivo si:</p><ul><li><p>El Socio del Negocio no tiene mrcado el check de &quot;Es Cliente&quot;</p></li><li><p>El Socio del Negocio tiene asignada una lista de precios</p></li><li><p>El Socio del Negocio no tiene definida una localización y se marcó el check de &quot;Crear Contrato&quot;</p></li><li><p>El Socio del Negocio no tiene definida el agente comercial y se marcó el check de &quot;Crear Contrato&quot;</p></li></ul>',20)],c={},s=(0,a(89456).A)(c,[["render",function(e,o){return(0,i.uX)(),(0,i.CE)("div",null,r)}]])},60295:(e,o,a)=>{a.r(o),a.d(o,{data:()=>i});const i=JSON.parse('{"key":"v-2abe4fb4","path":"/docs/frequently-asked-questions/verticals-faqs/field-services.html","title":"Servicios Tercerizados","lang":"es-ES","frontmatter":{"title":"Servicios Tercerizados","category":["Documentation"],"star":9,"sticky":9,"article":false,"summary":"Acciones Al crear nuevo Soocio del Negocio proveedor, ¿se definen en automático los datos Lista de precio compra y esquema descuento? Pueden setearse de forma automática al crear e","head":[["meta",{"property":"og:url","content":"https://ayuda.solopapp.com/docs/frequently-asked-questions/verticals-faqs/field-services.html"}],["meta",{"property":"og:title","content":"Servicios Tercerizados"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2024-09-03T21:14:56.000Z"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"article:modified_time","content":"2024-09-03T21:14:56.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Acciones","slug":"acciones","children":[{"level":3,"title":"Al crear nuevo Soocio del Negocio proveedor, ¿se definen en automático los datos Lista de precio compra y esquema descuento?","slug":"al-crear-nuevo-soocio-del-negocio-proveedor-¿se-definen-en-automatico-los-datos-lista-de-precio-compra-y-esquema-descuento","children":[]},{"level":3,"title":"¿Es posible cargar manualmente comprobantes del sistema anterior con un tipo de documento diferente al que se utiliza para emitir los nuevos documentos por cobrar?","slug":"¿es-posible-cargar-manualmente-comprobantes-del-sistema-anterior-con-un-tipo-de-documento-diferente-al-que-se-utiliza-para-emitir-los-nuevos-documentos-por-cobrar","children":[]},{"level":3,"title":"Existe una ventana para poder visualizar claramente los precios de productos y actualizarlos cuando sea necesario?","slug":"existe-una-ventana-para-poder-visualizar-claramente-los-precios-de-productos-y-actualizarlos-cuando-sea-necesario","children":[]},{"level":3,"title":"¿Cómo se define la Localización de Socio del Negocio?","slug":"¿como-se-define-la-localizacion-de-socio-del-negocio","children":[]}]},{"level":2,"title":"Procesos","slug":"procesos","children":[{"level":3,"title":"¿Existe un proceso para agilizar la creación del Socio de Negocio con su correspondiente Contrato de servico y Lista de Precio?","slug":"¿existe-un-proceso-para-agilizar-la-creacion-del-socio-de-negocio-con-su-correspondiente-contrato-de-servico-y-lista-de-precio","children":[]}]}],"git":{"createdTime":1723494953000,"updatedTime":1725398096000,"contributors":[{"name":"mgarciaQ76","email":"139590879+mgarciaQ76@users.noreply.github.com","commits":2}]},"readingTime":{"minutes":1.79,"words":536},"filePathRelative":"docs/frequently-asked-questions/verticals-faqs/field-services.md","localizedDate":"12 de agosto de 2024"}')}}]);