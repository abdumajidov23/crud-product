import React from 'react'
import { useSelector } from 'react-redux'

const Wishlist = () => {
   const wishlist = useSelector(s => s.wishlist.value)
   console.log(wishlist);
   
  return (
    <div>
        <h2>Wishlist</h2>
        {
            wishlist?.map((item)=>(
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.price}</p>
                    <hr />
                </div>
            ))
        }
    </div>
  )
}

export default Wishlist