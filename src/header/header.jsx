import React, { useContext } from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { cartContext } from '../Cart/Cart';
const header = () => {
  const {totalItem}  = useContext(cartContext)
    return (
        <>
            <div className='flex justify-center items-center '>
                <div className='bg-neutral-100 flex justify-between items-center sm:mx-20 w-[80%] p-2 mt-4 rounded-xl shadow-md'>
                    <div className='flex justify-center items-center gap-2'>
                        <FaArrowLeft /> <p>Shopping Carts</p>
                    </div>
                    <div className='relative'>
                        <FaCartShopping size={25} />
                        <div className='absolute bg-slate-400 size-5 rounded-full -top-2 -right-2'>
                            <p className='text-white text-center'>{totalItem}</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default header