'use strict';
import { cardConponent } from "../conponent/cardConponent.js"
import { products } from "../data/products.js"
const renderArea = document.querySelector("#render-area");

products.map((product) => {
   
 renderArea.innerHTML += cardConponent(product);
})

