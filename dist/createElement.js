"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createElement = (node) => {
    if (node instanceof Element) {
        return node;
    }
    if (typeof node === "string") {
        return document.createTextNode(node);
    }
    if (typeof node === "number") {
        return document.createTextNode(`${node}`);
    }
    const element = document.createElement(node.tagName);
    for (const [key, value] of Object.entries(node.props)) {
        if (key.startsWith("on")) {
            element.addEventListener(key.slice(2).toLowerCase(), value);
        }
        else {
            element.setAttribute(key, value);
        }
    }
    for (const child of node.children) {
        const childrenElement = createElement(child);
        element.appendChild(childrenElement);
    }
    return element;
};
exports.default = createElement;
