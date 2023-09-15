import { useEffect, useState } from "react";
import { Card } from "./single-movie/Card";
import { Link } from "react-router-dom";
import Nav from "./Nav";

function FullMovie() {
  const [users, setUsers] = useState([]);
  const oldUrl =
    "https://api.themoviedb.org/3/discover/movie?api_key=f589979ba8bd1a5c0c8ee3654af3bd4a";

  useEffect(() => {
    fetch(oldUrl)
      .then((res) => res.json())
      .then((data) => setUsers(data.results));
  }, []);
  return (
    <>
      <Nav />
      <div className="hero">
        <div className="featured">
          <h1>Featured Movies </h1>
          <Link to="/">
            <p>Back </p>
          </Link>
        </div>
        <div className="movieList">
          {users.map((item, i) => (
            <Card
              key={i}
              imgSrc={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              title={item.title}
              release_date={item.release_date}
              vote_average={item.vote_average}
              vote_count={item.vote_count}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default FullMovie;
