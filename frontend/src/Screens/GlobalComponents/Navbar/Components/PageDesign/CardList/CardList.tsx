import React from "react";
import './CardList.css';
import ProjectCard from "./ProjectCard/ProjectCard";

function CardList() {
    return (
        <div className="CardsList">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    );
};

export default CardList;