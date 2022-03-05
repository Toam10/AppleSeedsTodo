import React from "react";
import './Dropdown.css';
import '../../../../../Style/FontSize.css'

function Dropdown() {
    return (
        <div>
            <nav className="dropdown__menu">
                <ul className="dropdown__list">
                    <li className="dropdown__navbar">Select Project &nbsp;&#9660;</li>
                    <li className="dropdown__list_item">Project 1</li>
                    <li className="dropdown__list_item">Project 2</li>
                    <li className="dropdown__list_item">Project 3</li>
                    <li className="dropdown__list_item">Project 4</li>
                </ul>
            </nav>
        </div>
    );
};

export default Dropdown;