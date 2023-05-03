import "./Container.css";

const Container = (props) => {
  return (
    <>
      <div className="Body-content">
        <div className="Container">{props.children}</div>
      </div>
    </>
  );
};

export default Container;
