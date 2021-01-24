<template>
  <div class="cont">
    <Header />

    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: { Header },
  data() {
    return {
      //
    };
  }
};
</script>

<style lang="scss">
body {
  overflow: hidden;
}

.cont {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100%;
  /*background-color: #2c3e50;*/
  display: flex;
  flex-direction: column;

  v-toolbar {
    flex: 1;
  }

  main {
    flex: 1;
    background-color: lightgray;
    display: flex;
    height: 100%;

    .item {
      flex: 1;
      border: 1px solid;
      overflow-y: scroll;
      padding-bottom: 150px;
    }
  }
}
</style>
