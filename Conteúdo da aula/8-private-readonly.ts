interface Cachorro {
    nome: string
    idade: number
    parqueFavorito ?: string
}

type CachorroSomenteLeitura = {
    // interando todos os itens adicionado no interface Cachorro e dizendo que os valores são somentes de leitura na hora da implementação.
    +readonly [K in keyof Cachorro]-?: Cachorro[K] // Melhorar a leitura para outros desenvolvedores (+readonly) adicionando readonly e (-?) removendo os opcionais dentro dessa classe.
     
}

class MeuCachorro implements CachorroSomenteLeitura {
    idade
    nome
    parqueFavorito

    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
}

const cao = new MeuCachorro('Luna', 7)