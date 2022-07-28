import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { createStore } from 'vuex'
import OddEven from '~/pages/OddEven.vue'

const createVuexStore = () => createStore({
  state() {
    return {
      count: 0,
    }
  },
  mutations: {
    increment(state) {
      state.count += 1
    },
  },
})

function factory() {
  const store = createVuexStore()
  return mount(OddEven, {
    global: {
      plugins: [store],
      stubs: {
        Fetcher: true,
      },
    },

  })
}

describe('OddEven', () => {
  it('render count when odd', async () => {
    const wrapper = factory()
    await wrapper.find('button').trigger('click')
    expect(wrapper.html()).toContain('Count: 1. Count is odd.')
  })
  it('render count when even', async () => {
    const wrapper = factory()
    await wrapper.find('button').trigger('click')
    await wrapper.find('button').trigger('click')
    console.log(wrapper.html())
    expect(wrapper.html()).toContain('Count: 2. Count is even.')
  })
})
