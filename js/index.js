let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");




// // Open Cart
cartIcon.onclick = () => {
  cart.classList.add("active");
};

// Cart Working JS
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}