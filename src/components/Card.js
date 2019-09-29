import React from 'react';


const Card = (props) => {
    var cards = props.gifs.map((element, index) => (<img className="gifCard" key={index} alt="" src={element.url} height={element.height} width={element.width} />));
    return(
        <div className="gifCard-container">
            {cards}
        </div>
    );
}

export default Card;