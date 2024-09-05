import React, { useContext } from 'react'
import Header from '../header/header'
import { Scrollbars } from 'react-custom-scrollbars-2';
import { cartContext } from './Cart';
import Items from '../Items';
const CartProvider = () => {

const {item, clearAll , totalItem, totalAmount} = useContext(cartContext)

    {
        if (item.length === 0) {
            return (
                <>
                    <Header />
                    <div className='ml-36 pt-4'>
                        <h1 className='text-2xl font-bold'>Shopping Carts</h1>
                        <p>you have 0 items in shopping carts</p>
                    </div>
                    <div className='flex justify-center items-center mt-9'>
                        <div className='bg-neutral-100 w-[80%] h-96 shadow-md '>
                            <Scrollbars>
                                <div className='relative'>
                                <h1 className='font-bold absolute top-56 left-[30rem] text-2xl'>Empty cart</h1>
                                </div>
                              
                            </Scrollbars>
                        </div>

                    </div>

                </>
            )
        } else {
            return (
                <>

                    <Header />
                    <div className='ml-36 pt-4'>
                        <h1 className='text-2xl font-bold'>Shopping Carts</h1>
                        <p>you have {totalItem} items in shopping carts</p>
                    </div>
                    <div className='flex justify-center items-center mt-9'>
                        <div className='bg-neutral-100 w-[80%] h-80 shadow-md'>
                            <Scrollbars>
                                {item.map((crntelm) => (
                                    <Items key={crntelm.id} {...crntelm} />

                                ))}
                            </Scrollbars>
                            <div className='mt-6 float-end '>
                                <p className='text-xl pb-3'>Cost Cotol : <span className='font-bold'>{totalAmount} pkr</span></p>
                                <button onClick={()=> clearAll() } className='bg-green-600 w-32 p-2 float-end rounded-md'>Clear All</button>
                            </div>
                        </div>


                    </div>

                </>
            )
        }
    }

}


export default CartProvider