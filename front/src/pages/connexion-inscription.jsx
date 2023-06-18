import ConnectForm from '../components/connectForm';
import InscriptionForm from '../components/inscriptionForm';

import { useTest } from '../hook/useTest';

const ConnexionInscription = () => {

    const { login, setLogin, mdp, setMdp, validForm } = useTest()
    return (
        <div>
            <div className='conteneur-inscription-connexion'>

                <ConnectForm login={login} setLogin={setLogin} mdp={mdp} setMdp={setMdp} validForm={validForm} />
                <InscriptionForm login={login} setLogin={setLogin} mdp={mdp} setMdp={setMdp} validForm={validForm} />
            </div>
           
           
        </div>
    );
}

export default ConnexionInscription;