<?php snippet('header') ?>

  <main class="default-page | main" id="maincontent">
    <article class="wrap">
      <?php snippet('hero', ['align' => 'center']) ?>
      <div class="text">
        <?= $page->text()->kt()->anchorHeadlines() ?>
      </div>
    </article>
  </main>

<div id="kirbymerch" class="wrap">
  <a href="https://shop.spreadshirt.de/getkirby">
    Loading shop …
  </a>
</div>

<!-- <script>
    var spread_shop_config = {
        shopName: 'getkirby',
        locale: 'en_DE',
        prefix: 'https://shop.spreadshirt.de',
        baseId: 'kirbyshop'
    };
</script>

<script src="https://shop.spreadshirt.de/shopfiles/shopclient/shopclient.nocache.js"></script> -->

<?php snippet('footer') ?>
