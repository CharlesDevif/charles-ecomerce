
import ContainerFlex from '../layout/containerFlex';
import ConnectForm from '../components/connectForm';

import { useTest } from '../hook/useTest';

const Test = () => {

    const { login, setLogin, mdp, setMdp, validForm } = useTest()
    return (
        <div>
            <ContainerFlex>
                <ConnectForm login={login} setLogin={setLogin} mdp={mdp} setMdp={setMdp} validForm={validForm} />
            </ContainerFlex>
        </div>
    );
}

export default Test;
