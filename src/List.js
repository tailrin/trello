import React from 'react';
import './List.css';
import Card from './Card.js'

export default function List(props){
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
            <button type="button" class="List-add-button">
              + Add Random Card
            </button>
        </section>
    )
}


