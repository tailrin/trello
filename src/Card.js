import React from 'react';
import './Card.css';

class Card extends React.Component{
    static defaultProps = {
        title: 'this was left blank',
        content: 'this was left blank'
    }

    handleDelete = () => {
        this.props.handler(this.props.id, this.props.listId);
    }

    render(){
        return(
            <div className="Card">
                <button type="button" onClick={this.handleDelete}>delete</button>
                <h3>{this.props.title}</h3>
                <p>{this.props.content}</p>
            </div>
        );
    }
}

export default Card;