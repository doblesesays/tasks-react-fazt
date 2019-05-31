import React from "react";

function Navigation(props) {
    return (
        <nav className='navbar navbar-dark bg-dark'>
            <a href={ props.href } className='text-white'>
                { props.title }
                <span className="badge bagde-pill badge-light ml-2">
                    { props.length }
                </span>
            </a>
        </nav>
    )
}

export default Navigation;