import React from 'react';

export default function DotsCard() {
  return (
    <>
    <div className='card'>
        <div className='card__img'>
            <img src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png" />
            <div className='card__grideffect'>
                {Array.from ({ length: 100}, (_, index) => (
                    <a key={index} className='card__grid-effect-tile' href="#"></a>
                ))}

            </div>
        </div>

    </div>
    
    </>
  )
}
