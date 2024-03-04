<template>
  <div id="app">
    <input v-model="inputText" placeholder="Indtast tekst her" @input="analyzeText">
    <p>
      <span v-for="(word, index) in words" :key="index" :style="{ color: word.color }">{{ word.text + " " }}</span>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputText: '',
      words: []
    }
  },
  methods: {
    analyzeText() {
      const inputTrimmed = this.inputText.trim();
      if (!inputTrimmed) {
        this.words = [];
        return;
      }
      const words = inputTrimmed.split(/\s+/);
      this.words = words.map(word => {
        const vowels = (word.match(/[aeiouyæøå]/gi) || []).length;
        const consonants = (word.match(/[bcdfghjklmnpqrstvwxz]/gi) || []).length;
        let color = 'black';
        if (vowels > consonants) {
          color = 'red';
        } else if (consonants > vowels) {
          color = 'green';
        }
        return { text: word, color: color };
      });
    }
  }
}
</script>
<style>
</style>
