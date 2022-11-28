import React from "react";

export default function Card({ name, image, link, clicked, handleClick }) {
  return (
    <div className='card' onClick={() => handleClick(clicked, name)}>
      <img src={image} alt={name} />
      <a href={link} target='__blank'>{name}</a>
    </div>
  )
}
