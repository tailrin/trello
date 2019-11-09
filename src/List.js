import React from 'react';
import './List.css';
import Card from './Card.js'

class List extends React.Component{

    static defaultProps = {
        header: 'This was left blank',
        cards: []
    }

    removeItem(cardId, listId){
        const localCards = this.state.cards.slice(0);
        const index = localCards.findIndex(card => {return card.props.id === cardId});
        localCards.splice(index, 1);
        this.props.handler(cardId, listId);
        this.setState({cards: localCards});
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
                <button type="button" className="List-add-button">
                + Add Random Card
                </button>
            </section>
        )
    }
}

export default List;