import {Cookie} from "./cookie.js";

export let carts = {
    items: [] , 
    itemId: [] , 
    totalQty: 0 ,
    totalPrice: 0 ,

    save: () => {
      Cookie.set('cartItems', JSON.stringify(carts.items));
      Cookie.set('cartHistory', JSON.stringify(carts.itemId));
      Cookie.set('totalQty', JSON.stringify(carts.totalQty));
      Cookie.set('totalPrice', JSON.stringify(carts.totalPrice))
    },

    clearAll: () => {
      alert('Clear your carts !!');
      carts.items = []; 
      carts.itemId = []; 
      carts.totalQty = 0;
      carts.totalPrice = 0;
      
      // เปลี่ยนให้ unset cookie ไปเลย
      Cookie.unset("cartItems");
      Cookie.unset("cartHistory");
      Cookie.unset("totalQty");
      Cookie.unset("totalPrice");
      
      const cartAmount = document.querySelector('#amount');
      cartAmount.textContent = carts.totalQty

      //carts.save()
    },

    
    addItem: (newItem) => {

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
          carts.totalPrice = carts.items.reduce((sum,item) => {return sum += (item.price * item.qty)}, 0);
          console.log(carts)
      
          const cartAmount = document.querySelector('#amount');
          cartAmount.textContent = carts.totalQty;

    },

    loadCarts: () => {
      carts.items = JSON.parse(Cookie.getCookie('cartItems'));
      carts.itemId = JSON.parse(Cookie.getCookie('cartHistory'));
      carts.totalQty = Number(Cookie.getCookie('totalQty'));
      carts.totalPrice = Number(Cookie.getCookie('totalPrice'));
      console.log(carts);

      const cartAmount = document.querySelector('#amount');
      cartAmount.textContent = carts.totalQty
    },

    showCarts: () => {
      const modal = document.querySelector('#myModal');
      modal.style.display = "block";

      const modalBody = document.querySelector('.modal-body');
      modalBody.textContent = '';

      if(carts.items.length == 0) {
          modalBody.textContent = 'There are no order in your cart.'

      } else {
        for(let menu of carts.items) {

          const divItem = document.createElement('div');
          divItem.className = 'd-flex border p-2';

          const divMenuName = document.createElement('div');
          divMenuName.className = 'p-2';
          divMenuName.style = 'width: 260px';
          divMenuName.textContent = menu.name;

          const divMenuPrice = document.createElement('div');
          divMenuPrice.className = 'p-2 flex-fill text-center';
          divMenuPrice.textContent = `${menu.price}฿`;
        
          const divMenuQty = document.createElement('div');
          divMenuQty.className = 'p-2 fw-bolder text-end';
          divMenuQty.style = 'width: 80px';
          divMenuQty.textContent = `× ${menu.qty}`;

          divItem.appendChild(divMenuName);
          divItem.appendChild(divMenuPrice);
          divItem.appendChild(divMenuQty);

          modalBody.appendChild(divItem)

        }
        
      }

      const totalPriceEle = document.querySelector('#totalPrice');
      totalPriceEle.textContent = `total price : ${carts.totalPrice}`;

      const closeBtn = document.getElementById("close")
      closeBtn.addEventListener('click', () => {modal.style.display = "none";})

      window.addEventListener('click', (event) => {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      })
      
    }

};

