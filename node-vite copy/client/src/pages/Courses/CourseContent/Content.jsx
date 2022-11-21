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
  const contentVideo = content.find((video) => video.title == contentTitle);

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
    <Layout className="content_page row space-between">
      {/* Left Hand Side */}
      <div className="content_page__video">
        <Link to={`/course/${courseID}/`}>
          <span
            style={{
              color: "blue",
            }}
          >
            Return To Course Section
          </span>
        </Link>
        <h1>{contentVideo.title}</h1>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${contentVideo.url}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        ></iframe>
        <h2>Reviews</h2>

        {/* Stars */}

        {/* User */}
        <div>
          <div>Image</div>
          <div>
            <h3>John Doe</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptates, quod, quia, voluptatibus quae voluptatem quibusdam
              voluptatum quidem quos natus quas. Quisquam, quae. Quisquam, quae.
              Quisquam, quae. Quisquam, quae.
            </p>
          </div>
        </div>
      </div>

      {/* Right Hand Side */}
      <div className="content_page__contents">
        <h2>Course Content</h2>
        <ul>
          {content.map((video, index) => (
            <li key={index}>
              <a
                href={`/course/${courseID}/${video.title.split(" ").join("-")}`}
                key={index}
              >
                {video.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
