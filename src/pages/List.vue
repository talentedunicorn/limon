<template>
  <div class="page-wrapper">
    <h1>List page</h1>
    <p>All the lemons life gave you</p>
    <ul>
      <li v-for="(lemon, index) in lemons" :key="index">
        <router-link :to="{ name: 'Lemon', params: { id: lemon.id } }">{{ lemon.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'List',
  computed: {
    lemons () {
      return this.$store.state.lemons
    }
  }
}
</script>
