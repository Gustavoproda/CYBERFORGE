const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "RTX 4090 SUPER TUF OG OC GDDR6",
    price: "PROMOÇÃO",
    colors: [
      {
        code: "black",
        img: "./imagens/pc/preto.png",
      },
      {
        code: "darkblue",
        img: "./imagens/pc/branco.png",
      },
    ],
  },
  {
    id: 2,
    title: "PC Gamer Completo",
    price: "Desconto 60%",
    colors: [
      {
        code: "black",
        img: "./imagens/notebook/10.png",
      },
      {
        code: "darkblue",
        img: "./imagens/notebook/07.png",
      },
    ],
  },
  {
    id: 3,
    title: "KIT PERIFÉRICOS",
    price: "Até 50% de desconto",
    colors: [
      {
        code: "gray",
        img: "./imagens/pc/3.png",
      },
      {
        code: "lightgray",
        img: "./imagens/pc/1.png",
      },
    ],
  },
  {
    id: 4,
    title: "PLACAS DE VÍDEO",
    price: "Ofertas Especiais",
    colors: [
      {
        code: "black",
        img: "./imagens/pc/2.png",
      },
      {
        code: "lightgray",
        img: "./imagens/pc/preto.png",
      },
    ],
  },
  {
    id: 5,
    title: "NOTEBOOKS DE QUALIDADE",
    price: "Descontos Exclusivos",
    colors: [
      {
        code: "black",
        img: "./imagens/notebook/10.png",
      },
      {
        code: "gray",
        img: "./imagens/notebook/07.png",
      },
    ],
  },
];

let choosenProduct = products[0];

// Elementos da página
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

// Função para alterar o produto quando clicar no menu
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
    choosenProduct = products[index];

    // Atualizar o conteúdo do produto
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    // Atualizar as cores disponíveis
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
      color.addEventListener("click", () => {
          currentProductImg.src = choosenProduct.colors[index].img;
      });
  });
  });
});

// Tamanhos (se necessário)
currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((s) => s.classList.remove("selected"));
    size.classList.add("selected");
  });
});

currentProductSizes.forEach((size) => {
  size.addEventListener("click", () => {
      currentProductSizes.forEach((s) => s.classList.remove("selected"));
      size.classList.add("selected");
  });
});
