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
