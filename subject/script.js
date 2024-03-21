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
              calculator.dataset.previousKey = 'number'
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
            calculator.dataset.previousKey = 'decimal'
            display.textContent = displayedNum + keyContent
          }

          //gestion opérateurs
          if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
          ) {
            calculator.dataset.firstValue = displayedNum
            calculator.dataset.operator = action
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
          //calcul
          const calculate = (n1, operator, n2) => {
            let result = ''
  
            if (operator === 'add') {
              result = parseFloat(n1) + parseFloat(n2)
            } else if (operator === 'subtract') {
              result = parseFloat(n1) - parseFloat(n2)
            } else if (operator === 'multiply') {
              result = parseFloat(n1) * parseFloat(n2)
            } else if (operator === 'divide') {
              result = parseFloat(n1) / parseFloat(n2)
            }
  
            return result
          }
          if (action === 'calculate') {
            calculator.dataset.previousKeyType = 'calculate'
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const secondValue = displayedNum

            display.textContent = calculate(firstValue, operator, secondValue)
          }

          //gestion AC/CE
          if (action !== 'clear') {
            const clearButton = calculator.querySelector('[data-action=clear]')
            clearButton.textContent = 'CE'
          }
          if (action === 'clear') {
            display.textContent = 0
            key.textContent = 'AC'
            calculator.dataset.previousKeyType = 'clear'
          }
          if (action === 'clear') {
            calculator.dataset.previousKeyType = 'clear'
            if (key.textContent === 'AC') {
              calculator.dataset.firstValue = ''
              calculator.dataset.modValue = ''
              calculator.dataset.operator = ''
              calculator.dataset.previousKeyType = ''
            } else {
              key.textContent = 'AC'
            }
            
          display.textContent = 0
            calculator.dataset.previousKeyType = 'clear'
          }

          // cas problématiques
          //avec le '.'
          if (action === 'decimal') {
            //'.' appuyé plusieurs fois
            if (displayedNum.includes('.')) {
              display.textContent = displayedNum
            }
            //'.' appuyé direct après un opérateur
            if (previousKeyType === 'operator') {
              display.textContent = '0.'
            }
            
          calculator.dataset.previousKeyType = 'decimal'
          }

          //si '.' est tapé après '=' sur un nombre déjà décimal
          if (!action) {
            if (
              displayedNum === '0' ||
              previousKeyType === 'operator' ||
              previousKeyType === 'calculate'
            ) {
              display.textContent = keyContent
            } else {
              display.textContent = displayedNum + keyContent
            }
            calculator.dataset.previousKeyType = 'number'
          }
          
          if (action === 'decimal') {
            if (!displayedNum.includes('.')) {
              display.textContent = displayedNum + '.'
            } else if (
              previousKeyType === 'operator' ||
              previousKeyType === 'calculate'
            ) {
              display.textContent = '0.'
            }
            
          calculator.dataset.previousKeyType = 'decimal'
          }

          
          

         
          
        
    });
    }
    
})
// les choses à faire : 
//repérer un click -> OK
// afficher ce qui est cliqué -> OK
//vider l'écran Display quand on clique sur AC
//commencer par le plan du code, qu'est-ce qu'on va faire



