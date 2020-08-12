// import axios from "axios"


// export const actions = {
//   async fetchDoc({req, params, store}) {
//     const news =  await axios.get(process.env.baseURL + '/certificates.json').then(
//       res => res.data
//     )
//     return {news}
//   },
//   async fetchPressCenterById({req, params, store}, id) {
//     const news =  await axios.get(process.env.baseURL + '/certificates.json').then(
//       res => res.data.find( n => n.path === id)
//     )
//     return {news}
//   }, 
//   async fetchPressCenterByType({req, params, store}, type) {
//     const news =  await axios.get(process.env.baseURL + '/certificates.json').then(
//       res => res.data.find( n => n.type === type)
//     )
//     return {news}
//   }, 
// }