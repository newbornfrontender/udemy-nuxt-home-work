<h1 align="center">Udemy Nuxt Home Work</h1>

Домашняя работа по Nuxt от Udemy

<!-- Глава 2 -->
<!-------------------------------------------------------------------------->

<h2 align="center">Глава 2 - Pages, routing, views</h2>

### Урок 10 - Module introduction

Введение в модульную структуру Nuxt

### Урок 11 - From folders to routes

1. Добавлена страница users (pages/users/index.vue)

### Урок 12 - Creating a route with a dynamic path

1. Добавлены динамические страницы в users (pages/users/_id/index.vue)

```html
  <!-- pages/users/_id/index.vue -->

  <!-- $route.params.id  указывает на _id, если компонент будет иметь -->
  <!-- другое имя, то вместо id будет это имя -->
  <h1>A single user, with ID: {{ $route.params.id }}</h1>
```

### Урок 13 - Adding links. Navigating around

1. Добавлен nuxt-link для навигации по сайту в режиме SPA

```html
  <!-- pages/index.vue -->

  <!-- Вместо router-link в Nuxt используется nuxt-link. Единственное -->
  <!-- отличие между ними - название -->
  <nuxt-link to="/users">Users</nuxt-link>
```

2. Добавлен input с возможностью ввода динамических маршрутов и перехода по ним

```html
  <!-- pages/users/index.vue -->

  <input
    type="text"
    v-model="userId"
  >

  <button v-on:click="onLoadUsers">Load User</button>
```

```js
  // pages/users/index.vue

  data: () => ({
    userId: '',
  }),

  methods: {
    onLoadUsers () {
      this.$router.push(`/users/${this.userId}`);
    },
  },
```

### Урок 14 - Validating parameters

1. Добавлена валидация только для пользователя с ником "admin". Для остальных имен будет - 404

```js
  // pages/users/_id/index.vue

  validate (data) {
    // Валидирует только численные значения
    // return /^\d+$/.test(data.params.id);

    return data.params.id === 'admin';
  },
```

### Урок 15 - Creating nested routes

1. Создан users.vue в pages и тем самым добавлен вложенный маршрут для данной страницы. Перенесен весь код из pages/users/index.vue сюда

```html
  <!-- pages/users.vue -->

  <div>
    <!-- Код из pages/users/index.vue -->

    <nuxt-child></nuxt-child>
  </div>
```

### Урок 16 - Layouts, pages. Components - theory

Теория про макеты в Nuxt

### Урок 17 - Adding a new layout

1. Добавлен дефолтный макет
2. Добавлен макет для пользователей и установлен в pages/users.vue

```js
  // pages/users.vue

  export default {
    layout: 'users',
  };
```

### Урок 18 - Adding a default error page

1. Добавлен простой кастомный макет ошибки error.vue, который отображает выводится при ошибках в коде или при ненайденых страницах

### Урок 19 - Working with normal components

### Урок 20 - Styling Nuxt apps

### Урок 21 - Wrap up

<!-- Глава 3 -->
<!-------------------------------------------------------------------------->
