function adicionaApendiceALista<T>(array: any[], valor: T) { // O padrão é colocar a letra "T" para o que não sabe o que vai receber.
    return array.map(item => item + valor)
}

adicionaApendiceALista([1, 2, 3], 1)
adicionaApendiceALista(['A', 'B', 'C'], 'd')
// vai inferir os tipos de acordo que coloca