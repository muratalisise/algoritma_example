//*Asal sayı bulma
function asalHesapla() {
    const inputDeger = document.getElementById("ınputDeger").value;
    let asalSayi = true;
    if (inputDeger <= 1) {
        asalSayi = false;
    } else {
        for (let i = 2; i < inputDeger; i++) { // en küçük asal sayı 2 olduğunda dolayı 2 den başlattım
            if (inputDeger % i === 0) {	
                asalSayi = false;
                break;
            }
        }
    }
    if (asalSayi) {
        alert(inputDeger + " sayısı asaldır");
    } else {
        alert(inputDeger + " sayısı asal değildir");
    }
}
// 1 e ve kendisine bölünen sayılara asal denir 
