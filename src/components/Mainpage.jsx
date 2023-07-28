import React from 'react';
import { Link } from 'react-router-dom';

const elements = [
    { id: 1, nome: 'celular mp54', valor: 1870.99 },
    { id: 2, nome: 'controle gamer', valor: 289 },
    { id: 3, nome: 'fone de ouvido', valor: 340 },
    { id: 4, nome: 'cadernos', valor: 25 },
    { id: 5, nome: 'cerveja', valor: 7 },
    { id: 6, nome: 'Bola dagua', valor: 68.99 },
];

const MainPage = () => {
    return (
        <div>
            <div>
            <h1>Lista de Elementos</h1>
                {elements.map((element) => (
                    <li key={element.id}>
                        <Link to={`/details/${element.id}`}>{element.nome}</Link>
                    </li>
                ))}
            </div>
        </div>
    );
};

export default MainPage;
