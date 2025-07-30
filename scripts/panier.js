let compteur=document.querySelector("#compteur")
compteur.textContent=10

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
console.log(lirePanier());

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