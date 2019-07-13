<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
<<<<<<< HEAD
    <h3 class="title">Vue functional API demo</h3>
    <div class="container">
      <div class="comp">
        <TODO/>
      </div>
    </div>
=======
    <div>
      <router-link to="/">Go to list</router-link>
      <router-link to="/done">Go to done list</router-link>
    </div>
    <router-view></router-view>
>>>>>>> d69c9e8d24f213bed94f88b07a21feec826b885d
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

.container {
  margin-top: 3em;
  display: flex;
  justify-content: center;
}

.comp + .comp {
  margin-left: 2em;
}
</style>
