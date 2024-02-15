// * mükemmel sayı bulma

// inputtan değer al 
// girilen sayı eşit olana kadar sayıyı tek tek arttır 
// girilen sayıların bölenlerin toplamı o sayının iki katına eşit ise o bir mükemmel sayıdır

function mukemmelHesapla() {
	const degerInput = document.getElementById("degerInput").value;
	let sayiToplam = 0;

	for (let i = 1; i < degerInput; i++) {
		if (degerInput % i == 0) {
			sayiToplam += i;
		}
	}

	if (degerInput === sayiToplam) {
		alert("mükemmel sayıdır");
	} else {
		alert("mükemmel sayı değildir");
	}
}
