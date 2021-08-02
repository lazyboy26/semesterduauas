function proses(){
    let motor = document.getElementById("motor").value;

    let velg = document.getElementById("pilihanacc 1");
    let helm = document.getElementById("pilihanacc 2");
    let jaket = document.getElementById("pilihanacc 3");
    let tunai = document.getElementById("pilihanbayar 1");
    let kredit = document.getElementById("pilihanbayar 2");

    let total = document.getElementById("total").value;

    let honda= 15000000;
    let yamaha= 14000000;
    let suzuki= 13000000;
    // Pilih motor
    switch (motor) {
        case "Honda":
            motor=honda;
            document.getElementById("harga").value=motor; 
            break;
            case "Yamaha":
            motor=yamaha;
            document.getElementById("harga").value=motor; 
            break;
            case "Suzuki":
            motor=suzuki;
            document.getElementById("harga").value=motor; 
            break;
    
        default:
            // alert("Pilih Merk Motor Terlebih Dahulu!")
            break;
    }
    // Pilih Aksesoris
    if(velg.checked){
        let hargavelg=450000 + motor;

        document.getElementById("harga").value=hargavelg;
    }else if(helm.checked){
        let hargahelm=250000 + motor;

        document.getElementById("harga").value=hargahelm;
    }else if(jaket.checked){
        let hargajaket=300000 + motor;

        document.getElementById("harga").value=hargajaket;
    }else{

    }
    // Hitung kondisi aksesoris
    if(velg.checked && helm.checked && jaket.checked){
        let harga=motor+450000+250000+300000;

        document.getElementById("harga").value=harga;
    }else if(velg.checked && helm.checked){
        let harga=motor+450000+250000;

        document.getElementById("harga").value=harga;
    }else if(velg.checked && jaket.checked){
        let harga=motor+450000+300000;

        document.getElementById("harga").value=harga;
    }else if(helm.checked && jaket.checked){
        let harga=motor+250000+300000;

        document.getElementById("harga").value=harga;
    }

    // Pembayaran
    if(tunai.checked){
        let diskon = .1 * document.getElementById("harga").value;
        
        total= document.getElementById("harga").value - diskon;
        document.getElementById("total").value=total;
        
        document.getElementById("diskon").value="Mendapat Diskon 10%";
    }else if(kredit.checked){
        let hasilharga = parseInt( document.getElementById("harga").value);
        diskon=.15;

        let hitung=hasilharga*diskon;

        total=hitung+hasilharga;

        document.getElementById("total").value=total;
        
        document.getElementById("diskon").value="Mendapat Bunga 15%";
    }
}