import React, {useContext} from "react";
import {Carrinho}  from '../../components/Carrinho/Carrinho'
// import Head from 'next/'

const CartCarrinho=()=>{
    const carro = useContext(Carrinho)
    const remove = id => () =>{
      carro.removeFromCarro(id)
    }
    const changeQuantity = (id) => (evt) => {
      carro.changeQuantity(id, Number(evt.target.value))
    }

    const total = Object.keys(carro.carrinho).reduce((prev, curr)=>{
       let valores =parseFloat( prev + carro.carrinho[curr].quantity * carro.carrinho[curr].product.price)
      return  valores
    }, 0 )



    return(
      <>

        <div className="h-screen bg-gray-100 pt-20">
        <h1 className="mb-10 text-center text-2xl font-bold">Items Carrinho</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {/* começa aqui */}
              {Object.keys(carro.carrinho).map((key)=>{
                const {product, quantity} = carro.carrinho[key]
                return(
              <div key={key} className="justify-between mb-6 rounded-lg bg-white p-2 shadow-md sm:flex sm:justify-start">
                {/* <pre>{JSON.stringify(product)}</pre> */}
                <img src="../../product1.png" alt="product-image" className="w-full rounded-lg sm:w-40 " />
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div className="mt-2 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900">{product.name}</h2>
                    <p className="mt-1 text-xs text-gray-700">{product.descricao}</p>
                  </div>
                  <div className="mt-2 ">
                    <div className="flex items-center border-gray-100 space-x-2">
                      <input className="h-8 w-8 mb-2 border bg-white text-center text-xs outline-none" 
                      type="number"
                      onChange={changeQuantity(key)}                  
                      defaultValue={quantity} 
                      min="1" />
                      
                    </div>
                    <div className=" items-center space-x-2">
                      <p className="text-sm">$ {product.price}</p>
                    </div>
                    <div className="items-center space-x-2">
                       <button type="submit" className="text-gray-700" onClick={remove(key)}> <small>Remover</small></button>
                      </div>
                    
                      
                     
                    
                  </div>
                </div>
              </div>
            )})}
          </div>
          
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">$ {total}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Frete</p>
              <p className="text-gray-700">$0</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">$ {total} </p>
                <p className="text-sm text-gray-700">IVA incluído</p>
              </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
          </div>
        </div>
      </div>
      </>
    );
}
export default CartCarrinho;