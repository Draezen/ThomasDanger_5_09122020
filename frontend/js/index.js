
const afficherCatalogue = () => {

    addLoader("teddiesContainer", "loader")

    //affichage des oursons sur la page d'accueil
    const urlTeddies = "http://localhost:3000/api/teddies";
    getProduct(urlTeddies).then (listeProduits => {
        if (listeProduits.name === "TypeError"){
            messageErreur("main", "serverDown", "<h1>Problème de connexion !</h1> <h2> Veuillez réessayer dans quelques instants !</h2>")
        }else {
            creerListeProduit(listeProduits, "teddies");
        }
    })
}

afficherCatalogue()
