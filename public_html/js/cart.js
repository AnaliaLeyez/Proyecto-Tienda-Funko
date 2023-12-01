const addOne = document.querySelector("#add");
const substractOne = document.querySelector("#subtract");
const quantityOne = document.querySelector("#quantity");


addOne.addEventListener('click', () => quantityOne.value = Number(quantityOne.value) + 1);

substractOne.addEventListener('click', () => {
    const currentQuantityOne = Number(quantityOne.value);
    if (currentQuantityOne > 0) {
        quantityOne.value = currentQuantityOne - 1;
    } else {
        quantityOne.value = 0;
    }
})