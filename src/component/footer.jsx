import Socials from "../images/Social.png";

function Footer() {
  return (
    <div className="footer">
      <img src={Socials} />
      <ul>
        <li>
          <a href="#">Conditions of Use</a>
        </li>
        <li>
          <a href="#">Privacy & Policy</a>
        </li>
        <li>
          <a href="#">Press Room</a>
        </li>
      </ul>
      <p>© 2021 MovieBox by Adriana Eka Prayudha </p>
    </div>
  );
}

export default Footer;
