var App = function App() {
  return React.createElement(
    "h1",
    { id: "prop" },
    "hello from the other side"
  );
};
ReactDOM.render(React.createElement(App, null), document.getElementById("root"));