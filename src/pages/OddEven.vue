<script setup lang="ts">

</script>

<script lang="ts">
export default {
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    },
    handleClick() {
      this.count += 1
      this.$emit('countAdd', this.count, 'hello')
    },
  },
}
</script>

<template>
  <div>
    <button @click="increment">
      +
    </button>
    <button class="emitBtn" @click="handleClick">
      +
    </button>

    <div v-if="count % 2 === 0">
      Count: {{ count }}. Count is even.
    </div>
    <div v-if="count % 2 !== 0">
      Count: {{ count }}. Count is odd.
    </div>
  </div>
</template>

<style scoped>

</style>
