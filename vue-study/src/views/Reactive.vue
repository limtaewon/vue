<template>
  <h1 style="margin-bottom: 10px">해당 코드는 노출 버튼을 누를 시 msg가 Updated Message로 바뀌며 빨간색으로 출력되는 것이다</h1>
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
      if (this.$refs.msg.innerText === 'Updated Message') {
        this.$refs.msg.style.color = 'red';
      }
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
