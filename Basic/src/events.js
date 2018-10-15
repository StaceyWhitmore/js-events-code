//"use strict"
//declare variables for button
let myImg = document.createElement('img');
let imgSrc1 = "https://i.kym-cdn.com/entries/icons/original/000/011/365/GRUMPYCAT.jpg"
//...and for changing the image
let imgSrc2  = "https://i.kym-cdn.com/photos/images/original/000/406/346/fd3.jpg"
let imgClicked = false

//function for button
let bttnClick = function ()  {
  myImg.src = imgSrc1
  myImg.id = 'grumpyCat'
  let grumpyDiv = document.getElementById('grumpyCat')

  document.body.insertBefore(myImg, grumpyDiv)
  const myImage = document.getElementById('grumpyCat')
}//close bttnClick()



//Create Event handler for changing image
myImg.addEventListener('click', event => {
 changeImage()
})//close addEventListener()
//Function for Changing Image
let changeImage = function () {
  imgClicked = !imgClicked
  imgClicked ? myImg.src = imgSrc2 : myImg.src = imgSrc1
}//close changeImage()
