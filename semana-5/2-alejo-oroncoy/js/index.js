'use strict'

import header from "./modules/header.js";
import menu from "./modules/menu.js";

const documentReady = () => {
  header();
  menu();
}

window.addEventListener('DOMContentLoaded', documentReady)