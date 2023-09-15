import React, { useEffect, useState } from "react";

import IMDB from "../images/tmdb.png";
import Tomatoe from "../images/tomato.png";
import { Card } from "./single-movie/Card";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import chevron from "../images/Chevron.png";
// import Rating from "../images/Rating.png";

function Movie() {
  const [users, setUsers] = useState([]);
  const url =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=f589979ba8bd1a5c0c8ee3654af3bd4a&language=en-US&page=1";
  const oldUrl =
    "https://api.themoviedb.org/3/discover/movie?api_key=f589979ba8bd1a5c0c8ee3654af3bd4a";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data.results));
  }, []);

  // console.log(users);

  return (
    <React.Fragment>
      <div className="header">
        <Nav />
        <div className="title">
          <h1>John Wick 3:</h1>
          <h2>Parabellum</h2>
          <div className="rating">
            <div className="Imdb">
              <img src={IMDB}></img>
              <h3 className="rate">86.100/100</h3>
            </div>
            <div className="tomatoes">
              <img src={Tomatoe}></img>
              <h3 className="rate">97%</h3>
            </div>
          </div>
          <p className="description">
            John Wick is on the run after killing a member of the international
            assassins' guild, and with a $14 million price tag on his head, he
            is the target of hit men and women everywhere.
          </p>
          <button>Watch Trailer</button>
        </div>
      </div>
      <div className="hero">
        <div className="featured">
          <h1>Featured Movies </h1>
          <Link to="see-more">
            <div className="top">
              <p>See more </p>
              <img src={chevron} />
            </div>
          </Link>
        </div>

        <div className="movieList">
          {users.slice(0, 9).map((item, i) => (
            <Link to={`/details/${item.id}`} key={item.id}>
              <Card
                imgSrc={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                title={item.title}
                release_date={item.release_date}
                vote_average={item.vote_average}
                vote_count={item.vote_count}
              />
            </Link>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Movie;
