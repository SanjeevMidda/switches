const Switch = ({ status }) => {
  return (
    <div
      className="switch"
      style={{ backgroundColor: status ? "greenyellow" : "orange" }}
    >
      <div
        className="circle"
        style={{ transform: status ? `translateX(0)` : `translateX(100%)` }}
      ></div>
    </div>
  );
};

export default Switch;
