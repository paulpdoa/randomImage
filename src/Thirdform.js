import React from 'react';
import './index.css';

const fname = "Paul";
const lname = "Andres"
const getYear= new Date().getFullYear();
const getDate= new Date().getDate();
const getMonth= new Date().getMonth() + 1;

const Thirdform = () =>{
    return(
        <div className="sectionTwo">
            <h1 className="title">First Picture Randomizer</h1>
            <h1>Created by {fname} {lname}</h1>
            <h1>Date today is {getDate+"/"} {getMonth+"/"} {getYear}</h1>
        </div>
    );
}
export default Thirdform;