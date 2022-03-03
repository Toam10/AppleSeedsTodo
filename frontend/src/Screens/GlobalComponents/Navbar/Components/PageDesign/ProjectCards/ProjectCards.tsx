import React from "react";
import './ProjectCards.css';


function ProjectCards() {
    return (
        <div className="Cards__container">
            <ul className="Cards__Card">
                <li>Project</li>
                <li><strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. et dolore magna aliqua.</li>
                <li><strong>Goal:</strong> Lorem ipsum dolor sit.</li>
            </ul>
        </div>
    );
};

export default ProjectCards;