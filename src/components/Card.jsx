import React from 'react'
import './styles/Card.css'

const Card = ({content}) => {

    const handleClick = () => {
        window.location.href = content.url;
    };

  return (
    <div className='Card'>
        <img
        src= {content.img}
        alt=''
        />
        <div className='body'>
            <h2 className=''>{content.title}</h2>
            <p className=''>{content.description}</p>
        </div>
        <button onClick={handleClick} className=''>View website</button>
    </div>
  )
}

export default Card