'use-strict';

import header from "./modules/header.js";
import slider from "./modules/slider.js";

const documentReady = () => {
  header();
  slider();
};

document.addEventListener('DOMContentLoaded', documentReady);