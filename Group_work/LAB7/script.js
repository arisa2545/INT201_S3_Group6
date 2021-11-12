import {kfcMenu} from "./menus.js";
<<<<<<< HEAD

let carts = {items: [], itemId: [] , totalQty: 0};

//show menus
showMenus(kfcMenu)

//const search = document.querySelector('#searchIcon');
=======
// สร้าง object carts โดย items จะเก็บเป็น array ของ menu ที่จะเพิ่มเข้ามาใน carts
//                       itemId จะเก็บ id ของ menu ที่เคยเพิ่มเข้ามาแล้ว
//                       totalQty จะเก็บจำนวนmenuทั้งหมดที่เพิ่มเข้ามา
let carts = {items: [], itemId: [] , totalQty: 0};

// เรียกใช้function showMenus เพื่อทำการแสดงรายการMenuทั้งหมด โดยใส่parameter เป็นkfcMenu ซึ่งimportมาจาก menus.js
showMenus(kfcMenu)

//ใช้ querySelector เพื่อเลือก Selector ตัวที่ต้องการ
>>>>>>> 9282cfe9c1cb7f8f4d83d8d738055b4face39da9
const search = document.querySelector('#searchIcon');
const searchBar = document.querySelector('#searchBar')
const cartAmount = document.querySelector('#amount');

<<<<<<< HEAD
let toggle = false;
search.addEventListener('click', checkToggle);

clearBtn.addEventListener('click', clearCarts);

=======
//add event เข้าไปใน search เมื่อทำการ click ให้เข้าไปทำ function checkToggle
search.addEventListener('click', checkToggle);
//add event เข้าไปใน clearBtn เมื่อทำการ click ให้เข้าไปทำ function clearCarts
clearBtn.addEventListener('click', clearCarts);

//function clearCarts จะทำการreset ค่าทั้งหมดในobject carts เมื่อถูกเรียกใช้
>>>>>>> 9282cfe9c1cb7f8f4d83d8d738055b4face39da9
function clearCarts() {
  carts = {items: [], itemId: [], totalPrice: 0, totalQty: 0};
  cartAmount.textContent = 0;
}

<<<<<<< HEAD
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
=======
// ตัวแปร toggle จะเก็บสถานะของช่อง searchBar เเละปุ่ม search ว่ากำลังเปิดอยู่รึป่าว
let toggle = false;

function checkToggle() {
  //switch toggle ถ้า toggle เป็น false อยู่จะเปลี่ยนเป็น true  
  toggle = !toggle;
  if(toggle) {
      //ถ้า true จะเเสดง search bar กับปุ่ม search ออกมา
      searchBar.innerHTML = `<input id = 'inputValue' type = 'text' placeholder=" search ..." class = "form-control">
                             <button id = 'searchBtn' type="button" class="btn btn-danger btn-sm ms-3">search</button>`;
                              
      const searchBtn = document.querySelector('#searchBtn');

      //add event เข้าไปใน searchBtn เมื่อทำการ click เเล้วจะเอา value ที่พิมพ์เข้ามาไปหาว่ามันคือตัวไหนบ้างของ kfcMenu เเล้วก็เมนูเหล่านั้นเเสดงออกมา
      searchBtn.addEventListener('click', () => {

          //เอาค่าที่กรอกลงในช่องค้นหาที่มี id เป็น inputValue ไปเก็บไว้ในตัวแปร value
          let value = document.querySelector('#inputValue').value;
          console.log(value)

          //นำ value มาสร้างเป็น pattern ด้วย regular expression object ที่กำหนด attribute เป็น i (ignore case) เพื่อใช้ในการค้นหาชื่อเมนูที่มีประกอบด้วย pattern นั้นๆอยู่ สามารถใช้ทั้งตัวพิมพ์เล็กและตัวพิมพ์ใหญ่ในการค้นหาได้
          let pattern = new RegExp(value, 'i')

          //ใช้ filter ในการวนลูปเข้าไปเช็ค condition ใน kfcMenu โดยจะ filter เฉพาะเมนูที่มีชื่อประกอบด้วย pattern ที่กำหนดไว้ เเละนำไปเก็บไว้กับ searchMenu
          //method .match(pattern) ทำการเปรียบเทียบชื่อเมนูกับ pattern ที่เราใส่ไว้ ถ้า match กันจะ return menuName ออกมาก ถ้าไม่จะ return null ซึ่งเราต้องการเฉพาะตัวที่ match จึงกำหนดเงื่อนไขเป็น !=null
          const searchMenu = kfcMenu.filter((menu) => {return menu.menuName.match(pattern) != null});
          console.log(searchMenu);

          //เเสดงเมนูใน searchMenu 
          showMenus(searchMenu);
          
      })

      let inputValue = document.querySelector('#inputValue');
      
      //add event เข้าไปใน inputValue เมื่อทำการ keyup (ทุกๆครั้งที่ปล่อยปุ่มบนแป้มพิมพ์) จะเข้า function ที่มี condition ดังนี้
      inputValue.addEventListener('keyup' , () =>{
        //ถ้า true จะแสดง menuname
          if(inputValue.value == ''){
            //เเสดงเมนูในทั้งหมดใน kfcMenu
>>>>>>> 9282cfe9c1cb7f8f4d83d8d738055b4face39da9
            showMenus(kfcMenu);
          }
      })

  } else {
<<<<<<< HEAD
      // searchBar.removeChild(divSearch.lastChild);
=======
      //ถ้า false จะไม่เเสดง search bar กับปุ่ม search ออกมา
>>>>>>> 9282cfe9c1cb7f8f4d83d8d738055b4face39da9
      searchBar.innerHTML = '';
  }
}

