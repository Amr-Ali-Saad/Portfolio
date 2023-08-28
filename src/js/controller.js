import "core-js/stable";
import "regenerator-runtime/runtime";
import * as model from "./model.js";
import { async } from "regenerator-runtime";
import View from "./views/view.js";

function controllColoring() {
    View.coloring();
}

function init() {
    controllColoring();
}
init();
