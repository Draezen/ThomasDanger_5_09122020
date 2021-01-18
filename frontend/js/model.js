
class ModelPanier {
    constructor(){}

    ajouter(storage, produit){
        //const panierStorage = new LocalStorage("panier")
        storage.creer("panier", produit)
    }

    supprimer(article){
        const panierStorage = new LocalStorage("panier")
        panierStorage.supprimer(article)
    }

    vider(){
        const panierStorage = new LocalStorage()
        panierStorage.vider()
    }

    afficher(){

    }

    calculerTotal(){
        const prices = document.getElementsByClassName("basket__recap--price")
        let priceTotal = 0
        for (let price of prices) {
            priceTotal += parseInt(price.textContent)
        }
        return priceTotal
    }
}

class ModelCommande {
    constructor(){
    }

    //Remplir la commande
    remplirBonCommande = (form, storage) => {
        const order = {
            contact: {
                firstName: form.elements.formFirstName.value,
                lastName: form.elements.formLastName.value,
                address: form.elements.formAddress.value,
                city: form.elements.formCity.value,
                email: form.elements.formEmail.value
            },
            products: []
        }
        this.ajouterIdCommande(order.products, storage)
        return order
    }
    
    //Récupérer les id des produit à commander
    ajouterIdCommande = (produits, storage) => {
        const panier = storage.lire("panier")
        panier.forEach(produit => {
            produits.push(produit.id)
        })
        return produits
    }
    
    //enregistrement de l'id et du prix
    validerCommande = (data, storage) => {
        //const panierStorage = new LocalStorage("commande")
        const price = parseInt(document.getElementById("basketTotal").textContent)
        const id = data.orderId
        const commande = { prix: price, id: id }
        storage.creer("commande", commande)
    }
    


}

let compteur = 1

//compteur de click
const compteurClick = () => {
    return compteur++
}

//Mise en forme du prix avec l'internationalisation
const prix = (prix) => {
    return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(prix)
}



