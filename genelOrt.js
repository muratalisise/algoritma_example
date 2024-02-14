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
	if (!isNaN(mat5.value) && !isNaN(turkce5.value) && !isNaN(sosyal5.value) && !isNaN(edebiyat5.value) && !isNaN(dilanlatim5.value)) {
		// Tüm notlar geçerliyse, ortalama hesapla
		const sonuc6 = (parseFloat(mat5.value) + parseFloat(turkce5.value) + parseFloat(sosyal5.value) + parseFloat(edebiyat5.value) + parseFloat(dilanlatim5.value)) / 5;
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
