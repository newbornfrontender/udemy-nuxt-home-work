<h1 align="center">Udemy Nuxt Home Work</h1>

Домашняя работа по Nuxt от Udemy

<!-- Глава 2 -->
<!-------------------------------------------------------------------------->

<h2 align="center">Глава 2 - Pages, routing, views</h2>

### Урок 10 - Module introduction

1. Добавлена страница users (pages/users/index.vue)

### Урок 11 - From folders to routes

1. Добавлены динамические страницы в users (pages/users/_id/index.vue)

```html
  pages/users/_id/index.vue

  <template>
    <!-- $route.params.id  указывает на _id, если компонент будет иметь -->
    <!-- другое имя, то вместо id будет это имя -->

    <h1>A single user, with ID: {{ $route.params.id }}</h1>
  </template>
```
