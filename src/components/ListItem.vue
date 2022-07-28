<script setup lang="ts">
const { movie } = defineProps<{
  movie: any
}>()
</script>

<template>
  <div>
    {{ movie.title }}
  </div>
</template>

<style scoped>

</style>
