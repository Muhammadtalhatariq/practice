import React, { useContext } from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { cartContext } from './Cart/Cart';
const Items = ({ id, title, description, quantity, price, img  }) => {

    const { removeItem, increase, decrese } = useContext(cartContext)

    return (
        <>
            <div className='bg-slate-50 shadow-md  mx-10 mt-4' key={id}>
                <div className='flex justify-between items-center mx-4'>
                    <div className=' rounded-md'><img className='size-24' src={img} alt="" /></div>
                    <div>
                        <h3 className='text-xl font-bold'>{title}</h3>
                        <p className='text-sm'>{description}</p>
                    </div>
                    <div>
                        <div className='flex gap-2'>
                            <FaMinus onClick={()=> decrese(id)} />
                            <input type="text" className='size-4 shadow-lg bg-slate-100' placeholder={quantity} disabled />
                            <FaPlus  onClick={()=> increase(id)}/>
                        </div>
                    </div>
                    <div>
                        <p className='font-bold'>{price}</p>
                    </div>
                    <div>
                        <MdDelete  
                        onClick={()=> removeItem(id)}
                        className='text-red-500' />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Items