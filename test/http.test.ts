import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { createStore } from 'vuex'
import OddEven from '~/pages/OddEven.vue'
import Link from '~/pages/Link.vue'

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

    },

  })
}

describe('OddEven', () => {
  it('emit', async () => {
    const wrapper = factory()
    await wrapper.find('.emitBtn').trigger('click')
    expect(wrapper.emitted().countAdd[0][0]).toBe(1)
    await wrapper.find('.emitBtn').trigger('click')
    expect(wrapper.emitted().countAdd[1][0]).toBe(2)
    console.log(wrapper.emitted())
  })

  it('renders a profile link', () => {
    const wrapper = mount(Link)
    expect(wrapper.find('#profile').text()).toBe('profile')
  })
  it('renders a profile link', () => {
    const wrapper = mount(Link, {
      data() {
        return {

          admin: true,
        }
      },
    })
    expect(wrapper.find('#admin').isVisible()).toBe(true)
  })
  it('renders a profile link', () => {
    const wrapper = mount(Link, {
      data() {
        return {

          admin: false,
        }
      },
    })
    expect(wrapper.find('#admin').isVisible()).toBe(false)
  })
})
