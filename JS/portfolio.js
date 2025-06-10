function verifier() {
    let nom = document.querySelector(".nom").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value
    
    if(nom ==="" || email ==="" || message ===""){
        alert("Veuilez remplir tous les champs")
    }else {
        let regex = new RegExp("[a-z0-90-90-9]+@[a-z]+\\.[a-z]+")
        if(regex.test(email)) {
            alert("Message envoyé")
        }else {
            alert("Email incorrect")
        }
    }
}
