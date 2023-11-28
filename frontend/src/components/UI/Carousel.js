import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const data = [
  {
    id: 1,
    name: 'John Doe',
    photo: 'https://example.com/photo1.jpg',
    github: 'https://github.com/johndoe',
    linkedin: 'https://www.linkedin.com/in/johndoe/',
  },
  {
    id: 2,
    name: 'Jane Smith',
    photo: 'https://example.com/photo2.jpg',
    github: 'https://github.com/janesmith',
    linkedin: 'https://www.linkedin.com/in/janesmith/',
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
      <h2>Developer Carousel</h2>
      <Slider {...settings}>
        {data.map((developer) => (
          <div key={developer.id} className="card">
            <img src={developer.photo} alt={developer.name} className="card-photo" />
            <div className="card-body">
              <h3>{developer.name}</h3>
              <p>
                GitHub: <a href={developer.github}>{developer.github}</a>
              </p>
              <p>
                LinkedIn: <a href={developer.linkedin}>{developer.linkedin}</a>
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
