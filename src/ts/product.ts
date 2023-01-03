import { IProduct } from "./modules/IProduct";
import { mockData } from "./services/mockProducts";
// import { getProduct } from "./services/mockProductService";

let varuKorgen: IProduct[] = JSON.parse(localStorage.getItem("cart") || "[]");

//Gör kategorierna klickbara

(document.getElementById("categories") as HTMLLIElement).addEventListener("click", (e: Event) => {
    let category: string = (e.target as HTMLLIElement).innerHTML;
    if(category === "Alla produkter"){
        createProducts(mockData);
    } else {
        showProduct(category);
    }
} );

//Funktion för att få fram varukorgen
let myBasket: HTMLAnchorElement = document.getElementById("basket-press") as HTMLAnchorElement;


myBasket.addEventListener("click", () => {
    (document.getElementById("cart-container") as HTMLDivElement).classList.toggle("hidden-basket");
})

//Funktion för att skriva ut objekten på DOM:en

function createProducts(products: IProduct[]) {

    (document.getElementById("product-container") as HTMLDivElement).innerHTML = "";

    for(let i = 0; i < products.length; i++) {
        let aProduct: HTMLDivElement = document.createElement("div");
        aProduct.classList.add("product-object");
        let image: HTMLDivElement = document.createElement("div");
        let name: HTMLHeadingElement = document.createElement("h4");
        let category: HTMLParagraphElement = document.createElement("p");
        let description: HTMLParagraphElement = document.createElement("p");
        let price: HTMLParagraphElement = document.createElement("p");
        price.classList.add("price");
        let button: HTMLButtonElement = document.createElement("button");
        button.addEventListener("click", (e: Event) => {
            addToCart(products[i]);
        } );

        name.innerHTML = products[i].Name;
        image.innerHTML = `<img src="${products[i].Img}" alt="${products[i].Name}">`;
        
        category.innerHTML = products[i].Category;
        description.innerHTML = products[i].Description;
        price.innerHTML = products[i].Price.toFixed(2) + " kr";
        button.innerHTML = "Lägg i varukorgen";

        aProduct.appendChild(name);
        aProduct.appendChild(image);
        aProduct.appendChild(price);
        aProduct.appendChild(category);
        aProduct.appendChild(description);
        aProduct.appendChild(button);

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
            cartPrice.innerHTML = ((cart[i].Price * cart[i].Quantity).toFixed(2) || "0");
        cartQuant.innerHTML = "Antal: " + cart[i].Quantity.toString() ;
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