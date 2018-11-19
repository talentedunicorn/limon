import Vue from 'vue'
import Vuex from 'vuex'

import getters from '@/store/getters'

Vue.use(Vuex)

describe('Getters', () => {
  let store
  let state

  beforeEach(() => {
    state = {
      lemons: []
    }
    store = new Vuex.Store({
      state,
      getters
    })
  })

  it('should return atmost 3 items from state', () => {
    store.state.lemons = ["1", "2", "3", "4"]
    expect(store.getters.latestLemons).toHaveLength(3)
  })


  it('should return all items if state contains less than 3 items', () => {
    store.state.lemons = ["1"]
    expect(store.getters.latestLemons).toHaveLength(1)
  })
})
