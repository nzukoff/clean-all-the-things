// TODOs (Oct 14)
//
// - Make initial elements not overlapped, or just manually place them... in a nicer config
// - Animate elements?
// - Add broom as cursor
// - Add character as rpg character person

// ---------------------

// Find window width and height
var windowWidth = $( window ).width();
var windowHeight = $( window ).height();

// Function that splits 1 element into x smaller elements (children)
function split(element) {
  // make original disappear
  element.css('display', 'none')

  // For each of the child elements (5 elements right now)
  let numChildren = 8
  for (step = 0; step < numChildren; step++) {

    // Declare new element ID that adds a generation code at the end
    // i.e. #adult becomes #adult0, #adult1, etc.
    // #adult0 would become adult00, adult01, etc.
    let newID = element[0].id+step

    // Scaling down size of children of split elements
    let scale = 0.7

    // Add new children to main div
    //   - scales divs
    //   - declare image source, positions
    $('#bunch-o-divs').append(
      `
      <div class='child' id='${newID}' style='position:absolute'>
        <img src='${element[0].children[0].src}'
          width=${element[0].children[0].width*scale}
          height=${element[0].children[0].height*scale}>
      </div><br>
      `
    )

    // Add location randomness to new children
    randomLocation($('#'+newID));

    // If new children are further split, make sure split function is called on Click
    $('#'+newID).click(function(){
      split($(this));
    })
  }
}

// Function to assign random locations to an element

function randomLocation(element) {

  let screenPercentage = 0.7
  let screenOffset = 0.1

  let randomX = Math.floor((Math.random()*screenPercentage+screenOffset)*windowWidth)
  let randomY = Math.floor((Math.random()*screenPercentage+screenOffset)*windowHeight)

  // set css for element
  element.css({top: randomY, left: randomX})
  // console.log(windowHeight)
  // console.log(randomX, randomY);
}

// When document is ready to populate with elements
$(document).ready((e) => {

  // Set default values for images (hard-coded from image dimensions in assets/)
  let defaultWidth = 185*1.3
  let defaultHeight = 53*1.3

  // For each of the elements in data file (/data/data.js)
  imageData.targets.forEach((d) => {

    // Add divs with images for every object in the data file
    //    - sets position to absolute
    //    - sets initial height and width
    $('#bunch-o-divs').append(
      `
      <div class='object' id='${d.id}' style='position:absolute'>
        <img src='${d.img}'
          width='${defaultWidth}'
          height='${defaultHeight}'>
      </div>
      `
    )

    // Set random locations of elements
    randomLocation($('#'+d.id));

    // Add on click listener
    // call split function to split element into children if clicked
    $('#'+d.id).click(function() {
      split($(this));
    })
  })
})



// IGNORE --------------------------
// Nathan play code

// let data

// async function runWhenStarted() {
//     await jsonParse()
//     console.log(data)

// }

// async function jsonParse() {
//     data = await JSON.parse('../assets/data/data')
//     return data
// }
