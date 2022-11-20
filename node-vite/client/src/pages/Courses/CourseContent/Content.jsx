import CourseInfo from "../courseInfo.json";
import ContentInfo from "./contentInfo.json";
import Layout from "../../../layouts/layout";
import Error404 from "../../404";

export default function CourseContent() {
  const courseID = window.location.pathname.split("/")[2],
    course = CourseInfo.find((course) => course.id == courseID),
    contentTitle = window.location.pathname.split("/")[2];

  contentTitle.toLowerCase().split(" ").join("-");

  let content = ContentInfo.find((content) => content.title == contentTitle);

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

  if (!content) {
    return (
      <Layout>
        <Error404
          title="Video Not Found"
          description="The video you are looking for does not exist."
        />
      </Layout>
    );
  }

  return (
    <Layout className="">
      <div>
        <h1>Hello</h1>
      </div>
    </Layout>
  );
}
