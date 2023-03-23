import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import monte1 from '../../Assets/Images/monte1.jpg'

import './style.css'

const Landing = () => {

    const [loading, setLoading] = useState(false)

    setTimeout(() => {
        setLoading(true)
    }, 500);

    return (
        <div className="container-landing">
            {loading &&
                <>
                <h3 style={{display: "flex", justifyContent: "center", padding: "1rem", margin: "1rem"}}>Click para ingresar</h3>
                    <Link to="/home">
                        <img src={monte1} className="img" alt="NO" />
                    </Link>
                </>
            }
        </div>
    )
}

export default Landing