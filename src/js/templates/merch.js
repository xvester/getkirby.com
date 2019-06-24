import loadjs from "loadjs";

window.spread_shop_config = {
  shopName: "getkirby",
  locale: "en_DE",
  prefix: "https://shop.spreadshirt.de",
  baseId: "kirbymerch",
  usePushState: true,
  pushStateBaseUrl: window.kirbyConfig.pageUrl,
};

loadjs("https://shop.spreadshirt.de/shopfiles/shopclient/shopclient.nocache.js");
