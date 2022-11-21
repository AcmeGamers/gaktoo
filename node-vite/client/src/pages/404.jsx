const Error404 = (props) => {
  return (
    <div>
      <h1> {props.title || "Error 404"}</h1>
      <p>{props.description || "Page Not Found"}</p>
    </div>
  );
};

export default Error404;
