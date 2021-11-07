import {kfcMenu} from "./menus.js";

let carts = {items: [], itemId: [] , totalQty: 0};

//show menus
showMenus(kfcMenu)

//const search = document.querySelector('#searchIcon');
const search = document.querySelector('#searchIcon');
const searchBar = document.querySelector('#searchBar')
const cartAmount = document.querySelector('#amount');

let toggle = false;
search.addEventListener('click', checkToggle);

clearBtn.addEventListener('click', clearCarts);

function clearCarts() {
  carts = {items: [], itemId: [], totalPrice: 0, totalQty: 0};
  cartAmount.textContent = 0;
}

function checkToggle() {
  //switch toggle 
  toggle = !toggle ;
  if(toggle) {
      // const input = document.createElement('input');
      // input.id = 'inputValue'
      // input.type = 'text';
      // input.placeholder = 'search...'
      // searchBar.appendChild(input);

      //ถ้า true จะเเสดง search bar กับปุ่ม serach ออกมา
      searchBar.innerHTML = `<input id = 'inputValue' type = 'text' placeholder=" search ..." class = "form-control">
                             <button id = 'searchBtn' type="button" class="btn btn-danger btn-sm ms-3">search</button>`;

      //อันนี้จะ add event ให้กับปุ่ม search 
      const searchBtn = document.querySelector('#searchBtn');

      // click เเล้วจะเอา value ที่พิมเข้ามาไปหาว่ามันคือตัวไหนบ้างของ kfcMenu เเล้วก้เเสดงออกมา
      searchBtn.addEventListener('click', () => {
        
          let value = document.querySelector('#inputValue').value;
          console.log(value)

          let pattern = new RegExp(value, 'i')
          //console.log(pattern)

          const searchMenu = kfcMenu.filter((menu) => {return menu.menuName.match(pattern) != null});
          console.log(searchMenu);
          showMenus(searchMenu);
          

      })

      let inputValue = document.querySelector('#inputValue');
      inputValue.addEventListener('keyup' , () =>{
          // console.log(inputValue.value)
          if(inputValue.value == ''){
            showMenus(kfcMenu);
          }
      })

  } else {
      // searchBar.removeChild(divSearch.lastChild);
      searchBar.innerHTML = '';
  }
}


function showMenus(arr) {
  let allMenu = document.querySelector('#allMenu');
  allMenu.textContent = '';

  for(let menu of arr) {
  //<div class="cardBody" style="border:1px solid black; margin:10px; border-radius:10px">
  const cardBody = document.createElement('div');
  cardBody.setAttribute('id', menu.menuId);
  cardBody.setAttribute('class', 'card-body ');
  cardBody.setAttribute('style', 'border:1px solid black; margin:10px; border-radius:20px; max-width: 400px;');
  console.log(cardBody);

  //<img class="card-img-top" src="img_avatar1.png" style="width:300px; padding:20px; display: block; margin: auto;">
  const menuImgEle = document.createElement('img');
  menuImgEle.setAttribute('class', 'card-img-top');
  menuImgEle.setAttribute('src', menu.menuImg);
  menuImgEle.setAttribute('style', 'width:300px; padding:20px; display: block; margin: auto;');
  console.log(menuImgEle);

  //<h4 class="card-title" style="color:red;">ชื่อเมนู</h4>
  const h4MenuNameEle = document.createElement('h4');
  h4MenuNameEle.setAttribute('class', 'card-title');
  h4MenuNameEle.setAttribute('style', 'color:red;');
  h4MenuNameEle.textContent = menu.menuName;
  console.log(h4MenuNameEle);

  //<p class="card-text">Description</p>
  const pMenuDescEle = document.createElement('p');
  pMenuDescEle.setAttribute('class', 'card-text');
  pMenuDescEle.textContent = menu.menuDesc;
  console.log(pMenuDescEle);

  //<p class="card-text">Status</p>
  const pMenuStatusEle = document.createElement('p');
  pMenuStatusEle.setAttribute('class', 'card-text');
  pMenuStatusEle.textContent = 'Status: ' + menu.menuStatus;
  console.log(pMenuStatusEle);

  //<div class="btn ">ราคา</button>
  const divPriceEle = document.createElement('div');
  divPriceEle.setAttribute('class', 'd-inline-flex px-4 py-1 mb-3 rounded-3 border border-dark rounded-3 border-2 fw-bold');
  divPriceEle.textContent = '฿' + menu.price;
  console.log(divPriceEle);

  const buttonAddEle = document.createElement('button');
  buttonAddEle.setAttribute('type', 'button');
  buttonAddEle.setAttribute('class', 'container btn btn-danger');
  buttonAddEle.textContent = 'Add To Cart';
  
  // add event to bottonAddEle
  
  buttonAddEle.addEventListener('click', () => {
    // const parent = event.target.parentNode;
    // console.log(event.target.parentNode);
    // alert(`Add Menu ID '${parent.id}' to Your Cart`)

    alert(`Add Menu ID '${menu.menuId}' to Your Cart`)
  
    const itemAdd = kfcMenu.find((item) => {return item.menuId == menu.menuId})
    console.log(itemAdd)

    let newItem = {id: itemAdd.menuId, name: itemAdd.menuName, price: itemAdd.price, qty: 1};
    //console.log(newItem)

    if(carts.items.length == 0 || carts.itemId.includes(newItem.id) == false){
      carts.items.push(newItem)
      carts.itemId.push(newItem.id)

    } else {
        for(let checkItem of carts.items) {
          if(checkItem.id == newItem.id) {
            checkItem.qty++ ;
          }
        }
    }

    carts.totalQty = carts.items.reduce((sum,item) => {return sum += item.qty}, 0);
    console.log(carts.itemId);
    console.log(carts.items)
    console.log(carts)

    cartAmount.textContent = carts.totalQty;
    
  })


  //add ข้อมูลใน key ต่างๆที่เป็นรายละเอียดสินค้าลงใน div cardBody
  cardBody.appendChild(menuImgEle);
  cardBody.appendChild(h4MenuNameEle);
  cardBody.appendChild(pMenuDescEle);
  cardBody.appendChild(pMenuStatusEle);
  cardBody.appendChild(divPriceEle);
  cardBody.appendChild(buttonAddEle);
  
  //add cardBody ลงใน div ก้อนใหญ่สุด นั่นก็คือ allMenu
  allMenu.appendChild(cardBody);

  }
}


