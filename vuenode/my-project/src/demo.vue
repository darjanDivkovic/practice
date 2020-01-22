<template>
  <div>
    <p v-for='person in ppl'>{{person}}</p>
  </div>
</template>

<script>
export default {
  
  data () {
    return {
        ppl: ['Dacija','Bocija'],
    }
  }
}
</script>

<style>


</style>