<template>
  <div>
    <span>商品数量：{{num}}</span>
  </div>
</template>

<script>
import {store} from "@/store";
export default {
  name: "ShoppingCar",
  data() {
    return {
      num: localStorage.num,
      mark: null,
    }
  },
  computed: {
    socketMark() {
      return store.socketMark;
    },
    goodNum() {
      return store.num;
    }
  },
  watch: {
    socketMark(v) {
      console.log(v, this.mark);
      if (v == this.mark) {
        alert(`我${v}开了socket！`);
      }
    },
    goodNum(v) {
      this.num = v;
    }
  },
  created() {
    this.init();
  },
  mounted() {
    this.watchClose();
  },
  methods: {
    watchClose() {
      window.onbeforeunload = () => {
        if (this.$route.name === 'ShoppingCar') {
          this.deleteMark();  // 离开前删除自己的标识
        } else {
          window.onbeforeunload = null;
        }
      }
    },
    deleteMark() {
      let tmp = JSON.parse(localStorage['marks']);
      tmp.splice(tmp.findIndex(a=>{
        return a == this.mark;
      }),1);
      localStorage['marks'] = JSON.stringify(tmp);
      localStorage['socketMark'] = null;
    },
    init() {
      // 生成随机标识
      let random = Math.random();
      while (this.compareMarks(random)) {
        random = Math.random();
      }
      this.mark = random;
      let tmp = JSON.parse(localStorage['marks']);
      tmp.push(random);
      localStorage['marks'] = JSON.stringify(tmp);
      // 第一个打开的页面特殊处理
      if (localStorage['socketMark'] == undefined) {
        localStorage['socketMark'] = this.mark;
        // store['socketMark'] = this.mark;
      }
    },
    compareMarks(random) {
      let arr = localStorage.marks;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] == random) return true;
      }
      return false;
    },
  },
}
</script>

<style scoped>

</style>
