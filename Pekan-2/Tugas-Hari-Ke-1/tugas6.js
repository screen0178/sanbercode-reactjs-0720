// Soal 1
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]
var objDaftarPeserta = {
    nama : "Asep",
    "jenis kelamin" : "laki-laki",
    hobi : "baca buku",
    "tahun lahir" : 1992
}


// Soal 2
/*
    1.nama: strawberry
    warna: merah
    ada bijinya: tidak
    harga: 9000 
    2.nama: jeruk
    warna: oranye
    ada bijinya: ada
    harga: 8000
    3.nama: Semangka
    warna: Hijau & Merah
    ada bijinya: ada
    harga: 10000
    4.nama: Pisang
    warna: Kuning
    ada bijinya: tidak
    harga: 5000
*/

var dataBuah = [
    {nama : "strawberry", warna : "merah", "ada bijinya" : "tidak", harga : 9000},
    {nama : "jeruk", warna : "oranye", "ada bijinya" : "ada", harga : 8000},
    {nama : "Semangka", warna : "Hijau & Merah", "ada bijinya" : "ada", harga : 10000},
    {nama : "Pisang", warna : "Kuning", "ada bijinya" : "tidak", harga : 5000}
]

console.debug(dataBuah[0])


// Soal 3
var dataFilm = []

function addData(nama, durasi, genre, tahun) {
    var temp = {}
    temp.nama = nama
    temp.durasi = durasi
    temp.genre = genre
    temp.tahun = tahun

    dataFilm.push(temp)
}

addData("The Avenger", "3 jam lah", "Action semua", 2019)
addData("Captain America", "2 jam lah", "Action semua", 2018)
addData("The Hawkeye", "Gatau ey", "Action semua", 2022)

console.debug(dataFilm)


// Soal 4

// Release 0
class Animal {
    constructor(name){
        this.name = name
        this._legs = 4
        this._cold_blooded = false
    }

    get legs() {
        return this._legs
    }

    get cold_blooded() {
        return this._cold_blooded
    }
}
 
var sheep = new Animal("shaun");
 
console.log(sheep.name)
console.log(sheep.legs)
console.log(sheep.cold_blooded)


// Release 1
class Ape extends Animal {
    constructor(name) {
        super(name)
        this._legs = 2
    }
    yell() {
        return console.log("Auooo")
    }
}

class Frog extends Animal {
    constructor(name) {
        super(name) 
    }
    jump() {
        return console.log("hop hop")
    }
}

var sungokong = new Ape("kera sakti")
sungokong.yell()
 
var kodok = new Frog("buduk")
kodok.jump() 


// Soal 5

class Clock {
    constructor({template = 'h:m:s'}) {
        this.template = template
        this.timer
    }

    render(){
        var date = new Date()

        var hours = date.getHours()
        if (hours < 10) hours = '0' + hours
  
        var mins = date.getMinutes()
        if (mins < 10) mins = '0' + mins
    
        var secs = date.getSeconds()
        if (secs < 10) secs = '0' + secs

        var output = this.template.replace('h', hours).replace('m', mins).replace('s', secs)

        console.log(output)
    }

    stop() {
        clearInterval(this.timer)
    }

    start() {
        this.render()
        var t = this
        this.timer = setInterval(function(){t.render()},1000)
    }
}
  
var clock = new Clock({template: 'h:m:s'});
clock.start(); 