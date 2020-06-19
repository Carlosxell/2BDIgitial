<template>
  <div class="l-page--home">
    <SearchForm @OnGetWeather="getWeather"
                @OnGetError="getError"
                v-if="weather" />
    <p v-else>{{ JSON.stringify(weather) }}</p>
  </div>
</template>

<script>
  import SearchForm from '../components/SearchForm';

  export default {
    name: 'Home',
    components: { SearchForm },
    data: () => {
      return {
        weather: null,
      };
    },
    methods: {
      getError(val) {
        this.weather = null;
      },
      getWeather(val) {
        this.weather = { ...val };
      },
    },
  };
</script>
