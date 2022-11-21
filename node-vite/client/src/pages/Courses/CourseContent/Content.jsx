import CourseInfo from "../courseInfo.json";
import ContentInfo from "./contentInfo.json";
import Layout from "../../../layouts/layout";
import Error404 from "../../404";
import { Link } from "react-router-dom";

export default function CourseContent() {
  const courseID = window.location.pathname.split("/")[2],
    course = CourseInfo.find((course) => course.id == courseID),
    contentTitle = window.location.pathname.split("/")[3].split("-").join(" ");

  // Find Course from id and then maps all videos
  const content = ContentInfo.find((content) => content.id == courseID).videos;

  // Matches URL with video title
  const video = content.find((video) => video.title == contentTitle);

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

  // if (!content) {
  //   return (
  //     <Layout>
  //       <Error404
  //         title="Video Not Found"
  //         description="The video you are looking for does not exist."
  //       />
  //     </Layout>
  //   );
  // }

  return (
    <Layout className="content row space-between">
      {/* Left Hand Side */}
      <div>
        <h1>{video.title}</h1>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${video.url}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        ></iframe>
      </div>

      {/* Right Hand Side */}
      <div>
        <h2>Course Content</h2>
        <ul>
          {content.map((video) => (
            <li>
              <Link
                href={`/course/${courseID}/${video.title.split(" ").join("-")}`}
              >
                {video.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
