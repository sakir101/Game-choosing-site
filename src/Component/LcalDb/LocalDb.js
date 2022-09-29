import React from 'react';

const LocalDb = (value) => {
    
    localStorage.setItem("Break-Time", JSON.stringify(value))
};

const getStoredValue = () =>{
    let time = localStorage.getItem("Break-Time");
    time = JSON.parse(time)
    console.log(time)
    return time;
}

export { LocalDb, getStoredValue };