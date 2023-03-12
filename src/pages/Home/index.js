import React from "react";
import Axios from 'axios';
import { useEffect, useState } from 'react';

import CardProduto  from "../../components/Card/cardproduto";

const URI = 'http://localhost:5000'



const page=()=>{

  const [products, getProducts] = useState([]);




  useEffect(() => {
    Axios.get(`${URI}/products`)
      .then(response => {
        getProducts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
    return(
        <div >
            <CardProduto
            key={products}

            products ={products}/>
        </div>
    )
}
export default page;