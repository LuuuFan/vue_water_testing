<template>
  <div class="hello">
    <h3>{{name}}</h3>
    <div class='holder'>
      <form @submit.prevent="addSkill">
        <input type="text" placeholder="Please input the skill you have" v-model="skill">
      </form>
      {{skill}}
      <ul>
        <li v-for="(data, index) in skills" :key='index'>{{data.skill}}</li>
      </ul>
      <p>You have {{skills.length > 1 ? "more than 1" : skills.length}} skill{{skills.length >=1 ? 's' : ''}}</p>
      <!-- <div v-bind:class="alertObject"></div> -->
      <!-- <div v-bind:style="{backgroundColor: bgColor, width: bgWidth, height: bgHeight, margin: margin}"></div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data(){
    return {
      name: 'Vue Water Testing',
      skill: '',
      checked: false,
      skills: [
        {"skill": "React"},
        {"skill": "Vue.js"},
      ],
      // alertObject: {
      //   alert: true,
      //   border: false,
      // },
      // bgColor: 'green',
      // bgWidth: '50%',
      // margin: '5px auto',
      // bgHeight: '20px',
    }
  },
  methods: {
    addSkill(){
      this.skills.push({skill: this.skill});
      this.skill = '';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
input{
  box-sizing: border-box;
  border: 1px solid lightgray;
  padding: 5px 0;
  text-indent: 15px;
  width:100%;
  margin-bottom: 5px;
  outline: none;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
}
li {
  background-color: lightblue;
  border-left: 2px solid #42b983;
  text-align: left;
  margin-bottom: 2px;
  padding: 5px;
  color: white;
}
li:hover{
  transform: translateY(1px);
  transition: all .8s;
}
a {
  color: #42b983;
}
.alert{
  background-color: red;
  width: 50%;
  margin: 0 auto;
  height: 30px;
}
.border{
  border: 2px solid black;
}
</style>
