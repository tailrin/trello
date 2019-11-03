import React from 'react';
import './List.css';
import Card from './Card.js'

export default function List(props){
    if(Object.entries(props).length === 0){
        props = {
            header: 'This was left blank',
            cards: []
        }
    }

    const cards = props.cards.map(card =>{
       return <Card title={card.title} key={card.id} content={card.content}/>
    });
    return (
        <section className="List">
            <header className="List-header">
                    {props.header}
            </header>
            <div className="List-cards">
                {cards}
            </div>
            <button type="button" className="List-add-button">
              + Add Random Card
            </button>
        </section>
    )
}


