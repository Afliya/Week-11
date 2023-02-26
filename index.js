function pressMe() {
  document.getElementById("shop__button").style.backgroundColor = "grey";
}

function pressMeBack() {
  document.getElementById("shop__button").style.backgroundColor =
    "rgb(122, 149, 221)";
}

let getTotal = () => {
  x = document.getElementById("price1");
  y = document.getElementById("price2");
  z = document.getElementById("price3");
  t = document.getElementById("price4");

  totalSum =
    Number(x.textContent) +
    Number(y.textContent) +
    Number(z.textContent) +
    Number(t.textContent);

  document.getElementById("total-price").textContent = totalSum;
};

getTotal();

let calculateWithDiscount = () => {
  num = document.getElementById("total-price");
  sumAfterDiscount = Number(num.textContent) - Number(num.textContent) * 0.2;
  document.getElementById("total-price").textContent = sumAfterDiscount;
};

// shop__button.addEventListener('click', () => {
//   let num = document.querySelector('#total-price').textContent;
//   total-price.textContent = Number(num.textContent) - Number(num.textContent) * 0.2;
// });

//***** Задание под звездочкой**
function calculateSquare() {
  a = document.getElementById("number");
  square = Number(a.value) ** 2;
  document.getElementById("total").value = square;
}
