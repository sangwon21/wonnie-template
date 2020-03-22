# Wonnie-template

## What is this?

Get start with convenient way of HTML templating.

## Installation

`npm i wonnie-template`

## Example

```
import { div } from 'wonnie-template';

const props = {id: "example1", class: "example2"};
const children = ["example"];

console.log(div(props)(children)) // <div id="example1" class="example2">example</div>
```

## Elaboration

- HTML tags supported in Wonnie-template are as follows: h1, h2, h3, h4, h5, h6, header, footer, main, nav, section, div, li, ol, ul, p, a, b, i, span, img, col, colgroup, td, th, thead, table, tr, button, input, form, label, select, textarea, option

- It is designed to improve code readability: it is clearly divided into three segments - tag, props, children.

- Tag refers to HTML tags.

- Props refer to attributes for HTML DOM Element. Attributes include not only typical HTML attributes such as id, class, value, but event handlers starting with on- prefix.

- Children allow primitive types supported in javascript and DOM Element.
