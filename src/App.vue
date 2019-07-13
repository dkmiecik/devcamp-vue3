<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <nav class="nav">
      <router-link class="nav-link" to="/">Go to list</router-link>
      <router-link class="nav-link" to="/done">Go to done list</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
    name: 'app',
    components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .nav {
    display: flex;
    justify-content: space-between;
    align-content: center;
    width: 200px;
    margin: 0 auto;
  }
</style>
