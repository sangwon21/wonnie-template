const createElement = require("./createElement.js");

const template = tagName => (props = {}) => (children = []) => {
  const node = {
    tagName,
    props,
    children
  };
  return createElement(node);
};

const h1 = template("h1");
const h2 = template("h2");
const h3 = template("h3");
const h4 = template("h4");
const h5 = template("h5");
const h6 = template("h6");
const header = template("header");
const footer = template("footer");
const main = template("main");
const nav = template("nav");
const section = template("section");

const div = template("div");
const li = template("li");
const ol = template("ol");
const ul = template("ul");
const p = template("p");

const a = template("a");
const b = template("b");
const i = template("i");
const span = template("span");

const img = template("img");

const col = template("col");
const colgroup = template("colgroup");
const td = template("td");
const th = template("th");
const thead = template("thead");
const table = template("table");
const tr = template("tr");

const button = template("button");
const input = template("input");
const form = template("form");
const label = template("label");
const select = template("select");
const textarea = template("textarea");
const option = template("option");

module.exports = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  header,
  footer,
  main,
  nav,
  section,
  div,
  li,
  ol,
  ul,
  p,
  a,
  b,
  i,
  span,
  img,
  col,
  colgroup,
  td,
  th,
  thead,
  table,
  tr,
  button,
  input,
  form,
  label,
  select,
  textarea,
  option
};
