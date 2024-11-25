<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Optimización de procesos y reciclaje electrónico',
      titulo: 'Cuestionario',
      introduccion:
        'Comprender los conceptos fundamentales relacionados con la optimización de procesos y el reciclaje electrónico, incluyendo la reingeniería, la gestión de residuos, los materiales tóxicos, y las prácticas de sostenibilidad.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es uno de los objetivos de la reingeniería en procesos electrónicos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mejorar la disponibilidad y reducir el coste.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aumentar la contaminación y los residuos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir el impacto ambiental.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Garantizar que no haya errores en los procesos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué proceso está asociado con la reutilización de dispositivos obsoletos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reciclaje de materiales tóxicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reingeniería de productos electrónicos.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Reciclaje electrónico.', esCorrecta: true },
            {
              id: 'd',
              texto: 'Gestión de residuos peligrosos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué sustancia se considera material tóxico en el contexto de reciclaje electrónico?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Cadmio.', esCorrecta: true },
            { id: 'b', texto: 'Agua.', esCorrecta: false },
            { id: 'c', texto: 'Papel reciclado.', esCorrecta: false },
            { id: 'd', texto: 'Oxígeno.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Cuál es uno de los beneficios del reciclaje electrónico?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Aumento de residuos.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Aumento de los productos obsoletos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Mejorar las propiedades mecánicas y resistencia a la corrosión.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Generar más empleo en industrias contaminantes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué material tóxico tiene un impacto negativo en la salud y el ecosistema?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Plomo.', esCorrecta: true },
            { id: 'b', texto: 'Hierro.', esCorrecta: false },
            { id: 'c', texto: 'Silicio.', esCorrecta: false },
            { id: 'd', texto: 'Carbono.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué tipo de residuos manejan principalmente los fabricantes y entidades locales?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Residuos electrónicos únicamente.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Residuos de embalaje.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Materiales reciclables solamente.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Basura y desperdicios.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es una acción recomendada para la gestión de residuos electrónicos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Lanzar los residuos al vertedero.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Recoger los residuos de forma segura y donar equipos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ignorar el proceso de reciclaje.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo reutilizar dispositivos obsoletos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué se busca principalmente en la reingeniería de productos electrónicos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Incrementar los costes.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Mejorar la productividad y reutilización.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Disminuir la calidad de los productos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumentar el impacto negativo en el ambiente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'Los fabricantes son responsables de los residuos que generan.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: true },
            { id: 'b', texto: 'Falso.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: 'El reciclaje electrónico no afecta al medio ambiente.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: false },
            { id: 'b', texto: 'Falso.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Cuál de los siguientes elementos NO es considerado un material tóxico en el reciclaje electrónico?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Plomo.', esCorrecta: false },
            { id: 'b', texto: 'Oxígeno.', esCorrecta: true },
            { id: 'c', texto: 'Mercurio.', esCorrecta: false },
            { id: 'd', texto: 'Cadmio.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué objetivo tiene la gestión de residuos en el contexto de reciclaje electrónico?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reducir el impacto ambiental y asegurar la recolección segura.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Incrementar la producción de residuos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir la cantidad de dispositivos obsoletos en uso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Aumentar el uso de materiales reciclables en la industria.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Cuál es un beneficio de la reingeniería en productos electrónicos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Mayor consumo energético.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Facilitar el mantenimiento y la reutilización.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Mayor gasto en recursos no renovables.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Disminuir la cantidad de productos en el mercado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Los materiales tóxicos en los residuos electrónicos no tienen efectos negativos en el ecosistema.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: false },
            { id: 'b', texto: 'Falso.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'La reutilización de dispositivos obsoletos forma parte del reciclaje electrónico.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: true },
            { id: 'b', texto: 'Falso.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
