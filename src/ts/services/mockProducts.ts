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
        Description: "Svenska Nygårdas Julmust baserar sig på ett originalrecept från 1910 och smakar som en must ska smaka. Söt traditionell must med fint skum och fylliga komplexa och runda smaker."
    },
    {
        Id: "2",
        Name: "saffranskyckling",
        Img: "https://cdn-rdb.arla.com/Files/arla-se/460562056/4ac44c18-bd97-488f-898b-490d95960656.jpg?w=1269&h=715&mode=crop&ak=f525e733&hm=b762ca1a",
        Category: "Kött",
        Price: 47.90,
        Quantity: 1,
        Description: "Kyckling marinerade med saffran, citron och chili är en smakrik rätt. Den är lätt att laga, då kycklingen sköter sig själv i ugnen. Serverad med kall sås, fluffig couscous och grönsallad."
    },
    {
        Id: "3",
        Name: "Rödbetssallad",
        Img: "https://cdn-rdb.arla.com/Files/arla-se/3945250878/dcf0130f-53b4-4f29-99bb-41571f15ae83.jpg?crop=(0,14,0,-134)&w=1269&h=715&mode=crop&ak=f525e733&hm=b14f0270",
        Category: "Sallad",
        Price: 24.90,
        Quantity: 1,
        Description: "En klassiker gjord på gotländska rödbetor. Vegansk rödbetssallad är en vegansk variant på vår klassiska rödbetssallad. Majonnäsen i salladen är gjord utan ägg, helt enkelt."
    },
    {
        Id: "4",
        Name: "Frukt sallad",
        Img: "https://cdn-rdb.arla.com/Files/arla-se/804631427/0995603c-dabd-4db1-a7a4-19f2cc2f8ebd.jpg?w=1600&h=1078&mode=crop&ak=f525e733&hm=a6677d03",
        Category: "Sallad",
        Price: 22.90,
        Quantity: 1,
        Description: "En fräsch fruktsallad som passar perfekt på julens dessertbord. Apelsiner, fikon, äpplen och pecannötter toppas av en mjuk och krämig saffransmascarpone."
    },
    {
        Id: "5",
        Name: "Isad vintersallad",
        Img: "https://cdn-rdb.arla.com/Files/arla-se/2106122407/e5c30eb5-a76b-4c48-8667-6b7f08042ad2.jpg?w=1600&h=1078&mode=crop&ak=f525e733&hm=a6677d03",
        Category: "Sallad",
        Price: 21.90,
        Quantity: 1,
        Description: "Vintrig sallad som får sötma från päron och sälta från ädelost. För att få grönsakerna riktigt krispiga får de ligga i isvatten en stund."
    },
    {
        Id: "6",
        Name: "Prinskorv",
        Img: "https://cdn-rdb.arla.com/Files/arla-se/2678209135/db599bed-11ca-47a3-aa77-e30de01511cc.jpg?w=1600&h=1078&mode=crop&ak=f525e733&hm=a6677d03",
        Category: "Kött",
        Price: 40.90,
        Quantity: 1,       
        Description: "En varmrökt kvalitetsprinskorv med klassisk smak och hög kötthalt. Prinskorvarna är tillverkade med extra tunt skinn. Våra korvar innehåller bara svenskt kött från våra gårdar."
    },
    {
        Id: "7",
        Name: "Köttbullar",
        Img: "https://cdn-rdb.arla.com/Files/arla-se/2925428190/45a9e46c-059d-4e11-a526-da878c68f919.jpg?w=1600&h=1078&mode=crop&ak=f525e733&hm=a6677d03",
        Category: "Kött",
        Price: 50.90,
        Quantity: 1,       
        Description: "Våra smakrika delikatessköttbullar är lite mindre köttbullar som har en extra hög kötthalt och bjuder på en härligt god och fyllig smak. Och självklart kommer köttet enbart från djur på svenska gårdar."
    },
    {
        Id: "8",
        Name: "Lucia Katter",
        Img: "https://cdn-rdb.arla.com/Files/arla-se/4260873076/5e38aa03-f642-4417-be1c-b47e3767f869.jpg?w=1600&h=1078&mode=crop&ak=f525e733&hm=a6677d03",
        Category: "Sött",
        Price: 39.90,
        Quantity: 1,       
        Description: "Saftiga lussekatter är ett måste till jul, men vem har sagt att de måste se ut på samma sätt varje år. Varför inte forma degen till fina former med hjälp av pepparkaksformar? Följ ett klassiskt recept på gyllene och saffransdoftande lussebullar - låt sedan fantasin flöda!"
    },
    {
        Id: "9",
        Name: "Peppar Kakor",
        Img: "https://cdn-rdb.arla.com/Files/arla-se/4055953695/41f03d24-f785-4b5c-9964-c5fe79c15e9a.jpg?w=1600&h=1078&mode=crop&ak=f525e733&hm=a6677d03",
        Category: "Sött",
        Price: 29.90,
        Quantity: 1,       
        Description: "Tunna, spröda pepparkakor som är bakade på rapsolja (fria från palmolja)"
    },
    {
        Id: "10",
        Name: "choklad med kanel",
        Img: "https://cdn-rdb.arla.com/Files/arla-se/3362605072/1d2bba50-0c09-4016-8348-0a151a725c92.jpg?crop=(174,0,0,0)&w=1600&h=1078&mode=crop&ak=f525e733&hm=419ac45d   ",
        Category: "Dryck",
        Price: 39.90,
        Quantity: 1,       
        Description: "En lyxvariant med extra allt - kakao, mjölkchoklad och kryddig kanel!"
    },
    {
        Id: "11",
        Name: "Rimmad lax",
        Img: "https://cdn-rdb.arla.com/Files/arla-se/1368655128/3b9fdd86-5049-4f50-9bbf-a4139777aed9.jpg?w=1600&h=1078&mode=crop&ak=f525e733&hm=a6677d03",
        Category: "Fisk",
        Price: 44.90,
        Quantity: 1,       
        Description: "Klassisk rimmad lax som du låter ligga i kylen ett dygn. Det enda du behöver är laxfilé, socker, salt och peppar. Rimmad lax passar utmärkt tillsammans potatisgratäng med dill, i en pasta eller på pizza. Ljuvligt gott!"
    },
    {
        Id: "12",
        Name: "Vegansk seitanskinka",
        Img: "https://cdn-rdb.arla.com/Files/arla-se/91419656/b24c8bfa-6512-4fb7-a529-e4d37df4160c.jpg?w=1600&h=1078&mode=crop&ak=f525e733&hm=a6677d03",
        Category: "Vego",
        Price: 60.90,
        Quantity: 1,       
        Description: "Vegansk seitanskinka gör ditt julbord mer spännande. För visst låter du lite häftigare och trendigare om du säger ”I år hade vi vegansk seitanskinka på julbordet”, istället för ”Vi hade vanlig julskinka på julbordet”? Och i fall du missade det, den är vegansk."
    },
    {
        Id: "13",
        Name: "Jullimpa",
        Img: "https://cdn-rdb.arla.com/Files/arla-se/222439216/cc6cbe9e-eca4-496c-b79d-1f82c763b4ad.jpg?crop=(174,0,0,0)&w=1600&h=1078&mode=crop&ak=f525e733&hm=419ac45d",
        Category: "Bröd",
        Price: 29.90,
        Quantity: 1,       
        Description: "Jullimpa med smak av pepparkaka! Ingefära, kryddnejlika, kanel och anis ger limpan en mjuk kryddighet, och fruktälskaren kan med fördel tillsätta torkade aprikoser eller russin i degen. Servera gärna limpan med ädelfärskost!"
    },
    {
        Id: "14",
        Name: "Jullandgång",
        Img: "https://cdn-rdb.arla.com/Files/arla-se/2176494787/0101e53f-96a4-4a86-8f4c-61056c6c13a9.jpg?w=1600&h=1078&mode=crop&ak=f525e733&hm=a6677d03",
        Category: "Kött",
        Price: 50.90,
        Quantity: 1,       
        Description: "Hemmagjord jullandgång är enkelt att göra och framför allt roligt att göra. Gör din egen goda landgång med härliga julsmaker som julskinka, rökt lax och ädelost. Toppa skinkan och laxen med magiskt god senapskräm och en gurksallad med sting av pepparrot."
    },
    {
        Id: "15",
        Name: "Pepparkaksdeg",
        Img: "https://cdn-rdb.arla.com/Files/arla-se/938501590/81fd2370-a047-4e68-a034-8d1a65e78ebd.jpg?w=1600&h=1078&mode=crop&ak=f525e733&hm=a6677d03",
        Category: "Sött",
        Price: 30.90,
        Quantity: 1,       
        Description: "Pepparkaksdeg är enkelt att göra själv och det blir så mycket godare. Gör din deg i god tid, den behöver vila ett dygn för att ge dig de allra bästa pepparkakorna."
    },
    {
        Id: "16",
        Name: "Saffransbollar",
        Img: "https://cdn-rdb.arla.com/Files/arla-se/771150431/76f107d0-effe-4436-bdcf-e3d8485e1b4f.jpg?crop=(87,0,-87,0)&w=1600&h=1078&mode=crop&ak=f525e733&hm=6b611a91",
        Category: "Sött",
        Price: 34.90,
        Quantity: 1,       
        Description: "Små söta saffransbollar med smak av kokos och vit choklad. Ett nytt inslag på julens godisbord. De är lätta att göra, se bara till att de får stelna ordentligt i kylen innan du börjar rulla smeten. Prova gärna att rosta kokosen för ännu mera smak!"
    },
    {
        Id: "17",
        Name: "Saffransbullar",
        Img: "https://cdn-rdb.arla.com/Files/arla-se/2942892845/e5de99a3-7bee-4c5b-910b-ef441ec32321.jpg?w=1600&h=1078&mode=crop&ak=f525e733&hm=a6677d03",
        Category: "Sött",
        Price: 37.90,
        Quantity: 1,       
        Description: "Lyxiga saffransbullar fyllda med kardemumma och mandelmassa. Njut dem till lussefikat med kaffe eller ett glas mjölk. Mandelmassan gör lussebullarna extra saftiga och bidrar med den goda smaken."
    },
    {
        Id: "18",
        Name: "Eggnog",
        Img: "https://cdn-rdb.arla.com/Files/arla-se/3699355530/d03e5d29-96e8-4b84-ba29-4a9f2c42e50d.jpg?crop=(0,0,-174,0)&w=1600&h=1078&mode=crop&ak=f525e733&hm=89a077b1",
        Category: "Dryck",
        Price: 45.90,
        Quantity: 1,       
        Description: "Eggnog är en varm mjölkdryck som påminner om äggtoddy. Den vispas med äggula och socker och kan spetsas med sprit som rom, konjak eller calvados."
    },
    {
        Id: "19",
        Name: "Laxsandwich",
        Img: "https://cdn-rdb.arla.com/Files/arla-se/2612727319/9f245d7f-73c2-4111-8e59-089a00006680.jpg?w=1269&h=715&mode=crop&ak=f525e733&hm=b762ca1a",
        Category: "Fisk",
        Price: 30.90,
        Quantity: 1,       
        Description: "Laxsandwich på danskt rågbröd, med kallrökt lax och syrlig kräm - en försvinnande god munsbit. Bjud på laxsandwich som tilltugg eller på buffébordet."
    },
    {
        Id: "20",
        Name: "Oumph!",
        Img: "https://cdn-rdb.arla.com/Files/arla-se/3837965794/5f982a14-4e29-4cdc-a611-6ae046cc4790.jpg?w=1269&h=715&mode=crop&ak=f525e733&hm=b762ca1a",
        Category: "Vego",
        Price: 33.90,
        Quantity: 1,       
        Description: "Food for Progress, som är bolaget bakom Oumph!, överrumplade vegovärlden för ett par år sedan. Företaget bildades så sent som 2012 och har sedan dess växt lavinartat. De erbjuder diverse produkter, allt från Pulled Oumph till burgare och pizza. Du finner Oumph! ofta ute på restauranger, caféer och ombord på SJ."
    },
    {
        Id: "21",
        Name: "Filmjölkslimpa",
        Img: "https://images.arla.com/recordid/19CBEB90-6C83-4C54-93EB3FDB2D6D26EC/filmjolkslimpa.jpg?width=1269&height=715&mode=crop&crop=(0,336,0,-1207)",
        Category: "Bröd",
        Price: 34.90,
        Quantity: 1,       
        Description: "Den här goda och kryddiga glutenfria filmjölkslimpan är kryddad med pomerans och nejlika. Njut av den alldeles nybakad med lagrad ost och färska grönsaker. Variera gärna kryddorna mot anis och fänkål!"
    },
    {
        Id: "22",
        Name: "Kycklinglårfilé",
        Img: "https://cdn-rdb.arla.com/Files/arla-se/4165627192/6e3a4e1e-9d13-478f-9eca-39917961c5d6.jpg?w=1269&h=715&mode=crop&ak=f525e733&hm=b762ca1a",
        Category: "Kött",
        Price: 32.90,
        Quantity: 1,       
        Description: "Kycklinglårfilé med smak av apelsin och ingefära passar perfekt på en julmiddag. Tillsammans med en fräsch valnötssås, sallad och saffransris blir detta en riktig festrätt med extra julkänsla."
    },
    {
        Id: "23",
        Name: "jul bOllar",
        Img: "https://cdn-rdb.arla.com/Files/arla-se/2589245295/8cb02787-7c34-414b-9a87-0d4e52df752a.jpg?crop=(0,148,0,0)&w=1269&h=715&mode=crop&ak=f525e733&hm=60dfdfb6",
        Category: "Sött",
        Price: 37.90,
        Quantity: 1,       
        Description: "Riktigt söta och smarriga är dessa vita chokladbollar smaksatta med vit choklad och brynt smör. Välj om du vill rulla dina vita chokladbollar i rostad kokos, hallonpulver eller florsocker. "
    },
    {
        Id: "24",
        Name: "Golden milk saffran",
        Img: "https://cdn-rdb.arla.com/Files/arla-se/1666781529/50d270a5-2a69-4a90-8c17-98c590e490f2.jpg?w=1269&h=715&mode=crop&ak=f525e733&hm=b762ca1a",
        Category: "Dryck",
        Price: 59.90,
        Quantity: 1,       
        Description: "Golden milk är mjölk med gurkmeja och färgen är ljust gul - här har vi dessutom adderat saffran. Toppa med vispad grädde och kolasås och du har julens gulaste, godaste shake."
    },
    {
        Id: "25",
        Name: "Pumpkin latte",
        Img: "https://cdn-rdb.arla.com/Files/arla-se/2343415226/7536eddd-9895-4690-b9c9-57a4b4b37469.jpg?crop=(0,0,0,-148)&w=1269&h=715&mode=crop&ak=f525e733&hm=bd2594bd",
        Category: "Dryck",
        Price: 59.90,
        Quantity: 1,       
        Description: "Pumpkin spice latte är en kryddig och välsmakande kaffedryck som värmer gott under årets kalla månader. Starkt kaffe blandas med en kryddig pumpapuré och det hela toppas med lättvispad grädde och kanel. "
    },
    {
        Id: "26",
        Name: "Saffranslatte",
        Img: "https://cdn-rdb.arla.com/Files/arla-se/3176626898/320da0d3-c805-40c0-9d7f-a4574b3dff28.jpg?crop=(0,0,0,-148)&w=1269&h=715&mode=crop&ak=f525e733&hm=bd2594bd",
        Category: "Dryck",
        Price: 59.90,
        Quantity: 1,       
        Description: "En värmande och smakrik latte kryddad med saffran, kanel och kardemumma. Denna saffranslatte blir en en underbar start på julaftonsmorgonen.      "
    },
    {
        Id: "27",
        Name: "Lax med saffran",
        Img: "https://cdn-rdb.arla.com/Files/arla-se/1373219126/de09c659-8bc2-4ab8-b910-ea8a7dab71a0.jpg?crop=(0,119,0,-29)&w=1269&h=715&mode=crop&ak=f525e733&hm=0c3cec8e",
        Category: "Fisk",
        Price: 50.90,
        Quantity: 1,       
        Description: "Lax som kryddas med saffran och rosmarin blir underbart god. En lyxig lax som passar lika bra till vardags som till fest."
    },
    {
        Id: "28",
        Name: "Vego bullar",
        Img: "https://cdn-rdb.arla.com/Files/arla-se/8488418/e8020839-2299-42e1-bbb2-1988ed863109.jpg?w=1269&h=715&mode=crop&ak=f525e733&hm=b762ca1a",
        Category: "Vego",
        Price: 42.90,
        Quantity: 1,       
        Description: "Vi på Jul Huset gör vårt bästa för att alltid ge Dig rätt produktinformation. Över tid kan det ske mindre förändringar av innehållet. Vi vill därför vänligen påminna Dig om att före användning kontrollera produktinformationen på produktens förpackning. Det här är så klart särskilt viktigt om Du av någon anledning vill undvika vissa ingredienser eller ämnen."
    },
    {
        Id: "29",
        Name: "Fröigt knäckebröd",
        Img: "https://cdn-rdb.arla.com/Files/arla-se/2127713457/5de55126-883a-444c-8c40-0e67d7f7376d.jpg?w=1269&h=715&mode=crop&ak=f525e733&hm=b762ca1a",
        Category: "Bröd",
        Price: 43.90,
        Quantity: 1,       
        Description: "Hemlagat, kryddigt knäckebröd med många olika fröer är läckert att bjuda på. Servera till sill eller till frukost med en god ost."
    },
];