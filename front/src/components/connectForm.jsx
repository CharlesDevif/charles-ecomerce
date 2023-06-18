import React from 'react';

const ConnectForm = ({ login, setLogin, mdp, setMdp, validForm }) => {
    return (
        <div className='connexionFrom'>
            <h2>Connexion</h2>
        <form id='inscription-form' onSubmit={validForm}>
            <input type="text" placeholder='Login' value={login} onChange={(event) => setLogin(event.target.value)} />
            <input type="password" placeholder='Mot de passe' value={mdp} onChange={(event) => setMdp(event.target.value)} />
            <a href="">Mot de passe perdu ? </a>
            <input type="submit" name="submit" value="Connexion" />
        </form>
        </div>
    );
}

export default ConnectForm;
