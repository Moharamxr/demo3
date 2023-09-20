import React, { useContext } from "react";
import { checkout } from "../../../services/cart.service";
import { gState } from "../../../context/Context";


const Success = () => {
  const { data } = useContext(gState);
  const { defaultAddressId } = data;
  const { sessionId } = data;
  console.log(sessionId);

  const handleCheckout = async (e) => {
    e.preventDefault();

    try {
    
      console.log(sessionId);
      await checkout(defaultAddressId);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  return (
    <div className="text-center fw-bold" onClick={(e)=>handleCheckout(e)}>
      <p>Place Your Order</p>
    </div>
  );
};

export default Success;
