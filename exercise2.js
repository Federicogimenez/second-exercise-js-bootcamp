const lista1 = {
    nombre: "Federick",
    age: 71,
    developer: false,
    bornDate: new Date("1951, 12, 6"),
    book: {
        title: "El Principito",
        author: "Antoine De Saint-Exupery",
        publishedDate: new Date("March 3 1995"),
        url: "https://es.wikipedia.org/wiki/El_principito",
    },
}

console.log(lista1)
console.log(lista1.developer)
console.log(lista1.age)
console.log(lista1.nombre)
console.log(lista1.bornDate.getDate(),lista1.bornDate.getMonth()+1,lista1.bornDate.getFullYear())