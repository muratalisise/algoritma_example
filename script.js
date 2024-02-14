//* Mükemmel sayı bulma
function mukemmelHesapla(){
    const inputDeger = document.getElementById("degerInput").value;
    var toplam = 0 ;

    for (let i = 1; i < inputDeger; i++) {
        if(inputDeger % i == 0){
            toplam += i;
        }
    }
    if(inputDeger == toplam){
        alert("Mükemmel sayıdır");
    } else {
        alert("Mükemmel sayı değildir");
    }
}

//* Asal sayı bulma
var text = "";
var sayi = 0;

function asalHesapla() {
    var sayac = 0;
    sayi = document.getElementById('ınputDeger').value; 

    if (sayi <= 1) { 
        text = "Asal değil.";
    } else {
        for (var i = 2; i <= Math.sqrt(sayi); i++) { 
            if (sayi % i === 0) {
                sayac++;
            }
        }
        if (sayac === 0) {
            text = "Asal";
        } else {
            text = "Asal değil"
        }
    }
    alert(text);
}

//* Tek ders ortalamasını hesaplayıp geçti kaldı yazma projesi
const btn = document.getElementById("btn"); 
btn.addEventListener("click", function(){
    const sinav1 = parseFloat(document.getElementById("sinav1").value);
    const sinav2 = parseFloat(document.getElementById("sinav2").value);
    const performans = parseFloat(document.getElementById("performans").value);
    const sozlu = parseFloat(document.getElementById("sozlu").value);
    
    if (!isNaN(sinav1) && !isNaN(sinav2) && !isNaN(performans) && !isNaN(sozlu)) {
        const islem = (sinav1 + sinav2 + performans + sozlu) / 4;
		if(islem >= 50){
			alert("sınıftan geçti " , islem);
		}else{
			alert("sınıfta kaldı " + islem);
		}
        console.log(islem);
    } else {
        console.log("Lütfen geçerli sayısal değerler giriniz.");
    }
});
//console.log(!isNaN(5));
//* Bütün derslerin ortalamasını alıp genel ortalamayı bulan geçti kaldı mesajını veren proje

const button = document.getElementById("button");

button.addEventListener("click", function(){

	const mat1 = parseFloat(document.getElementById("m1").value);
	const mat2 = parseFloat(document.getElementById("m2").value);
	const mat3 = parseFloat(document.getElementById("m3").value);
	const mat4 = parseFloat(document.getElementById("m4").value);	
	const mat5 = document.getElementById("m5");
	
	const turkce1 = parseFloat(document.getElementById("t1").value);
	const turkce2 = parseFloat(document.getElementById("t2").value);
	const turkce3 = parseFloat(document.getElementById("t3").value);
	const turkce4 = parseFloat(document.getElementById("t4").value);
	const turkce5 = document.getElementById("t5");

	const sosyal1 = parseFloat(document.getElementById("s1").value);
	const sosyal2 = parseFloat(document.getElementById("s2").value);
	const sosyal3 = parseFloat(document.getElementById("s3").value);
	const sosyal4 = parseFloat(document.getElementById("s4").value);
	const sosyal5 = document.getElementById("s5");

	const edebiyat1 = parseFloat(document.getElementById("e1").value);
	const edebiyat2 = parseFloat(document.getElementById("e2").value);
	const edebiyat3 = parseFloat(document.getElementById("e3").value);
	const edebiyat4 = parseFloat(document.getElementById("e4").value);
	const edebiyat5 = document.getElementById("e5");

	const dilanlatim1 = parseFloat(document.getElementById("d1").value);
	const dilanlatim2 = parseFloat(document.getElementById("d2").value);
	const dilanlatim3 = parseFloat(document.getElementById("d3").value);
	const dilanlatim4 = parseFloat(document.getElementById("d4").value);
	const dilanlatim5 = document.getElementById("d5");

	const textInput = document.getElementById("textInput");
	//Matematik dersi ortalana alma
	if (!isNaN(mat1) && !isNaN(mat2) && !isNaN(mat3) && !isNaN(mat4)) {
        const sonuc1 = (mat1 + mat2 + mat3 + mat4) / 4;
			console.log("Matematik ortalama " + sonuc1);
			mat5.value = sonuc1;
		} else {
        alert("Lütfen geçerli sayısal değerler giriniz.");
    }
	// türkçe dersi ortalama alma
	if (!isNaN(turkce1) && !isNaN(turkce2) && !isNaN(turkce3) && !isNaN(turkce4)) {
        const sonuc2 = (turkce1 + turkce2 + turkce3 + turkce4) / 4;
			console.log("Türkçe " + sonuc2);
			turkce5.value = sonuc2;
		} else {
        alert("Lütfen geçerli sayısal değerler giriniz.");
    }
	//Sosyal dersi ortalama alma
	if (!isNaN(sosyal1) && !isNaN(sosyal2) && !isNaN(sosyal3) && !isNaN(sosyal4)) {
        const sonuc3 = (sosyal1 + sosyal2 + sosyal3 + sosyal4) / 4;
			console.log("Sosyal " + sonuc3);
			sosyal5.value = sonuc3;
		} else {
        alert("Lütfen geçerli sayısal değerler giriniz.");
    }
	// Edebiyat dersi ortalama alma 
	if (!isNaN(edebiyat1) && !isNaN(edebiyat2) && !isNaN(edebiyat3) && !isNaN(edebiyat4)) {
        const sonuc4 = (edebiyat1 + edebiyat2 + edebiyat3 + edebiyat4) / 4;
			console.log("Edebiyat " + sonuc4);
			edebiyat5.value = sonuc4;
		} else {
        alert("Lütfen geçerli sayısal değerler giriniz.");
    }
	// Dil ve anlatım dersi ortalama alma
	if (!isNaN(dilanlatim1) && !isNaN(dilanlatim2) && !isNaN(dilanlatim3) && !isNaN(dilanlatim4)) {
        const sonuc5 = (dilanlatim1 + dilanlatim2 + dilanlatim3 + dilanlatim4) / 4;
			console.log("Dil Ve anlatım ortalama " + sonuc5);
			dilanlatim5.value = sonuc5;
		} else {
        alert("Lütfen geçerli sayısal değerler giriniz.");
    }
	// Genel prtalmayı bulup sınıftan geçip geçmediğini kontrol etme
	if (!isNaN(mat5) && !isNaN(turkce5) && !isNaN(sosyal5) && !isNaN(edebiyat5) && !isNaN(dilanlatim5)) {
		// Tüm notlar geçerliyse, ortalama hesapla
		const sonuc6 = (parseFloat(mat5) + parseFloat(turkce5) + parseFloat(sosyal5) + parseFloat(edebiyat5) + parseFloat(dilanlatim5)) / 5;
		console.log("Genel ortalama: " + sonuc6);
		// Ortalama 50 veya üstündeyse
		if (sonuc6 >= 50) {
			console.log("ASDASDASD " + sonuc6);
			alert("Sınıftan geçtiniz! Tebrikler!") 
		} else {
			// Ortalama 50'den düşükse
			alert("Sınıfta kaldınız!") 
		}
	} else {
		// Geçersiz notlar varsa
		console.log("Lütfen geçerli notları giriniz.");
	}
	
});
