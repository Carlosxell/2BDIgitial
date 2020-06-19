<template>
  <section class="c-boxWeather">
    <header class="c-boxWeather_header">
      <h2 class="c-boxWeather_title">{{ propInfo.name }}, {{ propInfo.sys.country }}</h2>
      <p class="c-boxWeather_subTitle">{{ date }}</p>
    </header>

    <figure class="c-boxWeather_imgBox">
      <img :alt="propInfo.weather['0'].description"
           class="c-boxWeather_img"
           height="200"
           :src="`http://openweathermap.org/img/wn/${propInfo.weather['0'].icon}@4x.png`"
           width="200" />
    </figure>

    <div class="c-boxWeather_body">
      <div class="c-boxWeather_temp">
        <p class="c-boxWeather_temp_text">
          <small>Mínima</small> <br /> {{ getTemp(propInfo.main.temp_min) }} ºC
        </p>
      </div>

      <div class="c-boxWeather_temp--lg">
        <p class="c-boxWeather_temp_text">
          {{ getTemp(propInfo.main.temp) }} ºC
        </p>
      </div>

      <div class="c-boxWeather_temp">
        <p class="c-boxWeather_temp_text">
          <small>Máxima</small> <br /> {{ getTemp(propInfo.main.temp_max) }} ºC
        </p>
      </div>
    </div>

    <footer class="c-boxWeather_footer">
      <ul class="c-boxWeather_footer_list">
        <li class="c-boxWeather_footer_list_item">
          <span class="">Umidade</span>
          <span class="">{{ propInfo.main.humidity }}%</span>
        </li>

        <li class="c-boxWeather_footer_list_item">
          <span class="">Nascer do Sol</span>
          <span class="">{{ getHour(propInfo.sys.sunrise) }}</span>
        </li>

        <li class="c-boxWeather_footer_list_item">
          <span class="">Pôr do Sol</span>
          <span class="">{{ getHour(propInfo.sys.sunset) }}</span>
        </li>
      </ul>
    </footer>
  </section>
</template>

<script>
  import { format } from 'date-fns';
  import { ptBR } from 'date-fns/locale';

  export default {
    name: 'BoxWeather',
    props: {
      propInfo: {
        type: Object,
        default: () => {},
      }
    },
    data: () => {
      return {
        date: null,
      };
    },
    created () {
      this.date = format(new Date(), `EEEE',' d 'de' MMMM 'de' y`, { locale: ptBR });
    },
    methods: {
      getTemp(val) {
        return (val / 10).toFixed(0);
      },
      getHour(val) {
        return (new Date(val)).toLocaleTimeString().substr(0, 5);
      },
    },
  };
</script>

<style lang="scss">
  @import '../assets/css/_utilities/_exports';

  .c-boxWeather {
    position: relative;

    &_header {
      text-align: center;
    }

    &_title {
      color: $color-dark;
    }

    &_subTitle {
      color: $color-gray;
      text-transform: capitalize;
      font-size: pxToRem(16);
      font-weight: 600;
      margin-bottom: 0;
    }

    &_imgBox {
      margin: 0 auto;
      max-width: pxToRem(200);
    }

    &_img {
      object-fit: contain;
      max-width: 100%;
    }

    &_body {
      align-items: center;
      border-bottom: pxToRem(1) solid $color-gray;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      max-width: pxToRem(768);
      margin-bottom: pxToRem(20);
      padding-bottom: pxToRem(20);

      @media(min-width: pxToRem(568)) {
        margin-bottom: pxToRem(32);
        padding-bottom: pxToRem(32);
      }
    }

    &_temp {
      position: relative;

      &:not([class*='--lg']) {
        order: 1;
        width: 50%;
      }

      &_text {
        color: $color-dark;
        font-size: pxToRem(32);
        margin: 0;
        text-align: center;

        small {
          font-size: pxToRem(14);
          font-weight: 500;
        }
      }

      &--lg {
        @extend .c-boxWeather_temp;
        margin-bottom: pxToRem(12);
        order: 0;
        width: 100%;

        .c-boxWeather_temp_text {
          font-size: pxToRem(44);
          font-weight: 600;
        }
      }

      @media(min-width: pxToRem(568)) {
        width: calc((100% - #{pxToRem(40)}) / 3);

        &:not([class*='--lg']),
        &--lg {
          order: initial;
          width: calc((100% - #{pxToRem(40)}) / 3);
        }
      }
    }

    &_footer {
      color: $color-dark;

      &_list {
        list-style: none;
        margin: 0 auto;
        padding: 0;

        &_item {
          align-items: center;
          display: flex;
          justify-content: space-between;
          margin: 0 auto pxToRem(8);
          max-width: pxToRem(212);
          font-size: pxToRem(18);
          font-weight: 600;
        }
      }
    }
  }
</style>
