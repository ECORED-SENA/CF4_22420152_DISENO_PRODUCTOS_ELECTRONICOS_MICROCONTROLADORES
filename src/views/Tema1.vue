<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Concepto de LCD
    
    .bloque-texto-g.bloque-texto-g--inverso.fondo-color-sistema-i.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/4.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los LCD, o #[b pantallas de cristal líquido] (del inglés #[em Liquid Crystal Display]), son visualizadores pasivos, es decir, no emiten luz como los visualizadores alfanuméricos de LED. Por esta razón, al intentar consultar la hora en un reloj que utiliza esta tecnología, a veces es necesario contar con una fuente de luz adicional.
    
    .row.align-items-center
      .col-md-auto(data-aos="fade-right")
        figure.mb-4.mb-md-0
          img.mx-auto(src="@/assets/curso/temas/5.svg",style="max-width: 85px;")
      .col(data-aos="fade-left")
        p.mb-0 El #[b LCD] consume muy poca energía en comparación con otros tipos de #[b visualizadores alfanuméricos] y es compatible con la tecnología CMOS, lo que permite su uso en dispositivos portátiles, como relojes de pulsera y calculadoras. Su vida útil ronda las 50,000 horas. Existen diferentes tipos de presentaciones, desde visualizadores comunes de 7 segmentos hasta matrices de puntos, todos ellos de un diseño muy delgado y fácil de configurar.
    
    .titulo-decorativo.my-5
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Funcionamiento de los LCD
    
    .row
      .col-lg-8
        .fondo-color-sistema-j.borde-16.p-4.mb-4
          p.mb-0 El LCD modifica la luz que lo incide; dependiendo de la polarización aplicada, reflejará o absorberá mayor o menor cantidad de luz. Cuando un segmento recibe la tensión de polarización adecuada, no reflejará la luz y se mostrará en el dispositivo como un segmento oscuro, algo común en calculadoras y relojes.
        p.mb-4 El líquido de un LCD se encuentra entre dos placas de vidrio paralelas, separadas por unos pocos micrones. Estas placas contienen electrodos especiales que definen los símbolos y caracteres que se visualizarán. La superficie del vidrio en contacto con el líquido se trata para alinear los cristales en dirección paralela a las placas, permitiendo el paso de la luz sin alteración.

        .row.align-items-center
          .col-md-auto
            figure.mb-4.mb-md-0
              img.mx-auto(src="@/assets/curso/temas/7.svg",style="max-width: 85px;")
          .col
            p.mb-0 Al aplicar la polarización adecuada entre los electrodos, se genera un campo eléctrico perpendicular a las placas, lo que provoca que las moléculas del líquido se orienten en la dirección de este campo, creando una zona oscura sobre un fondo claro (contraste positivo). Así se presenta la información deseada.
      .col-lg-4.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/6.png",style="max-width: 400px;")
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
