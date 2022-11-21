import { Link } from "react-router-dom";
import { useState } from "react";

const Header = (props) => {
  // Output: 'Sat', 'Nov', '19', '2022'
  let date = new Date().toDateString().split(" "),
    suffix = ["st", "nd", "rd", "th"],
    daySuffix = date[2] > 3 ? suffix[3] : suffix[date[2] - 1];

  date = date[2] + daySuffix + " " + date[1] + "," + " " + date[3];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="row space-between hr-center">
      <div>{date}</div>
      <div>
        <ul className="row">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/result-front">Specific</Link>
          </li>
        </ul>
      </div>
      {props.connectedAccount ? (
        <div className="row hr-center">
          {/* Bell Icon */}
          <img
            src="/images/icons/bell.svg"
            className="header__bell_icon"
            alt="bell"
          />
          {/* Seperator */}
          <div
            className="row hr-center vr-center avatar"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            {/* Image */}
            <div className="header__userImage"></div>
            {/* Name */}
            <div className="row">
              {props.data?.F_Name || ""}{" "}
              <img
                src="/images/icons/chevron-down.svg"
                style={{
                  marginLeft: "0.5rem",
                }}
                alt="chevron-down"
              ></img>
            </div>

            {/* Options */}
            {isMenuOpen && (
              <ul className="header__options">
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/settings">Settings</Link>
                </li>
                <li
                  onClick={() => {
                    props.disconnectWallet();
                  }}
                >
                  Logout
                </li>
              </ul>
            )}
          </div>
        </div>
      ) : (
        <div>
          <button
            className="btn"
            style={{
              marginRight: "1rem",
            }}
          >
            <Link to="/signup">Sign Up</Link>
          </button>
          <button className="btn active" onClick={props.connectWallet}>
            Connect Wallet
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
