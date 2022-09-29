import React from 'react';
import './Game.css'

const Game = (props) => {
    const {name, img, time, age, desc, id} = props.game
    return (
        <div className='card'>
          <img src={img} alt="" className='img-handle' />
          <h4>{name}</h4>
          <p>{desc}</p>
          <strong>Age: {age}</strong>
          <br />
          <strong>Time: {time}</strong>
          <br />
          <button>Add to cart</button>
        </div>
    );
};

export default Game;