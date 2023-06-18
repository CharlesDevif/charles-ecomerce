import React from 'react';

const ContainerProducts = ({ productImg, productName, description, prix }) => {
 
  return (
    <section className="container-products">
      <img src={productImg} alt="" />
      <h2>{productName}</h2>
      <p>{ description === "none" ? " " : description}</p>
      <p>{prix}</p>
      <button>En savoir plus</button>
    </section>
  );
};

export default ContainerProducts;
