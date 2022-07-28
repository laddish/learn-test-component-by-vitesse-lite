<script setup lang="ts">
const emit = defineEmits(['countAdd'])

const count = ref(0)

function handleClick() {
  count.value += 1
  emit('countAdd', count.value)
}
</script>

<script lang="ts">

</script>

<template>
  <div>
    <button @click="handleClick">
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
