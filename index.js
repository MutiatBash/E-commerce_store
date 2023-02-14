const popup = document.querySelector("#popcart");
const cart = document.querySelectorAll(".cartt");
let zero = document.querySelector(".zero");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
let cartbtn = document.querySelector(".orange-bg");
const updates = document.querySelectorAll(".update");
let cartdeets = document.querySelector(".modbody");

// adding items
let count = 0;
let i;
function add() {
  if (count <= 2) {
    count++;
    zero.innerHTML = count;
    for (i = 0; i <= updates.length; i++) {
      updates[i].innerHTML = count;
    }
  }
  console.log("added item");
}
plus.addEventListener("click", add);

// removing items
function sub() {
  if (count >= 1) {
    count--;
    zero.innerHTML = count;
    for (i = 0; i <= updates.length; i++) {
      updates[i].innerHTML = count;
    }
  }
  console.log("item removed");
}
minus.addEventListener("click", sub);

// add to cart button
let empty = document.querySelector(".empty");
const addCart = () => {
  let i;
  for (i = 0; i <= updates.length; i++) {
    updates[i].style.position = "absolute";
    updates[i].style.display = "inline";
    // updates[i].classList.toggle("hiden");
    // updates[i].innerHTML = itemno;
    if (count > 0) {
      cartdeets.style.display = "grid";
      empty.style.display = "none";
    } else {
      cartdeets.style.display = "none";
      empty.style.display = "block";
    }
    console.log("added to cart");
    // console.log("adding to cart");
  }
};
cartbtn[i].addEventListener("click", addCart);
// updates.forEach((item) => {
// item.addEventListener("click", addCart);
// });//

// modal button

function modal() {
  //   const empty = document.createElement("p");
  //   empty.textContent = `Cart is empty`;
  let a;
  for (a = 0; a <= cart.length; a++) {
    //     if (popup.style.display === "none") {
    //       popup.style.display = "block";
    //       console.log("cart opened");
    //     } else {
    //       popup.style.display = "none";
    //       console.log("cart closed");
    //     }
    popup.classList.toggle("hide");
    console.log("cart opened");
  }
}

// cart[a].addEventListener("click", modal)
