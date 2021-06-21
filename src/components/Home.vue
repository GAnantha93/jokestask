<template>
  <div class="row">
    <div class="home col-md-4" v-for="(data, index) in $store.getters.getJokes" :key="index">
      <div class="title">Joke - {{index+1}}</div>
      <div class="box">{{data}}</div>
    </div>
    <div class="home col-md-4 buttonDiv">
      <button @click="clearJokes" class="clrBtn">Clear All</button>
      <button @click="getAJoke" class="addBtn">Add a Joke</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import axios from 'axios'
export default {
  name: 'Home',
  data: () => ({
      jokes:[],
  }),
  methods:{
    getAJoke(){
      this.$store.dispatch('addJoke');
    },
    clearJokes(){
      this.$store.commit('clearJokes');
    }
  },
  created(){
    debugger;
    if(localStorage.getItem('allJokes') != undefined && localStorage.getItem('allJokes') != '' && localStorage.getItem('allJokes') != null){
      this.$store.commit('setAllJokes', localStorage.getItem('allJokes').split(','));
    } else{
      this.getAJoke();
    }
  }
}
</script>
<style scoped>
  .title{
    padding: 20px;
    background-color: cornflowerblue;
    font-weight: 600;
    font-size: 28px;
    color: white;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
  .box{
    border: 1px solid cornflowerblue;
    padding: 20px;
    font-size: 20px!important;
    margin-bottom: 20px;
  }
  .buttonDiv{
    position: relative; 
    top: 80px;
    left: 30px;
  }
  .addBtn{
    padding: 10px;
    border-radius: 10px;
    background-color: cornflowerblue;
    color: white;
    border-color: cornflowerblue;
  }
  .clrBtn{
    padding: 10px;
    border-radius: 10px;
    margin-right: 10px;
    border-color: transparent;
  }
</style>
