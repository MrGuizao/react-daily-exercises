import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {
  const [datas, setDatas] = useState([]);
  const [item, setItem] = useState('');

  const handleChange = e => setItem(e.target.value);
  const filteredItems = datas.filter(data => data.nome.toLowerCase().includes(item.toLowerCase()));
  const fetchData = () => {
    try {
      fetch('http://files.cod3r.com.br/curso-js/funcionarios.json')
        .then(res => res.json())
        .then(data => setDatas(data))
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <input type="text" value={item} onChange={handleChange} placeholder='pesquisar nome...' />
      {filteredItems.length ?
        filteredItems.map(data =>
          <main key={data.id}>
            <h3>Nome: {data.nome}</h3>
            <h3>Genero: {data.genero}</h3>
            <h3>salario: {data.salario}</h3>
          </main>
        )
        :
        <h1>Não encontrado</h1>
      }

    </>
  )
}

export default App