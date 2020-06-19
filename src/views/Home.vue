<template>
  <div class="l-page--home">
    <SearchForm @OnGetWeather="getWeather"
                @OnGetError="getError"
                v-if="!weather" />
    <BoxWeather :prop-info="weather"
                v-else />
  </div>
</template>

<script>
  import SearchForm from '../components/SearchForm';
  import BoxWeather from '../components/BoxWeather';

  export default {
    name: 'Home',
    components: { SearchForm, BoxWeather },
    data: () => {
      return {
        weather: null,
      };
    },
    methods: {
      getError(val) { this.weather = null; },
      getWeather(val) { this.weather = { ...val }; },
    },
  };
</script>
