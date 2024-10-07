let btnAdd = document.querySelectorAll('.btnAdd');
let minusBtn = document.querySelectorAll('.minusBtn');
let plusBtn = document.querySelectorAll('.plusBtn');
let itemCount = document.querySelectorAll('.itemCount');
let cartCount = document.querySelectorAll('.cartCount');
let menuBurger = document.querySelector('.menuBurger');
let menu = document.querySelector('.menu');
let cartCountQuantity = 0;

cartCount.forEach(count => {
  count.textContent = cartCountQuantity;
  count.textContent = '';
});

minusBtn.forEach((btnMinus) => {
  btnMinus.style.display = 'none';
});
plusBtn.forEach((plusBtn) => {
  plusBtn.style.display = 'none';
});
itemCount.forEach((countItem)=> {
  countItem.style.display = 'none';
});
btnAdd.forEach((btn, index) => {
  let quantity = 1;
  btn.addEventListener('click', function () {
    cartCountQuantity++;
    cartCount.forEach(count => {
      count.textContent = cartCountQuantity;
    });
    btn.style.display = 'none';
    itemCount[index].style.display = 'block';
    plusBtn[index].style.display = 'block';
    minusBtn[index].style.display = 'block';
    itemCount[index].textContent = quantity;
  });

  plusBtn[index].addEventListener('click', function () {
    cartCountQuantity++;
    quantity++;
    itemCount[index].textContent = quantity;
    cartCount.forEach(count => {
      count.textContent = cartCountQuantity;
    });
  });

  minusBtn[index].addEventListener('click', function () {
    if (quantity > 1) {
      quantity--;
      itemCount[index].textContent = quantity;
    } else {
      btn.style.display = 'block';
      itemCount[index].style.display = 'none';
      plusBtn[index].style.display = 'none';
      minusBtn[index].style.display = 'none';
    }
    if (cartCountQuantity > 1) {
      cartCountQuantity--;
      cartCount.forEach(count => {
        count.textContent = cartCountQuantity;
      });
    } else {
      cartCountQuantity = 0;
      cartCount.forEach(count => {
        count.textContent = '';
      });
    }
  });
});
menuBurger.addEventListener('click', function (){
  menu.classList.toggle('active');
})

