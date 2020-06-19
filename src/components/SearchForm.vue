<template>
  <form @submit.prevent="searchCity"
        class="c-formSearch"
        novalidate>
    <div class="c-formSearch_box"
         v-if="!searching">
      <input class="c-formSearch_input m-input"
             :disabled="searching"
             placeholder="Buscar por cidade"
             type="search"
             v-model="searchText" />
      <small class="c-formSearch_error"
             v-if="error">Cidade não encontrada</small>
    </div>

    <button class="m-btn--search"
            type="submit"
            title="Procurar"
            v-if="!searching">Procurar</button>

    <Spinner :prop-text="`Buscando cidade`"
             v-if="searching" />

<!--    <BoxLocation v-if="location" />-->
  </form>
</template>

<script>
  import Spinner from './Spinner';
  // import BoxLocation from './BoxLocation';
  import { searchLocationByCityName } from '../services/location-service';

  export default {
    name: 'SearchForm',
    components: { Spinner },
    data: () => {
      return {
        searching: false,
        searchText: '',
        error: null,
        location: ('geolocation' in navigator),
      };
    },
    methods: {
      async searchCity() {
        this.searching = true;
        this.error = false;

        try {
          this.setWeather((await searchLocationByCityName(this.replaceSpaces(this.searchText))));
          this.searching = false;
        } catch (e) {
          this.dispatchError(e);
        }
      },
      setWeather(val) {
        this.$emit('OnGetWeather', val);
      },
      replaceSpaces(str) {
        let text = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

        while (text.match(' ')) {
          text = text.replace(' ', '%20');
        }
        return text.toLowerCase();
      },
      dispatchError(error) {
        this.$emit('OnGetError', error);
        this.error = true;
        this.searching = false;
      },
    },
  };
</script>

<style lang="scss">
  @import '../assets/css/_utilities/_exports';

  .c-formSearch {
    align-content: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    max-width: pxToRem(420);
    padding: pxToRem(12);

    &_box {
      margin-bottom: pxToRem(20);
    }

    &_input {
      text-align: center;
    }

    &_error {
      background-color: lighten($color-danger, 32%);
      border-radius: pxToRem(6);
      color: $color-danger;
      display: block;
      font-weight: 600;
      margin: pxToRem(8) 0 0;
      padding: pxToRem(8) pxToRem(4);
      text-align: center;
      width: 100%;
    }

    @media(min-width: pxToRem(568)) {
      .m-btn--search {
        max-width: pxToRem(148);
        margin: 0 auto;
      }
    }
  }
</style>
