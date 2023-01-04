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
        Name: "Julskinka",
        Img: "https://www.amoi.se/_next/image?url=https%3A%2F%2Fassets.amoi.se%2Fv7%2F_prod_%2Fassets%2Fimages%2F4d8d9880-82b2-4214-91f3-889ad6f7fa4e.jpeg%3Fbr_px%3D3729%252C3729%26tl_px%3D0%252C0&w=1080&q=75",
        Category: "Kött",
        Price: 47.90,
        Quantity: 1,
        Description: "Julskinka är ett måste på de flesta julbord. Ta hjälp av en digital termometer när du tillagar din julskinka i ugnen, så har du full koll på när den är klar. Sedan serverar du din ugnsbakade julskinka tillsammans med grovkornig senap och rödkål."
    },
    {
        Id: "3",
        Name: "Rödbetssallad",
        Img: "https://assets.icanet.se/t_product_large_v1,f_auto/7318690183594.jpg",
        Category: "Sallad",
        Price: 24.90,
        Quantity: 1,
        Description: "En klassiker gjord på gotländska rödbetor. Vegansk rödbetssallad är en vegansk variant på vår klassiska rödbetssallad. Majonnäsen i salladen är gjord utan ägg, helt enkelt."
    },
    {
        Id: "4",
        Name: "Frukt sallad",
        Img: "https://assets.icanet.se/image/upload/w_712,ar_1.92405063291,c_fill/e_sharpen:80/f_auto,q_auto:best,dpr_2.0/imagevaultfiles/id_104671/cf_259/fruktsallad_med_saffransmascarpone.jpg",
        Category: "Sallad",
        Price: 22.90,
        Quantity: 1,
        Description: "En fräsch fruktsallad som passar perfekt på julens dessertbord. Apelsiner, fikon, äpplen och pecannötter toppas av en mjuk och krämig saffransmascarpone."
    },
    {
        Id: "5",
        Name: "Ljummen kålsallad",
        Img: "https://assets.icanet.se/image/upload/w_712,ar_1.92405063291,c_fill/e_sharpen:80/f_auto,q_auto:best,dpr_2.0/imagevaultfiles/id_151089/cf_259/ljummen_kalsallad_med_lingondressing_och_rostad_mandel.jpg",
        Category: "Sallad",
        Price: 21.90,
        Quantity: 1,
        Description: "Två sorters kål, rödkål och brysselkål, är huvudingredienserna i denna vintriga sallad med lingondressing som garanterat gör succé på buffén. Rostad grovhackad mandel ger rätten en härlig krispighet"
    },
    {
        Id: "6",
        Name: "Prinskorv",
        Img: "https://cdn.natmat.se/content/shopimages/large/6467-160094.jpg",
        Category: "Kött",
        Price: 40.90,
        Quantity: 1,       
        Description: "En varmrökt kvalitetsprinskorv med klassisk smak och hög kötthalt. Prinskorvarna är tillverkade med extra tunt skinn. Våra korvar innehåller bara svenskt kött från våra gårdar."
    },
    {
        Id: "7",
        Name: "Köttbullar",
        Img: "https://crockpot.se/wp-content/uploads/2021/04/kottbulla_web-640x480.jpg",
        Category: "Kött",
        Price: 50.90,
        Quantity: 1,       
        Description: "Våra smakrika delikatessköttbullar är lite mindre köttbullar som har en extra hög kötthalt och bjuder på en härligt god och fyllig smak. Och självklart kommer köttet enbart från djur på svenska gårdar."
    },
    {
        Id: "8",
        Name: "Lucia Katter",
        Img: "https://www.recepten.se/bilder/recept/2/main/l/lussekatter.jpg",
        Category: "Sött",
        Price: 39.90,
        Quantity: 1,       
        Description: "Saftiga lussekatter är ett måste till jul, men vem har sagt att de måste se ut på samma sätt varje år. Varför inte forma degen till fina former med hjälp av pepparkaksformar? Följ ett klassiskt recept på gyllene och saffransdoftande lussebullar - låt sedan fantasin flöda!"
    },
    {
        Id: "9",
        Name: "Peppar Kakor",
        Img: "https://res.cloudinary.com/coopsverige/image/upload/v1632490120/cloud/234240.jpg",
        Category: "Sött",
        Price: 29.90,
        Quantity: 1,       
        Description: "Tunna, spröda pepparkakor som är bakade på rapsolja (fria från palmolja)"
    },
    {
        Id: "10",
        Name: "Snaps med julsmak",
        Img: "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_219593/cf_259/snaps_med_julsmak.jpg",
        Category: "Dryck",
        Price: 39.90,
        Quantity: 1,       
        Description: "Med detta recept kan du göra en härlig julsnaps med underbar smak. Snapsen är enkel att göra men spriten behöver få dra in kryddornas smak - ju längre tid din snaps får dra desto bättre! Servera din snaps med julsmak väl kyld."
    },
    {
        Id: "11",
        Name: "Löksill med portvin",
        Img: "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_245023/cf_259/loksill_med_portvin.jpg",
        Category: "Fisk",
        Price: 44.90,
        Quantity: 1,       
        Description: "Lägg in sillen med en lag som fått smak av både portvin, kryddpeppar och nejlikor. I övrigt gör du en klassisk lag med ättika, socker och lök. Låt matjessillen får dra några dagar i den goda lagen och sedan smakar sillen väldigt gott."
    },
    {
        Id: "12",
        Name: "Vegansk seitanskinka",
        Img: "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_190648/cf_259/vegansk_seitanskinka.jpg",
        Category: "Vego",
        Price: 60.90,
        Quantity: 1,       
        Description: "Vegansk seitanskinka gör ditt julbord mer spännande. För visst låter du lite häftigare och trendigare om du säger ”I år hade vi vegansk seitanskinka på julbordet”, istället för ”Vi hade vanlig julskinka på julbordet”? Och i fall du missade det, den är vegansk."
    },
    {
        Id: "13",
        Name: "Jullimpa",
        Img: "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_104524/cf_259/jullimpa.jpg",
        Category: "Bröd",
        Price: 29.90,
        Quantity: 1,       
        Description: "Jullimpa med smak av pepparkaka! Ingefära, kryddnejlika, kanel och anis ger limpan en mjuk kryddighet, och fruktälskaren kan med fördel tillsätta torkade aprikoser eller russin i degen. Servera gärna limpan med ädelfärskost!"
    },
    {
        Id: "14",
        Name: "Jullandgång",
        Img: "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_244718/cf_259/jullandgang.jpg",
        Category: "Kött",
        Price: 50.90,
        Quantity: 1,       
        Description: "Hemmagjord jullandgång är enkelt att göra och framför allt roligt att göra. Gör din egen goda landgång med härliga julsmaker som julskinka, rökt lax och ädelost. Toppa skinkan och laxen med magiskt god senapskräm och en gurksallad med sting av pepparrot."
    },
    {
        Id: "15",
        Name: "Pepparkaksdeg",
        Img: "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_234174/cf_259/pepparkaksdeg%C2%A0.jpg",
        Category: "Sött",
        Price: 30.90,
        Quantity: 1,       
        Description: "Pepparkaksdeg är enkelt att göra själv och det blir så mycket godare. Gör din deg i god tid, den behöver vila ett dygn för att ge dig de allra bästa pepparkakorna."
    },
    {
        Id: "16",
        Name: "Saffransbullar",
        Img: "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_221591/cf_259/saffransbullar_med_vanilj.jpg",
        Category: "Sött",
        Price: 34.90,
        Quantity: 1,       
        Description: "Dessa saffransbullar med vanilj kan vara det godaste du någonsin kommer ha bakat. Vi bakar saffransbullarna med både smör och kvarg så de blir riktigt saftiga. Vanilj i fyllningen gör dem helt oemotståndliga. Snurra saffransbullarna i knutar och njut av dina gyllene underverk!"
    },
    {
        Id: "17",
        Name: "Saffransmums",
        Img: "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_244993/cf_259/saffransmums.jpg",
        Category: "Sött",
        Price: 37.90,
        Quantity: 1,       
        Description: "Extra fluffiga kärleksmums – i en klargul och ljuvligt saffransdoftande kostym! Missa inte detta recept på saftiga saffransmums med en fräsch och syrlig glasyr toppad med riven kokos."
    },
    {
        Id: "18",
        Name: "Glöggmanhattan",
        Img: "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_28039/cf_259/gloggmanhattan.jpg",
        Category: "Dryck",
        Price: 45.90,
        Quantity: 1,       
        Description: "Glöggmanhattan, en glöggbaserad julversion av drinken Manhattan med whisky och angostura bitter som vänner till den söta glöggen. Drinken garneras innan servering med ett cocktailbär, gärna uppträtt på en avskalad grankvist"
    },
    {
        Id: "19",
        Name: "Pocherad torsk",
        Img: "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_207854/cf_259/pocherad_torsk_(grundrecept).jpg",
        Category: "Fisk",
        Price: 30.90,
        Quantity: 1,       
        Description: "Att pochera innebär att sjuda lätt. Här ett grundrecept på pocherad torsk som sedan kan användas till olika rätter: till en gryta, eller med tillbehör som kokt potatis eller potatispuré. Detta recept ingår i Söndagspreppen där du genom lite prepp förbereder grunden till fyra måltider."
    },
    {
        Id: "20",
        Name: "Oumph!",
        Img: "https://cdn.cafe.se/app/uploads/2016/01/oumph-chili.jpg",
        Category: "Vego",
        Price: 33.90,
        Quantity: 1,       
        Description: "Food for Progress, som är bolaget bakom Oumph!, överrumplade vegovärlden för ett par år sedan. Företaget bildades så sent som 2012 och har sedan dess växt lavinartat. De erbjuder diverse produkter, allt från Pulled Oumph till burgare och pizza. Du finner Oumph! ofta ute på restauranger, caféer och ombord på SJ."
    },
    {
        Id: "21",
        Name: "Julbröd med frukt och nötter",
        Img: "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_221656/cf_259/julbrod_med_frukt_och_notter.jpg",
        Category: "Bröd",
        Price: 34.90,
        Quantity: 1,       
        Description: "Ett riktigt gott julbröd med russin, aprikoser, valnötter och hasselnötter – allt som hör vintersäsongens smaker till! Receptet är enkelt att baka och passar såväl vana som ovana bagare."
    },
    {
        Id: "22",
        Name: "Kycklinglårfilé",
        Img: "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_207364/cf_259/kycklinglarfil%C3%A9_med_apelsin__ingefara_och_valnotssas.jpg",
        Category: "Kött",
        Price: 32.90,
        Quantity: 1,       
        Description: "Kycklinglårfilé med smak av apelsin och ingefära passar perfekt på en julmiddag. Tillsammans med en fräsch valnötssås, sallad och saffransris blir detta en riktig festrätt med extra julkänsla."
    },
    {
        Id: "23",
        Name: "jul bullar",
        Img: "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_63271/cf_259/julbullar.jpg",
        Category: "Sött",
        Price: 37.90,
        Quantity: 1,       
        Description: "Recept på fikabröd som passar perfekt till jul. Bullarna gör du av vanligt vetebrödsrecept och den färgglada och goda fyllningen gör du av smör, vaniljsocker, pepparkakskrydda och lingonsylt. Garnera julbullarna med pärlsocker."
    },
    {
        Id: "24",
        Name: "Glögg",
        Img: "https://www.unbooze.se/wp-content/uploads/2022/11/infused-liquid-glogg-blabar.png",
        Category: "Dryck",
        Price: 59.90,
        Quantity: 1,       
        Description: "Glöggen har en tydlig blåbärssmak, lätt sötma och traditionell kryddning. Framtagen i samarbete med svenska producenter, med enbart svenska råvaror. Finns även med smak av äpple!"
    },
    {
        Id: "25",
        Name: "Glögg",
        Img: "https://www.unbooze.se/wp-content/uploads/2022/11/infused-liquid-glogg-apple.png",
        Category: "Dryck",
        Price: 59.90,
        Quantity: 1,       
        Description: "Glöggen har en tydlig äppelsmak, lätt sötma och traditionell kryddning. Framtagen i samarbete med svenska producenter, med enbart svenska råvaror. Finns även med smak av blåbär!"
    },
    {
        Id: "26",
        Name: "Alkoholfri sangria",
        Img: "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_244191/cf_259/alkoholfri_sangria.jpg",
        Category: "Dryck",
        Price: 59.90,
        Quantity: 1,       
        Description: "Fräsch och frisk i smaken är denna sangria, som dessutom är alkoholfri. Tranbärsjuicen som får koka med kanelstång ger sangrian en kryddig smak. Skär tunna skivor av apelsin och äpple och blanda med juicerna. Kyl sangrian väl innan du serverar den och häll i läsk och is precis före servering."
    },
    {
        Id: "27",
        Name: "Snabbgravad lax, grundrecept",
        Img: "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_111228/cf_259/snabbgravad_lax__grundrecept.jpg",
        Category: "Fisk",
        Price: 50.90,
        Quantity: 1,       
        Description: "Prova ett snabbt sätt att grava lax som både sparar tid och gör fisken saftigare. Fyra timmar är allt som krävs. Genom att låta laxen ligga i en ”gravningsmarinad” får den extra mycket smak, särskilt om du testar någon av de föreslagna smaksättarna."
    },
    {
        Id: "28",
        Name: "Vego bullar",
        Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEkvX-XIzo8pSWzds2OI0DQ_30NZKIDJt3Ow&usqp=CAU",
        Category: "Vego",
        Price: 42.90,
        Quantity: 1,       
        Description: "Vi på Jul Huset gör vårt bästa för att alltid ge Dig rätt produktinformation. Över tid kan det ske mindre förändringar av innehållet. Vi vill därför vänligen påminna Dig om att före användning kontrollera produktinformationen på produktens förpackning. Det här är så klart särskilt viktigt om Du av någon anledning vill undvika vissa ingredienser eller ämnen."
    },
    {
        Id: "29",
        Name: "Juligt fröknäcke",
        Img: "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_222434/cf_259/juligt_froknacke.jpg",
        Category: "Bröd",
        Price: 43.90,
        Quantity: 1,       
        Description: "Gör eget glutenfritt fröknäcke till jul, utan majsmjöl och med juliga smaker av ingefära och kanel. Lika gott att servera med en bit julskinka som en skiva vällagrad ost. Att bjuda på hembakt knäckebröd brukar ge en och annan pluspoäng, dessutom är det superlätt att göra."
    },
];