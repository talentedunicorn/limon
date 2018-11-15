<template>
  <div class="page-wrapper">
    <router-link to="/list">Back</router-link>
    <h1>{{ lemon.title }}</h1>
    <p>{{ lemon.description }}</p>
  </div>
</template>

<script>
export default({
  name: 'Lemon',
  computed: {
    lemon () {
      return this.$store.state.lemons.filter(lemon => lemon.id === this.$route.params.id)[0]
    }
  }
})
</script>
