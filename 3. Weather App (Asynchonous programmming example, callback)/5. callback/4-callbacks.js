// Callback: callback function is a function which we provide
// as an argument to another function with the intention of having it called later on.

// setTimeout(() => {
//     console.log('Two seconds are up')
// }, 2000)

// const names = ['Andrew', 'Jen', 'Jess']
// const shortNames = names.filter((name) => {
//     return name.length <= 4
// })


// ---- Why we need callback ---////
// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
//
//         return data;
//     }, 2000)
// }
//
// console.log(geocode('Philadelphia'))
//
// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
//
//         callback(data)
//     }, 2000)
// }
//
// geocode('Philadelphia', (data) => {
//     console.log(data)
// })


// ------Example 2------////
// const add = (a, b, callback) => {
//     setTimeout(() => {
//         callback(a + b)
//     }, 2000)
// }
//
// add(1, 4, (sum) => {
//     console.log(sum) // Should print: 5
// })