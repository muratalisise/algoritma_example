/**
 * * Mükemmel Sayı Bulma
 * 
 * Mükemmel sayı: Bir sayının tam bölemlerinin toplamı sayının 2 katına eşitse o sayı mük. sayıdır.
 * 
 * sayının tam bölenlerini bul
 * - sıfırdan sayıya kadar olanları al
 * - tek tek sayıya tam bölünüyor mu kontrol et
 * - bölünenleri topla
 * sayının 2 katını bul
 * eşitse mükemmel sayı
 * 
 */


class PerfectNumber {

	/**
	 * @param {Number} value 
	 * @returns {Boolean}
	 */
	calculate(value) {
		let sum = 0;

		for (let i = 1; i < value + 1; i++) {
			if (value % i === 0) {
				sum = i + sum;
			}
		}

		if (sum === value * 2) {
			alert("Mükemmel sayıdır");
		}
		else {
			alert("Mükemmel sayı değildir.");
		}
	}
}
