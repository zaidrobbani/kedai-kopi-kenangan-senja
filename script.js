// toogle class active untuk humberger menu
const navbarNav = document.querySelector(".navbar-nav");
const humberger = document.querySelector("#humberger-menu");

// toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchButton = document.querySelector("#search-button");
const searchBox = document.querySelector("#search-box");

// toggle class active untuk Shopping-cart
const ShoppingCartButton = document.querySelector("#shooping-cart-button");
const ShoppingCart = document.querySelector(".shopping-cart");

// Modal Box
const ItemDetailModal = document.querySelector("#item-detail-modal");
const ItemDetailButton = document.querySelectorAll(".item-detail-button");
const CloseModalItem = document.querySelector(
  ".modal > .modal-container > .close-icon"
);

ItemDetailButton.forEach((btn) => {
  btn.onclick = (e) => {
    ItemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol Close
CloseModalItem.onclick = (e) => {
  ItemDetailModal.style.display = "none";
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === ItemDetailModal) {
    ItemDetailModal.style.display = "none";
  }
};

// ketika humberger menu di klik
humberger.onclick = (e) => {
  navbarNav.classList.toggle("active");
  humberger.focus();
  e.preventDefault();
};

// ketika search di klik
searchButton.onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// ketika Shopping Cart di klik
ShoppingCartButton.onclick = (e) => {
  ShoppingCart.classList.toggle("active");
  ShoppingCartButton.focus();
  e.preventDefault();
};

// klik di luar side bar untuk menghilangkan nav dan search form

document.addEventListener("click", function (e) {
  if (!humberger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (
    !ShoppingCartButton.contains(e.target) &&
    !ShoppingCart.contains(e.target)
  ) {
    ShoppingCart.classList.remove("active");
  }
});
