import { createLocalVue, shallowMount } from '@vue/test-utils'
import store from '@/store'
import Home from '@/pages/Home'
import { lemons } from '@/../test/mockData'

const localVue = createLocalVue()

describe('Home', () => {
  beforeEach(() => {
    store.state.lemons = lemons
  })

  it('should only show the latest 3 items', () => {
    const wrapper = shallowMount(Home, {
      localVue,
      store,
      stubs: ['router-link', 'router-view']
    })

    expect(wrapper.vm.latestLemons).toEqual(lemons.slice(0, 3))
  })
})

