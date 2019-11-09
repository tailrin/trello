import React from 'react';
import './List.css';
import Card from './Card.js'

class List extends React.Component{

    static defaultProps = {
        header: 'This was left blank',
        cards: []
    }    
    
    addNewRandomCard = () => {
        this.props.addNewRandomCard(this.props.id);
    }

    render(){
        this.cards = this.props.cards.map((card) =>{
            return <Card title={card.title} key={card.id} id={card.id} listId={this.props.id} content={card.content} handler={this.props.handler.bind(this)}/>
         })
        return (
            <section className="List">
                <header className="List-header">
                        {this.props.header}
                </header>
                <div className="List-cards">
                    {this.cards}
                </div>
                <button type="button" className="List-add-button" onClick={this.addNewRandomCard}>
                + Add Random Card
                </button>
            </section>
        )
    }
}

export default List;