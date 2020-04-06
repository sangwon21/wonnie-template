export interface Node {
  tagName: string;
  props: Object;
  children: Array<Node | number | string>;
}
