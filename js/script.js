// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

// ketika hamburger menu di klik
hamburger.onclick = (event) => {
  event.preventDefault();
  navbarNav.classList.toggle("active");
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const searchButton = document.querySelector("#search-button");

searchButton.onclick = (event) => {
  event.preventDefault();
  searchForm.classList.toggle("active");
  searchBox.focus();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
const shoppingCartButton = document.querySelector("#shopping-cart-button");

shoppingCartButton.onclick = (event) => {
  event.preventDefault();
  shoppingCart.classList.toggle("active");
};

// klik di luar element
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (
    !shoppingCartButton.contains(e.target) &&
    !shoppingCart.contains(e.target)
  ) {
    shoppingCart.classList.remove("active");
  }
});

// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    e.preventDefault();
    itemDetailModal.style.display = "flex";
  };
});

// klik tombol close modal
document.querySelector(".modal .close-icon").onclick = (e) => {
  e.preventDefault();
  itemDetailModal.style.display = "none";
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
