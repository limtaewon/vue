<template>
  <div>
    <h2>{{ getSelectedMsg }}</h2>
    <button @click="changeSelectId">commputed Id 값 변경</button>
  </div>

</template>

<script>
export default {
  data() {
    return {
      selectId: 1,
      idAndMsg: [{id: 1, msg:'1선택'}, {id:2, msg: '2선택'}]
    }
  },
  computed: {
    getSelectedMsg() {
      console.log('데이터 변경 시 해당 computed 실행 (데이터가 변하지 않으면 실행되지 않음)');
      return this.idAndMsg[0].id === this.selectId ? this.idAndMsg[0].msg :  this.idAndMsg[1].msg;
    },
  },
  methods: {
    changeSelectId() {
      console.log('selectId 변경 호출');
      this.selectId = 2;
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
