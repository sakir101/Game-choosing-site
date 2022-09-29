import React from 'react';

const LocalDb = (value) => {
    console.log(value)
    localStorage.setItem("Break-Time", JSON.stringify(value))
};

const getStoredValue = () =>{
    let time = localStorage.getItem('Break-time');
    time = JSON.parse(time);
    return time;
}

export { LocalDb, getStoredValue };