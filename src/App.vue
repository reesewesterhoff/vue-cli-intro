<template>
  <div>
   <h1>{{title}}</h1>
   <characters></characters>
  </div>
</template>

<script>
import Characters from './Characters.vue'

export default {
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

<style>

</style>
