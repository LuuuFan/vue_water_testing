<template>
  <div class="hello">
    <h3>{{name}}</h3>
    <div class='holder'>
      <form @submit.prevent="addSkill">
        <input type="text" placeholder="Please input the skill you have" v-model="skill" v-validate="'min:5'" name='skill'>
        {{skill}}
        <transition name='alert-in' enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
          <p class="alert" v-if="errors.has('skill')">{{errors.first('skill')}}</p>
        </transition>  
      </form>
      <ul>
        <transition-group name='list' enter-active-class="animated bounceInUp" leave-active-class="animated bounceoutDown">
          <li v-for="(data, index) in skills" :key='index'>
            {{data.skill}}
            <i class="fa fa-minus-circle" v-on:click="remove(index)"></i>
          </li>
        </transition-group>
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
      this.$validator.validateAll().then(result => {
        if (result) {
          this.skills.push({skill: this.skill});
          this.skill = '';
        } else {
          console.log('input not valid');
        }
      })
    },
    remove(id){
      this.skills.splice(id, 1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
h3 {
  margin: 40px 0 0;
}
input{
  box-sizing: border-box;
  border: 1px solid lightgray;
  padding: 20px 0;
  width: 100%;
  text-indent: 20px;
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
  border-left: 5px solid #2c3e50;
  text-align: left;
  margin-bottom: 2px;
  padding: 5px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
li:hover{
  transform: translateY(1px);
  transition: all .8s;
}
a {
  color: #42b983;
}
.alert{
  background-color: #fdf2ce;
  margin-top: -20px;
  padding: 5px;
  display: inline-block;
  font-weight: bold;
}
.border{
  border: 2px solid black;
}

.alert-in-enter-active{
  animation: bounce-in .5s;
}

.alert-in-leave-active{
  animation: bounce-in .5s reverse;
}

@keyframes boundce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
