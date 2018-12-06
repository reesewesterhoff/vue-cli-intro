<template>
  <div>
   <h1>{{title}}</h1>
   <characters></characters>
  </div>
</template>

<script>
// to import component locally, import it here
import Characters from './Characters.vue'

export default {
  // must export component if you want to see it
  components: {
    'characters': Characters
  },
  data () {
    return {
      title: 'Ninja App'
    }
  },
  
}
</script>

// adding scoped makes css specific to component
<style scoped>
h1 {
  color: purple;
}
</style>
