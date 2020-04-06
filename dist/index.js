"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createElement_1 = require("./createElement");
const template = (tagName) => (props = {}) => (children = []) => {
    const node = {
        tagName,
        props,
        children,
    };
    return createElement_1.default(node);
};
exports.h1 = template("h1");
exports.h2 = template("h2");
exports.h3 = template("h3");
exports.h4 = template("h4");
exports.h5 = template("h5");
exports.h6 = template("h6");
exports.header = template("header");
exports.footer = template("footer");
exports.main = template("main");
exports.nav = template("nav");
exports.section = template("section");
exports.div = template("div");
exports.li = template("li");
exports.ol = template("ol");
exports.ul = template("ul");
exports.p = template("p");
exports.a = template("a");
exports.b = template("b");
exports.i = template("i");
exports.span = template("span");
exports.img = template("img");
exports.col = template("col");
exports.colgroup = template("colgroup");
exports.td = template("td");
exports.th = template("th");
exports.thead = template("thead");
exports.table = template("table");
exports.tr = template("tr");
exports.button = template("button");
exports.input = template("input");
exports.form = template("form");
exports.label = template("label");
exports.select = template("select");
exports.textarea = template("textarea");
exports.option = template("option");
exports.canvas = template("canvas");
