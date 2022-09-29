import React, { useEffect, useState } from 'react';
import Game from '../Game/Game';
import logo from '../../real.png'
import myself from '../../Sakir.jpg'
import './Games.css'
import { LocalDb, getStoredValue } from '../LcalDb/LocalDb'

let total = 0;
const Games = () => {
    const [games, setGames] = useState([]);
    const [totals, setTotal] = useState([]);
    const [breaks, setBreak] = useState([]);

    useEffect(() => {
        fetch('game.json')
            .then(res => res.json())
            .then(data => setGames(data))
    }, [])

    useEffect(() => {
        let time = getStoredValue();
        let times = [];
        times.push(time)
        console.log(time)
        setBreak(times);
    }, [breaks])

    const addToCart = (game) => {
        const timeTaken = parseInt(game.time)
        total = total + timeTaken;
        setTotal(total)

    }

    const breakTime = (value) => {
        LocalDb(value);
        setBreak(value);


    }

    const showToast = () => {
        alert('You are Done!!! Congratulations')
    }

    return (
        <div>
            <div className='div-container'>
                <div className='cart_container1'>
                    <div className='img-container'>
                        <img src={logo} alt="" className='img-des' />
                        <h3>Games-World</h3>
                    </div>
                    <h2>Select your favourite game</h2>
                    <div className='card-container'>
                        {
                            games.map(game => <Game game={game} key={game.id} handleCart={addToCart}></Game>)
                        }
                    </div>
                </div>

                <div className='intro-container'>
                    <div className='intro'>
                        <div><img src={myself} alt="" className='myself-img' /></div>
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
                            <p onClick={() => breakTime(10)}>10s</p>
                            <p onClick={() => breakTime(20)}>20s</p>
                            <p onClick={() => breakTime(30)}>30s</p>
                            <p onClick={() => breakTime(40)}>40s</p>
                            <p onClick={() => breakTime(50)}>50s</p>
                        </div>
                    </div>
                    <div>
                        <h3>Game Details</h3>
                        <div className='detail'>
                            <span className='time'>Play Time</span>
                            <span>{totals}</span>
                            <span>Minutes</span>
                        </div>
                        <div className='detail'>
                            <span className='time'>Break Time</span>
                            <span>{breaks}</span>
                            <span>seconds</span>
                        </div>
                    </div>
                    <div className='cmplt-div' onClick={showToast}>
                        <button className='btn-cmplt'>Game Completed</button>
                    </div>
                </div>
            </div>
            <div className='question-container'>
                <h4>How does React works?</h4>
                <p><strong>ReactJS divides</strong> the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
                <br />
                <h4>Difference between prop and state.</h4>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</p>
                <br />
                <h4>Different use of useEffect.</h4>
                <p>The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. For example, tasks like updating the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can be lead to unwarranted side-effects.</p>
            </div>

        </div>
    );
};

export default Games;