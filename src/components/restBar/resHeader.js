import "./resHeader.css";
export default (props) => {
  return (
    <div className="header restBar__header">
      <h4 className="header__small">{props.headerMain} </h4>
      <h2 className="header__large">{props.headerSub} </h2>
    </div>
  );
};
