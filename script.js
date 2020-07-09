/*
https://source.unsplash.com/2AovfzYV3rc/1600x900
*/

const images = [
  "https://source.unsplash.com/2AovfzYV3rc/1600x900",
  "https://source.unsplash.com/YApiWyp0lqo/1600x900",
  "https://source.unsplash.com/3ZUsNJhi_Ik/1600x900",
  "https://source.unsplash.com/yQ9mZzBdDAM/1600x900",
  "https://source.unsplash.com/3akA0XDg1_g/1600x900",
  "https://source.unsplash.com/aiwuLjLPFnU/1600x900",
  "https://source.unsplash.com/h8UQV31X5AI/1600x900",
];

const left = document.getElementById("btn-left");
const right = document.getElementById("btn-right");

let count = 0;

const body = document.body;

left.addEventListener("click", function () {
  //console.log("Left button clicked");

  if (count !== 0) {
    count -= 1;
  } else {
    count = 0;
  }

  bgimg = `url('${images[count]}')`;

  body.style.background = bgimg;
});

right.addEventListener("click", function () {
  //console.log("Right button clicked");

  if (count === images.length - 1) {
    count = 0;
  } else {
    count += 1;
  }

  bgimg = `url('${images[count]}'`;

  body.style.background = bgimg;
});
