<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.align-items-center.justify-content-center
      .col-lg-2
        figure
          img(src="@/assets/curso/intro/1.svg", alt="", style="width: 188px").m-auto
      .col-lg-10
        p.mt-4 La escritura de párrafos y textos es una competencia esencial para el desarrollo de la lectura crítica, ya que permite organizar ideas, expresar opiniones y comunicar información de forma clara y comprensible. A través de la escritura se fortalecen procesos como la interpretación, el análisis y la reflexión frente a distintos tipos de textos. Comprender cómo se construyen los mensajes escritos favorece la producción de textos con sentido lógico y coherente, fundamentales en contextos académicos, laborales y sociales.

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center.justify-content-center.p-4.bg-2.bg-r8
          .col-lg-8
            p La escritura de párrafos y textos es una competencia esencial para el desarrollo de la lectura crítica, ya que permite organizar ideas, expresar opiniones y comunicar información de forma clara y comprensible. A través de la escritura se fortalecen procesos como la interpretación, el análisis y la reflexión frente a distintos tipos de textos. Comprender cómo se construyen los mensajes escritos favorece la producción de textos con sentido lógico y coherente, fundamentales en contextos académicos, laborales y sociales.
          .col-lg-4
            figure
              img(src="@/assets/curso/intro/2.svg", alt="", style="width: 280px").m-auto
              
    .bg-1
      .col-12 
        .p-5 
          p.mt-4 Desde una aproximación gradual y práctica, se abordan aspectos generales de la escritura que facilitan la comprensión y producción de textos sencillos. Este enfoque permite desarrollar la capacidad de expresar ideas con claridad y sentido, fortaleciendo el proceso de lectura crítica.

          p Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:        

          .row.justify-content-center.align-items-center.mt-4           
            .col-lg-12
              figure
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)




</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
