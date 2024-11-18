import React, { useState } from 'react'

export const Product = ({post}) => {
    const [selected,setSelected]=useState(false);
  return (
    <div>
        <div>
<p>{post.title}</p>
        </div>
        <div>
            <p>{post.description}</p>
        </div>
        <div>
           <img src={`${post.image}`} />
        </div>
        <div>
            <p>{post.price}</p>
        </div>
        <button>{
             selected ? <p>Remove Item</p> : <p>Add item</p>
            }
           
        </button>
    </div>
  )
}
