import React, { useState } from 'react';

const listaCompleta = [
  { id: 1, nome: 'Item 1' },
  { id: 2, nome: 'Item 2' },
  { id: 3, nome: 'Item 3' },
  { id: 4, nome: 'Item 4' },
  { id: 5, nome: 'Item 5' },
];
const ListaFiltrada = () => {
  const [todos, setTodos] = useState(listaCompleta);
  const [search, setSearch] = useState('');

  const handleChange = e => setSearch(e.target.value);
  const filter = todos.filter(todo => todo.nome.toLowerCase().includes(search.toLowerCase()))


  return (
    <main>
      <input type="text" placeholder='pesquisar...' value={search} onChange={handleChange} />
      {
        filter.length === 0 ? <h1>Sem resultado</h1>
          :
          filter.map(todo => <li key={todo.id}>{todo.nome}</li>)
      }
    </main>
  );
};

export default ListaFiltrada;