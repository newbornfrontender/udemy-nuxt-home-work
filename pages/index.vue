<template>
  <section>
    <h1>{{ title }}</h1>
  </section>
</template>

<script>
  export default {
    data: () => ({
      title: 'Title',
    }),
  };
</script>

<style>
  h1 {
    color: orange;
  }
</style>
