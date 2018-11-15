import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import List from './List'

const localVue = createLocalVue()
localVue.use(VueRouter)

describe('List.vue', () => {
  it('should render correct list', () => {
    const lemons = [
      { title: "one", description: "1" },
      { title: "two", description: "2" },
      { title: "three", description: "3" }
    ]
    const wrapper = shallowMount(List, { 
      localVue, 
      computed: {
        lemons: function () { return lemons }
      }
    })
    expect(wrapper.findAll('li')).toHaveLength(lemons.length)
  })

})
