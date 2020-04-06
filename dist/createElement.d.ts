import { Node } from "./node";
declare const createElement: (node: string | number | Node) => HTMLElement | Text | (string & Element) | (number & Element) | (Node & Element);
export default createElement;
