import React from 'react'
import { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({name, emoji, price,bgColor})=> {
           
  return (
    <div className='product-card' style={{backgroundColor: bgColor}}>
      <h1>{name}
      <span className='emoji'>{emoji}</span>
      </h1>
      <h4>Rs:{price}</h4>
    </div>
  )
}

export default ProductCard;
