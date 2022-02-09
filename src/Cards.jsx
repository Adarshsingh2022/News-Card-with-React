import React from 'react';


function Card(props) {
    return (
      <>
      
        <div className='cards'>
          <div className='card'>
            <img 
            src= {props.imgSrc}
            alt='pic'
            className='card__image'
            />
            <div className='card__info'>
              <h3 className='card__title'>{props.title}</h3>
              <p className='card__content'>{props.content}</p>
            </div>
          </div>
        </div>
  
      </>
    );
  }

  export default Card;