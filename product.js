//la quantité  */
let qte = document.querySelectorAll('.qte');
let prix = document.querySelectorAll('.pu');
for(let i = 0; i < qte.length;i++) {
    let moins = qte[i].previousElementSibling;
    let plus = qte[i].nextElementSibling;
    let pu = prix[i].innerText;
    moins.addEventListener("click", function (){
        let val = qte[i].innerText;
        val--;
        if(val<0){
            val=0;
        }
        qte[i].innerText = val;
        let som = val*pu;
        sousT[i].innerText = som;
        total.innerText = parseInt(total.innerText,10)- parseInt(pu,10);
    });
    plus.addEventListener("click", function (){
        let valA = qte[i].innerText;
        valA++;
        qte[i].innerText = valA;
        let som = valA*pu;
        sousT[i].innerText = som;
        total.innerText = parseInt(total.innerText,10) + parseInt(pu,10) ;
    });
}
  //shipping cost

const calculateShipping = (price) => {
    let shippingCost = 0;

    if (price < 10000) {
        shippingCost = 1000;
    } else if (price >= 1000.00 && price < 20000) {
        shippingCost = 0.15 * price;
    } else if (price >= 20000 && price < 100000) {
        shippingCost = 0.20 * price;
    } else if (price >= 100000) {
        shippingCost = 25000;
    }
    return shippingCost;
}

// heart like button
for(let i in hearts){
    hearts[i].addEventListener("click",function(){
        if(hearts[i].getAttribute('src') == "assets/redHeart.png")
        hearts[i].setAttribute('src','assets/whiteHeart.png');
        else
        hearts[i].setAttribute('src','assets/redHeart.png');
    });
}



// delete button


//total sum

const calculateTotal = (price, shipping) => {
    return price + shipping;
}

const calculateAll = () => {
    const initialPrice = 2999;

    let theQuantity = Number(domElements.quantity.value);
    if (theQuantity < 1 || !Number.isInteger(theQuantity || domElements.quantity.value === "")) {
        domElements.buyBtn.disabled = true;
        domElements.buyBtn.classList.add('disabled');
        domElements.error.classList.add('show');
        domElements.price.innerHTML = initialPrice;
        domElements.totalCost.innerHTML = initialPrice + 1000;
    }
    else {
        domElements.error.classList.remove('show');
        domElements.buyBtn.disabled = false;
        domElements.buyBtn.classList.remove('disabled');

        let actualPrice = theQuantity * initialPrice;
        let shippingFee = calculateShipping(actualPrice);
        let totalCost = calculateTotal(actualPrice, shippingFee);

        domElements.price.textContent = `${actualPrice}`;
        domElements.shippingCost.textContent = `${shippingFee}`;
        domElements.totalCost.textContent = `${totalCost}`;
    }
}

domElements.quantity.addEventListener('input', calculateAll);
