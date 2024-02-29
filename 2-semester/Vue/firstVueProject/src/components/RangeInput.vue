<template>
  <label>opacitet
      <input type="range" min="0" max="100" v-model="op">
      <p>{{ g }}</p>
    </label>  
</template>

<script>
export default {
  data() {
    return {      
      op: 100      
    }
  },
  emits:["nyOpacitet"],
  methods:{
    nyOpacitet(){
      this.$emit("nyOpacitet",this.op/100)
    }
  },
  computed:{
    g(){this.nyOpacitet(); return this.op+"%"}
  }
}
</script>

<style></style>