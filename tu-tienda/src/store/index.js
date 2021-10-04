// import {createStore} from 'vuex'

// export default createStore({
//     state: {
//         productos:[]
//     },
//     mutations: {
//         setProducto(state, payload) {
//             state.productos = payload
//             console.log(state.productos)
//         }
//     },
//     actions:{
//         async fetchData({commit}){
//             try{
//                 const res = await fetch('../public/productos.json')
//                 const daa = await res.json()
//                 commit('SetProducto', data)
//             }
//             catch (error){
//                 console.log(error)
//             }
//         }

//     },
//     modules:{

//     },
// })