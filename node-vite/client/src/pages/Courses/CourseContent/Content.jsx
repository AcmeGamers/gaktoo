import ContentInfo from "./contentInfo.json";
import Layout from "../../layouts/layout";
import Error404 from "../404";

export default function Content() {
  const title = window.location.pathname.split("/")[2];

  title.toLowerCase().split(" ").join("-");

  let content = ContentInfo.find((content) => content.title == title);

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
    <Layout className="row space-between">
      <div>
        <h1>{content.name}</h1>
        <img src={"/images/" + content.image} alt={content.name} width="800" />
        <p>{content.description}</p>
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
          Start The content
        </button>
      </div>
    </Layout>
  );
}
