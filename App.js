/**
 * Nested div in React
 * <div id:"parent">
 *      <div id:"child">
 *        <h1>I am H1 tag </h1>
 *        <h1>I am H1 tag </h1>
 *     </div>
 *     <div id:"child2">
 *        <h1>I am H1 tag </h1>
 *        <h1>I am H1 tag </h1>
 *     </div>
 * </div>
 *
 * ReactElement(object) => HTML(Browser understands)
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }),
  [
    // siblings
    React.createElement("h1", { id: "heading" }, "I am H1 tag"),
    React.createElement("h2", { id: "heading2" }, "I am H2 tag"),
  ],
  //if there are more childern inside the inner div
  React.createElement("div", { id: "child2" }),
  [
    //siblings
    React.createElement("h1", { id: "heading" }, "I am H1 tag"),
    React.createElement("h2", { id: "heading2" }, "I am H2 tag"),
  ]
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React"
); //(element, object, content)
//object is the place where you give attribute to your tage for example id to heading {id:"heading"}

console.log(heading); // this will give an object this heading is not an h1 tag. This is a react element and a react element is basically a javascript object.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

root.render(parent);
