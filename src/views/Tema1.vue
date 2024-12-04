<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-3(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Concepto de LCD
    
    .fondo-personalizado-1.bottom-1.f2
      .fondo-personalizado-1__contenido.pt-4
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
        
        .titulo-decorativo.my-5(data-aos="fade-right")
          .cont-figura
            img(src="@/assets/curso/temas/img-tit-dec.svg")
          .cont-text 
            h3 Funcionamiento de los LCD
        
        .row
          .col-lg-8(data-aos="fade-right")
            .fondo-color-sistema-j.borde-16.p-4.mb-4
              p.mb-0 El LCD modifica la luz que lo incide; dependiendo de la polarización aplicada, reflejará o absorberá mayor o menor cantidad de luz. Cuando un segmento recibe la tensión de polarización adecuada, no reflejará la luz y se mostrará en el dispositivo como un segmento oscuro, algo común en calculadoras y relojes.
            p.mb-4 El líquido de un LCD se encuentra entre dos placas de vidrio paralelas, separadas por unos pocos micrones. Estas placas contienen electrodos especiales que definen los símbolos y caracteres que se visualizarán. La superficie del vidrio en contacto con el líquido se trata para alinear los cristales en dirección paralela a las placas, permitiendo el paso de la luz sin alteración.

            .row.align-items-center
              .col-md-auto
                figure.mb-4.mb-md-0
                  img.mx-auto(src="@/assets/curso/temas/7.svg",style="max-width: 85px;")
              .col
                p.mb-0 Al aplicar la polarización adecuada entre los electrodos, se genera un campo eléctrico perpendicular a las placas, lo que provoca que las moléculas del líquido se orienten en la dirección de este campo, creando una zona oscura sobre un fondo claro (contraste positivo). Así se presenta la información deseada.
          .col-lg-4.order-first.order-lg-last(data-aos="fade-left")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/6.png",style="max-width: 400px;")

    .titulo-decorativo.my-5(data-aos="fade-left")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Modos de visualización
    
    p.mb-5(data-aos="fade-up") Las pantallas de cristal líquido (LCD) son ampliamente utilizadas en dispositivos electrónicos por su bajo consumo y durabilidad. Su versatilidad permite adaptarse a diversas condiciones de luz mediante los modos reflector, transmisor y #[em transflector], optimizando el rendimiento tanto en ambientes naturales como artificiales, lo que las convierte en una opción ideal para múltiples aplicaciones:

    TabsB.color-acento-contenido.tabs-p-1(data-aos="zoom-in-out")
      .fondo-color-sistema-p.py-5.px-4.px-lg-5(titulo="Modo reflector" :icono="require('@/assets/curso/temas/9.svg')")
        .row.justify-content-center
          .col-lg-8
            h4.mb-4 Modo reflector
            p.mb-0 Utiliza una lámina reflectora que redirige la luz ambiente a través del visualizador. Ideal para espacios con buena iluminación natural y permite un alto contraste sin requerir una fuente de energía adicional, siendo funcional con baterías.
          .col-lg-3.order-first.order-lg-last
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/8.svg",style="max-width: 215px;")
      .fondo-color-sistema-p.py-5.px-4.px-lg-5(titulo="Modo transmisor" :icono="require('@/assets/curso/temas/11.svg')")
        .row.justify-content-center
          .col-lg-8
            h4.mb-4 Modo transmisor
            p.mb-0 Iluminado desde atrás mediante una fuente de luz artificial, es común en pantallas de visualización negativa, donde los segmentos claros aparecen sobre un fondo oscuro.
          .col-lg-3.order-first.order-lg-last
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/10.svg",style="max-width: 215px;")
      .fondo-color-sistema-p.py-5.px-4.px-lg-5(titulo="Modo transflector" :icono="require('@/assets/curso/temas/13.svg')")
        .row.justify-content-center
          .col-lg-8
            h4.mb-4 Modo transflector
            p.mb-0 Combina las características de los modos reflector y transmisor, permitiendo la visualización en diversas condiciones de iluminación. Utiliza tanto la luz ambiente como la luz artificial de fondo, adecuado para uso nocturno.
          .col-lg-3.order-first.order-lg-last
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/12.svg",style="max-width: 215px;")
    
    .titulo-decorativo.my-5(data-aos="fade-down")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Tipos de LCD
    
    .row.align-items-center.mb-5
      .col(data-aos="fade-right")
        p Las pantallas de cristal líquido (LCD) son ampliamente utilizadas en dispositivos electrónicos por su bajo consumo y durabilidad. Su versatilidad permite adaptarse a diversas condiciones de luz mediante los modos reflector, transmisor y transflector, optimizando el rendimiento tanto en ambientes naturales como artificiales, lo que las convierte en una opción ideal para múltiples aplicaciones: 
      .col-md-auto.order-first.order-md-last(data-aos="fade-left")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/14.svg",style="max-width: 84px;")
    
    .fondo-personalizado-1.bottom-1.top-1.f2
      .fondo-personalizado-1__contenido
        .row.justify-content-center
          .col-lg-5.col-md-10.mb-4(data-aos="fade-right")
            .sombra-p-1.borde-14.h-100
              figure
                img.mx-auto(src="@/assets/curso/temas/15.png")
              .text-center.p-4
                p.mb-4.fondo-color-sistema-l.d-inline-flex.fw-bold.borde-18.py-1.px-3 LCD de matriz pasiva

                p.mb-0 También conocidas como pantallas DSTN, fueron de las primeras en ordenadores portátiles y dispositivos móviles. Son planas y de bajo consumo comparado con televisores CRT, aunque presentan menor calidad de color y mayor costo. Utilizan tecnologías STN y DSTN para mejorar color y no requieren carga constante.
          .col-lg-5.col-md-10.mb-4(data-aos="fade-left")
            .sombra-p-1.borde-14.h-100
              figure
                img.mx-auto(src="@/assets/curso/temas/16.png")
              .text-center.p-4
                p.mb-4.fondo-color-sistema-l.d-inline-flex.fw-bold.borde-18.py-1.px-3 LCD de matriz activa
                p.mb-0 Denominadas pantallas TFT #[em (Thin Film Transistor)], cada píxel tiene su propio transistor, lo que mejora el ángulo de visión, la pureza del color y la velocidad de respuesta. Usadas en dispositivos de alta resolución como monitores, permiten mayor brillo y tamaño que las pantallas de matriz pasiva.
        
        .titulo-decorativo.my-5(data-aos="fade-up")
          .cont-figura
            img(src="@/assets/curso/temas/img-tit-dec.svg")
          .cont-text 
            h3 Aplicaciones
        
        .row
          .col-lg-8(data-aos="fade-right")
            p.mb-4 Las LCD tienen aplicaciones infinitas, abarcando áreas como la informática, comunicaciones, telefonía, instrumentación, robótica, industria automotriz y diseño de equipos industriales.
            figure
              img.mx-auto(src="@/assets/curso/temas/17.png",style="max-width: 820px;")
          .col-lg-4.order-first.order-lg-last(data-aos="fade-left")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/18.png",style="max-width: 400px;")
      
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
