import { IProduct } from "./models/IProduct";
import { mockData } from "./services/mockProducts";
// import { getProduct } from "./services/mockProductService";

let produkter: IProduct[] = [];


function createProducts(products: IProduct[]) {

    // let produkter = "";

    for(let i = 0; i < products.length; i++) {
        let aProduct: HTMLDivElement = document.createElement("div");
        let bild: HTMLImageElement = document.createElement("img");
        let namn: HTMLHeadingElement = document.createElement("h4");
        let kategori: HTMLParagraphElement = document.createElement("p");
        let beskrivning: HTMLParagraphElement = document.createElement("p");
        let pris: HTMLParagraphElement = document.createElement("p");

        namn.innerHTML = products[i].Name;
        bild.innerHTML = products[i].Img;
        kategori.innerHTML = products[i].Category;
        beskrivning.innerHTML = products[i].Description
        pris.innerHTML = products[i].Price.toString();

        aProduct.appendChild(namn);
        aProduct.appendChild(bild);
        aProduct.appendChild(pris);
        aProduct.appendChild(kategori);
        aProduct.appendChild(beskrivning);

        (document.getElementById("product-container") as HTMLDivElement).appendChild(aProduct);

    }
}

createProducts(mockData);