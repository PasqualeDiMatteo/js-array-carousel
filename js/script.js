console.log("JSOK");

// take the elements from the Dom
const prev = document.getElementById("pre");
const next = document.getElementById("next");
const galley = document.querySelector(".gallery");

// I prepare the images
const sources = [
  "img/01.webp",
  "img/02.webp",
  "img/03.webp",
  "img/04.webp",
  "img/05.webp",
];

// I prepare html for images
let imageElements = "";

// for each source he prepared a tag
for (let i = 0; i < sources.length; i++) {
  imageElements += `<img src="${sources[i]}" alt="foto${i}">`;
}

// I post the images in the Dom
galley.innerHTML = imageElements;

// I recover all images
const images = document.querySelectorAll("img");
const image = document.querySelectorAll(".thumbnails img");

// I prepare the management of the index
currentIndex = 0;

// I set the first image to active
images[currentIndex].classList.add("active");
image[currentIndex].classList.add("selected");

// Eventlistener next
next.addEventListener("click", function () {
  if (currentIndex === 4) {
    // I hide the picture
    images[currentIndex].classList.remove("active");
    image[currentIndex].classList.remove("selected");
    currentIndex = -1;
    // increase the current index
    currentIndex++;
    // I add active to the corresponding image
    images[currentIndex].classList.add("active");
    image[currentIndex].classList.add("selected");
    return;
  }

  // I hide the picture
  images[currentIndex].classList.remove("active");
  image[currentIndex].classList.remove("selected");

  // increase the current index
  currentIndex++;

  // I add active to the corresponding image
  images[currentIndex].classList.add("active");
  image[currentIndex].classList.add("selected");
});

// Eventlistener Pre
pre.addEventListener("click", function () {
  if (currentIndex === 0) {
    // I hide the picture
    images[currentIndex].classList.remove("active");
    image[currentIndex].classList.remove("selected");
    currentIndex = 5;
    // decrease the current index
    currentIndex--;
    // I add active to the corresponding image
    images[currentIndex].classList.add("active");
    image[currentIndex].classList.add("selected");
    return;
  }

  // I hide the picture
  images[currentIndex].classList.remove("active");
  image[currentIndex].classList.remove("selected");

  // decrease the current index
  currentIndex--;

  // I add active to the corresponding image
  images[currentIndex].classList.add("active");
  image[currentIndex].classList.add("selected");
});
