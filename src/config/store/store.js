import Vue from "vue";
import Vuex from "vuex";
//importação objeto global
import state from "./state";
//importação de mutations para adicionar os dados
import mutations from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations
});
