import React, { useState, useEffect } from 'react'

const App = () => {
  const [datas, setDatas] = useState([]);
  const [value, setValue] = useState('');
  const filtered = datas.filter(data => data.nome.toLowerCase().includes(value.toLowerCase()))

  const handleChange = e => setValue(e.target.value);

  useEffect(() => {
    try {
      fetch('http://files.cod3r.com.br/curso-js/funcionarios.json')
        .then(response => response.json())
        .then(data => setDatas(data))
    }
    catch (error) {
      console.log(error);
    }
  }, [])

  return (
    <main>
      <input type="text" value={value} onChange={handleChange} />
      {
        filtered.length === 0 ?
          <h1>sem resultado</h1>
          :
          filtered.map(data => <li key={data.id}>{data.nome}</li>)
      }
    </main>
  )
}

export default App
