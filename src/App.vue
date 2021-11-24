<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->
    <router-view/>
  </div>
</template>
<script>
import {store} from "@/store";
export default {
  created() {
    this.init();
  },
  methods: {
    init() {
      if (!localStorage.getItem('marks'))   localStorage['marks'] = JSON.stringify([]);
      if (!localStorage.getItem('num'))   localStorage['num'] = 0;  // 只考虑一种商品
      if (!localStorage.getItem('socketMark'))    localStorage['socketMark'] = null;  // 开启socket的页面标识
      this.watchSocket();
    },
    watchSocket() {
      window.addEventListener('storage',  (e) => {
        if (e.key === 'marks') {
          // 页面情况变化, 是否关闭了连接socket的页面
          let tmp = JSON.parse(e.newValue);
          if (tmp.findIndex(a => a === localStorage.getItem('socketMark')) === -1) {
            // 随机一个页面开socket
            this.openSocket();
          }
        } else if(e.key === 'num') {
          store['num'] = e.newValue;
        } else if(e.key === 'socketMark') {
          store['socketMark'] = e.newValue;
        }
      })
    },
    openSocket() {
      let tmp = JSON.parse(localStorage['marks']);
      localStorage['socketMark'] = tmp[0];
      store['socketMark'] = tmp[0];
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
