import React from 'react'
import Header from '../../Components/Header'

import monte1 from '../../Assets/Images/monte1.jpg'
import monte2 from '../../Assets/Images/monte2.jpg'
import monte3 from '../../Assets/Images/monte3.jpg'
import monte4 from '../../Assets/Images/monte4.jpg'

import './style.css'

const Home = () => {

  
  return (
    <>
      <Header />
      <div className="carrousel">
        <img src={monte1} className="img" alt="NO " />
        <img src={monte2} className="img" alt="NO " />
        <img src={monte3} className="img" alt="NO " />
        <img src={monte4} className="img" alt="NO " />
      </div>
    </>
  )
}

export default Home