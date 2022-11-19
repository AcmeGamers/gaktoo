import Layout from "../../layouts/layout";
import Error404 from "../404";
import CourseInfo from "./courseInfo.json";

export default function CourseDetail() {
  const id = window.location.pathname.split("/")[2],
    course = CourseInfo.find((course) => course.id == id);

  if (!course) {
    return (
      <Error404
        title="Course Not Found"
        description="The course you are looking for does not exist."
      />
    );
  }

  return (
    <Layout>
      <div>
        <h1>{course.name}</h1>
        <p>{course.description}</p>
      </div>
    </Layout>
  );
}
