import Vue from 'vue'
import Vuex from 'vuex'
import actions from  './actions'
import { lemons } from '../../test/mockData'

Vue.use(Vuex)

describe('Actions', () =>  {
  let store
  let mockSetLemons
  let mockConsoleError

  beforeEach(() => {
    mockConsoleError = jest.fn()
    mockSetLemons = jest.fn()

    store = new Vuex.Store({
      mutations:  {
        setLemons: mockSetLemons
      },
      actions: {
        fetchLemons: actions.fetchLemons
      }
    })

    global.console.error = mockConsoleError
  })

  it('should fetch lemons', () =>  {
    const url = './static/lemons.json'

    // Mock fetch
    global.fetch = jest.fn().mockImplementationOnce(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        data: JSON.stringify(lemons)
      })
    }))

    return store.dispatch('fetchLemons')
      .then((res) => {
        expect(global.fetch).toHaveBeenCalledWith(url)
      })
  })

  it('should handle error on failure', () => {
    global.fetch = jest.fn().mockImplementationOnce(() => Promise.reject('Server error'))
    return store.dispatch('fetchLemons')
      .then((res) => {
        expect(global.fetch).toHaveBeenCalled()
      })
  })
}) 
