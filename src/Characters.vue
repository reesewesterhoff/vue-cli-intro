<template>
  <div>
    <h1>List of characters</h1>
    <ul>
      <li v-for="character in characters" :key="character">{{character}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      characters: ["Yoshi", "Mario", "Ryu"]
    };
  }
};
</script>

<style scoped>
h1 {
  color: green;
}
</style>
