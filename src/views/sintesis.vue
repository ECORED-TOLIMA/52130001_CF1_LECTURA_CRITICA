<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo integra los fundamentos de la escritura efectiva, así como las normas ortográficas vigentes. Aborda la estructura de párrafos, el uso de conectores y tipos textuales; asimismo, desarrolla la gramática española, el código ortográfico y los signos de puntuación. De esta manera, se fortalecen las competencias para producir documentos de calidad en contextos académicos y laborales, contribuyendo al desarrollo de la lectura crítica mediante la integración de análisis, reflexión y producción escrita. 
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt=" En la síntesis se describe la estructura temática del componente formativo sobre las normas generales de redacción de textos, integrando las características del párrafo y su estructura, los tipos de textos como el resumen y el ensayo, las características de la buena redacción (claridad, concisión y sencillez), la gramática española y el código ortográfico, así como los signos de puntuación y las clases de palabras, con el fin de fortalecer las competencias comunicativas para la producción de documentos efectivos. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
