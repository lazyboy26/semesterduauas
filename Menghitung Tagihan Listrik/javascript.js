function proses(){
    var kategori = document.getElementById("kategori").value;
    let jumlah = document.getElementById("jumlah").value;

    let pajak;
    // Pilih Kategori
  switch (kategori) {
      case "sosial":
        // document.getElementById("outputPajak").innerHTML="0%";
        pajak = 0;
        break;
    case "rumah":
            // document.getElementById("outputPajak").innerHTML="10%";
            pajak = .1;
        break;
    case "industri":
          // document.getElementById("outputPajak").innerHTML="30%"; 
          pajak = .3;      
        break;
  
      default:
          alert("PILIH KATEGORI TERLEBIH DAHULU!");
          break;
  }
  // Rumus
  // Ambil nilai input jumlah
  let y=jumlah;
  // variabel
  let tarifSosial = 0;
  let tarifRumah = 0;
  let tarifIndustri = 0;
  let abodemen;
  let subtotal;
  
  let teks = "";
  let jumlahPemakaian = "";
  let hasilAbodemen = "";
  let hasilSubtotal = "";
  for(let i=1; i <= y; i++){
    jumlahPemakaian +=+ i + "<br>";
    if(kategori == "rumah"){
      tarifRumah += 500;
      teks += tarifRumah + "<br>";

      abodemen = 30000;
      subtotal = abodemen+tarifRumah;
      
      hasilAbodemen += abodemen+ "<br>";
      hasilSubtotal += subtotal + "<br>";
    }else if(kategori == "sosial"){
      tarifSosial += 300;
      teks += tarifSosial + "<br>";
      
      abodemen = 10000;
      subtotal = abodemen+tarifSosial;

      hasilAbodemen += abodemen+ "<br>";
      hasilSubtotal += subtotal + "<br>";
    }else if(kategori == "industri"){
      tarifIndustri += 1000;
      teks += tarifIndustri + "<br>";
      
      abodemen = 50000;
      subtotal = abodemen+tarifIndustri;

      hasilAbodemen += abodemen+ "<br>";
      hasilSubtotal += subtotal + "<br>";
     
    }else{
      alert("PILIH KATEGORI TERLEBIH DAHULU!");
    }

    // tampilkan
    document.getElementById("outjumlah").innerHTML= jumlahPemakaian;
    document.getElementById("outTarif").innerHTML= teks;
    document.getElementById("outAbodemen").innerHTML= hasilAbodemen;
    document.getElementById("outSubtotal").innerHTML= hasilSubtotal;
    if(i==i){
      document.getElementById("outputTotal").innerHTML= subtotal;  
      let outpajak=pajak*subtotal;
      document.getElementById("outputPajak").innerHTML= outpajak;
      let bayar = outpajak + subtotal;
      document.getElementById("outputBayar").innerHTML= bayar;
    }
  }
  
}
