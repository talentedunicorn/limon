import Vue from 'vue'
import Vuex from 'vuex'
import actions from  './actions'

Vue.use(Vuex)

describe('Actions', () =>  {
  let store
  let mockSetLemons = jest.fn()

  beforeEach(() => {
    store = new Vuex.Store({
      mutations:  {
        setLemons: mockSetLemons
      },
      actions: {
        fetchLemons: actions.fetchLemons
      }
    })
  })

  it('should fetch lemons', () =>  {
    store.dispatch('fetchLemons')
    expect(mockSetLemons).toHaveBeenCalled()
  })
}) 
