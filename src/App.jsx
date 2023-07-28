import React, { useState } from 'react';

const ListaFiltrada = () => {
  const listaCompleta = [
    { id: 1, nome: 'Item 1' },
    { id: 2, nome: 'Item 2' },
    { id: 3, nome: 'Item 3' },
    { id: 4, nome: 'Item 4' },
    { id: 5, nome: 'Item 5' },
  ];

  const [filtro, setFiltro] = useState('todos');
  const [listaFiltrada, setListaFiltrada] = useState(listaCompleta);

  const handleFiltroChange = (e) => {
    const filtroSelecionado = e.target.value;
    setFiltro(filtroSelecionado);

    if (filtroSelecionado === 'todos') {
      setListaFiltrada(listaCompleta);
    } else {
      const novaListaFiltrada = listaCompleta.filter((item) => item.id === parseInt(filtroSelecionado));
      setListaFiltrada(novaListaFiltrada);
    }
  };

  return (
    <div>
      <h2>Lista Filtrada</h2>
      <select value={filtro} onChange={handleFiltroChange}>
        <option value="todos">Todos</option>
        <option value="1">Item 1</option>
        <option value="2">Item 2</option>
        <option value="3">Item 3</option>
        <option value="4">Item 4</option>
        <option value="5">Item 5</option>
      </select>
      <ul>
        {listaFiltrada.map((item) => (
          <li key={item.id}>{item.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaFiltrada;
