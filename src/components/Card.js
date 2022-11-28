import React from "react";

export default function Card({ name, image, link, handleClick }) {
  return (
    <div className='card' onClick={handleClick}>
      <img src={image} alt={name} />
      <a href={link} target='__blank'>{name}</a>
    </div>
  )
}
