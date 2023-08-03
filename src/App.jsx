import React from 'react'
import { useState } from 'react'

const App = () => {
  const [datas, setDatas] = useState([
    { id: 0, nome: 'guilherme' },
    { id: 1, nome: 'giovanna' },
    { id: 2, nome: 'barbara' },
    { id: 3, nome: 'milena' },
  ])
  const [search, setSearch] = useState('');
  const filteredArray = datas.filter(data => data.nome.toLowerCase().includes(search.toLowerCase()))


  return (
    <>
      <main>
        <input type="text" value={search} onChange={(e) => { setSearch(e.target.value) }} />
      </main>
      <ul>
        {
          filteredArray ?
            filteredArray.map(data => <li key={data.id}>{data.nome}</li>)
            :
            <h1>sem resultado</h1>
        }
      </ul>
    </>
  )
}

export default App