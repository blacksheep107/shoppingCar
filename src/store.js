import Vue from 'vue';
export let store = Vue.observable({
    socketMark: null,
    num: localStorage['num'], // 商品数量
});
