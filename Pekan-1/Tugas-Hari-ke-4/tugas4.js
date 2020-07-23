// Soal 1
var i = 1;

// Looping Pertama
console.log("LOOPING PERTAMA");
while (i < 20 ) {
    console.log((i+1) + " - I love coding")
    i++;
}

// Looping Kedua
console.log("LOOPING KEDUA");
while (i >= 2) {
    console.log(i + " - I will become a frontend developer");
    i--;
}

// Soal 2
for (var i = 1; i <= 20;i++){
    if (i % 2 == 0) {
        console.log(i + " - Berkualitas");
    } else if (i % 2 != 0 && i % 3 == 0){
        console.log(i + " - I Love Coding ");
    } else {
        console.log(i + " - Santai");
    }
}

// Soal 3
for (var i = 1; i <= 7; i++){
    for (var j = 1; j <= i; j++){
        process.stdout.write("*");
    }
    console.log()
}

// Soal 4
var kalimat="saya sangat senang belajar javascript"
var jawaban = kalimat.split(" ");
console.log(jawaban);

// Soal 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah = daftarBuah.sort();
for (var i = 0; i < daftarBuah.length; i++){
    console.log(daftarBuah[i]);
}