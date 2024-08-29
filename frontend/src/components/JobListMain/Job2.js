import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiDoubleQuotesR } from "react-icons/ri";

// Sample testimonials data
const testimonials = [
  {
    title: "Awesome Design",
    description: "Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything! Can’t quite… The Mitech team works really hard to ensure high level of quality",
    image: "https://apusthemes.com/wp-demo/superio/wp-content/uploads/2021/03/t4.jpg",
    name: "Ronald Richards",
    job: "Designer"
  },
  {
    title: "Awesome Design",
    description: "Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything! Can’t quite… The Mitech team works really hard to ensure high level of quality",
    image: "https://apusthemes.com/wp-demo/superio/wp-content/uploads/2021/03/t3.jpg",
    name: "Ashley Jenkins",
    job: "Designer"
  },
  {
    title: "Perfect Design",
    description: "Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything! Can’t quite… The Mitech team works really hard to ensure high level of quality",
    image: "https://apusthemes.com/wp-demo/superio/wp-content/uploads/2021/03/t2.jpg",
    name: "Nicole Wells",
    job: "Web Developer"
  },
  {
    title: "Good Jobs",
    description: "Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything! Can’t quite… The Mitech team works really hard to ensure high level of quality",
    image: "https://apusthemes.com/wp-demo/superio/wp-content/uploads/2021/03/t1.jpg",
    name: "Brooklyn Simmons",
    job: "Consultant"
  }
];

// Slider settings
const settings = {
  centerMode: true,
  centerPadding: "0px",
  slidesToShow: 3,
  infinite: true,
  focusOnSelect: true,
  dots: true,
  speed: 1500,
  slidesToScroll: 1,
  arrows: false,
  appendDots: dots => (
    <ul className="slick-dots flex justify-center mt-4 space-x-2">
      {dots.map((dot, index) => (
        <li key={index} role="presentation">
          <button
            type="button"
            aria-label={`Slide ${index + 1}`}
            onClick={() => {
              dot.props.onClick && dot.props.onClick();
            }}
            className={`w-2.5 h-2.5 rounded-full ${dot.props.className} ${index === 1 ? 'bg-black scale-150' : 'bg-gray-400'}`}
          />
        </li>
      ))}
    </ul>
  ),
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3, centerPadding: "40px" }
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2, centerPadding: "20px" }
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1, centerPadding: "10px" }
    }
  ]
};

const TestimonialSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-center text-2xl font-bold mb-4">Testimonials From Our Customers</h2>
        <p className="text-center mb-8">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor</p>
        <Slider
          {...settings}
          beforeChange={(oldIndex, newIndex) => setActiveSlide(newIndex)}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`relative p-4 ${index === activeSlide ? "opacity-100" : "opacity-50"} transition-opacity duration-500`}
            >
              <div className="bg-white p-6 rounded-lg shadow-md relative">
                <RiDoubleQuotesR className="absolute top-2 right-2 text-gray-300 text-3xl" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{testimonial.title}</h3>
                <p className="text-gray-700 line-clamp-3">{testimonial.description}</p>
                <div className="flex items-center mt-4">
                  <img className="w-16 h-16 rounded-full mr-4" src={testimonial.image} alt={testimonial.name} />
                  <div>
                    <h3 className="text-sm font-bold text-gray-800">{testimonial.name}</h3>
                    <p className="text-xs text-gray-600">{testimonial.job}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSlider;