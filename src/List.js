import React from 'react';
import './List.css';
import Card from './Card.js'

export default function List(props){
    const cards = props.cards.map(card =>{
        <Card title={card.title} key={card.id} content={card.content}/>
    });
    return (
        <section className="List">
            <header className="List-header">
                    {props.header}
            </header>
            <div className="List-cards">
                {cards}
            </div>
        </section>
    )
}


//{ id: 'a', title: 'First card', content: 'lorem ipsum' }