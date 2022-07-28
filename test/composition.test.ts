import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

const App = {
  setup() {
    const count = ref(0)
    const increment = () => {
      count.value = 1 + count.value
    }
    return {
      count,
      increment,
    }
  },
  template: `
    <button @click="increment">+</button
    <div>Hello</div>
    <div v-if="count % 2  === 0">
      Count: {{ count }}. Count is even.
    </div>
    <div v-if="count % 2  !== 0">
      Count: {{ count }}. Count is odd.
    </div>
    `,
}

// 工厂函数 创建同一个实例的 copy
// 可以让代码更紧凑

function factory({ data, props } = { data: {}, props: {} }) {
  return mount(App, {
    props,
    data() {
      return data
    },
  })
}

describe('App', () => {
  it.skip('render count when odd', () => {
    const wrapper = factory({
      data: {
        count: 1,
      },
      props: { count1: 1 },
    })
    console.log(wrapper.vm)
    // expect(wrapper.text()).toBe('Hello')
    // expect(wrapper.html()).toBe('<div>Hello</div>')
    expect(wrapper.html()).toContain('Count: 1. Count is odd.')
  })
  it('render count when even', async () => {
    const wrapper = factory()
    await wrapper.find('button').trigger('click')
    await wrapper.find('button').trigger('click')
    expect(wrapper.html()).toContain('Count: 2. Count is even.')
  })
  it.skip('trigger increment', async () => {
    const wrapper = factory({
      data: {
        count: 0,
      },
      props: { count1: 2 },
    })
    // expect(wrapper.text()).toBe('Hello')
    // expect(wrapper.html()).toBe('<div>Hello</div>')
    await wrapper.find('button').trigger('click')
    expect(wrapper.html()).toContain('Count: 1. Count is odd.')
  })
})
