function VerifInscri(){
    var x=document.forms["Inscription_1"]["Nom"].value;
    var x1=document.forms["Inscription_1"]["Prenom_1"].value;
    var x2=document.forms["Inscription_1"]["AdresseEmail"].value;
    if(x == ""){
        document.getElementById("alert1").innerHTML="Vous devez saisir votre nom complet.";
        document.getElementById("alert1").style.color="red";
        document.getElementById("alert1").style.fontSize="12px"; 
    }
    if(x1 == ""){
        document.getElementById("alert2").innerHTML="Vous devez saisir votre prénom complet.";
        document.getElementById("alert2").style.color="red";
        document.getElementById("alert2").style.fontSize="12px"; 
    }
    {
        if(x2 ==""){
            document.getElementById("alert3").innerHTML="Saisissez votre courriel";
            document.getElementById("alert3").style.color="red";
            document.getElementById("alert3").style.fontSize="12px"; 
        }
        else {
            for(i=0; i<x2.length;i++){
                if(x2[i]!="@"){
                    document.getElementById("alert3").innerHTML="entrez une adresse e-mail valide";
                    document.getElementById("alert3").style.color="red";
                    document.getElementById("alert3").style.fontSize="12px";
                }
            }
        }
    }
    
}
function verifMdP(){
    var x3=document.forms["Inscription_1"]["MdP"].value;
    if(x3 == ""){
        document.getElementById("alert4").innerHTML="Les critères de mot de passe n'ont pas été remplis";
        document.getElementById("alert4").style.color="red";
        document.getElementById("alert4").style.fontSize="12px";
    }
    else if (x3.length<8){
        document.getElementById("alert4").innerHTML="votre mot de passe est faible";
        document.getElementById("alert4").style.color="yellow";
        document.getElementById("alert4").style.fontWeight="bold";
        document.getElementById("alert4").style.fontSize="12px";
    }
    else if (x3.length>=8 && x3.match(/[0-9]/g) && x3.match(/[A-Z]/g)){
        document.getElementById("alert4").innerHTML="votre mot de passe est fort";
        document.getElementById("alert4").style.color="green";
        document.getElementById("alert4").style.fontWeight="bold";
        document.getElementById("alert4").style.fontSize="12px";
    }
    else{
        document.getElementById("alert4").innerHTML="votre mot de passe est trés fort";
        document.getElementById("alert4").style.color="red";
        document.getElementById("alert4").style.fontWeight="bold";
        document.getElementById("alert4").style.fontSize="12px";
    }
}
function verifConfirm(){
 var x4=document.forms["Inscription_1"]["CMdP"].value;
 var x3=document.forms["Inscription_1"]["MdP"].value;
 for(i=0;i<=x4.length;i++){
     if(x4[i]!=x3[i]){
        document.getElementById("alert5").innerHTML="votre mot de passe est non confirmé ";
        document.getElementById("alert5").style.color="red";
        document.getElementById("alert5").style.fontWeight="bold";
        document.getElementById("alert5").style.fontSize="12px";
     }
 }
}