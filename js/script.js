// Initiate all divs
$(document).ready((e) => {

//     console.log(data)
  imageData.targets.forEach((d) => {
    // Add divs with images for every object in the data file
    $('#bunch-o-divs').append(
      `<div class='object' id='${d.id}' style='display:none;'><img src='${d.img}'></div>`
    )
  })

  // Make divs appear
    // random position function
    // timer and/or delay between mouse clicks

  // console.log($('#bunch-o-divs').children().first())
  $('#bunch-o-divs').children().elements().forEach((c) => {
    c.delay(5000).css('display', 'inline-block')
  })





  // set onclick actions
})

// initiate the counter
// mouse action
// make mouse broom






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
