<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se presenta una síntesis de la temática estudiada en el componente formativo.

    .row.justify-content-center
      .col-lg-10.mb-5
        .fondo-color-sistema-h.p-4.py-5.borde-20
          figure
            img(src="@/assets/curso/temas/sintesis.svg", alt="Síntesis  sobre la optimización de procesos y reciclaje electrónico. Incluye: reingeniería para mejorar costo y calidad de productos electrónicos; reciclaje de dispositivos obsoletos para reducir el impacto ambiental; materiales tóxicos como plomo y cadmio, con riesgos para la salud; y gestión de residuos con acciones de reciclaje y reparación a cargo de fabricantes y entidades locales.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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
