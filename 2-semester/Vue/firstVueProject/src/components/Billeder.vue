<template>
  <img v-bind:src="billede.url" v-bind:style="{ opacity: billede.op }" width="200" height="150"
    v-bind:class="{ sel: billede.valgt }">
  <button v-on:click="toggleValg">Vælg billedet</button>
</template>

<script>
export default {
  data() {
    return {
      valgt: false
    }
  },
  emits:["toggleValg"],
  methods: {
    toggleValg() {
      this.$emit("toggleValg", this.billede.url);
    }
  },
  props: [
    'billede', 'opacitet'
  ]
}
</script>

<style>
.sel {
  border: 5px red solid;
}
</style>