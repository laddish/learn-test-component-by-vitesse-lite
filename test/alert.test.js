import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import AlertMessage from '~/pages/AlertMessage.vue'

vi.useFakeTimers()
describe('life cycle', () => {
  it('mounted assigns interval', () => {
    const wrapper = mount(AlertMessage)
    expect(wrapper.vm.interval).not.toBe(undefined)
  })

  it('counter works', () => {
    const wrapper = mount(AlertMessage)
    expect(wrapper.vm.counter).toBe(0)
    vi.advanceTimersByTime(1000)
    expect(wrapper.vm.counter).toBe(1)
    vi.advanceTimersByTime(1000)
    expect(wrapper.vm.counter).toBe(2)
  })

  it('instance gets destroyed', () => {
    const beforeUnmountedSpy = vi.spyOn(AlertMessage, 'beforeUnmount')
    const wrapper = mount(AlertMessage)
    wrapper.vm.counter = wrapper.vm.timer - 1
    vi.advanceTimersByTime(1000)
    expect(beforeUnmountedSpy).toHaveBeenCalled()
  })
})
