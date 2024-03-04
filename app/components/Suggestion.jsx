import React from 'react';
import ExpertCard from './ExpertCard';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export default function SuggestionComponent({ experts }) {
    const settings = {
      dots: true, // If you want to show dot indicators at the bottom
      infinite: false, // If you want to cycle through the items
      speed: 500,
      slidesToShow: 3, // Number of slides to show at a time, you can adjust as needed
      slidesToScroll: 3, // Number of slides to scroll at a time, you can adjust as needed
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  
    return (
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Suggestions</h2>
        <Slider {...settings}>
          {experts.map((expert) => (
            <div key={expert.id}>
              <ExpertCard
                id={expert.id}
                name={expert.name}
                title={expert.title}
                school={expert.school}
                fields={expert.fields}
                focus_areas={expert.focus_areas}
                image_src={expert.image_src}
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
