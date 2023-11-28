import React from 'react';
import Slider from 'react-slick';

import LinkedIn from "../Icons/LinkedIn"

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Github from '../Icons/Github';



const data = [
  {
    id: 1,
    name: 'Shazeb Khan',
    photo: './images/shazeb.jpg',
    github: 'https://github.com/shazebK',
    linkedin: 'https://www.linkedin.com/in/shazeb-khan-52a806229/',
  },
  {
    id: 2,
    name: 'Abhinay Kumar',
    photo: './images/abhinay.jpeg',
    github: 'https://github.com/devabhinay789',
    linkedin: 'https://www.linkedin.com/in/sagar-kumar-239a31237',
  },
  {
    id: 3,
    name: 'Sagar Kumar',
    photo: './images/sagar.jpeg',
    github: 'https://github.com/sagarkumar2001',
    linkedin: 'https://www.linkedin.com/in/sagar-kumar-239a31237',
  },
  {
    id: 4,
    name: 'Aman Kumar',
    photo: './images/aman.jpeg',
    github: 'https://github.com/aman-202',
    linkedin: 'https://www.linkedin.com/in/aman-kumar-72897a27b/',
  },
  // Add more data as needed
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {data.map((developer) => (
          <div className='flex justify-center items-center'>
          <div key={developer.id} className="card flex flex-col items-center">
            <div>
            <img src={developer.photo} alt={developer.name} className="card-photo w-60"/>
            </div>
            <div className="card-body flex flex-col">
              <h3>{developer.name}</h3>
              <div className='flex'>
              <a href={developer.github}><Github/></a>
              <a href={developer.linkedin}><LinkedIn/></a>
              </div>
            </div>
          </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
