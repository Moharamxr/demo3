import React, { useContext, useEffect } from "react";
import { checkout } from "../../../services/cart.service";
import { gState } from "../../../context/Context";

const Success = () => {
  const { data } = useContext(gState);
  const { defaultAddressId } = data;
  const { sessionId } = data;
  console.log(sessionId);

  const getData = async () => {
    try {
      console.log(sessionId);
      await checkout(sessionId);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  useEffect(() => {
    getData();
  }, []);
  
  if(defaultAddressId === ''){
    if (addresses.length<1) {
      navigate('/address');
    }
  }
  return (
    <div className="text-center fw-bold vh-100">
      <p>Your Order Placed Successfully</p>
    </div>
  );
};

export default Success;
