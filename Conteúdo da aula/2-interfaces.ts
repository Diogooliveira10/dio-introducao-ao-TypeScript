// interfaces
interface IAnimal {
    nome: string
    tipo: 'terrestre' | 'aquático'
    // executarRugido(alturaEmDecibeis: number): void; // Pode adicionar funções
}

// com as interfaces como no Java ou em outras linguagens, você pode estender as interfaces.
interface IFelino extends IAnimal {
    visaoNoturna: boolean // pode ou não enxergar a noite
}

const animal: IAnimal = {
    nome: 'Elefante',
    // tipo: 'voador' // não posso colocar o valor diferente do que defini na interface 
    tipo: 'terrestre',
}

const felino: IFelino = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaoNoturna: true,
}
// Você cria um contrato quando estiver criando seus objetos ou classes.