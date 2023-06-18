import React, { useEffect, useState } from 'react';
import ContainerProducts from '../layout/containerProducts';
import ContainerWarp from '../layout/containerWarp';

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/product')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error(error));
    }, []);

    // Filtrer les produits avec les IDs 23 et 24
    const filteredProducts = products.filter(product => product.id === 23 || product.id === 22);

    console.log(filteredProducts);

    return (
        <section>
            <div className="head-body">
                <div className="body-title">
                    <h1>DECOUVREZ NOS DIFFERENTS PACKS</h1>
                    <p>
                        Livraison gratuite pour le pack Tome 1 & 2 et le pack complet ! (en France Métropolitaine)
                    </p>
                </div>
                <div className="produits-mis-en-avant-conteneur">
                    {filteredProducts.map(product => (
                        <ContainerProducts
                            key={product.id}
                            productImg={product.photo}
                            productName={product.nom}
                            description={product.description}
                            prix={product.prix}
                        />
                    ))}
                </div>
            </div>




            <div className='title-section'>
                <h2>Nos autres produits</h2>
            </div>

            <div className='autres-produits'>
                <div className='conteneur-wrap-product'>
                    <ContainerWarp>
                        {products.map((elem, key) => <ContainerProducts key={elem.id}
                            productImg={elem.photo}
                            productName={elem.nom}
                            description={elem.description}
                            prix={elem.prix} />)}
                    </ContainerWarp>



                </div>
            </div>

            {/* Reste du code */}
        </section >
    );
};

export default Product;
