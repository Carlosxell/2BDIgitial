<template>
  <div class="l-page--home">
    <SearchForm />
  </div>
</template>

<script>
  import SearchForm from '../components/SearchForm';

  export default {
    name: 'Home',
    components: { SearchForm },
  };
</script>
