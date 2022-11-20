import Layout from "../../layouts/layout";
import Error404 from "../404";
import CourseInfo from "./courseInfo.json";

// let host = "localhost",
//   user = "root",
//   password = "",
//   port = "3306";

// // Use Dolt to create a new database in js
// let db = new DoltDB("courses", { host, user, password, port });

export default function CourseDetail() {
  const id = window.location.pathname.split("/")[2],
    course = CourseInfo.find((course) => course.id == id);

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
  function Stack(props) {
    return <></>;
  }

  return (
    <Layout className="row space-between">
      <div>
        <h1>{course.name}</h1>
        <img src={"/images/" + course.image} alt={course.name} width="800" />
        <p>{course.description}</p>
      </div>

      <div>
        <h2>Are you Ready?</h2>
        <button
          className="btn"
          style={{
            border: "solid #FFC107",
            padding: "10px 20px",
          }}
        >
          Start The Course
        </button>
      </div>
    </Layout>
  );
}
