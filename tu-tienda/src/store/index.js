import Vue from 'vue'
import Vuex from 'vuex'

import app from '../firebase'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        productos:[]
    },
    mutations: {
        setProductos(state,value){
            state.productos = value;
        }
        // increment(state) {
        //     state.count++
        }
    },
    actions : {        getProductos({commit}){
            const listas = []
            app.database().ref("productos").on("value", data=>{
                //limpiar la colección 
                for(var i=list.length-1; i>=0; i--){
                    list.splice(i,1);
                }
                // firebase
                data.foreach(obj =>{
                    let p = obj.val()
                    p.id = obj.key
                    list.push(p);
                })
                    
                })

                //enviar la colección a mutation
                commit('',list)
            }
        },

        modules:{
            
        }