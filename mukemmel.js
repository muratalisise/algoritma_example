function perfectNumberSearch() {
	class PerfectNumber {
		constructor(deger) {
			this.deger = deger;
		}
		calculate() {
			let sayiToplam = 0;
			if (this.deger === "") {
				Swal.fire("Lütfen boş bırakmayınız");
				return;
			}
			for (let i = 1; i < this.deger; i++) {
				if (this.deger % i === 0) {
					sayiToplam += i;
				}
			}
			if (this.deger == sayiToplam) {
				Swal.fire("Mükemmel sayıdır");
			} else {
				Swal.fire("Mükemmel sayı değildir");
			}
		}
	} 
	let input = document.getElementById("infoInput").value;
	let perfectNumber = new PerfectNumber(input);
	perfectNumber.calculate();
}
