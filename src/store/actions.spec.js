import Vue from 'vue'
import Vuex from 'vuex'
import actions from  './actions'

Vue.use(Vuex)

const data = [
  { title: 'one', id: '1' },
  { title: 'two', id: '2' },
  { title: 'three', id: '3' }
]

describe('Actions', () =>  {
  let store
  let mockSetLemons

  beforeEach(() => {
    mockSetLemons = jest.fn()

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
    const url = './static/lemons.json'

    // Mock fetch
    global.fetch = jest.fn().mockImplementationOnce(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        data: JSON.stringify(data)
      })
    }))

    return store.dispatch('fetchLemons')
      .then((res) => {
        expect(global.fetch).toHaveBeenCalledWith(url)
        // expect(mockSetLemons).toHaveBeenCalledWith(data)
      })
  })

  it('should handle error on failure', () => {
    global.fetch = jest.fn().mockImplementationOnce(() => Promise.reject('Server error'))
    return store.dispatch('fetchLemons')
      .then((res) => {
        expect(global.fetch).toHaveBeenCalled()
        expect(mockSetLemons).not.toHaveBeenCalled()
      })
  })
}) 
