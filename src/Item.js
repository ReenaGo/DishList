import React from 'react';
import './Item.css';

export default function Item(props) {
    return (
        <div>
            <div className = "itemButtonContainer">
    <div className = "itemsDiv"><h5 className= "items">{props.number}. {props.dishName}</h5></div>
                <div className = "buttonDiv"><button className= "itemDelete" onClick = {props.delete}>X</button></div>
            </div>
            <p className= "ingredients">{props.ingName}</p>

        </div>
    )
}
