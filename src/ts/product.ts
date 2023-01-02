import { IProduct } from "./modules/IProduct";
import { mockData } from "./services/mockProducts";
// import { getProduct } from "./services/mockProductService";

let varuKorgen: IProduct[] = JSON.parse(localStorage.getItem("cart") || "[]");

//Gör kategorierna klickbara

(document.getElementById("categories") as HTMLLIElement).addEventListener("click", (e: Event) => {
    let objekt: string = (e.target as HTMLLIElement).innerHTML;
    if(objekt === "Alla produkter"){
        createProducts(mockData);
    } else {
        showProduct(objekt);
    }
} );

//Funktion för att skriva ut objekten på DOM:en

function createProducts(products: IProduct[]) {

    (document.getElementById("product-container") as HTMLDivElement).innerHTML = "";

    for(let i = 0; i < products.length; i++) {
        let aProduct: HTMLDivElement = document.createElement("div");
        aProduct.classList.add("product-object");
        let bild: HTMLDivElement = document.createElement("div");
        let namn: HTMLHeadingElement = document.createElement("h4");
        let kategori: HTMLParagraphElement = document.createElement("p");
        let beskrivning: HTMLParagraphElement = document.createElement("p");
        let pris: HTMLParagraphElement = document.createElement("p");
        pris.classList.add("price");
        let knapp: HTMLButtonElement = document.createElement("button");
        knapp.addEventListener("click", (e: Event) => {
            addToCart(products[i]);
        } );

        namn.innerHTML = products[i].Name;
        bild.innerHTML = `<img src="${products[i].Img}" alt="${products[i].Name}">`;
        
        kategori.innerHTML = products[i].Category;
        beskrivning.innerHTML = products[i].Description;
        pris.innerHTML = products[i].Price.toFixed(2) + " kr";
        knapp.innerHTML = "Lägg i varukorgen";

        aProduct.appendChild(namn);
        aProduct.appendChild(bild);
        aProduct.appendChild(pris);
        aProduct.appendChild(kategori);
        aProduct.appendChild(beskrivning);
        aProduct.appendChild(knapp);

        (document.getElementById("product-container") as HTMLDivElement).appendChild(aProduct);

    }
};

//Funktion för att skriva ut objekt med vald kategori på DOM:en

function showProduct(category: string) {    
    let showingData: IProduct[] = [];
    for(let i = 0; i < mockData.length; i++) {
        if (mockData[i].Category === category) {
            showingData.push(mockData[i]);
    }
}
    createProducts(showingData);
};

//Funktion för att lägga till objekt i varukorgen

function addToCart(product: IProduct) {

    if(varuKorgen.length !== 0) {
        for(let i = 0; i < varuKorgen.length; i++) {
            if(product.Id === varuKorgen[i].Id) {
                varuKorgen[i].Quantity++;
                updateCart(varuKorgen);
                return;
            }
        }
    }
    varuKorgen.push(product);
    updateCart(varuKorgen);
}

//Funktion för att uppdatera varukorgen

function updateCart(newCart: IProduct[]) {
    let freshCart: IProduct[] = [];
    for(let i = 0; i < newCart.length; i++) {
        if(newCart[i].Quantity != 0){
            freshCart.push(newCart[i]);
        } else {
            window.location.reload();
        }
    }
    showCart(freshCart);
}

// function removeProduct(product: IProduct) {
//     let freshCart: IProduct[] = [];

//     for(let i = 0; i < varuKorgen.length; i++) {
//         if(varuKorgen[i] !== product) {
//             freshCart.push(varuKorgen[i]);
//         }
//     }
//     showCart(freshCart);
// }

//Funktion för att visa objekt i kundkorgen

function showCart(cart: IProduct[]) {

    localStorage.setItem("cart", JSON.stringify(cart));
    
    let cartUl: HTMLUListElement = document.getElementById("cart-basket") as HTMLUListElement;
    let totalSum: HTMLSpanElement = document.getElementById("total-sum") as HTMLSpanElement;
    
    cartUl.innerHTML = "";
    let priceSum: number = 0;
    
    for(let i = 0; i < cart.length; i++) {

        
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
            // if(varuKorgen[i].Quantity === 0){
                //     varuKorgen.slice(i);
                //     console.log(varuKorgen);
                // }
                updateCart(varuKorgen);
            })
            
            minusBtn.classList.add("minus-btn");
            plusBtn.classList.add("plus-btn");
            
            minusBtn.innerText = "-";
            plusBtn.innerText = "+";
            
            priceSum += cart[i].Price * cart[i].Quantity;
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

createProducts(mockData);

showCart(varuKorgen);