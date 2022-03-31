var App = function App() {
  return React.createElement(
    "div",
    { id: "main" },
    React.createElement(
      "div",
      { id: "dash" },
      React.createElement("button", { id: "one" }),
      React.createElement("button", { id: "two" })
    ),
    React.createElement(
      "div",
      { id: "page_one" },
      React.createElement(
        "div",
        { id: "form_page" },
        React.createElement(
          "h2",
          null,
          "FILL CREDENTIALS"
        ),
        React.createElement(
          "form",
          null,
          React.createElement(
            "label",
            { "for": "input_one", id: "input_one_label" },
            "FIRST NAME"
          ),
          React.createElement("input", { type: "text", id: "input_one" }),
          React.createElement(
            "label",
            { "for": "input_two", id: "input_two_label" },
            "LAST NAME"
          ),
          React.createElement("input", { type: "text", id: "input_two" }),
          React.createElement(
            "label",
            { "for": "input_three", id: "input_three_label" },
            "E-MAIL"
          ),
          React.createElement("input", { type: "text", id: "input_three" }),
          React.createElement(
            "label",
            { "for": "input_four", id: "input_four_label" },
            "INSTITUTION"
          ),
          React.createElement("input", { type: "text", id: "input_four" }),
          React.createElement("input", { type: "submit", id: "submit" })
        )
      )
    ),
    React.createElement(
      "div",
      { id: "page_two" },
      React.createElement(
        "div",
        { id: "list_one" },
        React.createElement(
          "ul",
          null,
          React.createElement(
            "li",
            null,
            "apurva"
          ),
          React.createElement(
            "li",
            null,
            "mishra"
          ),
          React.createElement(
            "li",
            null,
            "apurva.mishra26@yahoo.com"
          ),
          React.createElement(
            "li",
            null,
            "delhi iniversity"
          )
        )
      ),
      React.createElement(
        "div",
        { id: "list_two" },
        React.createElement(
          "ul",
          null,
          React.createElement(
            "li",
            null,
            "ipsum"
          ),
          React.createElement(
            "li",
            null,
            "lorem "
          ),
          React.createElement(
            "li",
            null,
            "ipsum.lorem@yahoo.com"
          ),
          React.createElement(
            "li",
            null,
            "lucknow university"
          )
        )
      ),
      React.createElement(
        "div",
        { id: "list_three" },
        React.createElement(
          "ul",
          null,
          React.createElement(
            "li",
            null,
            "some"
          ),
          React.createElement(
            "li",
            null,
            "thing "
          ),
          React.createElement(
            "li",
            null,
            "some.thing@yahoo.com"
          ),
          React.createElement(
            "li",
            null,
            "lucknow university"
          )
        )
      )
    )
  );
};
ReactDOM.render(React.createElement(App, null), document.getElementById("root"));