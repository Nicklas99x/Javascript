<script>
export default {
  data() {
    return {
      billeder: [
        { url: "./public/SN850007.jpg", valgt: false, op: 1 },
        { url: "./public/SN850008.jpg", valgt: false, op: 1 },
        { url: "./public/Kunst10.webp", valgt: false, op: 1 },
        { url: "./public/SN850036.jpg", valgt: false, op: 1 }
      ]
    }
  },
  methods: {
    toggleValg(url) {
      let b = this.billeder.find((f) => f.url === url);
      b.valgt = !b.valgt;
    },
    nyOpacitet(op) {
      for (let i = 0; i < this.billeder.length; i++) if (this.billeder[i].valgt) this.billeder[i].op = op;
    }
  }
}
</script>

<template>
  <h1>Ændr gennemsigtigheden af de valgte billeder</h1>
  <RangeInput @nyOpacitet="nyOpacitet" />
  <Billeder v-for="x in billeder" v-bind:billede="x" :key="x.url" @toggleValg="toggleValg" />
</template>

<style></style>