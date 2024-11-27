<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Reciclaje electrónico #[em (e-waste)]
    
    .fondo-personalizado-1.f2
      .fondo-personalizado-1__contenido.pt-5
        .row
          .col-lg-8(data-aos="fade-right")
            p.mb-0 Reciclar implica aprovechar los residuos de aparatos eléctricos y electrónicos dañados, obsoletos o en desuso, evitando así su impacto ambiental. El término "#[em e-waste]" abarca dispositivos eléctricos que incluyen computadoras, teléfonos móviles y electrodomésticos.
          .col-lg-4.order-first.order-lg-last(data-aos="fade-left")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/35.png",style="max-width: 400px;")
        
        .titulo-decorativo.my-5(data-aos="fade-up")
          .cont-figura
            img(src="@/assets/curso/temas/img-tit-dec.svg")
          .cont-text 
            h3 Materiales nocivos al medio ambiente
        
        .row.align-items-center
          .col(data-aos="fade-right")
            p.mb-0 Los dispositivos electrónicos contienen sustancias tóxicas como #[b plomo, cadmio, cromo, mercurio, selenio y arsénico], que son peligrosas para la salud y el ecosistema al ser liberadas en el ambiente.
          .col-md-auto.order-first.order-md-last(data-aos="fade-left")
            figure.mb-4.mb-md-0
              img.mx-auto(src="@/assets/curso/temas/36.svg",style="max-width: 84px;")
        
        .titulo-decorativo.my-5(data-aos="fade-up")
          .cont-figura
            img(src="@/assets/curso/temas/img-tit-dec.svg")
          .cont-text 
            h3 ¿Qué hacer con nuestros residuos electrónicos?
        
        .row
          .col-lg-8(data-aos="fade-right")
            p.mb-0 El manejo de estos residuos, según la Directiva Europea 2003/108/CE, es responsabilidad de fabricantes y entidades locales, estableciendo también medidas de prevención para evitar sustancias peligrosas en el diseño y fabricación de nuevos aparatos.
          .col-lg-4.order-first.order-lg-last(data-aos="fade-left")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/37.png",style="max-width: 400px;")
    
    .titulo-decorativo.my-5(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Programas de recogida
    
    .row.align-items-center.mb-5
      .col(data-aos="fade-right")
        p.mb-0 Existen programas en los que los usuarios pagan una tasa de reciclaje al comprar el producto, mientras que en otros es la industria quien asume los costos. Algunas recomendaciones incluyen:
      .col-md-auto.order-first.order-md-last(data-aos="fade-left")
        figure.mb-4.mb-md-0
          img.mx-auto(src="@/assets/curso/temas/38.svg",style="max-width: 84px;")
    
    .fondo-personalizado-1.size-full.med.pos-bottom.f3
      .fondo-personalizado-1__contenido.pb-5
        .row.justify-content-center.pb-4(data-aos="zoom-in-out")
          .col-lg-8
            .fondo-color-sistema-n.borde-21.p-3.sombra-p-2.mb-3
              .row.align-items-center
                .col-md-auto
                  figure.mb-4.mb-lg-0
                    img.mx-auto(src="@/assets/curso/temas/39.svg",style="max-width: 97px;")
                .col
                  p.mb-0 No desechar dispositivos electrónicos con basura común.
            .fondo-color-sistema-n.borde-21.p-3.sombra-p-2.mb-3
              .row.align-items-center
                .col-md-auto
                  figure.mb-4.mb-lg-0
                    img.mx-auto(src="@/assets/curso/temas/40.svg",style="max-width: 97px;")
                .col
                  p.mb-0 Donar dispositivos a personas u organizaciones que los necesiten.
            .fondo-color-sistema-n.borde-21.p-3.sombra-p-2.mb-3
              .row.align-items-center
                .col-md-auto
                  figure.mb-4.mb-lg-0
                    img.mx-auto(src="@/assets/curso/temas/41.svg",style="max-width: 97px;")
                .col
                  p.mb-0 Reparar o reutilizar piezas de los dispositivos.
            .fondo-color-sistema-n.borde-21.p-3.sombra-p-2.mb-3
              .row.align-items-center
                .col-md-auto
                  figure.mb-4.mb-lg-0
                    img.mx-auto(src="@/assets/curso/temas/42.svg",style="max-width: 97px;")
                .col
                  p.mb-0 Invertir en plantas de reciclaje de desechos electrónicos.
            .fondo-color-sistema-n.borde-21.p-3.sombra-p-2.mb-3
              .row.align-items-center
                .col-md-auto
                  figure.mb-4.mb-lg-0
                    img.mx-auto(src="@/assets/curso/temas/43.svg",style="max-width: 97px;")
                .col
                  p.mb-0 Reciclar productos no reutilizables como lámparas de bajo consumo.
    



</template>

<script>
export default {
  name: 'Tema3',
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
