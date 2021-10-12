/*
        TypeScrip já te informa aonde está tento o problema (se estiver usando VSCode ele te informa na área de problems), não precisando
    fazer as verificações para ver se vai exibir o erro ou não, TypeScrip te dar na hora do desenvolvimento antes mesmo de testar o código.

function soma(a: number, b: number) {
    return a + b
}

soma('a', 'b')
*/

// interfaces
interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    domestico: boolean;
    // executarRugido(alturaEmDecibeis: number): void; // Pode adicionar funções
}

// com as interfaces como no Java ou em outras linguagens, você pode estender as interfaces.
interface IFelino extends IAnimal {
    visaoNoturna: boolean; // pode ou não pode enxergar a noite
}

interface ICanino extends IAnimal {
    porte: 'pequeno' | 'médio' | 'grande';
}

// definindo o tipo se pode ser um ou outro
type IDomestico = IFelino | ICanino;

const animal: IDomestico = {
    domestico: true,
    nome: 'Cachorro',
    porte: 'médio',
    tipo: 'terrestre'
}

/*
const animal: IAnimal = {
    nome: 'Elefante',
    tipo: 'terrestre',
    // executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
}

const felino: IFelino = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaoNoturna: true,
}
// Você cria um contrato quando estiver criando seus objetos ou classes.
*/