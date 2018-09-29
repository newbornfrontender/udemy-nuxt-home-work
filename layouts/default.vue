<template>
  <section>
    <main-header />

    <main>
      <nuxt />
    </main>
  </section>
</template>

<script>
  import MainHeader from '@/components/MainHeader';

  export default {
    name: 'layout-default',

    components: {
      MainHeader,
    },
  };
</script>
