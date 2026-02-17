<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Estructura de textos

    .row.justify-content-center
      figure
        img(src='@/assets/curso/tema2/1.png', alt='').m-auto

    p.mt-4 Los textos pueden presentar diversas estructuras según su propósito comunicativo; un mismo texto no necesariamente responde a una única estructura, ya que puede integrar características de dos o más, lo que permite una organización flexible y coherente de la información:

    SlyderA.bg-3A.p-4.bg-r8(tipo="b")
      .row.justify-content-center.align-items-center.my-lg-4
        .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
          p
            b Estructura deductiva

          p La estructura deductiva se distingue porque, al principio del texto, se plantea el tema sobre el cual este gira, como una presentación de lo que más adelante se va desarrollando mediante ideas secundarias o de apoyo.

        .col-md-5
          figure
            img(src='@/assets/curso/tema2/2.png', alt='')

      .row.justify-content-center.align-items-center.my-lg-4
        .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
          p
            b Estructura inductiva

          p  La estructura inductiva es aquella que comienza con un ejemplo o con datos precisos de lo que, a lo largo del texto, se va a tratar; la idea principal aparece posteriormente.

        .col-md-5
          figure
            img(src='@/assets/curso/tema2/3.png', alt='')


      .row.justify-content-center.align-items-center.my-lg-4
        .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
          p
            b Estructura enumerativa

          p  La estructura enumerativa es, sin duda la más fácil de identificar, pues con un simple vistazo al texto se observa que la disposición de ciertos elementos está expuesta a modo de enumeración, como si se tratara de una lista de la compra.

        .col-md-5
          figure
            img(src='@/assets/curso/tema2/4.png', alt='')


      .row.justify-content-center.align-items-center.my-lg-4
        .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
          p
            b Estructura paralelística

          p  Un texto presenta una estructura interna paralelística cuando recuerda las entradas que puede tener un diccionario o cualquier enciclopedia; es decir, en el encabezado del texto se propone un tema, una idea o un concepto y, a continuación, se amplía toda esa información en diferentes filas.

        .col-md-5
          figure
            img(src='@/assets/curso/tema2/5.png', alt='')


      .row.justify-content-center.align-items-center.my-lg-4
        .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
          p
            b Estructura descriptiva

          p  La estructura descriptiva, como bien lo indica su nombre, describe objetos, ideas o personas utilizando abundantes adjetivos y datos específicos, todo aquello que sea necesario para imaginar con la mayor exactitud posible la apariencia física del elemento descrito.

        .col-md-5
          figure
            img(src='@/assets/curso/tema2/6.png', alt='')


      .row.justify-content-center.align-items-center.my-lg-4
        .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
          p
            b Estructura temporal o secuenciada

          p  La estructura temporal, también llamada secuenciada, consiste en presentar los datos del texto con una gran abundancia de conectores y expresiones temporales (primero, segundo, en primer lugar, en segundo lugar, por último, para empezar, después, luego, antes, finalmente, al final, en conclusión, en el futuro, con anterioridad), con el objetivo de situar temporalmente al lector.

          p Otro recurso utilizado en este tipo de estructura interna es el uso de títulos, epígrafes o subtítulos para distinguir claramente las partes y la importancia de cada una en relación con el texto.

        .col-md-5
          figure
            img(src='@/assets/curso/tema2/7.png', alt='')

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center.justify-content-center.p-4.bg-2.bg-r8
          .col-lg-2
            figure
              img(src="@/assets/curso/tema1/11.svg", alt="", style="width: 100px").m-auto
          .col-lg-8
            p.text-center
              b Pregunta: ¿Por qué es importante conocer la estructura de los textos?
          .col-lg-2
            figure
              img(src="@/assets/curso/tema1/11.svg", alt="", style="width: 100px").m-auto


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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
