//* tek ders ortalamasını alan algoritma
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
