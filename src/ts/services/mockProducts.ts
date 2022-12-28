import { IProduct } from "../models/IProduct";

// Kategorier: Dryck, Bröd, Kött, Vego, Sallad, Fisk, Sött

export let mockData: IProduct[] = [
    {
        Id: "1",
        Name: "Julmust",
        Img: "https://media.delitea.se/product-images/XL/apotekarnes-julmust-33cl-inkl-pant-0.jpg",
        Category: "Dryck",
        Price: 10.90,
        Quantity: 1,
        Description: "lorem"
    },
    {
        Id: "2",
        Name: "Julskinka",
        Img: "https://www.amoi.se/_next/image?url=https%3A%2F%2Fassets.amoi.se%2Fv7%2F_prod_%2Fassets%2Fimages%2F4d8d9880-82b2-4214-91f3-889ad6f7fa4e.jpeg%3Fbr_px%3D3729%252C3729%26tl_px%3D0%252C0&w=1080&q=75",
        Category: "Kött",
        Price: 47.90,
        Quantity: 1,
        Description: "Lorem"
    },
    {
        Id: "3",
        Name: "Rödbetssallad",
        Img: "https://static.mathem.se/shared/images/products/large/07313161311360_c1c1.jpg",
        Category: "Sallad",
        Price: 24.90,
        Quantity: 1,
        Description: "Lorem"
    },
    {
        Id: "4",
        Name: "Prinskorv",
        Img: "https://cdn.natmat.se/content/shopimages/large/6467-160094.jpg",
        Category: "Kött",
        Price: 40.90,
        Quantity: 1,       
        Description: "Lorem"
    },
    {
        Id: "5",
        Name: "Köttbullar",
        Img: "https://crockpot.se/wp-content/uploads/2021/04/kottbulla_web-640x480.jpg",
        Category: "Kött",
        Price: 50.90,
        Quantity: 1,       
        Description: "Lorem"
    },
    {
        Id: "6",
        Name: "Lucia Katter",
        Img: "https://www.recepten.se/bilder/recept/2/main/l/lussekatter.jpg",
        Category: "Sött",
        Price: 39.90,
        Quantity: 1,       
        Description: "Lorem"
    },
    {
        Id: "7",
        Name: "Peppar Kakor",
        Img: "https://res.cloudinary.com/coopsverige/image/upload/v1632490120/cloud/234240.jpg",
        Category: "Sött",
        Price: 29.90,
        Quantity: 1,       
        Description: "lorem"
    },
    {
        Id: "8",
        Name: "jul bullar",
        Img: "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_63271/cf_259/julbullar.jpg",
        Category: "Sött",
        Price: 37.90,
        Quantity: 1,       
        Description: "lorem"
    },
    {
        Id: "9",
        Name: "Glögg",
        Img: "https://www.unbooze.se/wp-content/uploads/2022/11/infused-liquid-glogg-blabar.png",
        Category: "Dryck",
        Price: 59.90,
        Quantity: 1,       
        Description: "lorem"
    },
    {
        Id: "10",
        Name: "Inläggningssill",
        Img: "https://static.mathem.se/shared/images/products/large/07350126082743_c1n1.jpg",
        Category: "Fisk",
        Price: 30.90,
        Quantity: 1,       
        Description: "lorem"
    },
    {
        Id: "11",
        Name: "Vego bullar",
        Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEkvX-XIzo8pSWzds2OI0DQ_30NZKIDJt3Ow&usqp=CAU",
        Category: "Vego",
        Price: 50.90,
        Quantity: 1,       
        Description: "lorem"
    },
    {
        Id: "12",
        Name: "Jul Bröd",
        Img: "https://sisselblom.se/wp-content/uploads/2015/03/julekake.jpg",
        Category: "Bröd",
        Price: 40.90,
        Quantity: 1,       
        Description: "lorem"
    },
    {
        Id: "13",
        Name: "Köttbullar",
        Img: "https://crockpot.se/wp-content/uploads/2021/04/kottbulla_web-640x480.jpg",
        Category: "Kött",
        Price: 50.90,
        Quantity: 1,       
        Description: "Lorem"
    },
    {
        Id: "14",
        Name: "Lucia Katter",
        Img: "https://www.recepten.se/bilder/recept/2/main/l/lussekatter.jpg",
        Category: "Sött",
        Price: 39.90,
        Quantity: 1,       
        Description: "Lorem"
    },
    {
        Id: "15",
        Name: "Peppar Kakor",
        Img: "https://res.cloudinary.com/coopsverige/image/upload/v1632490120/cloud/234240.jpg",
        Category: "Sött",
        Price: 29.90,
        Quantity: 1,       
        Description: "lorem"
    },
    {
        Id: "16",
        Name: "jul bullar",
        Img: "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_63271/cf_259/julbullar.jpg",
        Category: "Sött",
        Price: 37.90,
        Quantity: 1,       
        Description: "lorem"
    },
    {
        Id: "17",
        Name: "Glögg",
        Img: "https://www.unbooze.se/wp-content/uploads/2022/11/infused-liquid-glogg-blabar.png",
        Category: "Dryck",
        Price: 59.90,
        Quantity: 1,       
        Description: "lorem"
    },
    {
        Id: "18",
        Name: "Inläggningssill",
        Img: "https://static.mathem.se/shared/images/products/large/07350126082743_c1n1.jpg",
        Category: "Fisk",
        Price: 30.90,
        Quantity: 1,       
        Description: "lorem"
    },
    {
        Id: "19",
        Name: "Vego bullar",
        Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEkvX-XIzo8pSWzds2OI0DQ_30NZKIDJt3Ow&usqp=CAU",
        Category: "Vego",
        Price: 50.90,
        Quantity: 1,       
        Description: "lorem"
    },
    {
        Id: "20",
        Name: "Jul Bröd",
        Img: "https://sisselblom.se/wp-content/uploads/2015/03/julekake.jpg",
        Category: "Bröd",
        Price: 40.90,
        Quantity: 1,       
        Description: "lorem"
    },
    {
        Id: "21",
        Name: "Köttbullar",
        Img: "https://crockpot.se/wp-content/uploads/2021/04/kottbulla_web-640x480.jpg",
        Category: "Kött",
        Price: 50.90,
        Quantity: 1,       
        Description: "Lorem"
    },
    {
        Id: "22",
        Name: "Lucia Katter",
        Img: "https://www.recepten.se/bilder/recept/2/main/l/lussekatter.jpg",
        Category: "Sött",
        Price: 39.90,
        Quantity: 1,       
        Description: "Lorem"
    },
    {
        Id: "23",
        Name: "Peppar Kakor",
        Img: "https://res.cloudinary.com/coopsverige/image/upload/v1632490120/cloud/234240.jpg",
        Category: "Sött",
        Price: 29.90,
        Quantity: 1,       
        Description: "lorem"
    },
    {
        Id: "24",
        Name: "jul bullar",
        Img: "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_63271/cf_259/julbullar.jpg",
        Category: "Sött",
        Price: 37.90,
        Quantity: 1,       
        Description: "lorem"
    },
    {
        Id: "25",
        Name: "Glögg",
        Img: "https://www.unbooze.se/wp-content/uploads/2022/11/infused-liquid-glogg-blabar.png",
        Category: "Dryck",
        Price: 59.90,
        Quantity: 1,       
        Description: "lorem"
    },
    {
        Id: "26",
        Name: "Inläggningssill",
        Img: "https://static.mathem.se/shared/images/products/large/07350126082743_c1n1.jpg",
        Category: "Fisk",
        Price: 30.90,
        Quantity: 1,       
        Description: "lorem"
    },
    {
        Id: "27",
        Name: "Vego bullar",
        Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEkvX-XIzo8pSWzds2OI0DQ_30NZKIDJt3Ow&usqp=CAU",
        Category: "Vego",
        Price: 50.90,
        Quantity: 1,       
        Description: "lorem"
    },
    {
        Id: "28",
        Name: "Jul Bröd",
        Img: "https://sisselblom.se/wp-content/uploads/2015/03/julekake.jpg",
        Category: "Bröd",
        Price: 40.90,
        Quantity: 1,       
        Description: "lorem"
    },
];