import React from 'react'
import { Link } from 'react-router-dom'


function Navbar(){
    return (
        <div>
            <nav class="navbar">
                <Link class="logo" to="/" data-discover="true">
                    <h2>🎬 Movie Explorer</h2>
                </Link>
                <Link>Home</Link>
            </nav>
        </div>
    )
}

export default Navbar;