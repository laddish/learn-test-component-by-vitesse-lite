<script setup lang="ts">
import { useStore } from 'vuex'
const store = useStore()
const count = computed(() => store.state.count)
const increment = () => {
  store.commit('increment')
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
  </div>
</template>

<style scoped>

</style>
