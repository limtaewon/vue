<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/reactive">반응형 기초1</RouterLink>
        <RouterLink to="/reactive2">반응형 기초2</RouterLink>
        <RouterLink to="/computed">계산된 속성</RouterLink>
        <RouterLink to="/binding">클래스 스타일 바인딩</RouterLink>
      </nav>
    </div>
  </header>
  <div class="view-section">
    <RouterView />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  min-width:300px;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
.view-section {
  width: 100%;
}
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    width: 500px;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    width: 500px;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 2rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
