<style scoped>
  ul {
    list-style: none;
    padding: 0;
    margin: var(--half-space) 0;
  }

  li {
    padding: var(--space) var(--half-space);
    border-bottom: 1px solid var(--gray);
  }

  li:last-child {
    border-bottom: none;
  }

  li:hover {
    background: var(--gray);
  }

  a {
    display: block;
    text-decoration: none;
    color: currentColor;
  }
</style>

<template>
  <ul>
    <li v-for="(lemon, index) in lemons" :key="index">
      <router-link :to="{ name: 'Lemon', params: { id: lemon.id } }">{{ lemon.title }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'LemonList',
  props: ['lemons']
}
</script>
