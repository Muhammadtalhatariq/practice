import React, { createContext, useReducer } from 'react'
import { products } from '../Products';
import CartProvider from './CartProvider';
import { reducer } from '../reducer';

export const cartContext = createContext()

const initialState = {
  item: products,
  totaoAmount: 0,
  totalItem: 0
}



const Cart = () => {

  const [state, dispatch] = useReducer(reducer, initialState)
  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      paylord: id,
    })
  }

  
  return (
    <>
      <cartContext.Provider value={{ ...state, removeItem }}>
        <CartProvider />
      </cartContext.Provider>

    </>
  )
}

export default Cart