<script setup lang="ts">

</script>

<script lang="ts">
export default {
  computed: {
    postId() {
      console.log(this.$route)
      return this.$route.params.postId
    },
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

    <div>PostID: {{ postId }}</div>
  </div>
</template>

<style scoped>

</style>
