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

  function Stack(props) {
    return <></>;
  }

  return (
    <Layout className="row space-between">
      <div>
        <h1>{course.name}</h1>
        <img src={"/images/" + course.image} alt={course.name} width="800" />
        <p>{course.description}</p>

        {/* User */}
        <div className="course_detail__reviews">
          <h2>Reviews</h2>
          <div>
            <div>Image</div>
            <div>
              <h3>John Doe</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptates, quod, quia, voluptatibus quae voluptatem
                quibusdam voluptatum quidem quos natus quas. Quisquam, quae.
                Quisquam, quae. Quisquam, quae. Quisquam, quae.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2>Are you Ready?</h2>
        <Link
          to={`/course/${course.id}/${content.videos[0].title
            .split(" ")
            .join("-")}`}
        >
          <button
            className="btn"
            style={{
              border: "solid #FFC107",
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
