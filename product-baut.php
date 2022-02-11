<div class="row">
    <header>
        <h2>Our Product</h2>
    </header>
    <div class="row card-container">
        <?php foreach ($data as $barang) : ?>
            <div class="col-lg-3 col-md-4 col-sm-4">
                <div class="cards card">
                    <a href="">
                        <img src="./assets/function/img/<?= $barang['img']; ?>" class="card-img-top card-img" alt="...">
                    </a>
                    <div class="card-body">
                        <h5 class="card-title product-judul"><?= $barang['nama_barang']; ?></h5>
                        <div class="info">
                            <p class="stok-product">Stok : <?= $barang['stok'] ?></p>
                            <p class="stok-product">Harga : <?= format_rupiah($barang['harga_barang']) ?></p>
                        </div>
                        <p class="card-text"></p>
                        <a href="#" class="btn btn-primary detail">Detail Barang</a>
                    </div>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
</div>
</section>