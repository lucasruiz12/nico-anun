import React from 'react';
import { Link } from 'react-router-dom';

import './style.css'

const Header = () => {
    return (
        <header>
            <div className="nav-bar">
                <ul className="nav-items">
                    <Link to="/1" className="link-to">
                        <li className="item">
                            Jujuycito de mi Alma
                        </li>
                    </Link>
                    <Link to="/2" className="link-to">
                        <li className="item">
                            Por el mundo
                        </li>
                    </Link>
                    <Link to="/3" className="link-to">
                        <li className="item">
                            Tienda
                        </li>
                    </Link>
                    <Link to="/4" className="link-to">
                        <li className="item">
                            Contacto
                        </li>
                    </Link>
                </ul>
            </div>
        </header>
    )
}

export default Header;