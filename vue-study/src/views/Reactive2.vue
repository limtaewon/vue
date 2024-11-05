<template>
  <button @click="showH2Content">h2 컨텐츠 노출</button>
  <button @click="unShowH2Content">h2 컨텐츠 숨김</button>
  <h2 ref="msg" v-show="test.isVisible">{{ msg }}</h2>
</template>

<script>
export default {
  data() {
    return {
      test: {
        isVisible: false
      },
      msg: 'testing'
    }
  },
  methods: {
    showH2Content() {
      this.msg = 'Updated Message';
      this.test.isVisible = true;

      this.$nextTick(function () {
        if (this.$refs.msg.innerText === 'Updated Message') {
          this.$refs.msg.style.color = 'red';
        }
      })
    },
    unShowH2Content() {
      this.test.isVisible = false;
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
