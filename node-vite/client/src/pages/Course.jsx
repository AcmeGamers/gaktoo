import React, { useRef, useState } from "react";

import CourseInfo from "./Courses/courseInfo.json";
import Layout from "../layouts/layout";
import { Link } from "react-router-dom";

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
          background: `url(/images/${
            props.image || "https://picsum.photos/200"
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      {/* Content */}
      <div className="course_page__card_content">
        <Link to={`/course/${props.id}`}>
          <h2>{props.name || "Learning Python Stack"} </h2>
        </Link>

        {/*  */}
        <div className="course_page__card_content_category row flex-wrap">
          {props.tags.map((tag, index) => (
            // <Span icon={tag.icon} text={tag.text} key={index} />
            <Span icon={""} text={tag.text} key={index} />
          ))}
        </div>
        {/*  */}
        <div className="course_page__card_content_info">
          <p>{props.description}</p>
          <div className="cards_list">
            {props.requirements.map((requirement, index) => (
              <List title={requirement} key={index} />
            ))}
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
      {/* Body Content */}
      <Layout className="course_page">
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
              : "course_page__cards_grid row space-between flex-wrap"
          }
        >
          {CourseInfo.map((course, index) => {
            return (
              <Card
                key={index}
                name={course.name}
                image={course.thumbnail}
                id={course.id}
                description={course.description}
                tags={course.tags}
                requirements={course.requirements}
              />
            );
          })}
        </div>
      </Layout>
    </div>
  );
};

export default Course;
