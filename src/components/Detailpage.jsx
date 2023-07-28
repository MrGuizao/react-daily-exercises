import React from 'react';
import { useParams } from 'react-router-dom';

const DetailsPage = () => {
    const { id } = useParams();

    // Simulando detalhes do elemento com base no ID
    const element = {
        id,
        nome: `Elemento ${id}`,
        valor: id * 10,
        quantidade: id * 5,
        endereco: `Endereço do Elemento ${id}`,
    };

    return (
        <div>
            <h1>Detalhes do Elemento {id}</h1>
            <p>Nome: {element.nome}</p>
            <p>Valor: {element.valor}</p>
            <p>Quantidade: {element.quantidade}</p>
            <p>Endereço: {element.endereco}</p>
        </div>
    );
};

export default DetailsPage;
