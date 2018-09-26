<template>
  <div>
    <input
      type="text"
      v-model="userId"
    >

    <button v-on:click="onLoadUsers">Load User</button>

    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
  export default {
    name: 'users',

    data: () => ({
      userId: '',
    }),

    methods: {
      onLoadUsers () {
        this.$router.push(`/users/${this.userId}`);
      },
    },
  };
</script>
