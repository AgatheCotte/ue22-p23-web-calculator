window.addEventListener("load", () => {
    const display = document.querySelector('.calculator__display')
    const calculator = document.querySelector('.calculator')
    let bouttons=document.querySelectorAll("button")
    for (let boutton of bouttons) {//récupérer le bouton cliqué
        boutton.addEventListener("click",(evenement) => {
        const bouton = evenement.target
        const key = evenement.target
        const keyContent = bouton.textContent
        const action = key.dataset.action
        const displayedNum = display.textContent

        // détection des clicks dans la console
        if (!action) {
            console.log(keyContent)
        }
        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
          ) {
            console.log('operator key!')
          }
          if (action === 'decimal') {
            console.log('decimal key!')
          }
          
          if (action === 'clear') {
            console.log('clear key!')
          }
          
          if (action === 'calculate') {
            console.log('equal key!')
          }

          //affichage
          //afichage d'un chiffre
          if (!action) {
            if (displayedNum === '0') {
              display.textContent = keyContent
            }
          }
          //afichage de plusieurs chiffres à la suite
          if (!action) {
            if (displayedNum === '0') {
              display.textContent = keyContent
            } else {
              display.textContent = displayedNum + keyContent
            }
          }
          //affichage du point
          if (action === 'decimal') {
            display.textContent = displayedNum + '.'
          }

          //gestion opérateurs
          if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
          ) {
            // Add custom attribute
            calculator.dataset.previousKeyType = 'operator'
          }
          const previousKeyType = calculator.dataset.previousKeyType
          if (!action) {
            if (displayedNum === '0' || previousKeyType === 'operator') {
              display.textContent = keyContent
            } else {
              display.textContent = displayedNum + keyContent
            }
          }
         
          
        
    });
    }
    
})
// les choses à faire : 
//repérer un click -> OK
// afficher ce qui est cliqué -> OK
//vider l'écran Display quand on clique sur AC
//commencer par le plan du code, qu'est-ce qu'on va faire



