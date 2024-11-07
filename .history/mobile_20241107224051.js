const menu = document.querySelector("#checkbox")
const ul = document.querySelector("ul")
const closes = document.querySelector(".close")
const opens = document.querySelector(".open")
const search = document.querySelector(".search")
menu.addEventListener("click", () =>{
    if(menu.checked){
        closes.style.display = "inherit";
        opens.style.display= "none";
        ul.style.display = "inline-flex";
        search.style.display = "none"
    }else{
        closes.style.display = "none";
        opens.style.display= "inherit";
        ul.style.display = "none";
        search.style.display = "inherit"
    }
})

const menu2 = document.querySelector("#checkbox2")
const ul2 = document.querySelector(".ul2")
const closes2 = document.querySelector(".closes")
const opens2 = document.querySelector(".opens")
const search2 = document.querySelector(".search2")
menu2.addEventListener("click", () => {
    if(menu2.checked){
        closes2.style.display = "inherit";
        opens2.style.display= "none";
        ul2.style.display = "inline-block";
        search2.style.display = "none"
    }else{
        closes2.style.display = "none";
        opens2.style.display= "inherit";
        ul2.style.display = "none";
        search2.style.display = "inherit"
    }
})

document.querySelectorAll('.bb2 img img').forEach((img) => {
    img.onload = function() {
      if (img.naturalWidth / img.naturalHeight < 1) { 
        // Adjust aspect ratio condition as needed
        img.style.objectFit = 'cover';
      } else {
        img.style.objectFit = 'contain';
      }
    };
  });

function setBackgroundColorFromImage(divSelector, imgSrc) {
    const imi = new Image();
    imi.src = imgSrc;
    imi.crossOrigin = "Anonymous"; // Necessary for cross-origin images

    imi.onload = function() {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = 1; 
        canvas.height = 1; 
        context.drawImage(imi, 0, 0, 1, 1); // Draw the image to get the average color

        const pixel = context.getImageData(0, 0, 1, 1).data;
        const color = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;

        document.querySelector(divSelector).style.backgroundColor = color;
    };
}

// Usage
setBackgroundColorFromImage('.bbh3', 'images/gaming/gaming0.jpeg');

function setBackgroundColorFromImage(divSelector, imgSrc) {
    const imi = new Image();
    imi.src = imgSrc;
    imi.crossOrigin = "Anonymous"; // Necessary for cross-origin images

    imi.onload = function() {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = 1; 
        canvas.height = 1; 
        context.drawImage(imi, 0, 0, 1, 1); // Draw the image to get the average color

        const pixel = context.getImageData(0, 0, 1, 1).data;
        const color = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;

        document.querySelector(divSelector).style.backgroundColor = color;
    };
}

// Usage
setBackgroundColorFromImage('.bbh4', 'images/diary/dairy1.avif');


function setBackgroundColorFromImage(divSelector, imgSrc) {
    const imi = new Image();
    imi.src = imgSrc;
    imi.crossOrigin = "Anonymous"; // Necessary for cross-origin images

    imi.onload = function() {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = 1; 
        canvas.height = 1; 
        context.drawImage(imi, 0, 0, 1, 1); // Draw the image to get the average color

        const pixel = context.getImageData(0, 0, 1, 1).data;
        const color = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;

        document.querySelector(divSelector).style.backgroundColor = color;
    };
}

// Usage
setBackgroundColorFromImage('.bbh6', 'images/kids/kids0.jpeg');
