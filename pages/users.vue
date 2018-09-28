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
