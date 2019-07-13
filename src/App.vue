<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h3 class="title">Vue functional API demo</h3>
    <div class="container">
      <div class="comp">
        <TODO/>
      </div>
    </div>
  </div>
</template>

<script>
import TODO from './components/TodoV3.vue'

export default {
    name: 'app',
    components: {
      TODO
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
