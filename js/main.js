const basketQuantityContainer = document.getElementById("basket-quantity");
const basketValueContainer = document.getElementById("basket-value");
const addBasketButton = document.getElementById("add-basket-button");
const priceItem = document.getElementById("price-item");
const itemNumberContainer = document.getElementById("item-number");
const quantityProductContainer = document.getElementById("quantityProduct");
const addItemButton = document.getElementById("add-item");
const removeItemButton = document.getElementById("remove-item");
const colorProductList = [
  ...document.querySelectorAll(".product-description__color--item"),
];
const productImg = document.querySelector(".product-img__selected img");
const upArrowButton = document.getElementById("up-arrow");
const downArrowButton = document.getElementById("down-arrow");
const imgProductList = [
  ...document.querySelectorAll(".product-img__list--item"),
];

let basketQuantity = 2;
let basketValue = 3454.0;
let price = 1278.0;
let itemNumber = 1;
let quantityProduct = 14;
let imgActiveNumber = 0;

basketValueContainer.textContent = `${basketValue
  .toFixed(2)
  .replace(".", ",")}`;
basketQuantityContainer.textContent = `${basketQuantity}`;
priceItem.textContent = `${price.toFixed(2).replace(".", ",")} zł`;
itemNumberContainer.textContent = `${itemNumber}`;
quantityProductContainer.textContent = `${quantityProduct}`;

addBasketButton.addEventListener("click", () => {
  basketValue += itemNumber * price;
  basketValueContainer.textContent = `${basketValue
    .toFixed(2)
    .replace(".", ",")}`;
  basketQuantityContainer.textContent = `${(basketQuantity += itemNumber)}`;
});

addBasketButton.addEventListener("mousedown", () => {
  addBasketButton.style.backgroundBlendMode = "color-burn";
});

addBasketButton.addEventListener("mouseup", () => {
  addBasketButton.style.backgroundBlendMode = "normal";
});

addItemButton.addEventListener("click", () => {
  itemNumber < quantityProduct ? itemNumber++ : null;
  itemNumberContainer.textContent = `${itemNumber}`;
});

removeItemButton.addEventListener("click", () => {
  itemNumber > 1 ? itemNumber-- : null;
  itemNumberContainer.textContent = `${itemNumber}`;
});

colorProductList.forEach((item, index) => {
  item.addEventListener("click", () => {
    colorProductList.forEach((color) => {
      color.classList.remove("active");
    });
    item.classList.add("active");
    switch (index) {
      case 0:
        productImg.style.filter = "hue-rotate(0)";
        break;
      case 1:
        productImg.style.filter = "hue-rotate(60deg)";
        break;
      case 2:
        productImg.style.filter = "hue-rotate(120deg)";
        break;
      case 3:
        productImg.style.filter = "hue-rotate(180deg)";
        break;
      case 4:
        productImg.style.filter = "hue-rotate(240deg)";
        break;
      case 5:
        productImg.style.filter = "hue-rotate(300deg)";
        break;
    }
  });
});

imgProductList.forEach((item, index) => {
  item.addEventListener("click", () => {
    imgProductList.forEach((img) => {
      img.classList.remove("active");
    });
    item.classList.add("active");
    imgActiveNumber = index;
  });
});

upArrowButton.addEventListener("click", () => {
  imgProductList.forEach((img) => {
    img.classList.remove("active");
  });
  imgActiveNumber >= 1
    ? imgProductList[--imgActiveNumber].classList.add("active")
    : imgProductList[0].classList.add("active");
});

downArrowButton.addEventListener("click", () => {
  imgProductList.forEach((img) => {
    img.classList.remove("active");
  });
  imgActiveNumber < imgProductList.length - 1
    ? imgProductList[++imgActiveNumber].classList.add("active")
    : imgProductList[imgProductList.length - 1].classList.add("active");
});