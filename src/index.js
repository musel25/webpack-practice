// index.js
import "./styles.css";
import { greeting } from "./greeting.js";

console.log(greeting);

//add image
import odinImage from "./amor.jpeg";
   
const image = document.createElement("img");
image.src = odinImage;
   
document.body.appendChild(image);
