import { useState, useEffect } from 'react'

// Styles
import * as C from './App.styles'

// Types
import { Item } from './types/Item'
import { Category } from './types/Category'

// Data
import { categories } from './data/categories'
import { items } from './data/items'

// Helpers
import { gerCurrentMonth, filterListByMonth } from './helpers/dateFilter'

function App() {

  const [list, setList] = useState(items) // Não precisa dizer o tipo pq o dado já vem tipado do próprio arquvio 'items' lá dentro tem um import com o tipo dos dados

  const [filteredList, setFilteredList] = useState<Item[]>([]) // <Item[]> -> Informando qual o tipo do dado, apenas colocar o array não funciona no Typescript
                                                              // temos q dizer qual o tipo

  const [currentMonth, setCurrentMonth] = useState(gerCurrentMonth())

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth]);

  return (
    <C.Container>

      <C.Header>
        <C.HeaderText>Person Finance</C.HeaderText>
      </C.Header>

      <C.Body>
        
        {/* Área de Informações */}


        {/* Área de Iserção */}


        {/* Tabela de itens */}

      </C.Body>

    </C.Container>
  );
}

export default App;
