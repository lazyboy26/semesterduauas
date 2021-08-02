function proses(){
    // variabel
    var JamKerja = document.getElementById("JamKerja").value;
    var upahPerJam = document.getElementById("PerJam").value;
    var anak = document.getElementById("Anak");
    
    document.getElementById("TunjanganAnak").value = "10%";

    // Proses
    // Gaji
    var gaji = JamKerja * upahPerJam * 31;
    document.getElementById("Gaji").value = gaji;
    // Tunjangan
    var Tunjangan = .1 * gaji;

    // Total gaji
    var totalGaji = gaji + Tunjangan;
    document.getElementById("TotalGaji").value = totalGaji;

}