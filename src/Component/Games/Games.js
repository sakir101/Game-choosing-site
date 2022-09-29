import React, { useEffect, useState } from 'react';
import Game from '../Game/Game';
import logo from '../../real.png'
import './Games.css'
const Games = () => {
    const [games, setGames] = useState([]);
    useEffect(() => {
        fetch('game.json')
            .then(res => res.json())
            .then(data => setGames(data))
    }, [])
    return (
        <div className='div-container'>
            <div >
                <div className='img-container'>
                    <img src={logo} alt=""  className='img-des'/>
                    <h3>Games-World</h3>
                </div>
                <h2>Select your favourite game</h2>
                <div className='card-container'>
                    {
                        games.map(game => <Game game={game} key={game.id}></Game>)
                    }
                </div>
            </div>

            <div>

            </div>
        </div>
    );
};

export default Games;