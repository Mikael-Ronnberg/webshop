import { IProduct } from "./models/IProduct";

let cartObjects: IProduct[] = [];


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
        // knapp.addEventListener("click", (products[i]) );

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