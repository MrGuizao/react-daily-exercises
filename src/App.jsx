import React, { useState, useEffect } from 'react';

const App = () => {
  const [datas, setDatas] = useState([]);
  const [click, setClick] = useState('');

  const fetchData = () => {
    try {
      fetch('http://files.cod3r.com.br/curso-js/funcionarios.json')
        .then(res => res.json())
        .then(data => setDatas(data))
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (e) => setClick(e.target.value);

  useEffect(() => {
    fetchData();
  }, [])

  const filteredData = datas.filter(data => data.nome.toLowerCase().includes(click.toLowerCase()))

  return (
    <>
      <input type="text" placeholder='search...' value={click} onChange={handleChange} />
      {filteredData.length === 0 ? (
        <h1>Sem resultados</h1>
      ) : (
        filteredData.map(data =>
          <main key={data.id}>
            <h1>Nome: {data.nome} {data.sobrenome}</h1>
            <h3>Gênero: {data.genero}</h3>
            <h3>Salário: {data.salario}</h3>
          </main>
        )
      )}
    </>
  )
}

export default App;
