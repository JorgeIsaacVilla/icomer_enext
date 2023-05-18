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

function openProductDetailAside () {
    shoppingCartContainer.classList.add("inactive")

    productDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside () {
    productDetailContainer.classList.add("inactive");
}

const productList = [];
    productList.push({
        name:"BK_model1",
        price: 2000000,
        image: "https://fuelcarmagazine.com/wp-content/uploads/2022/10/Alpine-bicicleta-768x403.jpg",
        type: "bicicletas",
    });
    productList.push({
        name:"BK_model2",
        price: 2000000,
        image: "https://www.todomountainbike.net/images/articles/2014/peugeot-edl132-concept.jpg",
        type: "bicicletas",
    });
    productList.push({
        name:"BK_model3",
        price: 2000000,
        image: "https://img.automexico.com/2020/11/04/6Rw4sIlj/reevo-hubless-e-bike-2-cda6.jpg",
        type: "bicicletas",
    });
    productList.push({
        name:"BK_model4",
        price: 2800000,
        image: "https://mmedia.misrevistas.com/prospectivas/18570/imagen-1jpg-5909.jpg",
        type: "bicicletas",
    });
    productList.push({
        name:"BK_model5",
        price: 2100000,
        image: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2021/12/bicicleta-electrica-2554627.jpg?tf=3840x",
        type: "bicicletas",
    });
    productList.push({
        name:"BK_model6",
        price: 1800000,
        image: "https://i.pinimg.com/originals/72/7a/48/727a48c1f3e4bafc2e2dd8b88954e82d.jpg",
        type: "bicicletas",
    });
    productList.push({
        name:"BK_model7",
        price: 1700000,
        image: "https://redlomas.com/wp-content/uploads/Screenshot_436.jpg",
        type: "bicicletas",
    });
    productList.push({
        name:"BK_model8",
        price: 3850000,
        image: "https://www.3dnatives.com/es/wp-content/uploads/sites/4/velo2.jpg",
        type: "bicicletas",
    });
    productList.push({
        name:"Casco_VK1",
        price: 300000,
        image: "https://http2.mlstatic.com/D_NQ_NP_778944-MCO52597959705_112022-W.jpg",
        type: "accesorios",
    });
    productList.push({
        name:"Casco_VK2",
        price: 300000,
        image: "https://http2.mlstatic.com/D_NQ_NP_703548-MLM49514192816_032022-V.jpg",
        type: "accesorios",
    });
    productList.push({
        name:"Casco_VK3",
        price: 320000,
        image: "https://http2.mlstatic.com/D_NQ_NP_748438-MLA46929047903_072021-V.jpg",
        type: "accesorios",
    });
    productList.push({
        name:"Casco_VK4",
        price: 350000,
        image: "https://http2.mlstatic.com/D_NQ_NP_726025-MCO28038923890_082018-O.jpg",
        type: "accesorios",
    });
    productList.push({
        name:"Gafas_DP1",
        price: 180000,
        image: "https://image.made-in-china.com/43f34j00HBQhAkuCZbrq/Ni-os-Miop-a-Piedad-Viper-Snowmobile-Dirt-Bike-Goggl-Harley-Adultos-Swim-Mayoreo-Motor-Cross-gafas-de-nataci-n-Anti-Niebla.jpg",
        type: "accesorios",
    });
    productList.push({
        name:"Gafas_DP2",
        price: 210000,
        image: "https://img.ltwebstatic.com/images3_pi/2022/01/13/164203889575248ec822abc4132dc27e3ad6525de7_thumbnail_600x.webp",
        type: "accesorios",
    });
    productList.push({
        name:"Gafas_DP3",
        price: 230000,
        image: "https://i.linio.com/p/42421c18be1e125180012c09c43c08be-product.jpg",
        type: "accesorios",
    });
    productList.push({
        name:"GLV_DP1",
        price: 80000,
        image: "https://go-greenbikes.com/wp-content/uploads/2021/10/8033637207995-001-750Wx750H.jpeg",
        type: "accesorios",
    });
    productList.push({
        name:"GLV_DP2",
        price: 60000,
        image: "https://www.alkomprar.com/medias/8033637208121-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wyMDk2NzZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDBhL2gxOC85NzAzNjM2NzI5ODg2LmpwZ3w0Zjc1MTZmYjQzNDhjZjNhOTI0MjIyZWI2NjU0OGViZjUxOTMwOGJhZTliMzYyY2JmODk2YzczNzc2MzI4NzU1",
        type: "accesorios",
    });
    productList.push({
        name:"Cuatri Black",
        price: 14000000,
        image: "https://http2.mlstatic.com/D_NQ_NP_977130-MCO69052779324_042023-O.jpg",
        type: "vehiculos",
    });
    productList.push({
        name:"Cuatri Red",
        price: 18000000,
        image: "https://m.media-amazon.com/images/I/61ZFh2OtMvL.jpg",
        type: "vehiculos",
    });
    productList.push({
        name:"Cuatri White",
        price: 24000000,
        image: "https://bb1.vendomia-cdn.com/file/vendomia-assets/4/uploads/medium-nc-0fd756/2ff3d12e-quad-pantera-125cc-marcha-atras-naranja-frontal-izquierda1.jpg",
        type: "vehiculos",
    });
    productList.push({
        name:"Trimoto 250cc Black",
        price: 18100000,
        image: "https://motosnuevas.formulamoto.es/galeria/5282/Can_Am_Spyder_F3-S_10_Aniversario.jpg",
        type: "vehiculos",
    });
    productList.push({
        name:"Trimoto 250cc green",
        price: 18100000,
        image: "https://p.turbosquid.com/ts-thumb/pG/5mHrFK/jg0SeROL/canamspyderrs_01/jpg/1532043011/600x600/fit_q87/3d3271e6db7594e42d060665c3655d32ab714fd4/canamspyderrs_01.jpg",
        type: "vehiculos",
    });
    productList.push({
        name:"Trimoto 500cc Family",
        price: 26500000,
        image: "https://can-am.brp.com/content/can-am-on-road/es_mx/modelos/spyder-rt/_jcr_content/root/modelteaser.coreimg.png/1673645246775/onrd-spy-my22-rt-sea-to-sky-mysterybluesatin-000g2nb00-studio-34fr-eu.png",
        type: "vehiculos",
    });
    productList.push({
        name:"Motocros V180cc",
        price: 8000000,
        image: "https://cambiatumoto.cl/wp-content/uploads/2016/06/honda-crf110f.jpg",
        type: "vehiculos",
    });
    productList.push({
        name:"Motocros V120cc",
        price: 6000000,
        image: "https://web2.fireboldweb.com/wp-content/uploads/2022/11/221120221669151525360_50_SX_FACTORY_1.png",
        type: "vehiculos",
    });
    productList.push({
        name:"Cuatri Vehiculo TT",
        price: 12400000,
        image: "https://http2.mlstatic.com/D_NQ_NP_825525-MLU25461645119_032017-O.jpg",
        type: "vehiculos",
    });
    productList.push({
        name:"Cuatri moto 400cc",
        price: 16400000,
        image: "https://http2.mlstatic.com/D_NQ_NP_920248-MLU30831008874_052019-W.jpg",
        type: "vehiculos",
    });
    productList.push({
        name:"Cuatri moto 500cc",
        price: 18600000,
        image: "https://4.bp.blogspot.com/-SpWVudhVqBk/ThZuANN7rsI/AAAAAAAAAPg/9InBcrMXIfA/s1600/can-am-2011-outlander-800r-x-mr-utility-efi-atv-black-yellow.jpg",
        type: "vehiculos",
    });
    productList.push({
        name:"Mancuernas 6P",
        price: 380000,
        image: "https://m.media-amazon.com/images/I/611SGK9Dl+L._AC_UF894,1000_QL80_.jpg",
        type: "ejercicio",
    });
    productList.push({
        name:"Mancuernas 8P",
        price: 410000,
        image: "https://m.media-amazon.com/images/I/51CPpGPyFEL._AC_.jpg",
        type: "ejercicio",
    });
    productList.push({
        name:"Mancuernas 4P",
        price: 310000,
        image: "https://m.media-amazon.com/images/I/61sDDvxZw6L._AC_SX522_.jpg",
        type: "ejercicio",
    });
    productList.push({
        name:"Mancuernas 2P",
        price: 155000,
        image: "https://m.media-amazon.com/images/I/41CYIiD9F6L.jpg",
        type: "ejercicio",
    });
    productList.push({
        name:"Ropar deportiva",
        price: 300000,
        image: "https://i.pinimg.com/236x/e9/52/36/e95236323cc8061bff81ba8122fbe260.jpg",
        type: "ropa",
    });
    productList.push({
        name:"Ropar deportiva",
        price: 300000,
        image: "https://http2.mlstatic.com/D_NQ_NP_731855-MLM51415215819_092022-O.jpg",
        type: "ropa",
    });
    productList.push({
        name:"Ropar deportiva",
        price: 300000,
        image: "https://sc04.alicdn.com/kf/H5552b14c5cb64444b4bb03e2c38c78daR/230831424/H5552b14c5cb64444b4bb03e2c38c78daR.jpg",
        type: "ropa",
    });
    productList.push({
        name:"zapatos",
        price: 600000,
        image: "https://http2.mlstatic.com/D_NQ_NP_746473-CBT68924132378_042023-V.jpg",
        type: "ropa",
    });
    productList.push({
        name:"zapatos",
        price: 800000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZCCmKT57IdE3Ms7pJRRtMnlK9DrLwnHObZpf3pfm0a2VcpSmA0ewZf1NmheyGrqkbt4w&usqp=CAU",
        type: "ropa",
    });
    productList.push({
        name:"zapatos",
        price: 600000,
        image: "https://m.media-amazon.com/images/I/61oJq0KTUmL._AC_SX466_.jpg",
        type: "ropa",
    });
    productList.push({
        name:"zapatos",
        price: 850000,
        image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61+pf9DkBaL._AC_UY1000_.jpg",
        type: "ropa",
    });
    productList.push({
        name:"zapatos",
        price: 640000,
        image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/10950b0733af4968ab1daf4900b4bf61_9366/tenis-duramo-sl-2.0.jpg",
        type: "ropa",
    });

function renderProducts(arr){

    for (product of arr) {
        /*
        div class="product-card">
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
