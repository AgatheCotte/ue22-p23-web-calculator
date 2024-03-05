window.addEventListener("load", () => {
    let bouttons=document.querySelectorAll("button")
    for (let boutton of bouttons) {
        boutton.addEventListener("click",(evenement) => {
        const bouton = evenement.target
        const key = evenement.target
        const action = key.dataset.action
        if (!action) {
            console.log(bouton.textContent)
        }// détection des clicks
        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
          ) {
            console.log('operator key!')
          }
        
    });
    }
    
})
// les choses à faire : 
//repérer un click -> OK
// afficher ce qui est cliqué
//vider l'écran Display quand on clique sur AC
//commencer par le plan du code, qu'est-ce qu'on va faire



