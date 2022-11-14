import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            cart: []
        }
    },
    mutations: {
        pushProduct(state, data){
            state.cart.push(data);
        }
    },
    actions: {
        setProduct({ commit }, data){
            commit('pushProduct', data)
        }
    }
})

export default store;