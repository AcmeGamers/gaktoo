import React, { useRef, useState } from "react";

function Card(props) {
  // List of category type elements
  function Span(props) {
    return (
      <div className="span_list__span row">
        <i>{props.icon}</i>
        <p>{props.text}</p>
      </div>
    );
  }

  // List of requirements
  function List(props) {
    return (
      <div className="course_page__cards_list__card row hr-center">
        <div className="cross row hr-center vr-center"></div>
        <p>{props.title}</p>
      </div>
    );
  }

  // Main return
  return (
    <div className="course_page__card row">
      {/* Image */}
      <div
        className="course_page__card_image"
        style={{
          background: `url(${props.image || "https://picsum.photos/200"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      {/* Content */}
      <div className="course_page__card_content">
        <h2>{props.name || "Learning Python Stack"} </h2>
        {/*  */}
        <div className="course_page__card_content_category row flex-wrap">
          <Span icon="" text="159"></Span>
          <Span icon="" text="Website Development"></Span>
          <Span icon="" text="Software Development"></Span>
        </div>
        {/*  */}
        <div className="course_page__card_content_info">
          <p>
            Get aware of the near-human level language and develop applications
            at a super fast rate.{" "}
          </p>
          <div className="cards_list">
            <List title="PC / Mobile Device" />
            <List title="Online / Offline Learning Interface" />
          </div>
        </div>
      </div>
    </div>
  );
}

const Course = () => {
  const gridRef = useRef(null);
  const listRef = useRef(null);
  const [courseLayout, setCourseLayout] = useState(false);

  return (
    <div>
      {/* Header */}
      <header className="row space-between hr-center">
        <div>20th November, 2022</div>
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

      {/* Side Bar Navigation */}
      <div className="sidebar_navigation column"></div>

      {/* Body Content */}
      <div className="course_page">
        {/* Heading Row 1 */}
        <div className="course_page__section_1 row space-between">
          <h1>Learning Resources</h1>

          {/* Buttons */}
          <div className="row hr-center">
            {/* Grid Button */}
            <button
              className="row btn active"
              ref={gridRef}
              onClick={() => {
                setCourseLayout(false);
                gridRef.current.classList.add("active");
                listRef.current.classList.remove("active");
              }}
            >
              <img src="" alt="" />
              <p>
                <strong>Card View</strong>
              </p>
            </button>

            {/* List Button */}
            <button
              className="row btn"
              ref={listRef}
              onClick={() => {
                setCourseLayout(true);
                listRef.current.classList.add("active");
                gridRef.current.classList.remove("active");
              }}
            >
              <img src="" alt="" />
              <p>
                <strong>List View</strong>{" "}
              </p>
            </button>
          </div>
        </div>

        {/* Content */}
        <div
          className={
            courseLayout
              ? "course_page__cards_list column"
              : "course_page__cards_grid row space-between"
          }
        >
          <Card title="" />
          <Card title="" />
        </div>
      </div>
    </div>
  );
};

export default Course;
