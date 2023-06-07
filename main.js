const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const productDetailCloseIncon = document.querySelector(".product-detail-close");

const menuCarritoICon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail")

const cardsContainer = document.querySelector(".cards-container");


const todos = document.querySelector("#todos");
const bicicletas = document.querySelector("#bicicletas");
const accesorios = document.querySelector("#accesorios");
const vehiculos = document.querySelector("#vehiculos");
const ejercicio = document.querySelector("#ejercicio");
const ropa = document.querySelector("#ropa");


const todosMobile = document.querySelector("#todos-mobile");
const bicicletasMobile = document.querySelector("#bicicletas-mobile");
const accesoriosMobile = document.querySelector("#accesorios-mobile");
const vehiculosMobile = document.querySelector("#vehiculos-mobile");
const ejercicioMobile = document.querySelector("#ejercicio-mobile");
const ropaMobile = document.querySelector("#ropa-mobile");



menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu );
menuCarritoICon.addEventListener("click", toggleCarritoAside);
productDetailCloseIncon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu () {
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

    if(!isAsideClosed){
        shoppingCartContainer.classList.toggle("inactive");
    }

    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu () {
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");
    
    if(!isAsideClosed){
        shoppingCartContainer.classList.add("inactive");
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside () {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

    if(!isMobileMenuClosed){
        mobileMenu.classList.add("inactive");
    }

    const isProductDetailClosed = productDetailContainer.classList.contains("inactive");

    if(!isProductDetailClosed){
        productDetailContainer.classList.add("inactive");
    }

    shoppingCartContainer.classList.toggle("inactive");
}

function openProductDetailAside () {// ya saque el id, solo falta que el elemento se imprima en la seccion con los valores correspondientes.


    shoppingCartContainer.classList.add("inactive");
    productDetailContainer.classList.remove("inactive");


    const productCards = document.querySelectorAll(".product-card");
    productCards.forEach(card => {
        card.addEventListener("click", () => {
          const productId = card.getAttribute("data-product-id");
          openProductDetailAside(productId);
        });
      });
      
      function openProductDetailAside(productId) {
        console.log("ID del producto:", productId); // obtengo el ID del producto
      }

}


function closeProductDetailAside () {
    productDetailContainer.classList.add("inactive");
}

const productList = [];
    productList.push({
        id:1,
        name:"BK_model1",
        price: 2000000,
        descri:"descripción del producto. calidad, costos, deportivo, vive al extremo enext",
        image: "https://fuelcarmagazine.com/wp-content/uploads/2022/10/Alpine-bicicleta-768x403.jpg",
        type: "bicicletas",
    });
    productList.push({
        id:2,
        name:"BK_model2",
        price: 2000000,
        descri:"descripción del producto. calidad, costos, deportivo, vive al extremo enext",
        image: "https://www.todomountainbike.net/images/articles/2014/peugeot-edl132-concept.jpg",
        type: "bicicletas",
    });
    productList.push({
        id:3,
        name:"BK_model3",
        price: 2000000,
        descri:"descripción del producto. calidad, costos, deportivo, vive al extremo enext",
        image: "https://img.automexico.com/2020/11/04/6Rw4sIlj/reevo-hubless-e-bike-2-cda6.jpg",
        type: "bicicletas",
    });
    productList.push({
        id:4,
        name:"BK_model4",
        price: 2800000,
        image: "https://2.bp.blogspot.com/-aHlxFNMxaeU/VDzl6u1jUQI/AAAAAAAACKI/u1DP9ArGnfs/s1600/FALCO%2BV1.jpg",
        type: "bicicletas",
    });
    productList.push({
        id:5,
        name:"BK_model5",
        price: 2100000,
        image: "https://www.lifeboxset.com/wp-content/uploads/2018/02/www.lifeboxset.com-screen-shot-2016-07-18-at-4.15.52-pm.png",
        type: "bicicletas",
    });
    productList.push({
        id:6,
        name:"BK_model6",
        price: 1800000,
        image: "https://i.pinimg.com/originals/72/7a/48/727a48c1f3e4bafc2e2dd8b88954e82d.jpg",
        type: "bicicletas",
    });
    productList.push({
        id:7,
        name:"BK_model7",
        price: 1700000,
        image: "https://gourmetdemexico.com.mx/wp-content/uploads/2019/04/bicicletas-futuristas-bmw-Active-Hybrid.jpg",
        type: "bicicletas",
    });
    productList.push({
        id:8,
        name:"BK_model8",
        price: 3850000,
        image: "https://img.remediosdigitales.com/10eae0/650_1000_3026229-slide-136max/1366_2000.jpg",
        type: "bicicletas",
    });
    productList.push({
        id:9,
        name:"Casco_VK1",
        price: 300000,
        image: "https://www.motofichas.com/images/articulos/reportajes/cascos-integrales-deportivos-motogp/AGV-Pista-GP-RR.jpg",
        type: "accesorios",
    });
    productList.push({
        id:10,
        name:"Casco_VK2",
        price: 300000,
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTBYMj4R_Kz3K5P_pWMq6pe4vBP_rwYK5MkuxQXeZrZWvYQ_66g3_Bka_IO34SntIo7PgRqzxWRZuD0DFy71kN2YtehvZOvs9gm-8yiD2Utdl46zlqeDS8w&usqp=CAE ",
        type: "accesorios",
    });
    productList.push({
        id:11,
        name:"Casco_VK3",
        price: 180000,
        image: "https://www.cascosconvinilo.com/web/wp-content/uploads/2019/06/6120002.jpg",
        type: "accesorios",
    });
    productList.push({
        id:12,
        name:"Gafas de sol",
        price: 350000,
        image: "https://img.ltwebstatic.com/images3_pi/2021/07/06/162557073596157ae75aa44a7320d3cec4457eccba_thumbnail_600x.webp",
        type: "accesorios",
    });
    productList.push({
        id:13,
        name:"Gafas_DP1",
        price: 180000,
        image: "https://img.ltwebstatic.com/images3_pi/2021/08/17/162916718048b8286e993fc327e41c4aba7466471a.webp",
        type: "accesorios",
    });
    productList.push({
        id:14,
        name:"Gafas_DP2",
        price: 210000,
        image: "https://img.ltwebstatic.com/images3_pi/2021/09/13/163149887160a80ac6611beea64566ccedb75b1b97_thumbnail_600x.webp",
        type: "accesorios",
    });
    productList.push({
        id:15,
        name:"Gafas_DP3",
        price: 230000,
        image: "https://img.ltwebstatic.com/images3_pi/2021/06/23/1624429624f5415ef129f86b376e01b9c7d2f1bcfd_thumbnail_600x.webp",
        type: "accesorios",
    });
    productList.push({
        id:16,
        name:"GLV_DP1",
        price: 80000,
        image: "https://w0.peakpx.com/wallpaper/754/480/HD-wallpaper-boxing-gloves-black-box-cat-fight-fighting-red-thanks-the.jpg",
        type: "accesorios",
    });
    productList.push({
        id:17,
        name:"GLV_DP2",
        price: 60000,
        image: "https://images.motocard.com/eyJidWNrZXQiOiJtb3RvY2FyZC1ibG9nIiwia2V5IjoidXBsb2Fkc1wvMjAxOVwvMDZcLzIzMDkwOTExXC9sb2dvXzE3LTEyMDB4Njc1LmpwZyIsImVkaXRzIjp7IndlYnAiOnsicXVhbGl0eSI6ODV9LCJqcGVnIjp7InF1YWxpdHkiOjkxfSwicmVzaXplIjpbXX19",
        type: "accesorios",
    });
    productList.push({
        id:18,
        name:"Cuatri Black",
        price: 14000000,
        image: "https://media.pasionmovil.com/2021/12/Cyberquad-for-kids.jpg",
        type: "vehiculos",
    });
    productList.push({
        id:19,
        name:"Cuatri Red",
        price: 18000000,
        image: "https://cdn.shopify.com/s/files/1/0043/2078/8554/products/338800C350_B_2048x2048_c9a1643a-b838-42fa-ad12-db3b7a6223bb.jpg?v=1646760059",
        type: "vehiculos",
    });
    productList.push({
        id:20,
        name:"Cuatri White",
        price: 24000000,
        image: "https://cdn.shopify.com/s/files/1/2118/0861/products/cmy700-w_6_2000x.jpg?v=1498276403",
        type: "vehiculos",
    });
    productList.push({
        id:21,
        name:"Trimoto 250cc Black",
        price: 18100000,
        image: "https://www.diariomotor.com/imagenes/2011/11/lazareth-wazuma-04.jpg",
        type: "vehiculos",
    });
    productList.push({
        id:22,
        name:"Trimoto 250cc blue",
        price: 18100000,
        image: "https://gentedemoto.com/wp-content/uploads/2019/01/yamaha-niken.jpg",
        type: "vehiculos",
    });
    productList.push({
        id:23,
        name:"Trimoto 500cc",
        price: 26500000,
        image: "https://delessencedansmesveines.com/wp-content/uploads/2017/12/z-DLEDMV-Lazareth-Wazuma-V8-1080x675.jpg",
        type: "vehiculos",
    });
    productList.push({
        id:24,
        name:"Motocros V180cc",
        price: 8000000,
        image: "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2021/04/niken_galeria1.jpg",
        type: "vehiculos",
    });
    productList.push({
        id:25,
        name:"Motocros V120cc",
        price: 6000000,
        image: "https://publimotos.com/images/2021/julio-2021/11-julio/moto-tour/moto-tour-04.jpg",
        type: "vehiculos",
    });
    productList.push({
        id:26,
        name:"Vehículo familiar TT",
        price: 12400000,
        image: "https://www.autofacil.es/wp-content/uploads/2021/09/mercedes_eqg-concept-21-300x188.jpg",
        type: "vehiculos",
    });
    productList.push({
        id:27,
        name:"Cuatri moto 400cc",
        price: 16400000,
        image: "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2018/03/RAPTOR-90-2.jpg",
        type: "vehiculos",
    });
    productList.push({
        id:28,
        name:"Cuatri moto 500cc",
        price: 18600000,
        image: "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2021/11/WOLVERINE-4.jpg",
        type: "vehiculos",
    });
    productList.push({
        id:29,
        name:"Mancuernas 80Kg",
        price: 380000,
        image: "https://img.freepik.com/fotos-premium/mancuernas-entrenamiento-color-dorado-sobre-fondo-negro_103577-5193.jpg",
        type: "ejercicio",
    });
    productList.push({
        id:30,
        name:"Mancuernas 30Kg",
        price: 410000,
        image: "https://media.istockphoto.com/id/1078074278/es/foto/mancuernas-pesas-sobre-fondo-negro.jpg?s=170667a&w=0&k=20&c=FtUbs58IFxRafPOfztLEssNHhxMdYJUKOO6afmQRV5s=",
        type: "ejercicio",
    });
    productList.push({
        id:31,
        name:"Mancuernas 45Kg",
        price: 310000,
        image: "https://media.istockphoto.com/id/1078073730/es/foto/mancuernas-pesas-sobre-fondo-negro.jpg?s=170667a&w=0&k=20&c=-V4WvWqTfbG8_-VO-bRbezk8TGO2cKj9Hxm2Y4QPAnI=",
        type: "ejercicio",
    });
    productList.push({
        id:32,
        name:"Mancuernas 50Kg",
        price: 155000,
        image: "https://media.istockphoto.com/id/1078073872/es/foto/mancuernas-pesas-sobre-fondo-negro.jpg?s=170667a&w=0&k=20&c=V4dB1h61g6zEnP9PleeChH9pxCeR3ZawbKAcASOITFc=",
        type: "ejercicio",
    });
    productList.push({
        id:33,
        name:"Ropar deportiva",
        price: 300000,
        image: "https://cf.shopee.com.mx/file/b51462cb27ce7a9550f6a60ad4bed513",
        type: "ropa",
    });
    productList.push({
        id:34,
        name:"Ropar deportiva",
        price: 300000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOpdssKgYhPJbUf9N_QdLuZwtisjqu0eVhbtDtbPSgYVG8dtgLnfQdEHisQrLMl_qq-jk&usqp=CAU",
        type: "ropa",
    });
    productList.push({
        id:35,
        name:"Ropar deportiva",
        price: 300000,
        image: "https://down-mx.img.susercontent.com/file/252955d1e62dbf88a37a1d4c284bd849",
        type: "ropa",
    });
    productList.push({
        id:36,
        name:"Zapatos",
        price: 600000,
        image: "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2016/03/zapatillas-nike-HyperAdapt-1.0.jpg?fit=1600%2C900&quality=50&strip=all&ssl=1",
        type: "ropa",
    });
    productList.push({
        id:37,
        name:"Zapatos",
        price: 800000,
        image: "https://www.eleconomista.com.mx/__export/1507851582885/sites/eleconomista/img/historico/tennis_nike_z.jpg_554688468.jpg",
        type: "ropa",
    });
    productList.push({
        id:38,
        name:"Zapatos",
        price: 600000,
        image: "https://i.blogs.es/3d8f7c/nike-hyperadapt-white-gum/450_1000.jpg",
        type: "ropa",
    });
    productList.push({
        id:39,
        name:"Zapatos",
        price: 850000,
        image: "https://mott.pe/noticias/wp-content/uploads/2016/09/Luego-de-verlas-en-Volver-al-Futuro-II-finalmente-las-zapatillas-autoajustables-de-Nike-han-llegado-frontal.jpg",
        type: "ropa",
    });
        productList.push({
            id:40,
            name:"Zapatos",
            price: 640000,
            image: "https://mott.pe/noticias/wp-content/uploads/2016/09/Luego-de-verlas-en-Volver-al-Futuro-II-finalmente-las-zapatillas-autoajustables-de-Nike-han-llegado-led.jpg",
            type: "ropa",
        });

function renderProducts(arr){

    for (product of arr) {
        /*
        div class="product-card" data-product-id="1">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt=">
          </figure>
        </div>
      </div>
        */
      const productCard =  document.createElement("div"); /*para crear un div con la clase product-card */
      productCard.classList.add("product-card"); /*esta liena es para agregarle la class="product-card creada en la anterior linea" */
      productCard.setAttribute("data-product-id", product.id);/*Asignar el atributo data-product-id al elemento */

      

      const productImg = document.createElement("img");
      productImg.setAttribute("src", product.image);
      productImg.addEventListener("click", openProductDetailAside);

      const productInfo=  document.createElement("div"); /*para crear un div con la clase productinfo */
      productInfo.classList.add("product-info"); /*esta liena es para agregarle la class="product-info creada en la anterior linea" */

      const productInfoDiv =  document.createElement("div"); /*para crear un div con la clase product-info-div */

      const productPrice = document.createElement("p");
      productPrice.innerText = "$"+ product.price;
      const productName = document.createElement("p");
      productName.innerText = product.name;

      productInfoDiv.appendChild(productPrice);/*Esto es para decirle al algoritmo que meta  productPrice dentro de productInfoDiv */
      productInfoDiv.appendChild(productName);/*Esto es para decirle al algoritmo que meta  productName dentro de productInfoDiv */

      const productInfoFigure = document.createElement("figure");
      const productImgCart = document.createElement("figure");
      productImgCart.setAttribute("src", "./icons/bt_add_to_card.svg");
      
      productInfoFigure.appendChild(productImgCart); /* esto es para decirle al algoritmo que meta productImgCart dentro de productInfoFigure*/

      productInfo.appendChild(productInfoDiv); /*Esto es para decirle al algoritmo que meta  productInfoDiv dentro de productInfo */
      productInfo.appendChild(productInfoFigure);/*Esto es para decirle al algoritmo que meta  productInfoFigure dentro de productInfo */

      productCard.appendChild(productImg);
      productCard.appendChild(productInfo);

      cardsContainer.appendChild(productCard);
    }
}

/*para filtrar (inicio) */

ropa.addEventListener("click", filtrarRopa);
ropaMobile.addEventListener("click", filtrarRopa);

function filtrarRopa(){
    const filteredProducts = productList.filter(product => product.type === "ropa");
    
    console.log(filteredProducts);
    cardsContainer.innerHTML=""
    renderProducts(filteredProducts);
}


accesorios.addEventListener("click", filtrarAccesorios);
accesoriosMobile.addEventListener("click", filtrarAccesorios);

function filtrarAccesorios(){
    const filteredProducts = productList.filter(product => product.type === "accesorios");
    
    console.log(filteredProducts);
    cardsContainer.innerHTML=""
    renderProducts(filteredProducts);
}


bicicletas.addEventListener("click", filtrarBicicletas);
bicicletasMobile.addEventListener("click", filtrarBicicletas);

function filtrarBicicletas(){
    const filteredProducts = productList.filter(product => product.type === "bicicletas");
    
    console.log(filteredProducts);
    cardsContainer.innerHTML=""
    renderProducts(filteredProducts);
}


vehiculos.addEventListener("click", filtrarVehiculos);
vehiculosMobile.addEventListener("click", filtrarVehiculos);

function filtrarVehiculos(){
    const filteredProducts = productList.filter(product => product.type === "vehiculos");
    
    console.log(filteredProducts);
    cardsContainer.innerHTML=""
    renderProducts(filteredProducts);
}


ejercicio.addEventListener("click", filtrarEjercicio);
ejercicioMobile.addEventListener("click", filtrarEjercicio);

function filtrarEjercicio(){
    const filteredProducts = productList.filter(product => product.type === "ejercicio");
    
    console.log(filteredProducts);
    cardsContainer.innerHTML=""
    renderProducts(filteredProducts);
}

/*para filtrar (fin) */
renderProducts(productList);
