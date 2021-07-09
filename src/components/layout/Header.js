import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1 style={headerText}>Make-A-Habit</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">Info</Link>
        </header>
    )
}

const headerStyle = {
    background: '#cdeee7',
    textAlign: 'center',
    padding: '10px',
    border: 'none',
    borderRadius: '15px',
    margin: '0px 0px 10px 0px'
}

const headerText = {
    color: '#3c2774',
    letterSpacing: '2px',
    fontFamily: '"Dancing Script", "Questrial", helvetica, arial, sans-serif',
}

const linkStyle = {
    color: '#56c6ac',
    textDecoration: 'none'
}

export default Header;