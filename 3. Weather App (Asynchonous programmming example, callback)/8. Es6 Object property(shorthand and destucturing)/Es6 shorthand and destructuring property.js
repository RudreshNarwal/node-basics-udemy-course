// Object property shorthand  - object who's keys have the same name as the variables
// passed-in as properties, you can use the shorthand and simply pass the key name.

// const name = 'Andrew'
// const userAge = 27
//
// const user = {
//     name,
//     age: userAge,
//     location: 'Philadelphia'
// }
//
// console.log(user)

// Object destructuring ->  extract properties from objects and bind them to variables.

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}
//
// const label = product.label
// // const stock = product.stock
//
// const {label:productLabel, stock, rating = 5} = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}

transaction('order', product)