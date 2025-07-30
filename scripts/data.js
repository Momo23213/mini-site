// pour genere les prix aleatoires
function prix() {
  const min = 90000;
  const max = 400000;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let i=1;
// Base de données des produits
   const products = [
    {
        id: i++,
        name: "Sac à dos",
        category: "Mode & Accessoires",
        price: prix(),
        image: `../images/sac${i}.jpg`,
        description: "Transportez vos affaires en toute sécurité et avec style grâce à ce sac à dos conçu pour s’adapter à toutes vos activités : école, travail, voyage ou sorties quotidiennes.."
    },
    {
        id: i++,
        name: "Sac à dos",
        category: "Mode & Accessoires",
        price: prix(),
        image: `../images/sac${i}.jpg`,
        description: "Transportez vos affaires en toute sécurité et avec style grâce à ce sac à dos conçu pour s’adapter à toutes vos activités : école, travail, voyage ou sorties quotidiennes.."
    },
    {
        id: i++,
        name: "Sac à dos",
        category: "Mode & Accessoires",
        price: prix(),
        image: `../images/sac${i}.jpg`,
        description: "Transportez vos affaires en toute sécurité et avec style grâce à ce sac à dos conçu pour s’adapter à toutes vos activités : école, travail, voyage ou sorties quotidiennes.."
    },
    {
        id: i++,
        name: "Sac à dos",
        category: "Mode & Accessoires",
        price: prix(),
        image: `../images/sac${i}.jpg`,
        description: "Transportez vos affaires en toute sécurité et avec style grâce à ce sac à dos conçu pour s’adapter à toutes vos activités : école, travail, voyage ou sorties quotidiennes.."
    },
    {
        id: i++,
        name: "Sac à dos",
        category: "Mode & Accessoires",
        price: prix(),
        image: `../images/sac${i}.jpg`,
        description: "Transportez vos affaires en toute sécurité et avec style grâce à ce sac à dos conçu pour s’adapter à toutes vos activités : école, travail, voyage ou sorties quotidiennes.."
    },
    {
        id: i++,
        name: "Sac à dos",
        category: "Mode & Accessoires",
        price: prix(),
        image: `../images/sac${i}.jpg`,
        description: "Transportez vos affaires en toute sécurité et avec style grâce à ce sac à dos conçu pour s’adapter à toutes vos activités : école, travail, voyage ou sorties quotidiennes.."
    },
    {
        id: i++,
        name: "Sac à dos",
        category: "Mode & Accessoires",
        price: prix(),
        image: `../images/sac${i}.jpg`,
        description: "Transportez vos affaires en toute sécurité et avec style grâce à ce sac à dos conçu pour s’adapter à toutes vos activités : école, travail, voyage ou sorties quotidiennes.."
    },
    {
        id: i++,
        name: "Sac à dos",
        category: "Mode & Accessoires",
        price: prix(),
        image: `../images/sac${i}.jpg`,
        description: "Transportez vos affaires en toute sécurité et avec style grâce à ce sac à dos conçu pour s’adapter à toutes vos activités : école, travail, voyage ou sorties quotidiennes.."
    },
    {
        id: i++,
        name: "Sac à dos",
        category: "Mode & Accessoires",
        price: prix(),
        image: `../images/sac${i}.jpg`,
        description: "Transportez vos affaires en toute sécurité et avec style grâce à ce sac à dos conçu pour s’adapter à toutes vos activités : école, travail, voyage ou sorties quotidiennes.."
    },
    {
        id: i++,
        name: "Sac à dos",
        category: "Mode & Accessoires",
        price: prix(),
        image: `../images/sac${i}.jpg`,
        description: "Transportez vos affaires en toute sécurité et avec style grâce à ce sac à dos conçu pour s’adapter à toutes vos activités : école, travail, voyage ou sorties quotidiennes.."
    },
    {
        id: i++,
        name: "Sac à dos",
        category: "Mode & Accessoires",
        price: prix(),
        image: `../images/sac${i}.jpg`,
        description: "Transportez vos affaires en toute sécurité et avec style grâce à ce sac à dos conçu pour s’adapter à toutes vos activités : école, travail, voyage ou sorties quotidiennes.."
    },
    {
        id: i++,
        name: "Sac à dos",
        category: "Mode & Accessoires",
        price: prix(),
        image: `../images/sac${i}.jpg`,
        description: "Transportez vos affaires en toute sécurité et avec style grâce à ce sac à dos conçu pour s’adapter à toutes vos activités : école, travail, voyage ou sorties quotidiennes.."
    },
    {
        id: i++,
        name: "Sac à dos",
        category: "Mode & Accessoires",
        price: prix(),
        image: `../images/sac${i}.jpg`,
        description: "Transportez vos affaires en toute sécurité et avec style grâce à ce sac à dos conçu pour s’adapter à toutes vos activités : école, travail, voyage ou sorties quotidiennes.."
    },
    {
        id: i++,
        name: "Sac à dos",
        category: "Mode & Accessoires",
        price: prix(),
        image: `../images/sac${i}.jpg`,
        description: "Transportez vos affaires en toute sécurité et avec style grâce à ce sac à dos conçu pour s’adapter à toutes vos activités : école, travail, voyage ou sorties quotidiennes.."
    },
    {
        id: i++,
        name: "Sac à dos",
        category: "Mode & Accessoires",
        price: prix(),
        image: `../images/sac${i}.jpg`,
        description: "Transportez vos affaires en toute sécurité et avec style grâce à ce sac à dos conçu pour s’adapter à toutes vos activités : école, travail, voyage ou sorties quotidiennes.."
    },
    {
        id: i++,
        name: "Sac à dos",
        category: "Mode & Accessoires",
        price: prix(),
        image: `../images/sac${i}.jpg`,
        description: "Transportez vos affaires en toute sécurité et avec style grâce à ce sac à dos conçu pour s’adapter à toutes vos activités : école, travail, voyage ou sorties quotidiennes.."
    },
    {
        id: i++,
        name: "Sac à dos",
        category: "Mode & Accessoires",
        price: prix(),
        image: `../images/sac${i}.jpg`,
        description: "Transportez vos affaires en toute sécurité et avec style grâce à ce sac à dos conçu pour s’adapter à toutes vos activités : école, travail, voyage ou sorties quotidiennes.."
    },
    {
        id: i++,
        name: "Sac à dos",
        category: "Mode & Accessoires",
        price: prix(),
        image: `../images/sac${i}.jpg`,
        description: "Transportez vos affaires en toute sécurité et avec style grâce à ce sac à dos conçu pour s’adapter à toutes vos activités : école, travail, voyage ou sorties quotidiennes.."
    },
    {
        id: i++,
        name: "Sac à dos",
        category: "Mode & Accessoires",
        price: prix(),
        image: `../images/sac${i}.jpg`,
        description: "Transportez vos affaires en toute sécurité et avec style grâce à ce sac à dos conçu pour s’adapter à toutes vos activités : école, travail, voyage ou sorties quotidiennes.."
    },
    {
        id: i++,
        name: "Sac à dos",
        category: "Mode & Accessoires",
        price: prix(),
        image: `../images/sac${i}.jpg`,
        description: "Transportez vos affaires en toute sécurité et avec style grâce à ce sac à dos conçu pour s’adapter à toutes vos activités : école, travail, voyage ou sorties quotidiennes.."
    },
    {
        id: i++,
        name: "Sac à dos",
        category: "Mode & Accessoires",
        price: prix(),
        image: `../images/sac${i}.jpg`,
        description: "Transportez vos affaires en toute sécurité et avec style grâce à ce sac à dos conçu pour s’adapter à toutes vos activités : école, travail, voyage ou sorties quotidiennes.."
    },
    {
        id: i++,
        name: "Sac à dos",
        category: "Mode & Accessoires",
        price: prix(),
        image: `../images/sac${i}.jpg`,
        description: "Transportez vos affaires en toute sécurité et avec style grâce à ce sac à dos conçu pour s’adapter à toutes vos activités : école, travail, voyage ou sorties quotidiennes.."
    },
    {
        id: i++,
        name: "Sac à dos",
        category: "Mode & Accessoires",
        price: prix(),
        image: `../images/sac${i}.jpg`,
        description: "Transportez vos affaires en toute sécurité et avec style grâce à ce sac à dos conçu pour s’adapter à toutes vos activités : école, travail, voyage ou sorties quotidiennes.."
    },
    {
        id: i++,
        name: "Sac à dos",
        category: "Mode & Accessoires",
        price: prix(),
        image: `../images/sac${i}.jpg`,
        description: "Transportez vos affaires en toute sécurité et avec style grâce à ce sac à dos conçu pour s’adapter à toutes vos activités : école, travail, voyage ou sorties quotidiennes.."
    },
]
 




 const produit=document.querySelector(".produits");
 products.forEach(event=>{
    const row=document.createElement("div")
    row.classList.add("produits")
    row.innerHTML=`
      <div class="card-seller">
      <div class="basicInfo">
        <div class="title">
          <div class="name">${event.name}</div>
        </div>
        <div class="images">
          <div class="img">
            <div class="iteme">
              <img src="${event.image}">
            </div>
          </div>
        </div>
        <div class="addCard" onclick="panier(${event.id})">
           <button  onclick="addToCart(${event.id})">
           <i class="fa-solid fa-basket-shopping"></i>
           </button>
        </div>
      </div>
      <div class="mores">
        <div class="stars">
          <i class="fa-regular fa-star text-yellow"></i>
          <i class="fa-regular fa-star text-yellow"></i>
          <i class="fa-regular fa-star text-yellow"></i>
          <i class="fa-regular fa-star text-yellow"></i>
          <i class="fa-regular fa-star"></i>
        </div>
        <div class="price">${event.price} GNF</div>
      </div>
    </div>
                
    `
    produit.appendChild(row)
 })


function panier(id){
    const tableau=["djd"]
    const p = products.find(pro => pro.id === id);
     const shop={
        image:p.image,
        id:p.id,
        nom:p.name,
        prix:p.price
     }
     tableau.push({
        image:p.image,
        id:p.id,
        nom:p.name,
        prix:p.price
     })
     console.log(tableau+" ok");
     
       sessionStorage.setItem("Panier",JSON.stringify(shop))
     pop()
}


function pop(){
      let tabs;
        tabs=[JSON.parse(sessionStorage.Panier)]
      document.querySelector(".listCart").innerHTML=""  
     tabs.forEach(e=>{
        const pa=document.createElement("div")
        pa.classList.add("listCart");
        pa.innerHTML=`
            <div class="item">
                <img src="${e.image}">
                <div class="content">
                    <div class="name">CoPilot / Black / Automatic</div>
                    <div class="price">${e.price} / 1 product</div>
                </div>
                <div class="quantity">
                    <button class="plus">-</button>
                    <span class="value">1</span>
                    <button class="plus">+</button>
                </div>
            </div>       

        `
    document.querySelector(".listCart").appendChild(pa)

     })

}




const addToCart = (product_id) => {
    let positionThisProductInCart = cart.findIndex((value) => value.product_id == product_id);
    if(cart.length <= 0){
        cart = [{
            product_id: product_id,
            quantity: 1
        }];
    }else if(positionThisProductInCart < 0){
        cart.push({
            product_id: product_id,
            quantity: 1
        });
    }else{
        cart[positionThisProductInCart].quantity = cart[positionThisProductInCart].quantity + 1;
    }
    addCartToHTML();
    addCartToMemory();
}
const addCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
}
const addCartToHTML = () => {
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;
    if(cart.length > 0){
        cart.forEach(item => {
            totalQuantity = totalQuantity +  item.quantity;
           
            pa.dataset.id = item.product_id;

            let positionProduct = products.findIndex((value) => value.id == item.product_id);
            let info = products[positionProduct];
           const pa=document.createElement("div")
        pa.classList.add("listCart");
        pa.innerHTML=`
            <div class="item">
                <img src="${item.image}">
                <div class="content">
                    <div class="name">${item.name}</div>
                    <div class="price">${e.price} / 1 product</div>
                </div>
                <div class="quantity">
                    <button class="plus">-</button>
                    <span class="value">1</span>
                    <button class="plus">+</button>
                </div>
            </div>       

        `
    document.querySelector(".listCart").appendChild(pa)
        })
    }
    iconCartSpan.innerText = totalQuantity;
}

listCartHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')){
        let product_id = positionClick.parentElement.parentElement.dataset.id;
        let type = 'minus';
        if(positionClick.classList.contains('plus')){
            type = 'plus';
        }
        changeQuantityCart(product_id, type);
    }
})
const changeQuantityCart = (product_id, type) => {
    let positionItemInCart = cart.findIndex((value) => value.product_id == product_id);
    if(positionItemInCart >= 0){
        let info = cart[positionItemInCart];
        switch (type) {
            case 'plus':
                cart[positionItemInCart].quantity = cart[positionItemInCart].quantity + 1;
                break;
        
            default:
                let changeQuantity = cart[positionItemInCart].quantity - 1;
                if (changeQuantity > 0) {
                    cart[positionItemInCart].quantity = changeQuantity;
                }else{
                    cart.splice(positionItemInCart, 1);
                }
                break;
        }
    }
    addCartToHTML();
    addCartToMemory();
}
