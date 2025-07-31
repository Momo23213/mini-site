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
        id: 1,
        name: 'Sac à dos',
        category: "Mode & Accessoires",
        price: prix(),
        image: `./images/sac1.jpg`,
        description: "Transportez vos affaires en toute sécurité et avec style grâce à ce sac à dos conçu pour s’adapter à toutes vos activités : école, travail, voyage ou sorties quotidiennes.."
    },
    {
        id: 2,
        name: "Sac à dos",
        category: "Mode & Accessoires",
        price: prix(),
        image: `./images/sac2.jpg`,
        description: "Transportez vos affaires en toute sécurité et avec style grâce à ce sac à dos conçu pour s’adapter à toutes vos activités : école, travail, voyage ou sorties quotidiennes.."
    },
    {
        id: 3,
        name: "Sac à dos",
        category: "Mode & Accessoires",
        price: prix(),
        image: `./images/sac3.jpg`,
        description: "Transportez vos affaires en toute sécurité et avec style grâce à ce sac à dos conçu pour s’adapter à toutes vos activités : école, travail, voyage ou sorties quotidiennes.."
    },
    {
        id: 4,
        name: "Sac à dos",
        category: "Mode & Accessoires",
        price: prix(),
        image: `./images/sac4.jpg`,
        description: "Transportez vos affaires en toute sécurité et avec style grâce à ce sac à dos conçu pour s’adapter à toutes vos activités : école, travail, voyage ou sorties quotidiennes.."
    },
    {
        id: 5,
        name: "Télephone mobile",
        category: "Mode & Accessoires",
        price: prix(),
        image: `./images/tel1.jpg`,
        description: "Transportez vos affaires en toute sécurité et avec style grâce à ce sac à dos conçu pour s’adapter à toutes vos activités : école, travail, voyage ou sorties quotidiennes.."
    },
    {
        id: i++,
        name: "Télephone mobile",
        category: "Mode & Accessoires",
        price: prix(),
        image: `./images/tel2.jpg`,
        description: "Transportez vos affaires en toute sécurité et avec style grâce à ce sac à dos conçu pour s’adapter à toutes vos activités : école, travail, voyage ou sorties quotidiennes.."
    },
    {
        id: i++,
        name: "Télephone mobile",
        category: "Mode & Accessoires",
        price: prix(),
        image: `./images/tel3.jpg`,
        description: "Transportez vos affaires en toute sécurité et avec style grâce à ce sac à dos conçu pour s’adapter à toutes vos activités : école, travail, voyage ou sorties quotidiennes.."
    },
    {
        id: i++,
        name: "Télephone mobile",
        category: "Mode & Accessoires",
        price: prix(),
        image: `./images/tel4.jpg`,
        description: "Transportez vos affaires en toute sécurité et avec style grâce à ce sac à dos conçu pour s’adapter à toutes vos activités : école, travail, voyage ou sorties quotidiennes.."
    },
    {
        id: i++,
        name: "Télephone mobile",
        category: "Mode & Accessoires",
        price: prix(),
        image: `./images/tel5.jpg`,
        description: "Transportez vos affaires en toute sécurité et avec style grâce à ce sac à dos conçu pour s’adapter à toutes vos activités : école, travail, voyage ou sorties quotidiennes.."
    },
    {
        id: i++,
        name: "Sac à dos",
        category: "Mode & Accessoires",
        price: prix(),
        image: `./images/sac5.jpg`,
        description: "Transportez vos affaires en toute sécurité et avec style grâce à ce sac à dos conçu pour s’adapter à toutes vos activités : école, travail, voyage ou sorties quotidiennes.."
    },
    {
        id: i++,
        name: "Sac à dos",
        category: "Mode & Accessoires",
        price: prix(),
        image: `./images/ordi5.jpg`,
        description: "Transportez vos affaires en toute sécurité et avec style grâce à ce sac à dos conçu pour s’adapter à toutes vos activités : école, travail, voyage ou sorties quotidiennes.."
    },
    {
        id: i++,
        name: "Sac à dos",
        category: "Mode & Accessoires",
        price: prix(),
        image: `./images/ordi4.jpg`,
        description: "Transportez vos affaires en toute sécurité et avec style grâce à ce sac à dos conçu pour s’adapter à toutes vos activités : école, travail, voyage ou sorties quotidiennes.."
    },
    {
        id: i++,
        name: "Sac à dos",
        category: "Mode & Accessoires",
        price: prix(),
        image: `./images/ordi3.jpg`,
        description: "Transportez vos affaires en toute sécurité et avec style grâce à ce sac à dos conçu pour s’adapter à toutes vos activités : école, travail, voyage ou sorties quotidiennes.."
    },
    {
        id: i++,
        name: "Sac à dos",
        category: "Mode & Accessoires",
        price: prix(),
        image: `./images/ordi2.jpg`,
        description: "Transportez vos affaires en toute sécurité et avec style grâce à ce sac à dos conçu pour s’adapter à toutes vos activités : école, travail, voyage ou sorties quotidiennes.."
    },
    {
        id: i++,
        name: "Sac à dos",
        category: "Mode & Accessoires",
        price: prix(),
        image: `./images/sac1.jpg`,
        description: "Transportez vos affaires en toute sécurité et avec style grâce à ce sac à dos conçu pour s’adapter à toutes vos activités : école, travail, voyage ou sorties quotidiennes.."
    },
    {
        id: i++,
        name: "Sac à dos",
        category: "Mode & Accessoires",
        price: prix(),
        image: `./images/casque5.jpg`,
        description: "Transportez vos affaires en toute sécurité et avec style grâce à ce sac à dos conçu pour s’adapter à toutes vos activités : école, travail, voyage ou sorties quotidiennes.."
    },
    {
        id: i++,
        name: "Sac à dos",
        category: "Mode & Accessoires",
        price: prix(),
        image: `./images/casque4.jpg`,
        description: "Transportez vos affaires en toute sécurité et avec style grâce à ce sac à dos conçu pour s’adapter à toutes vos activités : école, travail, voyage ou sorties quotidiennes.."
    },
    {
        id: i++,
        name: "Sac à dos",
        category: "Mode & Accessoires",
        price: prix(),
        image: `./images/casque3.jpg`,
        description: "Transportez vos affaires en toute sécurité et avec style grâce à ce sac à dos conçu pour s’adapter à toutes vos activités : école, travail, voyage ou sorties quotidiennes.."
    },
    {
        id: i++,
        name: "Sac à dos",
        category: "Mode & Accessoires",
        price: prix(),
        image: `./images/casque2.jpg`,
        description: "Transportez vos affaires en toute sécurité et avec style grâce à ce sac à dos conçu pour s’adapter à toutes vos activités : école, travail, voyage ou sorties quotidiennes.."
    },
    {
        id: i++,
        name: "Sac à dos",
        category: "Mode & Accessoires",
        price: prix(),
        image: `./images/casque1.jpg`,
        description: "Transportez vos affaires en toute sécurité et avec style grâce à ce sac à dos conçu pour s’adapter à toutes vos activités : école, travail, voyage ou sorties quotidiennes.."
    },
    {
        id: i++,
        name: "Sac à dos",
        category: "Mode & Accessoires",
        price: prix(),
        image: `./images/1.jpg`,
        description: "Transportez vos affaires en toute sécurité et avec style grâce à ce sac à dos conçu pour s’adapter à toutes vos activités : école, travail, voyage ou sorties quotidiennes.."
    },
    {
        id: i++,
        name: "Sac à dos",
        category: "Mode & Accessoires",
        price: prix(),
        image: `./images/2.jpg`,
        description: "Transportez vos affaires en toute sécurité et avec style grâce à ce sac à dos conçu pour s’adapter à toutes vos activités : école, travail, voyage ou sorties quotidiennes.."
    },
    {
        id: i++,
        name: "Sac à dos",
        category: "Mode & Accessoires",
        price: prix(),
        image: `./images/3.jpg`,
        description: "Transportez vos affaires en toute sécurité et avec style grâce à ce sac à dos conçu pour s’adapter à toutes vos activités : école, travail, voyage ou sorties quotidiennes.."
    },
    {
        id: i++,
        name: "Sac à dos",
        category: "Mode & Accessoires",
        price: prix(),
        image: `./images/4.jpg`,
        description: "Transportez vos affaires en toute sécurité et avec style grâce à ce sac à dos conçu pour s’adapter à toutes vos activités : école, travail, voyage ou sorties quotidiennes.."
    },
    {
        id: i++,
        name: "Sac à dos",
        category: "Mode & Accessoires",
        price: prix(),
        image: `./images/5.jpg`,
        description: "Transportez vos affaires en toute sécurité et avec style grâce à ce sac à dos conçu pour s’adapter à toutes vos activités : école, travail, voyage ou sorties quotidiennes.."
    },
    {
        id: i++,
        name: "Sac à dos",
        category: "Mode & Accessoires",
        price: prix(),
        image: `./images/6.jpg`,
        description: "Transportez vos affaires en toute sécurité et avec style grâce à ce sac à dos conçu pour s’adapter à toutes vos activités : école, travail, voyage ou sorties quotidiennes.."
    },
    {
        id: i++,
        name: "Sac à dos",
        category: "Mode & Accessoires",
        price: prix(),
        image: `./images/7.jpg`,
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
        <div class="addCard" data-id=${event.id} data-name=${event.name} data-prix=${event.price} data-image=${event.image}>
           <button  class="add">
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

 document.querySelectorAll('.add').forEach(button => {
      button.addEventListener('click', () => {
        const item = button.closest('.addCard');
        const id = item.dataset.id;
        const nom = item.dataset.name;
        const prix = parseFloat(item.dataset.prix);
        const image = item.dataset.image;

        let panier = JSON.parse(sessionStorage.getItem('panier')) || {};

        if (panier[id]) {
          panier[id].quantite += 1;
        } else {
          panier[id] = { nom, prix, image, quantite: 1 };
        }

        sessionStorage.setItem('panier', JSON.stringify(panier));
        afficherPanier();
      });
    });

    function afficherPanier() {
      const panier = JSON.parse(sessionStorage.getItem('panier')) || {};
      const conteneur = document.getElementById('pan');
      
      // On réinitialise le contenu sauf le titre

         conteneur.innerHTML=""
      let total = 0;
      let quantiteTotale = 0;

      for (const id in panier) {
        const produit = panier[id];
        const ligneTotal = produit.prix * produit.quantite;
        total += ligneTotal;
        quantiteTotale += produit.quantite;

        conteneur.innerHTML += `
                  
             <div class="itemes">
                        <div class="img"><img src="${produit.image}"></div>
                        <div class="info">
                            <p>${produit.nom}</p>
                          <p>${produit.prix}€ x ${produit.quantite} = ${ligneTotal} GNF</p>
                        </div>
                        <div class="footer">
                        <button onclick="modifierQuantite('${id}', -1)">–</button>
                         <p>${produit.quantite}</p>
                        <button onclick="modifierQuantite('${id}', 1)">+</button>
                        </div>
                </div>
        `;
      }

      if (quantiteTotale > 0) {
        compteur.textContent=quantiteTotale
        document.getElementById("totaux").textContent=total +" GNF"
        document.getElementById("qte").textContent=quantiteTotale
      } else {
        conteneur.innerHTML += "<p>Le panier est vide.</p>";
          compteur.textContent=0
        document.getElementById("totaux").textContent=0
        document.getElementById("qte").textContent=0
      }
    }

    function modifierQuantite(id, changement) {
      let panier = JSON.parse(sessionStorage.getItem('panier')) || {};
      if (!panier[id]) return;

      panier[id].quantite += changement;
      if (panier[id].quantite <= 0) {
        delete panier[id];
      }

      sessionStorage.setItem('panier', JSON.stringify(panier));
      afficherPanier();
    }

    // Afficher le panier dès que la page charge
    window.onload = afficherPanier;