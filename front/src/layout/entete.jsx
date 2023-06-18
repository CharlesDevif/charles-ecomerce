import React from 'react';
import { Link } from 'react-router-dom';

const Entete = () => {
    return (
        <header>
            <div className="logo">
                <img src="http://localhost:3000/imgs/YatuuShop_logo.jpg" alt="" srcSet="" />
            </div>

            <nav>
                <Link to="/">Nos produits</Link>
                <Link to="/test">Nous contacter</Link>
                <Link to="/connexion-inscription">Mon compte</Link>
                <Link to="/test">Vous êtes libraire ?</Link>
                <Link to="/test">Article</Link>
            </nav>
        </header>
    );
}

export default Entete;
