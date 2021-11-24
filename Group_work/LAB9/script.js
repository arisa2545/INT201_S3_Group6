
import {kfcMenu} from "./menus.js";
import {showMenus} from "./menu_list.js";
import {loadCarts, showCarts, clearAll} from "./carts.js";
import {checkSearchPanel,searchKfcMenu} from "./search.js";
import {Cookie} from "./cookie.js";

const search = document.querySelector('#searchIcon');
const cartIcon = document.querySelector('#cartIcon')
const clearBtn = document.querySelector('#clearBtn')

console.log(decodeURIComponent(document.cookie))

if(Cookie.getCookie('cart') != null){
    loadCarts();
}

showMenus(kfcMenu)

searchIcon.addEventListener('click', checkSearchPanel);
searchBtn.addEventListener('click', searchKfcMenu);
cartIcon.addEventListener('click', showCarts);
clearBtn.addEventListener('click', clearAll);



