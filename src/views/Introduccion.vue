<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.pb-3.pb-md-3
  
    .titulo-principal.color-acento-contenido.mb-3(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .fondo-personalizado-1.f1
      .fondo-personalizado-1__contenido.pb-5.pt-4
        p.mb-4(data-aos="fade-right") La reingeniería es una estrategia que busca rediseñar radicalmente los procesos y productos con el fin de mejorar aspectos clave como la eficiencia, calidad y adaptabilidad a nuevas tecnologías. Este enfoque permite modernizar sistemas y facilita la migración de estructuras obsoletas a modelos más actuales, optimizando así la productividad y la vida útil de los productos.

        .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/3.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En el ámbito de los dispositivos electrónicos, el reciclaje o #[em e-waste] se convierte en una necesidad fundamental. Estos dispositivos, cuando ya no cumplen su función, pueden ser aprovechados para la reutilización de materiales o componentes. Este proceso reduce la contaminación ambiental y minimiza los riesgos asociados a los residuos tecnológicos.

        .row.align-items-center.mb-3
          .col-md-auto(data-aos="fade-right")
            figure.mb-4.mb-md-0
              img.mx-auto(src="@/assets/curso/temas/2.svg",style="max-width: 77px;")
          .col(data-aos="fade-left")
            p.mb-0 Finalmente, debido a los materiales tóxicos presentes en los dispositivos, como plomo y cadmio, es esencial que fabricantes y autoridades establezcan programas de manejo seguro. Tales programas incluyen desde la recolección hasta la eliminación adecuada de estos residuos, promoviendo una mayor responsabilidad ambiental y asegurando un entorno más saludable.
    
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
