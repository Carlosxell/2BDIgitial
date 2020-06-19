<template>
  <div class="c-boxLocation">
    <button @click="searchPosition"
            class="c-boxLocation m-btn"
            type="button"
            title="Buscar Localização">

      <svg class="m-icon m-icon--md"
           title="icone de localização">
        <use :xlink:href="`#${pin.id}`" />
      </svg>
    </button>
  </div>
</template>

<script>
  import { searchLocationBy3G } from '../services/location-service';
  import pin from '../assets/icons/ic-map.svg?sprite';

  export default {
    name: 'BoxLocation',
    data: () => {
      return {
        pin,
      };
    },
    methods: {
      searchPosition() {
        return navigator.geolocation.getCurrentPosition(function (position) {});
      }
    }
  };
</script>

<style lang="scss">
  @import '../assets/css/_utilities/_exports';
</style>
