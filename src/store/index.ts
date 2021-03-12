import { createStore } from "vuex";

import axios from "axios";

import { Product } from "../interfaces/product";

export default createStore({
  state: {
    products: [
      // {
      //   name: "Banana",
      //   id: 1,
      //   isActive: true
      // },
      // { 
      //   name: "Manga",
      //   id: 2,
      //   isActive: true
      // },
      // { 
      //   name: "Abacaxi",
      //   id: 3,
      //   isActive: true
      // }
    ] as Product[]
  },
  mutations: {
    saveProduct(state, payload: Product) {
      state.products.push(payload)
    },
    setProducts(state, payload: Product[]){
      state.products = payload
    }
  },
  actions: {
    createProduct({ commit }, name: string) {
      // console.log(payload);
      axios.post('http://localhost:9900/products', {name})
        .then(res => {
          // console.log(res.data)   
          commit('saveProduct', res.data)         
        })
        .catch(err => console.log(err))
    },
    getProducts({ commit }) {
      axios.get('http://localhost:9900/products')
        .then(res => {
          // console.log(res.data)   
          commit('setProducts', res.data)         
        })
        .catch(err => console.log(err))
    }
  },
  getters: {
    showProducts: (state): Product[]  => {
      return state.products
    }
  },
  modules: {}
});
