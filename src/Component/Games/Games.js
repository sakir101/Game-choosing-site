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
                    <div className='about-me'>
                        <div className='about-div'>
                           <span className='about-span'>67</span>
                           <span>kg</span>
                           <br />
                           <span>Weight</span>
                        </div>
                        <div className='about-div'>
                            <span className='about-span'>5.11</span>
                            <br />
                            <span>Height</span>
                        </div>
                        <div className='about-div'>
                            <span className='about-span'>23</span>
                            <span>years</span>
                            <br />
                            <span>Age</span>
                        </div>
                    </div>
                    <div>
                        <h3>Add a Break</h3>
                        <div className='break'>
                            <p>10s</p>
                            <p>20s</p>
                            <p>30s</p>
                            <p>40s</p>
                            <p>50s</p>
                        </div>
                    </div>
                    <div>
                        <h3>Game Details</h3>
                        <div className='detail'>
                            <span className='time'>Play Time</span>
                            <span>0</span>
                            <span>seconds</span>
                        </div>
                        <div className='detail'>
                            <span className='time'>Break Time</span>
                            <span>0</span>
                            <span>seconds</span>
                        </div>
                    </div>
                    <div className='cmplt-div'>
                        <button className='btn-cmplt'>Game Completed</button>
                    </div>
            </div>
            
        </div>
    );
};

export default Games;