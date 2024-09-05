import React, { createContext, useEffect, useReducer } from 'react'
import { products } from '../Products';
import CartProvider from './CartProvider';
import { reducer } from '../reducer';

export const cartContext = createContext()

const initialState = {
  item: products,
  totalAmount: 0,
  totalItem: 0,
}

const Cart = () => {

  const [state, dispatch] = useReducer(reducer, initialState)
  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      paylord: id,
    })
  }

  const clearAll = () =>{
return dispatch({
  type: "REMOVE_ALL"
})
  }
  const increase = (id)=>{
    return dispatch({
      type : "INCREASE",
      paylord : id
    })
  }
  const decrese = (id)=>{
    return dispatch({
      type : "DECRESE",
      paylord : id
    })
  }

  useEffect(()=>{
dispatch({type : "GET_TOTAL"})
  },[state.item])

  return (
    <>
      <cartContext.Provider value={{ ...state, removeItem, clearAll, increase, decrese  }}>
        <CartProvider />
      </cartContext.Provider>

    </>
  )
}

export default Cart