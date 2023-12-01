const product = [
  {
    id: 0,
    image: "image/img-1.jpg",
    title: "Cadbury Chocolates",
    price: 120,
  },
  {
    id: 1,
    image: "image/img-2.jpg",
    title: "Nestle Chocolates",
    price: 60,
  },
  {
    id: 2,
    image: "image/img-3.jpg",
    title: "Amul Chocolates",
    price: 230,
  },
  {
    id: 3,
    image: "image/img-4.jpg",
    title: "Parle Chocolates",
    price: 100,
  },
  {
    id: 4,
    image: "image/img-5.jpg",
    title: "Mars Chocolates",
    price: 100,
  },
  {
    id: 5,
    image: "image/img-6.jpg",
    title: "Ferrero Rocher Chocolates",
    price: 500,
  },
  {
    id: 6,
    image: "image/img-7.jpg",
    title: " Lotus Chocolates",
    price: 600,
  },
  {
    id: 7,
    image: "image/img-8.jpg",
    title: "Campco Chocolates",
    price: 250,
  },
  {
    id: 8,
    image: "image/img-9.jpg",
    title: " Hershey Chocolates",
    price: 250,
  },
  {
    id: 9,
    image: "image/img-10.jpg",
    title: "Pacari Chocolates",
    price: 250,
  },
  {
    id: 10,
    image: "image/img-11.jpg",
    title: "Lotte Chocolates",
    price: 250,
  },
  {
    id: 11,
    image: "image/img-12.jpg",
    title: "Toblerone Chocolates",
    price: 250,
  },
  {
    id: 12,
    image: "image/img-13.jpg",
    title: "Ghirardelli Chocolates",
    price: 250,
  },
  {
    id: 13,
    image: "image/img-14.jpg",
    title: "Lindt Chocolates",
    price: 250,
  },
  {
    id: 14,
    image: "image/img-15.jpg",
    title: "Fabelle Chocolate",
    price: 250,
  },
];

const rootElement = document.getElementById("root");
const cartElement = document.getElementById("cartItem");
const totalElement = document.getElementById("total");
const countElement = document.getElementById("count");

function renderProduct(productItem, index) {
  const { image, title, price } = productItem;
  const box = document.createElement("div");
  box.classList.add("box");

  box.innerHTML = `
        <div class='img-box'>
            <img class='images' src=${image}></img>
        </div>
        <div class='bottom'>
            <p>${title}</p>
            <h2>$ ${price}.00</h2>
            <button onclick='addtocart(${index})'>Add to cart</button>
        </div>
    `;

  return box;
}

function displayCart() {
  let total = 0;
  countElement.textContent = cart.length;

  if (cart.length === 0) {
    cartElement.innerHTML = "Your cart is empty";
    totalElement.textContent = "$ 0.00";
  } else {
    total = cart.reduce((acc, item) => acc + item.price, 0);
    totalElement.textContent = `$ ${total}.00`;

    cartElement.innerHTML = cart
      .map(
        (item, index) => `
            <div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${item.image}>
                </div>
                <p style='font-size:12px;'>${item.title}</p>
                <h2 style='font-size: 15px;'>$ ${item.price}.00</h2>
                <i class='fa-solid fa-trash' onclick='delElement(${index})'></i>
            </div>
        `
      )
      .join("");
  }
}

function addtocart(index) {
  if (cart.length < 8) {
    cart.push({ ...product[index] });
    displayCart();
  } else {
    alert("You can only select up to 8 items.");
  }
}

function delElement(index) {
  cart.splice(index, 1);
  displayCart();
}

const cart = [];
const rootFragment = document.createDocumentFragment();

product.forEach((productItem, index) => {
  rootFragment.appendChild(renderProduct(productItem, index));
});

rootElement.appendChild(rootFragment);
displayCart();
