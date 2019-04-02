
function controleNom() {
    var nom = document.getElementById("nom").value; 
    var pren = document.getElementById("pren").value; 
    //console.log(nom);
      if (nom === ""  || pren==="") {                        //si nom est égal à une chiane vide
            console.log("Champ vide")         //alord afficher "Champ vide"
            document.getElementById("msg").innerHTML = "Champ vide";
            document.getElementById("msg").style.color = "red";
      }
        else {                                //sinon
            console.log("Tout est ok");       //afficher "Tout est ok"
            document.getElementById("msg").innerHTML = "Tous est ok";
            document.getElementById("msg").style.color = "green";
        }
    
}