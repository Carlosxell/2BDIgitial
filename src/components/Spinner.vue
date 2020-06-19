<template>
  <div class="c-spinner">{{ propText }}</div>
</template>

<script>
  export default {
    name: 'Spinner',
    props: {
      propText: String,
      default: () => 'Buscando',
    },
  };
</script>

<style lang="scss">
  @import '../assets/css/_utilities/_exports';

  .c-spinner{
    animation: spinner 1.1s infinite ease;
    border-radius: 50%;
    font-size: pxToRem(24);
    height: pxToRem(16);
    margin: pxToRem(100) auto;
    position: relative;
    text-indent: pxToRem(-9999);
    transform: translateZ(0);
    width: pxToRem(16);
  }
</style>
