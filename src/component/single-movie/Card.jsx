import IMDB from "../../images/tmdb.png";
import Tomatoe from "../../images/tomato.png";
import { HeartOutlined } from "@ant-design/icons";

export const Card = ({
  imgSrc,
  title,
  release_date,
  vote_average,
  vote_count,
}) => {
  const switchIcon = () => {
    console.log("clicked");
  };
  return (
    <div
      className="movieSet"
      style={{ position: "relative" }}
      data-testid="movie-card"
    >
      <img src={imgSrc} className="mainMovie" data-testid="movie-poster" />
      <div className="switch-icon" onClick={switchIcon}>
        <HeartOutlined />
      </div>

      <div className="movieDetails">
        <div className="card" data-testid="movie-card">
          <p className="movie-date" data-testid="movie-release-date">
            {release_date}
          </p>
          <h3 className="movie-title" data-testid="movie-title">
            {title}
          </h3>
          <div className="rating">
            <div className="Imdb2">
              <img src={IMDB}></img>
              <h3 className="movie-rating">{vote_average}</h3>
            </div>
            <div className="tomatoes2">
              <img src={Tomatoe}></img>
              <h3 className="movingRating">{vote_count}</h3>
            </div>
          </div>
          <p className="genre movie-rate">Action, Adventure, Horror</p>
        </div>
      </div>
    </div>
  );
};
