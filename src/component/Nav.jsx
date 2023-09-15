import logo from "../images/tv_pic.png";
import toggle from "../images/Group 71.png";
import SearchImg from "../images/Search.png";
import { useEffect, useState } from "react";

function Nav() {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(search);
    console.log(users);
  };

  const url = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=f589979ba8bd1a5c0c8ee3654af3bd4a`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  console.log(users);

  return (
    <nav>
      <div className="logo">
        <img src={logo} className="logo-img"></img>
        <h1 className="logo-txt">MovieBox</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="search-btn">
          <input
            type="text"
            value={search}
            placeholder="What do you want to watch?"
            className="searchInput"
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <button
            type="submit"
            style={{ border: "none", background: "transparent" }}
          >
            <img src={SearchImg} className="searchIcon" />
          </button>
        </div>
      </form>
      <div className="menu">
        <button>Sign In</button>
        <img src={toggle}></img>
      </div>
    </nav>
  );
}

export default Nav;
