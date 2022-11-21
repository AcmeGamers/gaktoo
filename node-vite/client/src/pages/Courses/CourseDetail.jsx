import Layout from "../../layouts/layout";
import Error404 from "../404";
import CourseInfo from "./courseInfo.json";
import ContentInfo from "./CourseContent/contentInfo.json";
import { Link } from "react-router-dom";

export default function CourseDetail() {
  const id = window.location.pathname.split("/")[2],
    course = CourseInfo.find((course) => course.id == id),
    content = ContentInfo.find((content) => content.id == id);

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

  function checkIfEnrolled() {}

  function Reviews(props) {
    return (
      <div className="course_detail__reviews">
        <h2>Reviews</h2>
        <div className="row hr-center">
          <div className="row hr-center">
            {/* User Image */}
            <div>
              <div
                style={{
                  backgroundImage: `url(${props.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  background: "red",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                }}
              />
            </div>

            {/* Content */}
            <div className="course_detail__reviews_content">
              <h3>{props.name || "John Doe"}</h3>
              <p>
                {props.description ||
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates, quod, quia, voluptatibus quae voluptatem quibusdam quidem quos natus quas. Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam, quae."}
              </p>
            </div>
          </div>
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
          <form action="" id="usrform" className="column hr-left">
            <textarea name="comment" form="usrform">
              Enter text here...
            </textarea>
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
        <Reviews />
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
