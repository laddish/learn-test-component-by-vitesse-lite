import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

const App = {
  props: {
    count: {
      type: Number,
    },
  },
  data() {
    return {
      msg: 'hello',
    }
  },
  template: `
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
function factory(props: any) {
  return mount(App, {
    props,
  })
}

describe('App', () => {
  it('render count when odd', () => {
    const wrapper = factory({ count: 1 })
    console.log(wrapper.vm)
    // expect(wrapper.text()).toBe('Hello')
    // expect(wrapper.html()).toBe('<div>Hello</div>')
    expect(wrapper.html()).toContain('Count: 1. Count is odd.')
  })
  it('render count when even', () => {
    const wrapper = factory({ count: 2 })
    // expect(wrapper.text()).toBe('Hello')
    // expect(wrapper.html()).toBe('<div>Hello</div>')
    expect(wrapper.html()).toContain('Count: 2. Count is even.')
  })
})
