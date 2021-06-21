import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    jokes: []
  },
  getters: {
    getJokes: state => {
      return state.jokes;
    }
  },
  mutations: {
    addaJoke(state, response) {
      state.jokes.push(response);
    },
    setAllJokes(state, response){
      state.jokes = response;
    },
    clearJokes(state){
      state.jokes = [];
      localStorage.removeItem('allJokes')
    }
  },
  actions: {
    addJoke(state) {
      axios.get('https://icanhazdadjoke.com/slack')
          .then((response) => {
            state.commit('addaJoke', response.data.attachments[0].text);
            localStorage.setItem('allJokes', state.getters.getJokes);
          })
          .catch((e) => alert(e))
    }
  },
  modules: {
  }
})
