function verifier() {
    let nom = document.querySelector(".nom").value;
    let prenom = document.querySelector(".prenom").value;
    let message = document.querySelector(".message").value
    let sujet = document.querySelector(".sujet").value
    
    if(nom ==="" || message ==="" || prenom ==="" || sujet ==="") {
        alert("Veuilez remplir tous les champs")
    }else {
        alert("Message envoyé")
    }
}
