/*
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

// Para o TypeScript saber que o getElementById('input') não é um elemento genérico da página, mas é especificamente um input
const input = document.getElementById('input') as HTMLInputElement; //  as HTMLInputElement está dizendo pro typescrip que é um input

input.addEventListener('input', (event) => { // event é o evento que acontece quando está digitando alguma coisa no meu input
    // Dizendo pro typescript que esse event está ocorrendo no lemento de input
    const i = event.currentTarget as HTMLInputElement
    console.log(i.value)
})