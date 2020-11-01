<template>
  <div class="left-menu">
    <router-link to="/">tabyju</router-link>
    <router-link to="/detail">detail</router-link>
  </div>
</template>

<script>
export default {
  name: "LeftMenu",
};
</script>

<style lang="scss" scoped>
.left-menu {
  width: 20%;
  height: 100%;
  background-color: rgb(40, 80, 95);
}
</style>