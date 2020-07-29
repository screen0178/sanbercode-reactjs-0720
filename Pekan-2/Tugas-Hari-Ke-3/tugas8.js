// Soal 1
const pi = 3.14

// Luas Lingkaran
let circleArea = (rad) => "Luas lingkaran dengan radius " + rad + " adalah " + pi*(rad*rad)
console.log(circleArea(3))
// Keliling Lingkaran
let circleCircumference = rad => "Keliling lingkaran dengan radius " + rad + " adalah " + 2*pi*rad
console.log(circleCircumference(3))

// Soal 2
let kalimat = ""

let addWord = word => {
    kalimat = kalimat + `${word}` + " " 
}

addWord("Saya")
addWord("adalah")
addWord("seorang")
addWord("frontend")
addWord("developer")

console.log(kalimat)

// Soal 3
class Book {
    constructor(name){
        this._name = name
        this._totalPage = 60
        this._price = 2500
    }

    get name() {
        return this._name
    }

    get totalPage() {
        return this._totalPage
    }

    get price() {
        return this._price
    }
}

class Komik extends Book {
    constructor (name){
        super(name)
        this._totalPage = 200
        this._price = 30000
        this._isColorful = false
    }

    get isColorful() {
        return this._isColorful
    }
}

let blank = new Book ("Blank note")
let simuncang = new Komik ("Si Muncang")

console.log("Nama : " + blank.name)
console.log("Jumlah Halaman : " + blank.totalPage)
console.log("Price : " + blank.price)
console.log()
console.log("Nama : " + simuncang.name)
console.log("Jumlah Halaman : " + simuncang.totalPage)
console.log("Price : " + simuncang.price)
console.log("Berwarna : " + simuncang.isColorful)