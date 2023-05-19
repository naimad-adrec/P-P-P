import React, { useState } from "react";
import './header.css';
import {Link} from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="header">
        <span className="head-logo">PennyPincher Pro</span>
        <div className={`head-items ${isOpen && "open"}`}>
            <Link to="/overview">Overview</Link>
            <Link to="/income">Income</Link>
        </div>
        <div
            className={`head-toggle ${isOpen && "open"}`}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="bar"></div>
        </div>
        </div>
    );
}

export default Header;