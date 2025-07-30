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
           <button  onclick="ajoute(event.id)">
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


   
 let compteur=document.querySelector("#compteur")
compteur.textContent=12

function enregistrement(id){
    sessionStorage.setItem("Panier",JSON.stringify(id))
}

function lirePanier(){
    let produit=sessionStorage.getItem("Panier")
    if(produit==null){
        return []
    } else{
        return JSON.parse(produit)
    }
}

function ajoute(produit){
    let panier=lirePanier()
    let foundProduit=panier.find(p=> p.id==produit.id)
    if(foundProduit==undefined){
        foundProduit.quantite++;
    }else{
        produit.quantite=1;
        panier.push(produit)
    }
    enregistrement(panier)
}

function removePanier(produit){
     let panier=lirePanier()
    let foundProduit=panier.find(p=> p.id!=produit.id)
    enregistrement(foundProduit)
}

function changeQuantity(product,quantity){
     let panier=lirePanier()
    let foundProduit=panier.find(p=> p.id==produit.id)
    if(foundProduit==undefined){
        foundProduit.quantite+=quantity;
        if(foundProduit.quantite<=0){
            removePanier(foundProduit)
        }else{
            enregistrement(panier)
        }
    }

}

function total(){

}