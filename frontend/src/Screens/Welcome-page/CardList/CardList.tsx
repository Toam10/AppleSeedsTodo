import React from "react";
import { Link } from "react-router-dom";
import './CardList.css';
import ProjectCard from "./ProjectCard/ProjectCard";

function CardList() {
    return (
        <div className="CardsList">
            <Link to="/Project1"><ProjectCard /></Link>  
            <Link to="/Project2"><ProjectCard /></Link>  
            <Link to="/Project3"><ProjectCard /></Link>  
            <Link to="/Project4"><ProjectCard /></Link>  
            <Link to="/Project5"><ProjectCard /></Link>  
        </div>
    );
};

export default CardList;