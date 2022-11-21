import Layout from "../../layouts/layout";
import Error404 from "../404";
import CourseInfo from "./courseInfo.json";
import ContentInfo from "./CourseContent/contentInfo.json";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import axios from "axios";

export default function CourseDetail(props) {
  const id = window.location.pathname.split("/")[2],
    course = CourseInfo.find((course) => course.id == id),
    content = ContentInfo.find((content) => content.id == id),
    comment = useRef(),
    [reviews, setReviews] = useState(5),
    [comments, setComments] = useState([]);

  if (!course) {
    return (
      <Layout>
        <Error404
          title="Course Not Found"
          description="The course you are looking for does not exist."
        />
      </Layout>
    );
  }

  // Fucntions
  // TODO:
  // - Checks if users is enrolled in the course
  // - If not, show the enroll button
  // - If yes, show the start button

  // Functions
  function getDataFromServer(data) {
    axios
      .post("/api/comment", data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    // console.log(data);
  }

  // Retrieve comments from server
  useEffect(() => {
    axios
      .post("/api/fetch-comment", {
        id: id,
      })
      .then((res) => {
        setComments(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function checkIfEnrolled() {}

  function Reviews(props) {
    function Comment(props) {
      return (
        <div className="row hr-center" style={{ marginBottom: "2rem" }}>
          {/* User Image */}
          <div>
            <div
              style={{
                backgroundImage: `url(${props.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
              }}
            />
          </div>

          {/* Content */}
          <div className="course_detail__reviews_content">
            <div className="row hr-center">
              <h3>{props.name || "John Doe"}</h3>
              <span className="course_detail__reviews_content_date">
                {props.date || "12/12/2021"}
              </span>
              <span className="course_detail__reviews_content_rating">
                ({props.rating || 5})
              </span>
            </div>
            <p>
              {props.description ||
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates, quod, quia, voluptatibus quae voluptatem quibusdam quidem quos natus quas. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae."}
            </p>
          </div>
        </div>
      );
    }

    return (
      <div className="course_detail__reviews">
        <h2>Reviews</h2>
        <div className="column ">
          {comments.map((comment, index) => {
            return (
              <Comment
                image={props.image}
                name={comment.F_Name}
                description={comment.comment}
                date={comment.created_at.split(",")[0]}
                key={index}
              />
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <Layout className="row space-between">
      <div>
        <h1>{course.name}</h1>
        <img src={"/images/" + course.image} alt={course.name} width="800" />
        <p>{course.description}</p>

        {/* Comments */}
        <div>
          <h2>Comments</h2>
          <form
            action=""
            id="usrform"
            className="column hr-left"
            onSubmit={(e) => {
              e.preventDefault();

              // Checks if fields are not filled, give them class invalid if not
              if (comment.current.value === "")
                comment.current.classList.add("invalid");

              // If single letter is typed, removes invalid class
              comment.current.addEventListener("input", (e) => {
                if (e.target.value.length > 1) {
                  e.target.classList.remove("invalid");
                }
              });

              if (comment.current.value != "") {
                props.signMessage(comment.current.value);

                getDataFromServer({
                  id: props.accountInfo,
                  F_Name: props.data.F_Name,
                  username: props.data.username,
                  course: id,
                  created_at: new Date().toLocaleString(),
                  comment: comment.current.value,
                  review: reviews,
                });
              }
            }}
          >
            {/* Stars */}
            <div className="column course_detail__stars">
              <div>
                <input
                  type="radio"
                  name="star"
                  id="star5"
                  value="5"
                  onClick={(e) => {
                    setReviews(e.target.value);
                  }}
                />
                <label className="star-choice" htmlFor="star5" title="text">
                  5 stars
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="star"
                  id="star4"
                  value="4"
                  onClick={(e) => {
                    setReviews(e.target.value);
                  }}
                />
                <label className="star-choice" htmlFor="star4" title="text">
                  4 stars
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="star"
                  id="star3"
                  value="3"
                  onClick={(e) => {
                    setReviews(e.target.value);
                  }}
                />
                <label className="star-choice" htmlFor="star3" title="text">
                  3 stars
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="star"
                  id="star2"
                  value="2"
                  onClick={(e) => {
                    setReviews(e.target.value);
                  }}
                />
                <label className="star-choice" htmlFor="star2" title="text">
                  2 stars
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="star"
                  id="star1"
                  value="1"
                  onClick={(e) => {
                    setReviews(e.target.value);
                  }}
                />
                <label className="star-choice" htmlFor="star1" title="text">
                  1 star
                </label>
              </div>
            </div>

            <textarea
              name="comment"
              form="usrform"
              ref={comment}
              placeholder={"Enter your review here"}
            />
            <input
              type="submit"
              className="btn"
              style={{
                marginTop: "1rem",
              }}
            />
          </form>
        </div>

        {/* Reviews */}
        <Reviews image={"/images/users/user.webp"} />
      </div>
      <div style={{ width: "30%" }}>
        <h2>Are you Ready?</h2>
        <Link
          to={`/course/${course.id}/${content.videos[0].title
            .split(" ")
            .join("-")}`}
        >
          <button
            className="btn"
            style={{
              border: "1px solid #000000",
              padding: "10px 20px",
            }}
          >
            Start The Course
          </button>
        </Link>
      </div>
    </Layout>
  );
}
