function proses(){
// Harga Barang
   var hargaBarang = document.getElementById("inputHargaBarang").value;

// Jumlah Barang
   var jumlahBarang = document.getElementById("inputJumlahBarang").value;

// Total Barang
    var total= jumlahBarang*hargaBarang;
   document.getElementById("formTotalBarang").value = total;

// Rumus Diskon
   if(jumlahBarang<50){
    document.getElementById("formDiskonBarang").value= "10%";
   }else{
    document.getElementById("formDiskonBarang").value = "50%";
   }
   
// Rumus Bayar

   if(jumlahBarang<50){
    diskon = .1 * total;
   }else{
    diskon = .5 * total;
   }
   
   var hasil = total - diskon;
   document.getElementById("formBayarBarang").value=hasil;
}