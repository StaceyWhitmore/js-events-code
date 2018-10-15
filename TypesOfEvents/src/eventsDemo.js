//import 'whichMouseBttn.js'
//require('./whichMouseBttn.js')

//Ways to handle Events
"use strict"
console.log("Hello! I'm events.js")


//class WhichButton {
  const targetElement = document.getElementById('whichMouseBttn')
  targetElement.addEventListener('mousedown', event => {
    //console.log("Mouse button pressed")
    console.log(event.button) //0=left 1=right
  })

//}
