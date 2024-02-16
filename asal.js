function calculatePrime() {
	class CalculateNumberPrime {
		constructor(value) {
			this.value = value;
		}
		calculate() {
			if (this.value === "") {
				Swal.fire("Lütfen boş bırakmayınız");
				return;
			}

			let asalSayi = true;
			if (this.value <= 1) {
				asalSayi = false;
			} else {
				for (let i = 2; i < this.value; i++) {
					if (this.value % i === 0) {
						asalSayi = false;
						break;
					}
				}
			}
			if (asalSayi) {
				Swal.fire(this.value + " sayısı asaldır");
			} else {
				Swal.fire(this.value + " sayısı asal değildir");
			}
		}
	}
	const inputValue = document.getElementById("ınputDeger").value;
	const calculateNumberPrime = new CalculateNumberPrime(inputValue);
	calculateNumberPrime.calculate();
}
