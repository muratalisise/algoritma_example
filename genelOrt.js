const button = document.getElementById("button");
button.addEventListener("click", function () {
	let ogrenci = {
		sinavlar: {
			dersler: {
				matematik: {
					notlar: [
						Number(document.getElementById("m1").value),
						Number(document.getElementById("m2").value),
						Number(document.getElementById("m3").value),
						Number(document.getElementById("m4").value),
						Number(document.getElementById("m5").value)
					]
				},
				turkce: {
					notlar: [
						Number(document.getElementById("t1").value),
						Number(document.getElementById("t2").value),
						Number(document.getElementById("t3").value),
						Number(document.getElementById("t4").value)
					]
				},
				sosyal: {
					notlar: [
						Number(document.getElementById("s1").value),
						Number(document.getElementById("s2").value),
						Number(document.getElementById("s3").value),
						Number(document.getElementById("s4").value)
					]
				},
				edebiyat: {
					notlar: [
						Number(document.getElementById("e1").value),
						Number(document.getElementById("e2").value),
						Number(document.getElementById("e3").value),
						Number(document.getElementById("e4").value)
					]
				},
				dil_anlatim: {
					notlar: [
						Number(document.getElementById("d1").value),
						Number(document.getElementById("d2").value),
						Number(document.getElementById("d3").value),
						Number(document.getElementById("d4").value)
					]
				}
			}
		},
		ortalama: 0,
	};
	for (const ders in ogrenci.sinavlar.dersler) {
		if (Object.hasOwnProperty.call(ogrenci.sinavlar.dersler, ders)) {
			const element = ogrenci.sinavlar.dersler[ders];
			const toplamNot = element.notlar.reduce((acc, not) => acc + not, 0);
			const adet = element.notlar.length;
			const genelOrtalama = toplamNot / adet;
			document.getElementById("textInput").innerText = genelOrtalama;
		}
	}

	//const bosAlan = [];

	//for (let i = 0; i < ogrenci.sinavlar.dersler.matematik.notlar.length; i++) {
	//	if (isNaN(ogrenci.sinavlar.dersler.matematik.notlar[i])) {
	//		const inputName = "input" + (i + 1);
	//		bosAlan.push(inputName);
	//	}
	//}
	//if (bosAlan.length > 0) {
	//	alert("Boş alanlar: " + bosAlan.join(", "));
	//}

	//Matematik dersi ortalana alma
	if (!isNaN(ogrenci.sinavlar.dersler.matematik.mat1) && !isNaN(ogrenci.sinavlar.dersler.matematik.mat2) && !isNaN(ogrenci.sinavlar.dersler.matematik.mat3) && !isNaN(ogrenci.sinavlar.dersler.matematik.mat4)) {
		const sonuc1 = (ogrenci.sinavlar.dersler.matematik.mat1 + ogrenci.sinavlar.dersler.matematik.mat2 + ogrenci.sinavlar.dersler.matematik.mat3 + ogrenci.sinavlar.dersler.matematik.mat4) / 4;
		console.log("Matematik ortalama " + sonuc1);
		console.log(ogrenci.sinavlar.dersler.matematik.mat5.innerText = sonuc1);
	}
	console.log(ogrenci.sinavlar.dersler.matematik.notlar.mat5);

	// türkçe dersi ortalama alma
	//if (!isNaN(turkce1) && !isNaN(turkce2) && !isNaN(turkce3) && !isNaN(turkce4)) {
	//	const sonuc2 = (turkce1 + turkce2 + turkce3 + turkce4) / 4;
	//	console.log("Türkçe " + sonuc2);
	//	turkce5.value = sonuc2;
	//}
	//Sosyal dersi ortalama alma
	//if (!isNaN(sosyal1) && !isNaN(sosyal2) && !isNaN(sosyal3) && !isNaN(sosyal4)) {
	//	const sonuc3 = (sosyal1 + sosyal2 + sosyal3 + sosyal4) / 4;
	//	console.log("Sosyal " + sonuc3);
	//	sosyal5.value = sonuc3;
	//}
	// Edebiyat dersi ortalama alma 
	//if (!isNaN(edebiyat1) && !isNaN(edebiyat2) && !isNaN(edebiyat3) && !isNaN(edebiyat4)) {
	//	const sonuc4 = (edebiyat1 + edebiyat2 + edebiyat3 + edebiyat4) / 4;
	//	console.log("Edebiyat " + sonuc4);
	//	edebiyat5.value = sonuc4;
	//}
	// Dil ve anlatım dersi ortalama alma
	//if (!isNaN(dilanlatim1) && !isNaN(dilanlatim2) && !isNaN(dilanlatim3) && !isNaN(dilanlatim4)) {
	//	const sonuc5 = (dilanlatim1 + dilanlatim2 + dilanlatim3 + dilanlatim4) / 4;
	//	console.log("Dil Ve anlatım ortalama " + sonuc5);
	//	dilanlatim5.value = sonuc5;
	//}	
});
