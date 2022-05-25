import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { GlobalContext } from "../context/GlobalStateContext";

const Cart = ({ name, price, cant, id }) => {
  const { removeOfCart } = useContext(GlobalContext);

  return (
    <div>
      <h3>{name}</h3>
      <p>Precio: ${price}</p>
      <p>Cantidad: {cant}</p>
      <Button
        className="btn btn-danger"
        onClick={() => {
          removeOfCart(id);
        }}
      >
        Eliminar
      </Button>
    </div>
  );
};

export default Cart;
