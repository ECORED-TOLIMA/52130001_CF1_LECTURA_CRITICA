<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 5
      h1 La gramática española

    .row.align-items-center
      .col-lg-9
        p Por gramática se entiende el conjunto de fundamentos fonéticos (sonidos del habla), morfológicos (estructura de las palabras) y ortográficos (uso correcto de la escritura) en sus niveles oral y escrito.

        .row.bg-7.p-4
          .col-12
            p #[b Fonología y fonética:] la voz humana es un sonido. Las cuerdas vocales desempeñan un papel preponderante. Su vibración produce sonidos, que al llegar a la cavidad bucal se modifican y se transforman en los fonemas propios del idioma que se habla. Los fonemas son los sonidos significativos de una lengua: aquellos que esta utiliza para construir las palabras.

            p #[b Fonemas y formas de articulación:] los fonemas son los sonidos mínimos y distintivos de una lengua que permiten diferenciar el significado de las palabras. Las formas de articulación se refieren a la manera en que los órganos del habla producen estos sonidos según su posición y movimiento.

      .col-lg-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema5/1.png', alt='', style="width: 292px").m-auto


    .row.bg-6
      .col-12
        .p-5
          .row.justify-content-center
            .col-10
              .titulo-sexto.color-acento-contenido.mb-3.mt-4
                h5 Figura 3.
                span Clasificación de las vocales según su apertura
              figure
                img.d-none.d-md-block.m-auto(
                  src='@/assets/curso/tema5/2.svg',
                  alt='Figura 3. Clasificación de las vocales según su apertura. Esquema que muestra la clasificación de las vocales: “i” y “u” como vocales cerradas; “e” y “o” como vocales semicerradas o semiabiertas; y “a” como vocal abierta, indicando su grado de apertura en la articulación.'
                )
                img.d-block.d-md-none.m-auto(
                  src='@/assets/curso/tema5/2m.svg',
                  alt='Figura 3. Clasificación de las vocales según su apertura. Esquema que muestra la clasificación de las vocales: “i” y “u” como vocales cerradas; “e” y “o” como vocales semicerradas o semiabiertas; y “a” como vocal abierta, indicando su grado de apertura en la articulación.'
                )

          p.mt-4 A continuación, se presenta el alfabeto castellano, en el que se relacionan las letras en mayúscula y minúscula junto con su denominación o sonido correspondiente, con el fin de facilitar su reconocimiento y uso correcto en los procesos de lectura y escritura.


    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 2.
          span El alfabeto castellano

        .tabla-a.color-acento-contenido 
          table
            thead(style="background-color: #F1FDD6")
              tr
                th Mayúsculas
                th Minúsculas
                th Sonido
            tbody
              tr
                td A
                td a
                td 
              tr
                td B
                td b
                td (be)
              tr
                td C
                td c
                td (ce)
              tr
                td D
                td d
                td (de)
              tr
                td E
                td e
                td 
              tr
                td F
                td f
                td (efe)
              tr
                td G
                td g
                td (ge)
              tr
                td H
                td h
                td (hache)
              tr
                td I
                td i
                td 
              tr
                td J
                td j
                td (jota)
              tr
                td K
                td k
                td (ka)
              tr
                td L
                td l
                td (ele)
              tr
                td M
                td m
                td (eme)
              tr
                td N
                td n
                td (ene)
              tr
                td Ñ
                td ñ
                td (eñe)
              tr
                td O
                td o
                td 
              tr
                td P
                td p
                td (pe)
              tr
                td Q
                td q
                td (cu)
              tr
                td R
                td r
                td (ere)
              tr
                td R
                td r
                td (erre)
              tr
                td S
                td s
                td (ese)
              tr
                td T
                td t
                td (te)
              tr
                td U
                td u
                td 
              tr
                td V
                td v
                td (ve)
              tr
                td W
                td w
                td doble (ve)
              tr
                td X
                td x
                td (equis)
              tr
                td Y
                td y
                td (ye)
              tr
                td Z
                td z
                td (zeta)


    p.mt-4 En la actualidad se han excluido definitivamente del abecedario los signos ch y ll, ya que no son letras, sino dígrafos; es decir, conjuntos de dos letras o grafemas que representan un solo fonema. En consecuencia, el abecedario del español queda reducido a veintisiete letras: a, b, c, d, e, f, g, h, i, j, k, l, m, n, ñ, o, p, q, r, s, t, u, v, w, x, y, z.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Ahora bien, la eliminación de los dígrafos ch y ll del inventario de letras del abecedario no supone, de ningún modo, que desaparezcan del sistema gráfico del español. Por el contrario, estos signos dobles seguirán utilizándose como hasta ahora en la escritura de las palabras españolas: el dígrafo ch en representación del fonema /ch/ (chico [chíko]) y el dígrafo ll en representación del fonema /ll/ o, para hablantes yeístas, del fonema /y/ (calle [kálle, káye]). La novedad consiste, simplemente, en que dejan de contarse entre las letras del abecedario.

    .row.justify-content-center.mt-4 
      .col-lg-10
        .row.align-items-center
          .col-lg-8
            p En relación con los grupos vocálicos, el diptongo es la unión inseparable de dos vocales: una abierta + una cerrada; una cerrada + una abierta, o dos cerradas. De este modo, se presentan los siguientes casos:

            p.bg-8.p-4.bg-r8 
              b ai – au – ei – eu – oi – ou – ia – ua – ie – ue – io – uo – ui – ue; ay – ey – oy – iy

          .col-lg-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema5/4.svg', alt='', style="width: 290px").m-auto

    p.mt-4 A continuación, se presentan ejemplos de los principales grupos vocálicos (diptongo, hiato y triptongo), con el fin de facilitar su identificación y correcta segmentación silábica.

    .row.mt-4
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.bg-18.p-4.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure
                img(src='@/assets/curso/tema5/5.svg', style="width: 357px").m-auto

          p.text-center
            b Diptongo
          p.text-center Es la unión inseparable de dos vocales que se pronuncian en una misma sílaba. Puede formarse por la combinación de una vocal abierta y una vocal cerrada, una vocal cerrada y una vocal abierta, o por la unión de dos vocales cerradas. 

          p.text-center.mb-0 Ejemplos:
          p.text-center.mb-0 Ley — ley
          p.text-center.mb-0 Hoy — hoy
          p.text-center.mb-0 Cuidado — cui – da – do
          p.text-center.mb-0 Tierra — tie – rra

      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.bg-18.p-4.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure
                img(src='@/assets/curso/tema5/6.svg', style="width: 357px").m-auto

          p.text-center
            b Hiato
          p.text-center Se presenta cuando dos vocales contiguas se separan en sílabas diferentes durante la pronunciación. Esto ocurre, principalmente, cuando se unen dos vocales abiertas o cuando una vocal cerrada lleva tilde, lo que impide la formación del diptongo. 

          p.text-center.mb-0 Ejemplos: 
          p.text-center.mb-0 Maestro — ma – es – tro
          p.text-center.mb-0 Croar — cro – ar
          p.text-center.mb-0 Veas — ve – as
          p.text-center.mb-0 Petróleo — pe – tró – le – o

      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.bg-18.p-4.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure
                img(src='@/assets/curso/tema5/7.svg', style="width: 357px").m-auto

          p.text-center
            b Triptongo
          p.text-center.mb-0 Es la unión inseparable de tres vocales que se pronuncian en una misma sílaba. La única disposición posible para su formación responde al esquema vocal cerrada + vocal abierta (o semiabierta) + vocal cerrada. Así se presentan las siguientes combinaciones:
          p.text-center iai – iei – ioi – uau – uou – iau – ieu – iou – uai – uei – uoi

          p.text-center.mb-0 Ejemplos: 
          p.text-center.mb-0 Confiáis — con – fiáis
          p.text-center.mb-0 Guau — guau
          p.text-center.mb-0 Estudiéis — es – tu – diéis
          p.text-center.mb-0 Paraguay — Pa – ra – guay


    .row.align-items-center.mt-4
      .col-lg-9
        p #[b Grupos consonánticos:] son los formados por la unión inseparable de dos consonantes. La primera de este grupo debe ser, necesariamente, alguna de las consonantes siguientes: b, c, d, f, g, p, t, llamadas consonantes oclusivas. La segunda debe ser alguna de estas dos: l, r, llamadas consonantes líquidas. De esta combinación se forman los siguientes grupos consonánticos: bl, br, cr, cl, dr, fl, fr, gl, gr, pl, pr, tl, tr.

        .row.align-items-center
          .col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema5/8.svg', alt='', style="width: 80px").m-auto
          .col-lg-10
            p #[b La sílaba:] es el sonido o grupo de sonidos que puede pronunciarse en una sola emisión de voz. Según esta noción, un sonido vocálico o vocal es aquel que puede formar sílaba por sí mismo. Un sonido consonántico o consonante es aquel que requiere apoyarse en una vocal para formar sílaba.

      .col-lg-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema5/9.png', alt='', style="width: 290px").m-auto


    p.mt-4 La composición de una sílaba se presenta según alguna de las siguientes posibilidades:

    .row.justify-content-center
      .col-lg-10
        .row.mt-4.bg-5.bg-r8.p-3
          .col-sm-6.col-lg-3.mb-4.mb-lg-0
            .tarjeta--boton.bg-2.p-4.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure
                    img(src='@/assets/curso/tema5/10.svg', style="width: 80px").m-auto
              br
              p.text-center
                b Vocal


          .col-sm-6.col-lg-3.mb-4.mb-lg-0
            .tarjeta--boton.bg-2.p-4.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure
                    img(src='@/assets/curso/tema5/11.svg', style="width: 80px").m-auto

              p.text-center
                b Vocal + consonante(o grupo consonántico)


          .col-sm-6.col-lg-3.mb-4.mb-lg-0
            .tarjeta--boton.bg-2.p-4.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure
                    img(src='@/assets/curso/tema5/12.svg', style="width: 80px").m-auto

              p.text-center
                b Consonante (o grupo consonántico) + vocal (grupo vocálico)

          .col-sm-6.col-lg-3.mb-4.mb-lg-0
            .tarjeta--boton.bg-2.p-4.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure
                    img(src='@/assets/curso/tema5/13.svg', style="width: 80px").m-auto

              p.text-center
                b Consonante (o g. c.) + vocal (o g. v.) + consonantes

    p.mt-4 A partir del reconocimiento de cómo se organizan las letras, los sonidos y sus combinaciones dentro del idioma, surge la necesidad de comprender el papel que cumple el alfabeto en la correcta escritura y pronunciación de las palabras. En este sentido, resulta pertinente reflexionar:

    .row.justify-content-center
      .col-lg-10
        .row.align-items-center.justify-content-center.p-4.bg-2.bg-r8
          .col-lg-2
            figure
              img(src="@/assets/curso/tema1/11.svg", alt="", style="width: 100px").m-auto
          .col-lg-8
            p.text-center
              b ¿Por qué es importante aprender sobre el alfabeto y su estructura?
          .col-lg-2
            figure
              img(src="@/assets/curso/tema1/11.svg", alt="", style="width: 100px").m-auto

</template>

<script>
export default {
  name: 'Tema5',
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
