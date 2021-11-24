# shoppingcar
- 一个场景题，用户添加商品时要求在多个购物车页面同步更新；添加商品时更改localStorage。
- 多个页面仅使用一个websocket，每个购物车页面创建一个随机标识，localStorage维护所有开启的页面标识数组（marks）、当前开启socket连接的页面标识（socketMark）。
- 实时更新购物车是通过store做的，因为只保留一个window的监听localStorage，不能让每个组件实例都addEventListener；商品数量出现变化就更改store，每个购物车组件实例通过watch store更新。
- 即使用localStorage解决跨页面问题；使用Vue.observable解决兄弟组件实例共享数据问题。
## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
