<template>
  <div class="hello">
    {{name}}
    <button v-on:click="changeName" v-bind:disabled="btnState">Change Name </button>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data(){
    return {
      name: 'Vue Water Testing',
      btnState: true,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
