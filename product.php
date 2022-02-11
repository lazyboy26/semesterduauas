<?php
include './assets/function/functions.php';
$data = barang("SELECT * FROM data_barang ORDER BY id_barang DESC");

function format_rupiah($total)
{
  $angka = "Rp." . number_format($total, 0, ',', '.');
  return $angka;
}

$value = "";

if (isset($_POST["cari"])) {
  $data = cari($_POST["keyword"]);
  $value = $_POST['keyword'];
}
?>
<!doctype html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="./assets/img/logo.png">

  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

  <!-- My CSS -->
  <link rel="stylesheet" href="./assets/css/main.css">
  <link rel="stylesheet" href="./assets/css/responsive.css">

  <!-- Animation -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />

  <!-- Icons -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">

  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

  <!-- Font -->
  <link href="https://fonts.googleapis.com/css2?family=Catamaran:wght@300;400;500&family=Hind+Madurai:wght@300;400&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Habibi&family=Hind+Madurai:wght@300;400&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@300;400&family=Martel+Sans:wght@300;400;600;700&display=swap" rel="stylesheet">

  <!-- Icon -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">

  <title>Ido Baut</title>
</head>

<body>

  <?php
  include 'navbar.php';
  ?>

  <!-- Back to top -->
  <button onclick="topFunction()" id="myBtn" title="Go to top">
    <ion-icon name="caret-up-outline"></ion-icon>
  </button>
  <!-- Akhir back to top -->

  <!-- Navs -->

  <section>
    <nav class="row nav-product">
      <h1 class="kategori-title">Kategori Produk</h1>
      <div class="mb-1 text-center">
        <form action="" method="post">
          <input id="cari" class="mb-1 input-control" type="text" name="keyword" placeholder="Cari" autocomplete="off" value="<?= $value; ?>">
          <button type="submit" hidden class="btn btn-info btn-sm mb-2 ps-3 pe-3" name="cari">Cari</button>
        </form>
      </div>
      <ul>
        <li>
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  BAUT
                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <ul>
                    <?php
                    $kategori = barang("SELECT * FROM data_barang WHERE kategori = 'baut' ORDER BY id_barang DESC");

                    foreach ($kategori as $nav) :
                    ?>
                      <li class="kategori"><a href="<?=$nav['nama_barang'] ?>"><?= $nav['nama_barang'] ?></a></li>
                    <?php endforeach; ?>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  BOSHING
                </button>
              </h2>
              <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <ul>
                    <li class="kategori"><a href="">13ML</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  RING
                </button>
              </h2>
              <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <ul>
                    <li class="kategori"><a href="">Ring 6M</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingFour">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                  SKRUP
                </button>
              </h2>
              <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <ul>
                    <li class="kategori"><a href="">Skrup 5x16 Yamaha</a></li>
                    <li class="kategori"><a href="">Skrup 5x18 Honda Bebek</a></li>
                    <li class="kategori"><a href="">Skrup 5x16 Vario</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingFive">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                  KLIP
                </button>
              </h2>
              <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <ul>
                    <li class="kategori"><a href="">Klip Yamaha</a></li>
                    <li class="kategori"><a href="">Klip Honda Bebek</a></li>
                    <li class="kategori"><a href="">Klip Vario</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </nav>
    <!-- Akhir Navs -->

    <!-- Article -->
    <?php include 'product-baut.php'; ?>
    <!-- Akhir Article -->

    <!-- Footer -->
    <?php
    include 'footer.php';
    ?>
    <!-- Akhir Footer -->

    <!-- Option 2: Separate Popper and Bootstrap JS -->

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous">
    </script>

    <!-- Icon JS -->
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

    <!-- AOS Animation -->
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

    <!-- Initialize AOS -->
    <script>
      AOS.init();
    </script>

    <script>
      //Get the button
      var mybutton = document.getElementById("myBtn");

      // When the user scrolls down 500px from the top of the document, show the button
      window.onscroll = function() {
        scrollFunction()
      };

      function scrollFunction() {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
          mybutton.style.display = "block";
        } else {
          mybutton.style.display = "none";
        }
      }

      // When the user clicks on the button, scroll to the top of the document
      function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
    </script>
</body>

</html>