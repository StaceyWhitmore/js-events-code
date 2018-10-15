class WhichButton {
  const targetElement = document.getElementById('whichMouse')
  link.addEventListener('mousedown', event => {
    //console.log("Mouse button pressed")
    console.log(event.button) //0=left 1=right
  })

}
