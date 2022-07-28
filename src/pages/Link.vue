<script  lang="ts">
export default {
  data() {
    return {
      admin: false,
    }
  },

}
</script>

<template>
  <a v-if="admin" id="admin" href="" />
  <a id="profile" href="">profile</a>
</template>

<style scoped>

</style>
