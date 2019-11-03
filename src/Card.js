import React from 'react';
import './Card.css';

export default function Card(props){
    if(Object.entries(props).length === 0){
        props = {
            title: 'this was left blank',
            content: 'this was left blank'
        }
    }

    return(
        <div className="Card">
            <button type="button">delete</button>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    );
}