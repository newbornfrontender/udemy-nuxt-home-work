<script>
import TheHeader from '@/components/Navigation/TheHeader';
import TheSidenav from '@/components/Navigation/TheSidenav';

export default {
  name: 'LayoutDefault',

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
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />

    <TheSidenav
      :show="displaySidenav"
      @close="displaySidenav = false"
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
