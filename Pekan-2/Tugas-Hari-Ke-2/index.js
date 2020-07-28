var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

function read(time, index){
    readBooks(time, books[index], function(check) {
        index ++
        if (check > 0 && index < books.length) {
            read(check, index)
        }
    })
    
}

read(10000,0)