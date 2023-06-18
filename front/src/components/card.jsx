import React from 'react';

const Card = ({ titre, content }) => {
    return (
        <article className="card">
            <h3>{titre}</h3>
            <p>{content}</p>
        </article>
    );
}

export default Card;
