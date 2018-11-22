import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import Lemon from '@/pages/Lemon'

import { lemons } from '../../test/mockData'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Lemon page', () => {
  let store
  let state

  beforeEach(() => {
    state = {
      lemons
    }

    store = new Vuex.Store({
      state
    })
  })

  it('should render correct lemon', () => {
    const $route = {
      params: {
        id: lemons[0].id
      }
    }

    const wrapper = shallowMount(Lemon, {
      localVue,
      store,
      stubs: ['router-link', 'router-view'],
      mocks: {
        $route
      }
    })

    expect(wrapper.find('h1').text()).toEqual(lemons[0].title)
  })
})
