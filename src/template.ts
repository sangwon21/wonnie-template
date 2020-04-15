import createElement from "./createElement";
import { Node } from "./node";

export const template = (tagName: string) => (props: Object = {}) => (
  children: Array<Node | Element | Text | string | number> = []
) => {
  const node: Node = {
    tagName,
    props,
    children,
  };
  return createElement(node);
};

export const h1 = template("h1");
export const h2 = template("h2");
export const h3 = template("h3");
export const h4 = template("h4");
export const h5 = template("h5");
export const h6 = template("h6");
export const header = template("header");
export const footer = template("footer");
export const main = template("main");
export const nav = template("nav");
export const section = template("section");

export const div = template("div");
export const li = template("li");
export const ol = template("ol");
export const ul = template("ul");
export const p = template("p");

export const a = template("a");
export const b = template("b");
export const i = template("i");
export const span = template("span");

export const img = template("img");

export const col = template("col");
export const colgroup = template("colgroup");
export const td = template("td");
export const th = template("th");
export const thead = template("thead");
export const table = template("table");
export const tr = template("tr");

export const button = template("button");
export const input = template("input");
export const form = template("form");
export const label = template("label");
export const select = template("select");
export const textarea = template("textarea");
export const option = template("option");
export const canvas = template("canvas");
