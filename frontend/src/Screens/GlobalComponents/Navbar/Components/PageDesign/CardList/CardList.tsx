import React from "react";
import './CardList.css';


function CardList() {
    return (
        <div className="CardsList__container">
            <ul className="Cards__Card">
                <li>Project</li>
                <li><strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. et dolore magna aliqua.</li>
                <li><strong>Goal:</strong> Lorem ipsum dolor sit.</li>
            </ul>
        </div>
    );
};

export default CardList;