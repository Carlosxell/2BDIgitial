<template>
  <form @submit.prevent="searchCity"
        class="c-formSearch"
        novalidate>
    <div class="c-formSearch_box">
      <input class="c-formSearch_input m-input"
             :disabled="searching"
             placeholder="Buscar por cidade"
             type="search" />
    </div>

    <button class="m-btn--search"
            type="submit"
            title="Procurar"
            v-if="!searching">Procurar</button>

    <Spinner :prop-text="`Buscando cidade`"
             v-if="searching" />
  </form>
</template>

<script>
  import Spinner from './Spinner';

  export default {
    name: 'SearchForm',
    components: { Spinner },
    data: () => {
      return {
        searching: false,
      };
    },
    methods: {
      async searchCity() {},
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

    @media(min-width: pxToRem(568)) {
      .m-btn--search {
        max-width: pxToRem(148);
        margin: 0 auto;
      }
    }
  }
</style>
