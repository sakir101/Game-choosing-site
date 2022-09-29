import React, { useEffect, useState } from 'react';
import Game from '../Game/Game';
import logo from '../../real.png'
import myself from '../../Sakir.jpg'
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

            <div className='intro-container'>
                    <div className='intro'>
                        <div><img src={myself} alt="" className='myself-img'/></div>
                        <div>
                            <span>Sakir Hossain Faruque</span>
                            <br />
                            <span>Dhaka, Bangladesh</span>
                        </div>
                    </div>
                    <div>
                        <div>
                           <h4>67</h4>
                           <span>kg</span>
                           <br />
                           <span>Weight</span>
                        </div>
                        <div>
                            <h4>5.11</h4>
                            <br />
                            <span>Height</span>
                        </div>
                        <div>
                            <h4>23</h4>
                            <span>years</span>
                            <br />
                            <span>Age</span>
                        </div>
                    </div>
            </div>

        </div>
    );
};

export default Games;