import React from 'react'
import { Carousel } from 'react-carousel-minimal';

import Header from '../../Components/Header'

import monte1 from '../../Assets/Images/monte1.jpg'
import monte2 from '../../Assets/Images/monte2.jpg'
import monte3 from '../../Assets/Images/monte3.jpg'
import monte4 from '../../Assets/Images/monte4.jpg'

import './style.css'

const Home = () => {

  const data = [
    {
      image: monte1,
    },
    {
      image: monte2,
    },
    {
      image: monte3,
    },
    {
      image: monte4,
    },
    // {
    //   image: monte1,
    // },
    // {
    //   image: monte1,
    // },
    // {
    //   image: monte1,
    // }
  ];

  return (
    <>
      <Header />
      <div className="carrousel">
        <Carousel
          data={data}
          time={3000}
          width="40rem"
          height="40rem"
          radius="2rem"
          captionPosition="bottom"
          automatic={true}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="2.5rem"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          thumbnails={true}
          thumbnailWidth="100rem"
          thumbnailHeight="100rem"
          style={{
            margin: "2rem auto",
            cursor: "pointer",
            width: "50rem"
          }}
        />
      </div>
    </>
  )
}

export default Home