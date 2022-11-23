import React from "react";
import "./Carta.css";

const Carta = (props) => {
  const dishesList  = props.dishes.map((dish)=>{
    return(
      <div>
        <div>
        Nombre:<h2>{dish.name}</h2>
          Descripción: <h3>{dish.description}</h3>
          Precio: <h2>{dish.price} €</h2>
        </div>
        <hr/>        
      </div>
    )
  })
  return (
    <div className="carta">
      <div className="wrapCarta">
        <h1>Carta</h1>
        <p>Disfruta de nuestros mejores platos</p>
        <p>{dishesList}</p>
      </div>
    </div>
  );
};

export default Carta;
