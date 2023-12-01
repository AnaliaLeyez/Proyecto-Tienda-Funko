const addOne = document.querySelector("#add");
const substractOne = document.querySelector("#subtract");
const quantityOne = document.querySelector("#quantity");
const acuPriceOne = document.querySelector("#acuPriceItem");
const cantElemCheckout = document.querySelector("#cart__cantElemCheckout");
const btnQuantity = document.getElementsByClassName("item__quantity");
const cartSubtot = document.querySelector("#cart__subtot");
const cartEnvio = document.querySelector("#cart__envio");
const cartTotal = document.querySelector("#cart__total");

addOne.addEventListener('click', () => {
    quantityOne.value = Number(quantityOne.value) + 1;
});

substractOne.addEventListener('click', () => {
    const currentQuantityOne = Number(quantityOne.value);
    if (currentQuantityOne > 0) {
        quantityOne.value = currentQuantityOne - 1;
    } else {
        quantityOne.value = 0;
    }
})

function UpdateCart(){
    acuPriceOne.textContent = (Number(quantityOne.value) * 1799.99).toFixed(2);
    cantElemCheckout.textContent = 1 + Number(quantityOne.value);
    cartSubtot.textContent = (Number(acuPriceOne.textContent) + 1799.99).toFixed(2);
    cartTotal.textContent = (Number(cartSubtot.textContent) + Number(cartEnvio.textContent)).toFixed(2);
}

// Iterar sobre la colección y añadir el evento a cada botón
for (const btn of btnQuantity) {
    btn.addEventListener('click', () => {
        UpdateCart();
    });
}

quantityOne.addEventListener('input', () =>{
    UpdateCart();
});