<<<<<<< HEAD

function showMenus(arr) {
  let allMenu = document.querySelector('#allMenu');
  allMenu.textContent = '';

  for(let menu of arr) {
  //<div class="cardBody" style="border:1px solid black; margin:10px; border-radius:10px">
  const cardBody = document.createElement('div');
  cardBody.setAttribute('id', menu.menuId);
  cardBody.setAttribute('class', 'card-body ');
  cardBody.setAttribute('style', 'border:1px solid black; margin:10px; border-radius:20px; max-width: 400px;');
=======
//function showMenus ทำหน้าที่รับค่าเข้ามาทาง parameter เพื่อแสดงค่าที่อยู่ข้างใน (function นี้คือ lab6 ที่ทำการเปลี่ยนเป็น function และเพิ่มโค้ดบางส่วน)
function showMenus(arr) {
  //allMenu เป็น div ก้อนใหญ่สุดที่มี selector เป็นชนิด id มีอยู่แล้วใน html สามารถใช้ querySelector ในการเข้าถึงได้เลย
  let allMenu = document.querySelector('#allMenu');
  //จะ clear div ในให้เป็น div ว่างๆก่อนทุกครั้ง
  allMenu.textContent = '';
  
  //ใช้ for..of เพื่อเข้าถึงข้อมูลในแต่ละ index ของ array ที่จะรับเข้ามา
  for(let menu of arr) {

  //<div class="cardBody" style="border:1px solid black; margin:10px; border-radius:10px">
  const cardBody = document.createElement('div');
  //สร้าง element div และ assign ให้กับ cardBody
  cardBody.setAttribute('id', menu.menuId);
  cardBody.setAttribute('class', 'card-body ');
  cardBody.setAttribute('style', 'border:1px solid black; margin:10px; border-radius:20px; max-width: 400px;');
  //กำหนด attribute class และ attribute style ให้กับ cardBody เพื่อจัดรูปแบบให้กับ element div
>>>>>>> 9282cfe9c1cb7f8f4d83d8d738055b4face39da9
  console.log(cardBody);

  //<img class="card-img-top" src="img_avatar1.png" style="width:300px; padding:20px; display: block; margin: auto;">
  const menuImgEle = document.createElement('img');
<<<<<<< HEAD
  menuImgEle.setAttribute('class', 'card-img-top');
  menuImgEle.setAttribute('src', menu.menuImg);
  menuImgEle.setAttribute('style', 'width:300px; padding:20px; display: block; margin: auto;');
=======
  //สร้าง element img และ assign ให้กับ menuImgEle
  menuImgEle.setAttribute('class', 'card-img-top');
  menuImgEle.setAttribute('src', menu.menuImg);
  menuImgEle.setAttribute('style', 'width:300px; padding:20px; display: block; margin: auto;');
  //กำหนด attribute src โดย value เอามาจาก key ที่ชื่อว่า menuImg ซึ่งมาจาก object ที่อยู่ใน array kfcMenu
>>>>>>> 9282cfe9c1cb7f8f4d83d8d738055b4face39da9
  console.log(menuImgEle);

  //<h4 class="card-title" style="color:red;">ชื่อเมนู</h4>
  const h4MenuNameEle = document.createElement('h4');
<<<<<<< HEAD
  h4MenuNameEle.setAttribute('class', 'card-title');
  h4MenuNameEle.setAttribute('style', 'color:red;');
  h4MenuNameEle.textContent = menu.menuName;
=======
  //สร้าง element h4 และ assign ให้กับ h4MenuNameEle
  h4MenuNameEle.setAttribute('class', 'card-title');
  h4MenuNameEle.setAttribute('style', 'color:red;');
  //กำหนด attribute class และ attribute style ให้กับ h4MenuNameEle เพื่อจัดรูปแบบให้กับ element h4
  h4MenuNameEle.textContent = menu.menuName;
  //ใช้ textContent เพื่อเอา value ของ key ที่ชื่อว่า menuName ซึ่งมาจาก object ที่อยู่ใน array kfcMenu มาแสดงผลใน element h4
>>>>>>> 9282cfe9c1cb7f8f4d83d8d738055b4face39da9
  console.log(h4MenuNameEle);

  //<p class="card-text">Description</p>
  const pMenuDescEle = document.createElement('p');
<<<<<<< HEAD
  pMenuDescEle.setAttribute('class', 'card-text');
  pMenuDescEle.textContent = menu.menuDesc;
=======
  //สร้าง element p และ assign ให้กับ pMenuDescEle
  pMenuDescEle.setAttribute('class', 'card-text');
  //กำหนด attribute class ให้กับ pMenuDescEle เพื่อจัดรูปแบบให้กับ element p
  pMenuDescEle.textContent = menu.menuDesc;
  //ใช้ textContent เพื่อเอา value ของ key ที่ชื่อว่า menuDesc ซึ่งมาจาก object ที่อยู่ใน array kfcMenu มาแสดงผลใน element p
>>>>>>> 9282cfe9c1cb7f8f4d83d8d738055b4face39da9
  console.log(pMenuDescEle);

  //<p class="card-text">Status</p>
  const pMenuStatusEle = document.createElement('p');
<<<<<<< HEAD
  pMenuStatusEle.setAttribute('class', 'card-text');
  pMenuStatusEle.textContent = 'Status: ' + menu.menuStatus;
  console.log(pMenuStatusEle);

  //<div class="btn ">ราคา</button>
  const divPriceEle = document.createElement('div');
  divPriceEle.setAttribute('class', 'd-inline-flex px-4 py-1 mb-3 rounded-3 border border-dark rounded-3 border-2 fw-bold');
  divPriceEle.textContent = '฿' + menu.price;
  console.log(divPriceEle);

=======
  //สร้าง element p และ assign ให้กับ pMenuStatusEle
  pMenuStatusEle.setAttribute('class', 'card-text');
  //กำหนด attribute class ให้กับ pMenuStatusEle เพื่อจัดรูปแบบให้กับ element p
  pMenuStatusEle.textContent = 'Status: ' + menu.menuStatus;
  //ใช้ textContent เพื่อเอา value ของ key ที่ชื่อว่า menuStatus ซึ่งมาจาก object ที่อยู่ใน array kfcMenu มาแสดงผลใน element p
  console.log(pMenuStatusEle);

  //<div class="d-inline-flex px-4... ">ราคา</div>
  const divMenuPriceEle = document.createElement('div');
  //สร้าง element div และ assign ให้กับ divMenuPriceEle
  divMenuPriceEle.setAttribute('class', 'd-inline-flex px-4 py-1 mb-3 rounded-3 border border-dark rounded-3 border-2 fw-bold');
  divMenuPriceEle.textContent = '฿' + menu.price;
  //ใช้ textContent เพื่อเอา value ของ key ที่ชื่อว่า price ซึ่งมาจาก object ที่อยู่ใน array kfcMenu มาแสดงผลใน element div
  console.log(divMenuPriceEle);

  //<button type = "button" class = "container btn btn-danger">Add To Cart</button>
>>>>>>> 9282cfe9c1cb7f8f4d83d8d738055b4face39da9
  const buttonAddEle = document.createElement('button');
  buttonAddEle.setAttribute('type', 'button');
  buttonAddEle.setAttribute('class', 'container btn btn-danger');
  buttonAddEle.textContent = 'Add To Cart';
<<<<<<< HEAD
  
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

=======
  //ใช้ textContent เพื่อเเสดงคำว่า 'Add To Cart' ใน button 
  
  // ส่วนที่เพิ่มเติมขึ้นมาจาก lab6
  // add event to bottonAddEle ถ้าทำการ click ที่ปุ่มนี้จะทำการเพิ่มเมนูนี้เข้าไปใน carts
  buttonAddEle.addEventListener('click', () => {
  
    //แสดง alert บอก id สินค้าที่เพิ่มเข้า carts
    alert(`Add Menu ID '${menu.menuId}' to Your Cart`);

    // สร้าง object newItem ที่จะเพิ่มเข้าไปใน carts
    let newItem = {id: menu.menuId, name: menu.menuName, price: menu.price, qty: 1};

    //ถ้า array items ที่อยู่ใน carts ไม่มีเมนูใดๆเลย หรือเมนูที่จะเพิ่มเข้าไปนั้นไม่เคยมีการเพิ่มลง carts มาก่อน
    //ให้ทำการเพิ่ม object newItem เข้าไปใน array items เเละเพิ่ม id ของ newItem เข้าไปใน array itemId เพื่อเก็บประวัติไว้ว่าเคยมีเมนูอันนี้เพิ่มเข้ามาเเล้ว
    if(carts.items.length == 0 || carts.itemId.includes(newItem.id) == false){
      carts.items.push(newItem);
      carts.itemId.push(newItem.id);

    //ถ้าเคยเมนูอันนี้ในตะกร้าเเล้วให้ทำการวนลูปหาว่าเมนูนี้อยู่ index ไหนของ array items เเล้วเพิ่ม qty เข้าไป 1
>>>>>>> 9282cfe9c1cb7f8f4d83d8d738055b4face39da9
    } else {
        for(let checkItem of carts.items) {
          if(checkItem.id == newItem.id) {
            checkItem.qty++ ;
          }
        }
    }

<<<<<<< HEAD
    carts.totalQty = carts.items.reduce((sum,item) => {return sum += item.qty}, 0);
    console.log(carts.itemId);
    console.log(carts.items)
    console.log(carts)

=======
    //ใช้ reduce ในการคำนวนหาจำนวนเมนูทั้งหมดที่อยู่ใน array items ที่อยู่ใน object carts
    carts.totalQty = carts.items.reduce((sum,item) => {return sum += item.qty}, 0);
    console.log(carts.itemId);
    console.log(carts.items);
    console.log(carts);

    //ใช้ textContent ในการเเสดง totalQty ใน object carts ลงใน cartAmount (tag span ที่มี id เป็น amount)
>>>>>>> 9282cfe9c1cb7f8f4d83d8d738055b4face39da9
    cartAmount.textContent = carts.totalQty;
    
  })

<<<<<<< HEAD

=======
>>>>>>> 9282cfe9c1cb7f8f4d83d8d738055b4face39da9
  //add ข้อมูลใน key ต่างๆที่เป็นรายละเอียดสินค้าลงใน div cardBody
  cardBody.appendChild(menuImgEle);
  cardBody.appendChild(h4MenuNameEle);
  cardBody.appendChild(pMenuDescEle);
  cardBody.appendChild(pMenuStatusEle);
<<<<<<< HEAD
  cardBody.appendChild(divPriceEle);
=======
  cardBody.appendChild(divMenuPriceEle);
>>>>>>> 9282cfe9c1cb7f8f4d83d8d738055b4face39da9
  cardBody.appendChild(buttonAddEle);
  
  //add cardBody ลงใน div ก้อนใหญ่สุด นั่นก็คือ allMenu
  allMenu.appendChild(cardBody);

  }
}


