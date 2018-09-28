<style scoped>
  .main-header {
    background-color: #ccc;
  }

  .main-nav {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav-list {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    list-style: none;
  }
</style>

<template>
  <header class="main-header">
    <nav class="main-nav">
      <ul class="nav-list">
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>

        <li>
          <nuxt-link to="/users">Users</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
