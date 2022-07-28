import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
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

// 工厂函数 创建同一个实例的 copy
// 可以让代码更紧凑

function factory() {
  const store = createVuexStore()
  return mount(OddEven, {
    global: {
      plugins: [store],
      // provide: {
      //   store,
      // },
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
    expect(wrapper.html()).toContain('Count: 2. Count is even.')
  })
  it.skip('trigger increment', async () => {
    const wrapper = factory()
    // expect(wrapper.text()).toBe('Hello')
    // expect(wrapper.html()).toBe('<div>Hello</div>')
    await wrapper.find('button').trigger('click')
    expect(wrapper.html()).toContain('Count: 1. Count is odd.')
  })
})
