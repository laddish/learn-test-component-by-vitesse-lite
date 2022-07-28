<script setup lang="ts">

</script>

<script lang="ts">
export default {
  computed: {
    count() {
      return this.$store.state.count
    },
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    },
  },
}
</script>

<template>
  <div>
    <button @click="increment">
      +
    </button>

    <div v-if="count % 2 === 0">
      Count: {{ count }}. Count is even.
    </div>
    <div v-if="count % 2 !== 0">
      Count: {{ count }}. Count is odd.
    </div>
    <Fetcher />
  </div>
</template>

<style scoped>

</style>
