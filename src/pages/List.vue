<template>
  <div class="page-wrapper">
    <h1>When life gives your lemons</h1>
    <p>Make a list of their varieties, because why not</p>
    <LemonList :lemons="lemons"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import LemonList from '@/components/LemonList'
export default {
  name: 'List',
  components: {
    LemonList
  },
  computed: {
    ...mapState(['lemons'])
  }
}
</script>
