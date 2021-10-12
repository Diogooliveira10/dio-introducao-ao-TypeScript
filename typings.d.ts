/* 
    O que eu adicionar em arquivo de typings se tiver o mesmo nome dos tipos definidos da bibliote esterna que eu estou utilizando,
     ele vai somar as duas interfaces e vai ter acesso aos seus item.
*/ 

// Pegar os métodos para que possa adicionar novaFuncao aos métodos nativos do JQuery
interface JQuery {
    novaFuncao(): void,
}