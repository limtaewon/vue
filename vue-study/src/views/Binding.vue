<template>
  <button @click="toggleVisibility">노출 토글</button>
  <button @click="consoleLog">ref확인</button>
  <h2 ref="testIf" v-if="test.isVisible"> v-if </h2>
  <h2 ref="testShow" v-show="test.isVisible"> v-show</h2>
</template>

<script>
export default {
  data() {
    return {
      test: {
        isVisible: false
      }
    }
  },
  methods: {
    toggleVisibility() {
      this.test.isVisible = !this.test.isVisible;
    },
    consoleLog() {
      console.log(this.$refs.testIf);
      console.log(this.$refs.testShow);
    }
  }
}
</script>

<style>
button {
  font-size: 2rem;
  padding: 15px;
  border-radius: 20px;
  background-color: #181818;
  color: white;
  cursor: pointer;
}
</style>
