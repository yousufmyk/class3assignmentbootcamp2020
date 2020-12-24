import React from "react";
import "./App.css";

function ToDaysSerivng (props) {
    return(
        <div className="ser">
            <h1>Today we are serving  {props.dishName}</h1>
            <h2 className= "ser1">Today in drinks we have  {props.drinkName}</h2>
        </div>
        
    )
}

export default ToDaysSerivng;