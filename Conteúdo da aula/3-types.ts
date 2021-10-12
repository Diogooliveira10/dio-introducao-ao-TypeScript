// types

interface IAnimal {
    nome: string
    tipo: 'terrestre' | 'aquático'
    domestico: boolean;
}

// com as interfaces como no Java ou em outras linguagens, você pode estender as interfaces.
interface IFelino extends IAnimal {
    visaoNoturna: boolean // pode ou não enxergar a noite
}

interface ICanino extends IAnimal {
    porte: 'pequeno' | 'médio' | 'grande';
}

// definindo um tipo se pode ser um ou outro na hora de definir a estrutura de dados da variável
type IDomestico = IFelino | ICanino;

const animal: IDomestico = {
    domestico: true,
    nome: 'Cachorro',
    porte: 'médio',
    tipo: 'terrestre'
}
