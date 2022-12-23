import { createStore } from 'vuex'
import todos from './modules/todos';

//Load Vuex
// Vue.use(Vuex);

//Create store
export default createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: { todos }
})