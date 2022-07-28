import { mount, shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Counter from '~/components/Counter.vue'
import List from '~/pages/List.vue'

describe('Counter.vue', () => {
  it('should render', () => {
    const wrapper = mount(Counter, { propsData: { initial: 10 } })
    expect(wrapper.text()).toContain('10')
    // 创建一个 snapshot 文件
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should be interactive', async () => {
    const wrapper = mount(Counter, { props: { initial: 0 } })
    expect(wrapper.text()).toContain('0')

    expect(wrapper.find('.inc').exists()).toBe(true)

    await wrapper.get('button').trigger('click')

    expect(wrapper.text()).toContain('1')
  })
})

describe('List.vue', () => {
  it('List component shallow', async () => {
    // console.log(mount(List).html())
    // console.log(shallowMount(List).html())
    const wrapper = mount(List)
    console.log(wrapper.vm.movies)
    const movies = wrapper.vm.movies
    await wrapper.setData({
      movies: [...movies, {
        title: 'test',
        year: '2020',
      }],
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
