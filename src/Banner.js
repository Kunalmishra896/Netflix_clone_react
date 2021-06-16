import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./Banner.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        "discover/tv?api_key=416bbaa900060963d9768a7bc93ced9d&with_networks=213"
      );
      setMovie(
        request.data.results[
          Math.floor(Math.random() * (request.data.results.length - 1) + 1)
        ]
      );

      return request;
    }
    fetchData();
  }, []);

  function truncateString(str, num) {
    return str?.length > num ? str.substr(0, num - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${base_url}${movie.backdrop_path})`,
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">{movie.name}</h1>

        <div>
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>

        <h1 className="banner_description">
          {truncateString(movie?.overview, 150)}
        </h1>
      </div>
    </header>
  );
}

export default Banner;
