<template>
  <div class="page-wrapper">
    <h1>Limon</h1>
    <LemonList :lemons="latestLemons"/>
    <router-link to="/list">See all</router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LemonList from '@/components/LemonList'
export default({
  name: 'Home',
  computed: {
    ...mapGetters([
      'latestLemons'
    ])
  },
  components: {
    LemonList
  }
})
</script>
