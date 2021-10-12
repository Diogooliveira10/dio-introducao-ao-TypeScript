/*
    * Exemplo de função soma no JavaScript

    function soma(a, b) {
        if(typeof a === 'number' && typeof b === 'number')
        return a + b
    }

    soma(1, 2)

    Nesse exemplo de JS, teve que adicionar bastante código para fazer funcionar a som, e toma tempo.
    Já no TypeScript é usado ferramentas muito úteis que evita escrever muitas quantidade de código.
*/

// Exemplo de função soma no TypeScript
function soma(a: number, b: number) {
    return a + b
}

// soma('a', 'b')

/*
    TypeScrip já te informa aonde está tento o problema (se estiver usando VSCode ele te informa na área de problems), não precisando
    fazer as verificações para ver se vai exibir o erro ou não, TypeScrip te dar na hora do desenvolvimento antes mesmo de testar o código.
*/