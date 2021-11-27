export type Category = {
    [tag: string]: {
        title: string;
        color: string;
        expense: boolean;
    }
}

// [tag: string]: --> os dados vindo do arquivo categorie.ts se trata de um objeto com nome
// da chave, ex: NomeChave: { 'item': 1, 'item' 2 }
// dessa forma temos várias chaves diferente, então para não criar uma type tão especifico
// criamos essa chave geral para o type: [tag: string]: {}, ela aceita qq chave q seja
// uma string e dá os tipos de seus respectivos valores