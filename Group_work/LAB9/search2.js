import {kfcMenu} from "./menus.js";

//selector children ของ div allMenu จะได้ div ของทุกๆเมนูออกมา
let divAllMenu = document.querySelector('#allMenu').children;

export function checkSearchPanel(){
    const searchBtn = document.querySelector('#searchBtn');
    const inputValue = document.querySelector('#inputValue');
      if(searchBtn.style.display === 'none' && inputValue.style.display === 'none'){
        inputValue.style.display = 'flex';
        searchBtn.style.display = 'flex';
  
        searchBtn.addEventListener('click', () => {
          let value = document.querySelector('#inputValue').value;
          searchMenu(value);
        })
       
        inputValue.addEventListener('keyup' , () =>{
          if(inputValue.value == ''){
            showAllMenu();
          }
        })
  
      }else{
        inputValue.style.display = 'none';
        searchBtn.style.display = 'none';
        showAllMenu();
      }
  }
  
  function searchMenu(value) {
      let pattern = new RegExp(value, 'i')

      const searchMenuId = [];
      kfcMenu.filter((menu) => {
        if(menu.menuName.match(pattern) != null) {
          searchMenuId.push(menu.menuId);
        }
      });
  
      for(let i of divAllMenu) {
        if(searchMenuId.includes(i.id)){
          i.style.display = 'inline';
        } else {
          i.style.display = 'none';
        }
      }
  }
  
  function showAllMenu() {
      for(let i of divAllMenu) {
        i.style.display = 'inline';
      }
  }