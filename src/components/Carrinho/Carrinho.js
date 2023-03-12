import React, { createContext, useEffect, useState } from 'react';

export const Carrinho = createContext()

export const CarrinhoProvider = ({children})=>{
    const [carrinho, setcarrinho] =useState({})
    useEffect(()=>{
        const carrinhoLocal =  window.localStorage.getItem('carrinho')
        if(carrinhoLocal){
            setcarrinho(JSON.parse(carrinhoLocal))
        }
    },[])

    const adicionarAoCarrinho = product =>{

        setcarrinho(old=>{
            let quantity = 0;
            if(old[product.id]){
                quantity = old[product.id].quantity
            }
            const newCarrinho = {
            ...old,
            [product.id]:{
                quantity:quantity+1,
                product,

            }
        }
        window.localStorage.setItem('carrinho', JSON.stringify(newCarrinho))
        return newCarrinho
    })
    }
    const removeFromCarro =(productId)=>{
        setcarrinho(old=>{
            const newCarrinho ={}
            Object.keys(old).forEach(id=>{
                if(id !== productId){
                    newCarrinho[id] = old[id]
                }
            })
            window.localStorage.setItem('carrinho', JSON.stringify(newCarrinho))
            return newCarrinho
        })
    }
    const changeQuantity = (productId, newQuantity)=>{
        setcarrinho(old=>{
            const newCarrinho ={}
            Object.keys(old).forEach(id=>{
                const newProduct = {...old[id]}
                if(id === productId){
                    newProduct.quantity = newQuantity
                }
                newCarrinho[id] = newProduct
                })
            window.localStorage.setItem('carrinho', JSON.stringify(newCarrinho))
            return newCarrinho
        })
    }
return (
    <Carrinho.Provider value={{carrinho, adicionarAoCarrinho, removeFromCarro, changeQuantity}}>{children}</Carrinho.Provider>
)
}
