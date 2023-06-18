import React from 'react';

const InscriptionForm = ({ login, setLogin, mdp, setMdp, validForm }) => {
    return (
        <div className='inscriptionForm'>
            <h2>Inscription</h2>
        <form onSubmit={validForm}>
            <input type="text" placeholder='Login' value={login} onChange={(event) => setLogin(event.target.value)} />
            <input type="password" placeholder='Mot de passe' value={mdp} onChange={(event) => setMdp(event.target.value)} />
            <input type="submit" name="submit" value="Inscription " />
        </form>
        </div>
    );
}

export default InscriptionForm;