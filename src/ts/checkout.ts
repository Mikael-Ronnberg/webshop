import { IProduct } from "./models/IProduct";
// import { mockData } from "./services/mockProducts";
// import { getProduct } from "./services/mockProductService";

let varuKorgen: IProduct[] = JSON.parse(localStorage.getItem("cart") || "[]");


function showCart(cart: IProduct[]) {

    localStorage.setItem("cart", JSON.stringify(cart));
    
    let cartUl: HTMLUListElement = document.getElementById("cart-basket") as HTMLUListElement;
    let totalSum: HTMLSpanElement = document.getElementById("total-sum") as HTMLSpanElement;
    
    cartUl.innerHTML = "";
    let priceSum: number = 0;
    
    for(let i = 0; i < cart.length; i++) {

        priceSum += cart[i].Price * cart[i].Quantity;

        let cartContainer: HTMLLIElement= document.createElement("li");
        cartContainer.classList.add("cart-object");
        let cartImg: HTMLImageElement = document.createElement("img");
        cartImg.classList.add("cart-image");
        let cartPrice: HTMLParagraphElement = document.createElement("p");
        let cartQuant: HTMLParagraphElement = document.createElement("p");
        let cartName: HTMLParagraphElement = document.createElement("p");
        let plusBtn: HTMLButtonElement = document.createElement("button");
        plusBtn.addEventListener("click", (e: Event)=> {
            varuKorgen[i].Quantity ++;
            updateCart(varuKorgen);
        })
        let minusBtn: HTMLButtonElement = document.createElement("button");
        minusBtn.addEventListener("click", (e: Event)=> {
            varuKorgen[i].Quantity --;
            if(varuKorgen[i].Quantity === 0){
                varuKorgen.slice(varuKorgen.indexOf(varuKorgen[i]));
                console.log(varuKorgen.indexOf(varuKorgen[i]));
                console.log(varuKorgen);
            }
            updateCart(varuKorgen);
        })
  
        minusBtn.classList.add("minus-btn");
        plusBtn.classList.add("plus-btn");

        minusBtn.innerText = "-";
        plusBtn.innerText = "+";

        cartName.innerHTML = cart[i].Name;
        cartImg.src = cart[i].Img;
        cartImg.alt = cart[i].Name;
        cartPrice.innerHTML = (cart[i].Price * cart[i].Quantity).toFixed(2);
        cartQuant.innerHTML = "Antal: " + cart[i].Quantity.toString();
        totalSum.innerHTML = priceSum.toFixed(2) + " kr";

        cartContainer.appendChild(cartQuant);
        cartContainer.appendChild(cartImg);
        cartContainer.appendChild(cartName);
        cartContainer.appendChild(cartPrice);
        cartContainer.appendChild(minusBtn);
        cartContainer.appendChild(plusBtn);

        cartUl.appendChild(cartContainer);
    }

};

function updateCart(newCart: IProduct[]) {
    let freshCart: IProduct[] = [];
    for(let i = 0; i < newCart.length; i++) {
        freshCart.push(newCart[i]);
    }
    showCart(freshCart);
}

showCart(varuKorgen);