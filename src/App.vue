<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" width="25%"> -->
    <!-- <Hello msg="Hello Vue in CodeSandbox!" /> -->
    <!-- <Home msg="Hello Vue in CodeSandbox!" /> -->
    <!-- <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link> -->
    <!-- <router-link to="/bar">Go to Bar</router-link> -->

    <!-- <h1>aiueo</h1> -->
    <div class="container">
      <LeftMenu />
      <div class="main-container">
        <Header />
        <router-view></router-view>
      </div>
    </div>
    <!-- <router-link to="/">フォールガイズ</router-link> -->
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
// import Home from "./components/Home";
import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";
// import Hello from "./components/Hello";

export default {
  name: "App",
  components: {
    Header,
    LeftMenu,
    // Hello,
  },
};
</script>

<style lang="scss" scoped>
#app {
  width: 100%;
  height: 100%;
}
.container {
  display: flex;
  width: 100%;
  height: 100%;

  .main-container {
    width: 100%;
    height: 100%;

    router-view {
      width: 100%;
      height: 100%;
    }
  }
}
</style>