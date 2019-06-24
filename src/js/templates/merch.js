import loadjs from "loadjs";
import { on } from "../utils/events";
import { $ } from "../utils/selector";

window.spread_shop_config = {
  shopName: "getkirby",
  locale: "en_DE",
  prefix: "https://shop.spreadshirt.de",
  baseId: "kirbymerch",
  usePushState: true,
  pushStateBaseUrl: window.kirbyConfig.pageUrl,
};

// $("#kirbymerch").addEventListener("mouseenter", (e) => {
//   // console.log("e", e);

//   const hoverArea = e.target.closest(".sprd-product-list-item__hoverarea");
//   if (hoverArea !== null) {
//     e.stopPropagation();
//     e.stopImmediatePropagation();
//     e.preventDefault();
//     console.log("h", hoverArea, e.target)
//   }

// }, false);

// on($("#kirbymerch"), "mouseenter", ".sprd-product-list-item__hoverarea",(e) => {
//   console.log("enter", e);
// });

loadjs("https://shop.spreadshirt.de/shopfiles/shopclient/shopclient.nocache.js");
