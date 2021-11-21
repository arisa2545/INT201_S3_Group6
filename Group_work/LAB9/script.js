import {kfcMenu} from "./menus.js";
import {showMenus} from "./menu_list.js";
import {carts} from "./carts.js";
import {checkSearchPanel,searchKfcMenu} from "./search.js";
import {Cookie} from "./cookie.js";

const searchIcon = document.querySelector('#searchIcon');
const cartIcon = document.querySelector('#cartIcon');
const clearBtn = document.querySelector('#clearBtn');
const searchBtn = document.querySelector('#searchBtn');

console.log(decodeURIComponent(document.cookie));

//สั่งให้ load ข้อมูลในตะกร้าเก่า โดยการเช็คการว่ายังมี cookie ของข้อมูล carts อยู่รึป่าว
if(Cookie.getCookie('cartItems') != null){
    carts.loadCarts();
}

// show all menu
showMenus(kfcMenu);

searchIcon.addEventListener('click', checkSearchPanel);
searchBtn.addEventListener('click', searchKfcMenu);
cartIcon.addEventListener('click', carts.showCarts);
clearBtn.addEventListener('click', carts.clearAll);

// script ที่ใช้กับ search2
// import {checkSearchPanel} from "./search.js";
// search.addEventListener('click', checkSearchPanel);
// cartIcon.addEventListener('click', carts.showCarts)
// clearBtn.addEventListener('click', carts.clearAll);