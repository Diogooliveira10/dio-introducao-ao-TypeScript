/*
    É usado muitas vezes bibliotecas esternas para fazer projetos, mas as vezes está estendendo a biblioteca.
    O que fazer para estender essa biblioteca sem mexer nos types que estão definidas dentro dela,
    e no TypeScript tem um padrão para isso!
*/

// Exemplo com JQuery
import $ from 'jquery';

$.fn.extend({
    novaFuncao() {
        console.log('Chamou nova função')
    }
});

$('body').novaFuncao()