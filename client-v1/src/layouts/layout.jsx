export default function Layout(props) {
  return (
    <>
      {/* Side Bar Navigation */}
      <div className="sidebar_navigation column"></div>

      <div className={"layout_1 " + props.className}>{props.children}</div>
    </>
  );
}
