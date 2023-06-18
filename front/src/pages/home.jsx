import Card from '../components/card';
import ContainerFlex from '../layout/containerFlex';
import { useHome } from '../hook/useHome';

const Home = () => {
    // const articles = [
    //     { titre: "test", content: "lorem" },
    //     { titre: "test2", content: "lorem2" },
    // ]
    const { articles, clic } = useHome()

    return (
        <div>
            <ContainerFlex>
                {articles.map((elem, key) => <Card key={key} titre={elem.nom} content={elem.description} />)}
            </ContainerFlex>
            <button onClick={clic}>Click</button>
        </div>
    );
}

export default Home;
