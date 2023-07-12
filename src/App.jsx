import React, { useEffect, useState } from 'react'
import './style.css'


export default function App() {
    const [datas, setDatas] = useState([]);
    const [click, setClick] = useState(null);

    useEffect(() => {
        const fetchCall = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                const result = await response.json();
                setDatas(result);
            }
            catch (error) {
                console.log('erro 301: ', error);
            }
        }
        fetchCall();
    }, []);

    const handleClick = id => setClick(id)


    return (
        <main className='main-box'>
            <ul>
                {datas.map(data => <li key={data.id} onClick={() => handleClick(data)}>{data.name}</li>)}
            </ul>
            {click && (
                <div className='style-box' onClick={() => setClick(null)}>
                    <h1>{click.name}</h1>
                    <h4>{click.username}</h4>
                    <h4>{click.email}</h4>
                    <h4>{click.phone}</h4>
                </div>
            )}
        </main>

    )
}
