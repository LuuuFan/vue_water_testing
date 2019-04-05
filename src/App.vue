<template>
  <div id="app">
    <nav>
      <router-link to='/'>Home</router-link>
      <router-link to='/about'>About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import Header from './components/header.vue'

export default {
  name: 'app',
  components: {
    Header
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
  width: 50%;
  margin: 60px auto;
}
nav {
  padding: 20px 20px 20px 0;
}
nav a{
  padding: 10px;
  text-decoration: none;
  border-raiuds: 3px;
  color: rgb(0, 110, 255);
  font-weight: bold;
  margin-right: 15px;
}
</style>
