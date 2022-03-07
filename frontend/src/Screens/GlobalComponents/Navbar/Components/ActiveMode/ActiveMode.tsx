import React from "react";
import './ActiveMode.css';

function ActiveMode() {
    return (
        <div className="Navbar__activemode">
            <h2 className='activemode__item'>Project &nbsp;&#9654;</h2>
            <h2 className='activemode__item'>Board</h2>
            <h2 className='activemode__item'>Backlog</h2>
        </div>
    );
};

export default ActiveMode;