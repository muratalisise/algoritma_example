const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
	class CalculateExam {
		constructor(sinav1, sinav2, performans, sozlu, ort) {
			this.sinav1 = sinav1;
			this.sinav2 = sinav2;
			this.performans = performans;
			this.sozlu = sozlu;
			this.ort = ort;
		}
		calculate() {
			if (this.sinav1 === "" || this.sinav2 === "" || this.performans === "" || this.sozlu === "") {
				Swal.fire("Lütfen boş bırakmayınız");
				return;
			}
			if (!isNaN(sinav1) && !isNaN(sinav2) && !isNaN(performans) && !isNaN(sozlu)) {
				if (ort >= 50) {
					Swal.fire("sınıftan geçti " + ort);
				} else {
					Swal.fire("sınıfta kaldı " + ort);
				}
			} else {
				console.log("Lütfen geçerli sayısal değerler giriniz.");
			}
		}
	}
	const sinav1 = Number(document.getElementById("sinav1").value);
	const sinav2 = Number(document.getElementById("sinav2").value);
	const performans = Number(document.getElementById("performans").value);
	const sozlu = Number(document.getElementById("sozlu").value);
	const ort = (sinav1 + sinav2 + performans + sozlu) / 4;
	const calculateExam = new CalculateExam(sinav1, sinav2, performans, sozlu, ort);
	calculateExam.calculate();
})
