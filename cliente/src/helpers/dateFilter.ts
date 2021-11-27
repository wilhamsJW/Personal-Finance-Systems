import { Item } from '../types/Item'
 
export const gerCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth()+1}`;
}

// list: Item[], date: string -> mais uma vez esta é uma tipagem que se requer no Typescript
// tipagem é dizer os tipos dos dados, se é boolena, string, number etc...
export const filterListByMonth = (list: Item[], date: string): Item[] => { // : Item[] -> estou especificando o retorno dessa função, dizendo que o retorno é um array e dando o return normalmente no array desejado
    let newList: Item[]  = [];

    let [year, month] = date.split('-')

    for (let i in list) {
        
        if (
            list[i].date.getUTCFullYear() === parseInt(year) && 
            list[i].date.getMonth() + 1 === parseInt(month) 
        ) {
            newList.push(list[i])
        }

    }

    const List = list.filter((el) => {
        return el.date.getUTCFullYear() === parseInt(year) && el.date.getMonth() + 1 === parseInt(month) 
    })

    console.log('List Helper', List)

    return newList;
}