import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import { lemons } from '../../test/unit/utils/mockState'

Vue.use(Vuex)

describe('Mutations', () => {
  it('should set lemons to state', () => {
    let state = {
      lemons: []
    }

    let store = new Vuex.Store({
      state,
      mutations: {
        setLemons: mutations.setLemons
      }
    })

    store.commit('setLemons', lemons)
    expect(store.state.lemons).toBe(lemons)
  })
})
