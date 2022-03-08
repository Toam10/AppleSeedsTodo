import React from "react";
import './PageDesign.css';
import '../../../../../Style/Colors.css';
import '../../../../../Style/FontSize.css'
import CardList from "./CardList/CardList";

function PageDesign() {
    return (
        <div className="welcomePage__container">
            <div className="welcomePage__pageBody">
                <div>
                    <h2>Projects</h2>
                </div>
                <div className="welcomePage__cards">
                    <CardList />
                </div>
            </div>
        </div>
    );
};

export default PageDesign;