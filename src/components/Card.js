import React from "react";

export default function Card({ name, image, link }) {
  return (
    <div className='card'>
      <img src={image} alt={name} />
      <a href={link} target='__blank'>{name}</a>
    </div>
  )
}
