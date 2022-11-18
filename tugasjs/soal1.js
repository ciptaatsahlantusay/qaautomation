const prompt = require('prompt-sync')({sigint: true});
const number = prompt("Masukan angka untuk menghitung akar pangkat dua-nya? ");

if (!Number(number)){
    console.log("Tidak bisa input bukan angka")
}else if(number < 0 ){
    console.log("Tidak bisa input bilangan negatif.");
}else if(number % 2 != 0) {
    console.log("Tidak bisa input bilangan ganjil.");
}
else {
    console.log('Akar pangkat duanya adalah '+Math.sqrt(number));
}