import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            cart: [],
            product: {}
        }
    },
    mutations: {
        pushProduct(state, data){
            let a = (localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : [] );
            a.push(data);
            state.cart = a;
            localStorage.setItem('state', JSON.stringify(this.state.cart));
        },
        deleteProducts(state, data){
            state.cart = data;
            localStorage.setItem('state', '[]');
        },
        restoreProducts(state, data){
            state.cart = data;
        },
        setProductObj(state, data){
            state.product = data;
        }
    },
    actions: {
        setProduct({ commit }, data){
            commit('pushProduct', data)
        },
        clearProduct({ commit }, data){
            commit('deleteProducts', data)
        },
        restoreCart({ commit }, data){
            commit('restoreProducts', data)
        },
        setObj({ commit }, data){
            commit('setProductObj', data)
        }
    },
    getters: {
        getTotalPrice(state) {
            let s = 0;
            for (let elem of state.cart) {
                s += elem.price
            }
            return s
        },
        getProductObj(state) {
            return state.product
        }
    }
})

export default store;