// const person = {
    
//     age: 24,
//     location:{
//         city: 'mp',
//         temp: 100
//     }
// }
// const {name='anonymous',age} = person
// console.log(`${name} and ${age}`)
// // without object destructuring
// // const name  = person.name
// // const age  = person.age
// // console.log(`${name} and ${age}`)

// // with object destructuring
// const {name:fistname='anonymous',age} = person
// console.log(`${name} and ${age}`)

// // // without object destructuring
// // const city = person.location.city
// // const temp = person.location.temp
// // console.log(`${city} and ${temp}`)

// // with object destructuring
// const {city,temp:temperature} = person.location
// console.log(`${city} and ${temperature}`)

// const book={
//     title:'abcd',
//     author:'Ryan',
//     publisher:{
//         // name:'Penguin'
//     }
// }

// const {name:publisherName='Self-Published'} = book.publisher

// console.log(publisherName)

// const address = ['albama','tenesee','ny']
// console.log(`${address[0]}`)
// const [street,city,country] = address
// console.log(`${street} and ${city}`)
//not necessary to have destructure varibales equal to number of elements
//if some positions are to be left then they can be separated by comma
//const[,,country]  --  third element of array will be assgned variable
// renaming concept that is using : is not there as in objects
// defaults can be set like objects like const[,,country='oklahoma'], even if there is no item then as per this example the third item will be assigned the default name

const item = ['coffee(hot)','$2.00','$2.50','$2.75']
const [coffee,,price,]=item
console.log(`A medium ${coffee} costs ${price} `)