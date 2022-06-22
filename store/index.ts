import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from "~/store/types"

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    helloMessage: "hello from dick",
    data: []
  },
  actions: {
    async getProducts() {
      await this.$axios.get('/games?key=228dc30275f0475cba80081605575981').then(response => this.commit('SET_DATA', response.data.results))
    }
  },
  mutations: {
    SET_DATA(state, response) {
      state.data = response
    }
  }
}

export default () => new Vuex.Store<RootState>(store)