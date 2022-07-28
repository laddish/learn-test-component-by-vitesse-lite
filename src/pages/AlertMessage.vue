<script lang="ts">
export default {
  data() {
    return {
      interval: undefined,
      counter: 0,
      timer: 5,
    }
  },
  computed: {
    timeLeft() {
      return this.timer - this.counter
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      this.counter++
      if (this.counter == this.timer)
        this.$.appContext.app.unmount()
    }, 1000)
  },

  beforeUnmount() {
    clearInterval(this.interval)
    console.log('alert message destroyed')
  },
  unmounted() {
    this.$el.remove()
  },
}
</script>

<template>
  <div class="alert">
    <p>I'm a alert message!</p>
    <p>Time left {{ timeLeft }}</p>
  </div>
</template>

<style scoped>

</style>
