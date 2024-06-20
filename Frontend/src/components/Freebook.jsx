import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Cards from "./Cards";

function Freebook() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        const data = res.data.filter((book) => book.category === "Free");
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    getBooks();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10">
      <div className="mb-8">
        <h1 className="font-bold text-2xl md:text-4xl pb-4">Free Books</h1>
        <p className="text-md md:text-lg">
          Explore our collection of free books. Enhance your knowledge with a variety of genres and topics, all available for free.
        </p>
      </div>
      <Slider {...settings}>
        {books.map((book) => (
          <div key={book.id}>
            <Cards item={book} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default Freebook;
