function proses(){
    let hargaRumah;
    let uangMuka = .2;
    const tipeRumah = document.getElementById("tipe").value;
    let lamaKredit = parseInt(document.getElementById("lamaKredit").value);
    let Angsuran=4000000;

    if(lamaKredit==0){
        alert("Masukkan Lama Kredit Terlebih Dahulu");

        return;
    }
    // Tipe Rumah
    if(tipeRumah == "Mawar"){
        hargaRumah=130000000;
    }else if(tipeRumah == "Alamanda"){
        hargaRumah=120000000;
    }else{
        alert("Pilih Tipe Rumah Terlebih Dahulu");
        return;
    }
    // Uang muka
    let hasiluang = uangMuka * hargaRumah;
    
    // Sisa
    let hasilSisa = hargaRumah - hasiluang;
    let bulan = "";
    let oangsur = "";
    let total = "";
    let angsur = 0;
    let totalangsur=hasilSisa-angsur;

    let x=lamaKredit;
    for(let i=1; i<=x; i++){
        bulan += i + "<br>";
        oangsur += Angsuran + "<br>";
        totalangsur -= 4000000;
        total += totalangsur + "<br>";
    }
    // Tampilkan
    document.getElementById("tipeRumah").innerHTML=tipeRumah;
    document.getElementById("hargaRumah").innerHTML=hargaRumah;
    document.getElementById("uangMuka").innerHTML=hasiluang;
    document.getElementById("sisa").innerHTML=hasilSisa;
    document.getElementById("Kredit").innerHTML=lamaKredit;
    document.getElementById("angsuran").innerHTML=Angsuran;
    document.getElementById("obulan").innerHTML=bulan;
    document.getElementById("oangsur").innerHTML=oangsur;
    document.getElementById("osisa").innerHTML=total;
}