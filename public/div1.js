var DivEl = function DivEl() {
  return React.createElement(
    "div",
    { id: "test" },
    "hello!!"
  );
};
ReactDOM.render(React.createElement(DivEl, null), document.getElementById("prop"));