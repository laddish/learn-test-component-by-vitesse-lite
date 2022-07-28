<!-- <script setup lang="ts">
const movies = ref(
  [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Monkeys', year: 2010 },
  ],
)
</script> -->

<script lang="ts">
export default {
  data() {
    return {
      movies: [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 },
        { title: 'The Dark Knight', year: 2008 },
        { title: '12 Angry Monkeys', year: 2010 },
      ],
    }
  },
}
</script>

<template>
  <div>
    <ul>
      <ListItem
        v-for="(movie, index) in movies"
        :key="index"
        :movie="movie"
      />
    </ul>
  </div>
</template>

<style scoped>

</style>
