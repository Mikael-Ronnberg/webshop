import { IProduct } from "./models/IProduct";
import { mockData } from "./services/mockProducts";
// import { getProduct } from "./services/mockProductService";

let varuKorgen: IProduct[] = [];

//Gör kategorierna klickbara

(document.getElementById("categories") as HTMLLIElement).addEventListener("click", (e: Event) => {
    let objekt: string = (e.target as HTMLLIElement).innerHTML;
    showProduct(objekt);
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
           varuKorgen.push(products[i]);
           showCart(varuKorgen);
        } );

        namn.innerHTML = products[i].Name;
        bild.innerHTML = `<img src="${products[i].Img}" alt="${products[i].Name}">`;
        
        kategori.innerHTML = products[i].Category;
        beskrivning.innerHTML = products[i].Description
        pris.innerHTML = products[i].Price.toString() + " kr";
        knapp.innerHTML = "Lägg i varukorgen";

        aProduct.appendChild(namn);
        aProduct.appendChild(bild);
        aProduct.appendChild(pris);
        aProduct.appendChild(kategori);
        aProduct.appendChild(beskrivning);
        aProduct.appendChild(knapp);

        (document.getElementById("product-container") as HTMLDivElement).appendChild(aProduct);

    }
}

//Funktion för att skriva ut objekt med vald kategori på DOM:en

function showProduct(category: string) {    
    let showingData: IProduct[] = [];
    for(let i = 0; i < mockData.length; i++) {
        if (mockData[i].Category === category) {
            showingData.push(mockData[i]);
    }
}

    createProducts(showingData);
}

function showCart(cart: IProduct[]) {

    let cartUl: HTMLUListElement = document.getElementById("cart-container") as HTMLUListElement;

    cartUl.innerHTML = "";
    
    for(let i = 0; i < cart.length; i++) {

        let cartContainer: HTMLDivElement = document.createElement("div");
        cartContainer.classList.add("cart-object");
        let cartImg: HTMLImageElement = document.createElement("img");
        cartImg.classList.add("cart-image");
        let cartPrice: HTMLParagraphElement = document.createElement("p");
        let cartName: HTMLParagraphElement = document.createElement("p");
        let plusBtn: HTMLButtonElement = document.createElement("button");
        let minusBtn: HTMLButtonElement = document.createElement("button");
  
        minusBtn.classList.add("minus-btn");
        plusBtn.classList.add("plus-btn");

        minusBtn.innerText = "-";
        plusBtn.innerText = "+";

        
        
        cartName.innerHTML = cart[i].Name;
        cartImg.src = cart[i].Img;
        cartImg.alt = cart[i].Name;
        cartPrice.innerHTML = cart[i].Price.toString();

        cartContainer.appendChild(cartImg);
        cartContainer.appendChild(cartName);
        cartContainer.appendChild(cartPrice);
        cartContainer.appendChild(minusBtn);
        cartContainer.appendChild(plusBtn);

        cartUl.appendChild(cartContainer);
    }

}

createProducts(mockData);