<template>
  <div id="app">
    <router-link class="logo" to="/">
      <img src="./assets/logo.svg">
    </router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    this.$store.dispatch('fetchLemons')
  }
}
</script>

<style>
  :root {
    --space: 1.25rem;
    --double-space: calc(var(--space) * 2);
    --half-space: calc(var(--space) / 2);
    --font: sans-serif;
    --white: hsl(234, 0%, 98%);
    --black: hsl(234, 0%, 12%);
    --yellow: hsl(65, 97%, 76%);
  }

  html,
  body {
    height: 100%;
  }

  body {
    margin: 0;
    font-family: var(--font);
    background: var(--white);
    color: var(--black);
    display: flex;
  }

  #app {
    flex: 1;
  }

  .logo {
    display: inline-block;
    padding: var(--space);
    background: var(--yellow);
  }

  .page-wrapper {
    padding: 0 var(--space);
  }
</style>
