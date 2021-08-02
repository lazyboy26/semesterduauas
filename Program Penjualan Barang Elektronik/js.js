function proses(){
    let usb = document.getElementById("pilihan usb").checked;
    let memo = document.getElementById("pilihan memory").checked;
    let speaker = document.getElementById("pilihan speaker").checked;
    let total = document.getElementById("total").value;
    let jumlah = document.getElementById("jumlah").value;
    let harga = document.getElementById("harga").value;
    let pajak = document.getElementById("pajak").value;
    let bayar = document.getElementById("bayar").value;
    // Check usb
    if(usb==true){
        document.getElementById("harga").value="50.000";
        harga=50000;
        harga*jumlah;
    }
    // Check memory
    if(memo==true){
        document.getElementById("harga").value="120.000";
        harga=120000;
        harga*jumlah;
    }
    // Check Speaker
    if(speaker==true){
        document.getElementById("harga").value="40.000";
        harga=40000;
        harga*jumlah;
    }
    // Check Semua
    if(speaker==true && memo==true && usb==true){
        document.getElementById("harga").value="210.000";
        harga=40000+120000+50000;
        harga*jumlah;
    }
    // Hitung Total
    total=harga*jumlah;
    document.getElementById("total").value=total;
    // Pajak
    pajak=total*.1;
    document.getElementById("pajak").value=pajak;
    // Bayar
    bayar = total-pajak;
    document.getElementById("bayar").value=bayar;
}