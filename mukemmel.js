//* mükemmel sayı bulma

//inputtan değer al 
//girilen sayı eşit olana kadar sayıyı tek tek arttır 
//girilen sayıların bölenlerin toplamı o sayının iki katına eşit ise o bir mükemmel sayıdır

function mukemmelHesapla(){
	const degerInput = document.getElementById("degerInput").value;
	let sayiToplam = 0 ;  // sabit değişkene atama yaparken hata aldım const a atama yapılamıyor o nedenle let olmak zorunda
	for (let i = 1; i < degerInput; i++) {
		if(degerInput % i == 0){
			sayiToplam += i;
		}	
	}
	if(degerInput == sayiToplam){
		alert("mükemmel sayıdır");
	}else{
		alert("mükemmel sayı değildir");
	}
}	

//i 1 2 3 4 5
//sayi 0  1  3 6  10 15
 
//sayi = sayi + i

//if(degerInput == sayiToplam){
// girilen sayının sonucu sayıların toplamına eşit olduğunda buda mükemmel sayı olduğunu gösterir değilse değildir
