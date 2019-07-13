<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="container">
    <TaskCounter />
    </div>
    <div>
      <router-link class="btn btn-secondary" to="/">Go to list</router-link>
      <router-link class="btn btn-secondary" to="/done">Go to done list</router-link>
    </div>
    <div class="container">
      <div class="comp">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import TaskCounter from './components/TaskCounter';

export default {
    name: 'app',
    components: {
      TaskCounter
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
<<<<<<< HEAD

.btn-secondary {
  margin-left: 8px;
}

.container {
  margin-top: 3em;
  display: flex;
  justify-content: center;
}

.comp + .comp {
  margin-left: 2em;
}
=======
  .nav {
    display: flex;
    justify-content: space-between;
    align-content: center;
    width: 200px;
    margin: 0 auto;
  }
>>>>>>> 1e32bdef1fc0f426935dfca8e56c0e0a287c8c19
</style>
