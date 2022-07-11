// Operaciones en los arreglos
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

// Añadir elementos al array
// tecnologias.push('GraphQL') // Añade al final del array
// tecnologias.unshift('GraphQL') // Añade al principio del array

// const nuevoArreglo = [...tecnologias, 'GraphQL']
// console.log(nuevoArreglo)
// const nuevoArreglo = ['GraphQL', ...tecnologias]
// console.log(nuevoArreglo)

// Eliminar elementos del array
// tecnologias.pop() // Elimina del final
// console.log(tecnologias)
// tecnologias.shift() // Elimina del inicio
// console.log(tecnologias)
// tecnologias.splice(2, 3) // Elimina de una posición en especifica
// console.log(tecnologias)
// const nuevoArray = tecnologias.filter( function(tech) {
//     return tech === 'React'
// })
// console.log(nuevoArray)

// Reemplazar del array
// tecnologias[0] = 'GraphQL'

const nuevoArray = tecnologias.map( function(tech) {
    if(tech === 'HTML') {
        return 'GraphQL'
    } else {
        return tech
    }
})

console.log(tecnologias)
console.log(nuevoArray)