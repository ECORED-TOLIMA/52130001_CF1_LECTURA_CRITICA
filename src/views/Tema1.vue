<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Estructura de un párrafo

    p La oración es una forma de expresar con coherencia un pensamiento, pero varias oraciones permiten hablar con más claridad sobre el pensamiento. En un párrafo se encuentra un grupo de oraciones organizadas y relacionadas, que desarrollan un tema.

    .titulo-tres.mt-5: h3 Características de un párrafo

    TabsB.color-acento-botones.bg-2
      .py-4.py-md-5(titulo="Unidad" :icono="require('@/assets/curso/tema1/1.svg')")
        .row.p-4
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema1/6.png', alt='Texto que describa la imagen')

          .col-md-7
            p Un párrafo debe desarrollar una sola idea central. Fácilmente se rompe la unidad cuando se introducen varias proposiciones principales o cuando se adicionan proposiciones que, en realidad, son ajenas al tema que se pretende desarrollar. Esta es una de las características que permite determinar si un párrafo está bien escrito o no. Si todas las oraciones subtemáticas se relacionan con la oración temática, entonces se afirma que el párrafo posee unidad.

      .py-4.py-md-5(titulo="Cohesión y coherencia" :icono="require('@/assets/curso/tema1/2.svg')")
        .row.p-4
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema1/7.png', alt='Texto que describa la imagen')

          .col-md-7
            p Un párrafo no es un simple conjunto de oraciones aisladas o inconexas, sino una unidad intermedia de sentido, conformada por oraciones interrelacionadas sintáctica y semánticamente mediante los distintos mecanismos de cohesión (la referencia, la sustitución, la elipsis, los conectores, la repetición y los signos de puntuación) y las diversas formas de coherencia (lineal, global o pragmática). La organización de la estructura interna del párrafo determina su coherencia. Cuando los párrafos son cohesivos y coherentes, establecen apropiados vínculos sintácticos y lógicos semánticos con los otros párrafos y con la totalidad del texto.

      .py-4.py-md-5(titulo="Extensión" :icono="require('@/assets/curso/tema1/3.svg')")
        .row.p-4
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema1/8.png', alt='Texto que describa la imagen')

          .col-md-7
            p No existen parámetros absolutos sobre la extensión de un párrafo. Ella depende básicamente de dos factores: el tipo de texto y la intención comunicativa del autor. Así pues, un texto escrito puede estar constituido por párrafos breves, medianos y extensos. Sin embargo, casi todos los manuales de estilo periodístico recomiendan la brevedad y fijan límites (un máximo de 20 líneas).


      .py-4.py-md-5(titulo="Párrafos funcionales" :icono="require('@/assets/curso/tema1/4.svg')")
        .row.p-4
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema1/9.png', alt='Texto que describa la imagen')

          .col-md-7
            p Dentro de la estructura formal del texto, cumplen un papel no tanto de desarrollo del contenido, sino más bien de mantener el tejido informativo organizado y relacionado entre sí. Suelen ser párrafos de corta extensión que ayudan a orientar la exposición del pensamiento, relacionando unos párrafos con otros para contribuir a la unidad, a la cohesión y a la coherencia del texto. Pueden ser de tres clases:

            ul.lista-ul
              li 
                i.lista-ul__vineta
                p.mb-0 #[b Párrafos de encabezamiento o introductorios:] su función es introducir o presentar el tema. Además, debe ubicar al lector y despertarle su interés. 

              li 
                i.lista-ul__vineta
                p.mb-0 #[b Párrafos de enlace o de transición:] relacionan la información de un párrafo con la de otro.

              li 
                i.lista-ul__vineta
                p.mb-0 #[b Párrafos de conclusión:] finalizan o resumen lo expuesto en el texto.

              li 
                i.lista-ul__vineta
                p.mb-0 #[b Párrafos informativos:] son aquellos que sustentan y desarrollan el contenido del texto.


      .py-4.py-md-5(titulo="Conectores" :icono="require('@/assets/curso/tema1/5.svg')")
        .row.p-4
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema1/10.png', alt='Texto que describa la imagen')

          .col-md-7
            p Los conectores son palabras o expresiones que permiten relacionar ideas dentro de un texto, estableciendo vínculos lógicos entre oraciones y párrafos para garantizar la coherencia y cohesión del mensaje.
        
      
    p.mt-4 A continuación, se presenta una clasificación de los principales tipos de conectores y su función dentro del párrafo, que se va a presentar en la siguiente tabla, con el fin de facilitar su identificación y uso adecuado en la escritura de textos claros, coherentes y bien estructurados.

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 1.
          span Tipos de conectores

        .tabla-a.color-acento-contenido 
          table
            thead(style="background-color: #F1FDD6")
              tr
                th Tipo de conector
                th Conectores principales
            tbody
              tr
                td Tipos de conectores
                td Porque, ya que, debido a que, pues, con motivo de, puesto que, a causa de esto, por lo cual.
              tr
                td Consecutivos
                td Por tanto, luego, así que, en consecuencia, luego que, por lo que, con que, por consiguiente, de ahí (que), así, entonces, así pues, por eso, por ello.
              tr
                td Condicionales
                td Si, siempre que, en caso de que, caso de que, con tal de que, a condición de que, cuando, supuesto que, dado que, supongamos.
              tr
                td Finales
                td Para que, con el fin de que, con el propósito de que, en orden a, con el objeto de, con tal objeto, a fin de, a estos efectos, en procura de, para eso (ello).
              tr
                td Concesivos
                td Aunque, aun cuando, a pesar de que, no bien, no obstante, por más que, pese a.
              tr
                td Modales
                td Como, como que, como si, según.
              tr
                td Comparativos
                td Como, así como, más... que, menos... que, igual que, tan... como, del modo que, de la manera que, lo mismo que.
              tr
                td Temporales
                td Cuando, mientras, no bien, apenas, antes que, después que, en cuanto.
              tr
                td Enumerativos
                td En primer lugar, en segundo lugar, en un segundo momento, segundo, luego, después, enseguida, a continuación, además, por otra parte, primero... segundo, etc.
              tr
                td Copulativos (Adición)
                td Y, e, ni, que, y también, no solo... sino también, asimismo, hay que añadir que.
              tr
                td Adversativos
                td Pero, aunque, sino, sin embargo, en oposición a, con todo, aun, contrariamente a, si bien, en contraste con, empero, a pesar de, pese a, en cambio, al contrario, mas.
              tr
                td Resumen
                td Finalmente, en suma, en conclusión, para terminar, para conclusión, en fin, por fin, por último, en definitiva, pues bien.
              
    p.mt-4 El párrafo es una unidad de pensamiento donde el autor expresa una determinada idea en el marco de cada párrafo. 

    .row.justify-content-center
      .col-lg-10
        .row.align-items-center.justify-content-center.p-4.bg-2.bg-r8
          .col-lg-2
            figure
              img(src="@/assets/curso/tema1/11.svg", alt="", style="width: 100px").m-auto
          .col-lg-8
            p.text-center
              b ¿Qué se debe tener en cuenta para la escritura correcta de un párrafo?
          .col-lg-2
            figure
              img(src="@/assets/curso/tema1/11.svg", alt="", style="width: 100px").m-auto
 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
