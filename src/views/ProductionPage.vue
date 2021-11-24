<template>
  <div>
    <button @click="addToShoppingCar">添加到购物车</button>
  </div>
</template>

<script>
export default {
  name: "ProductionPage",
  created() {
    if (!localStorage.getItem('num')) localStorage.num = 0;
    this.init();
  },
  methods: {
    addToShoppingCar() {
      localStorage.num = Number(localStorage.num) + 1;
    },
    init() {
      let originSetItem = localStorage.setItem;
      localStorage.setItem = function (key, newValue) {
        let setItemEvent = new Event('setItemEvent');
        setItemEvent.num = newValue;
        window.dispatchEvent(setItemEvent);
        originSetItem.apply(this, arguments);
      }
    },
  }
}
</script>

<style scoped>

</style>
