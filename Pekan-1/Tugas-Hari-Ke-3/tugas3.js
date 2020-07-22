// Soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

var kataKeempatUpercase = kataKeempat.toUpperCase();
var jawaban = kataPertama.concat(" "+kataKedua+" ", kataKetiga+" ", kataKeempatUpercase);
console.log(jawaban)

// Soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

var jumlah = Number(kataPertama) + Number(kataKedua) + Number(kataKetiga) + Number(kataKeempat);
console.log(jumlah)

// Soal 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 14); 
var kataKetiga = kalimat.substring(15, 18); 
var kataKeempat = kalimat.substring(19, 24); 
var kataKelima = kalimat.substring(25, 31); 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);

// Soal 4
var nilai = 45;
var indeks;

if (nilai >= 80) {
    indeks = "A";
} else if (nilai <= 80 && nilai >= 70) {
    indeks = "B"
} else if (nilai <= 70 && nilai >= 60) {
    indeks = "C"
} else if (nilai <= 60 && nilai >= 50) {
    indeks = "D"
} else if (nilai < 50) {
    indeks = "E"
}

console.log(indeks);

// Soal 5
var tanggal = 22;
var bulan = 7;
var tahun = 2020;
var bulanStr;

switch(bulan) {
    case 1:
        bulanStr = "Januari";
        break;
    case 2:
        bulanStr = "Februari";
        break;
    case 3:
        bulanStr = "Maret";
        break;
    case 4:
        bulanStr = "April";
        break;
    case 5:
        bulanStr = "Mei";
        break;
    case 6:
        bulanStr = "Juni";
        break;
    case 7:
        bulanStr = "Juli";
        break;
    case 8:
        bulanStr = "Agustus";
        break;
    case 9:
        bulanStr = "September";
        break;
    case 10:
        bulanStr = "Oktober";
        break;
    case 11:
        bulanStr = "November";
        break;
    case 12:
        bulanStr = "Desember";
        break;
  }

  var jawaban = tanggal.toString() + " " + bulanStr + " " + tahun.toString();
  console.log(jawaban)

