function proses() {
    var barang=document.getElementById("pilihan").value;
    var jumlah=document.getElementById("Jumlah").value;
    var total=document.getElementById("Total").value;
    var customer=document.getElementById("status").value;

    // Pilih barang
    switch (barang) {
        case "Pilih Barang":
            alert("Pilih Barang Terlebih Dahulu!");
            break;
        case "Monitor":
            // Harga
            var hargaMonitor= document.getElementById("Harga").value=150000; 
            // Total
            total=jumlah*hargaMonitor;
            document.getElementById("Total").value=total;
            break;
        case "Keyboard":
            // Harga
            var hargaKey= document.getElementById("Harga").value=100000; 
            // Total
            total=jumlah*hargaKey;
            document.getElementById("Total").value=total;
            break;
        case "Mouse":
            // Harga
            var hargaMouse= document.getElementById("Harga").value=50000; 
            // Total
            total=jumlah*hargaMouse;
            document.getElementById("Total").value=total;
            break;
    
        default:
            alert("Data Tidak Valid!");
            break;
    }

    // Pilih Status
    switch (customer) {
        case "Pelanggan":
            document.getElementById("Diskon").value="10%";
            var diskon = .1 *  document.getElementById("Harga").value;
            bayar = document.getElementById("Harga").value - diskon ;
            
            document.getElementById("Bayar").value = bayar;
            break;
            
            default:
            document.getElementById("Diskon").value="Tidak Dapat Diskon";
            document.getElementById("Bayar").value=total;
            break;
    }

  }