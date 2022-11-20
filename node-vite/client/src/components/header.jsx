const Header = () => {
  // Output: 'Sat', 'Nov', '19', '2022'
  let date = new Date().toDateString().split(" "),
    suffix = ["st", "nd", "rd", "th"],
    daySuffix = date[2] > 3 ? suffix[3] : suffix[date[2] - 1];

  date = date[2] + daySuffix + " " + date[1] + "," + " " + date[3];

  return (
    <header className="row space-between hr-center">
      <div>{date}</div>
      <div>
        <ul className="row">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/courses">Courses</a>
          </li>
          <li>
            <a href="/result-front">Specific</a>
          </li>
        </ul>
      </div>
      <div>
        {/* Bell Icon */}
        <i></i>
        {/* Seperator */}
        <div className="row hr-center vr-center">
          <div className="header__userImage"></div>
          <div className="">
            Ley Hanamura <i className="chevron-down"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
