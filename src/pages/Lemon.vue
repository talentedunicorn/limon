<style scoped>
  nav {
    display: flex;
  }

  nav a {
    text-decoration: none;
    color: inherit;
  }

  .next {
    margin-left: auto;
  }
</style>

<template>
  <div class="page-wrapper">
    <router-link to="/list">Back</router-link>
    <article>
      <h1>{{ lemon.title }}</h1>
      <p>{{ lemon.description }}</p>
      <img :src="lemon.img" :alt="lemon.title"/>
    </article>
    <nav>
      <router-link v-if="previous" :to="{ name: 'Lemon', params: { id: previous.id } }">{{ previous.title }}</router-link>
      <router-link v-if="next" class="next" :to="{ name: 'Lemon', params: { id: next.id } }">{{ next.title }}</router-link>
    </nav>
  </div>
</template>

<script>
export default({
  name: 'Lemon',
  computed: {
    lemon () {
      return this.$store.state.lemons.filter(lemon => lemon.id === this.$route.params.id)[0]
    },
    next () {
      let currentIndex = this.$store.state.lemons.indexOf(this.lemon)
      return this.$store.state.lemons[currentIndex + 1]
    },
    previous () {
      let currentIndex = this.$store.state.lemons.indexOf(this.lemon)
      return this.$store.state.lemons[currentIndex - 1]
    }
  }
})
</script>
