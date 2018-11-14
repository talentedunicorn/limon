import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from '@/App'

const localVue = createLocalVue()
const router = new VueRouter()

localVue.use(VueRouter)
localVue.use(Vuex)

describe('App.vue', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      fetchLemons: jest.fn()
    }

    store = new Vuex.Store({
      state: {},
      actions
    })
  })

  it('should initialize correctly', () => {
    const wrapper = shallowMount(App, {
      localVue,
      router,
      store
    })

    expect(wrapper.contains('.logo')).toBe(true)
    expect(actions.fetchLemons).toHaveBeenCalled()
  })
})
