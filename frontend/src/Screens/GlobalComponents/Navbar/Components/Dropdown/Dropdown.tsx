import React from "react";
import './Dropdown.css';
import '../../../../../Style/FontSize.css'

function Dropdown() {
    return (
        <div>
            <div className="dropdown__menu">
                <ul className="dropdown__list">
                    <li className="dropdown__list__item">Project 1</li>
                    <li className="dropdown__list__item">Project 2</li>
                    <li className="dropdown__list__item">Project 3</li>
                    <li className="dropdown__list__item">Project 4</li>
                </ul>
            </div>
        </div>
    );
};

export default Dropdown;