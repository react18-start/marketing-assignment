/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './Card.css';
import Image from 'next/image';

const Card = ({image,btnLink,btnTitle,heading,description}) => {
  console.log(image)
  return (
    <div className='card'>
      <Image src={image}/>
      <button >{btnTitle}</button>
      <h6>{heading}</h6>
      <div className='pgh'>{description}</div>
    </div>
  )
}

export default Card
