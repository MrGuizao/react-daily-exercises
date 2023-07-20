import React from 'react'
import { useState, useEffect } from 'react'

const App = () => {
  const [datas, setDatas] = useState([]);
  const [click, setClick] = useState(null);

  const fetchData = () => {
    try {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setDatas(data))
    } catch (error) {
      console.log(error);
    }
  }
  const handleClick = id => setClick(id);

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      {
        datas.map(data =>
          <div key={data.id} onClick={() => handleClick(data.id)}>
            <h1 style={click === data.id ? { color: 'red' } : null}>{data.name}</h1>
            <h3>{data.username}</h3>
            <h3>{data.email}</h3>
          </div>
        )
      }
    </>
  )
}

export default App