<script>
import TheHeader from '@/components/Navigation/TheHeader';
import TheSidenav from '@/components/Navigation/TheSidenav';

export default {
  name: 'layout-default',

  components: {
    TheHeader,
    TheSidenav,
  },

  data: () => ({
    displaySidenav: false,
  }),
};
</script>

<template>
  <div>
    <TheHeader v-on:sidenavToggle="displaySidenav = !displaySidenav" />

    <TheSidenav
      v-bind:show="displaySidenav"
      v-on:close="displaySidenav = false"
    />

    <nuxt />
  </div>
</template>

<style>
html {
  font-family: Open Sans, sans-serif;
}

body {
  margin: 0;
}
</style>
