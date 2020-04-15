export interface Node {
  tagName: string;
  props: Object;
  children: Array<Node | Element | Text | number | string>;
}
