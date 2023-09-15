import logo from "../images/tv_pic.png";
import star from "../images/star.png";
import Award from "../images/award-movie.png";
import home from "../images/Home.png";
import moviep from "../images/Movie-p.png";
import Tv from "../images/TV.png";
import calender from "../images/Calendar.png";
import logout from "../images/Logout.png";
import Loading from "./loading";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const Details = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { movieId } = useParams();

  const [users, setUsers] = useState([]);
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=f589979ba8bd1a5c0c8ee3654af3bd4a&language=en-US&page=1`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  console.log(users);

  return (
    <div className="movieBox">
      <div className="Navigation">
        <div className="lo-go">
          <Link to="/">
            <img src={logo} className="logoImg" />
          </Link>
          <h1 className="logoTxt">MovieBox</h1>
        </div>
        <div className="nav-link">
          <img src={home} className="link-img" />
          <h2>Home</h2>
        </div>
        <div className="nav-link">
          <img src={moviep} className="link-img" />
          <h2>Movie</h2>
        </div>
        <div className="nav-link">
          <img src={Tv} className="link-img" />
          <h2>TV Series</h2>
        </div>
        <div className="nav-link">
          <img src={calender} className="link-img" />
          <h2>Upcoming</h2>
        </div>

        <div className="play">
          <h3>Play movie quizes and earn free tickets</h3>
          <p>50k people are playing now</p>
          <h4 className="playing">Start Playing</h4>
        </div>
        <div className="nav-link">
          <img src={logout} className="link-img" />
          <h2>Log Out</h2>
        </div>
      </div>

      <div className="top-details">
        <div>
          {isLoading ? (
            <Loading />
          ) : (
            <img
              src={`https://image.tmdb.org/t/p/w500/${users.poster_path}`}
              className="display-image"
            ></img>
          )}
        </div>
        <div className="content">
          <div>
            <div className="details-txt">
              <p>{`${users.title} • ${
                users.release_date
              }  • PG-13  • ${Math.round(users.runtime / 60)}hrs : ${Math.round(
                users.runtime % 60
              )}mins `}</p>
              <div className="genRe">
                <h3>Action</h3>
                <h3>Drama</h3>
              </div>
            </div>

            <p>{users.overview}</p>
            <div className="Actor">
              <h3>Writers :</h3>
              <p> Jim Cash, Jack Epps Jr, Peter Craig</p>
            </div>
            <div className="Actor">
              <h3>Stars :</h3>
              <p>Tom Cruise, Jennifer Connelly, Miles Teller</p>
            </div>
            <div className="Actor">
              <h3>Director :</h3>
              <p>Joseph Kosinski</p>
            </div>
            <div className="award">
              <button>Top rated movie #65</button>
              <h4>Awards 9 nominations</h4>
            </div>
          </div>
          <div className="starAward">
            <img src={star} className="starImg" />
            <img src={Award} className="starA" />
          </div>
        </div>
      </div>
    </div>
  );
};
