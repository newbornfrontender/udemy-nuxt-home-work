<template>
  <div>
    <input
      v-model="userId"
      type="text"
    >

    <button v-on:click="onLoadUsers">Load User</button>

    <nuxt-child />
  </div>
</template>

<script>
  export default {
    name: 'page-users',

    data: () => ({
      userId: '',
    }),

    methods: {
      onLoadUsers () {
        this.$router.push(`/users/${this.userId}`);
      },
    },

    layout: 'users',
  };
</script>
