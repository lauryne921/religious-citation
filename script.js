let citations = [
    "En effet, si vous pardonnez leurs fautes aux autres, votre pierre qui est dans les cieux vous pardonnera aussi.", 
    "En effet, quand nous croyons de tout notre coeur, Dieu nous rend justes, quand nous affirmons notre foi devant tous, il nous sauve", 
    "Tous les prophètes ont parlé de Lui en disant : 'Toute personne qui croit en Jésus reçoit par son nom le pardon des péchés.'", 
    "Le Seigneur me protège avec puissance, il est mon bouclier. Je lui fait confiance, il est venu à mon aide. Mon coeur danse de joie, je remercie le Seigneur en chantant.", 
    "Tout ce que vous pouvez dire ou faire, faites-le au nom du Seigneur Jésus, en remerciant par lui Dieu le Père.", 
    "Ne jugez point, afin que vous ne soyez point jugés.", 
    "Car on vous jugera du jugement dont vous jugez, et l'on vous mesurera avec la mesure dont vous mesurez.", 
    "Avant tout, aimez-vous de votre coeur, parce que l'amour efface beaucoup de péchés"
]; 


let button = document.getElementById('generateBtn'); 

button.addEventListener('click', () => {
    generate();  
}); 


function generate() {
    let containerCitation = document.getElementById('container-citation'); 

    let citationIndex = Math.floor(Math.random() * citations.length);

    containerCitation.innerHTML = citations[citationIndex];
}