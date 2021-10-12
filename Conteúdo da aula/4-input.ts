// Para o TypeScript saber que o getElementById('input') não é um elemento genérico da página, mas é especificamente um input
const input = document.getElementById('input') as HTMLInputElement; //  as HTMLInputElement está dizendo pro typescrip que é um input

input.addEventListener('input', (event) => { // event é o evento que acontece quando está digitando alguma coisa no meu input
    // Dizendo pro typescript que esse event está ocorrendo no lemento de input
    const i = event.currentTarget as HTMLInputElement
    console.log(i.value)
})