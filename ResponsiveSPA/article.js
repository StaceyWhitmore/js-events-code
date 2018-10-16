/*
function selectImage(images) {
  // Get expanded image
  let expandImage = document.getElementById("expanded-image");
  // Get image text
  let imageText = document.getElementById("image-text");
  // Get image caption
  let imageCaption = document.getElementById("image-caption")

  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImage.src = images.src;
  // Use the value of the alt attribute of the clickable image as TEXT for the expanded image
  imageCaption.innerHTML = "Image Caption";
  imageText.innerHTML = images.alt;

  // Show container element (hidden with CSS)
  expandImage.parentElement.style.display = "block";
}
*/


//ES6 style syntax
let selectImage = images => {
  // Get expanded image
  let expandImage = document.getElementById("expanded-image");
  // Get image text
  let imageText = document.getElementById("image-text");
  // Get image caption
  let imageCaption = document.getElementById("image-caption")

  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImage.src = images.src;
  // Use the value of the alt attribute of the clickable image as TEXT for the expanded image
  imageCaption.innerHTML = "Image Caption";
  imageText.innerHTML = images.alt;

  // Show container element (hidden with CSS)
  expandImage.parentElement.style.display = "block";

}
