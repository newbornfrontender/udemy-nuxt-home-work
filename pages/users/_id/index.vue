<template>
  <!-- $route.params.id  указывает на _id, если компонент будет иметь -->
  <!-- другое имя, то вместо id будет это имя -->
  <h1>A single user, with ID: {{ $route.params.id }}</h1>
</template>

<script>
  export default {
    name: 'page-users-id',

    validate (data) {
      return data.params.id === 'admin';
    },
  };
</script>
