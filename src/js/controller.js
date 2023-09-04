import "core-js/stable";
import "regenerator-runtime/runtime";
import * as model from "./model.js";
import { async } from "regenerator-runtime";
import View from "./views/view.js";

function controlMenu() {
    View.handleMenu();
}

function controllInjecting() {
    View.ingectNavbar();
    View.injectFooter();
}

function controlCollapse() {
    View.handleCollapseLangs();
}

function init() {
    controllInjecting();
    controlMenu();
    controlCollapse();
}
init();
