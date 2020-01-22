<template>
  <div>
    <p id='para' v-for='person in ppl'>{{person}}</p>
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

#para {
  font-size: 2.5em;
  color: blue;
  text-align: center;
}

</style>