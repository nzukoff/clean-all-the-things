// let data

// async function runWhenStarted() {
//     await jsonParse()
//     console.log(data)

// }

// async function jsonParse() {
//     data = await JSON.parse('../assets/data/data')
//     return data
// }

console.log(imageData);

$(document).ready(function(e) {
  var divs = [];

  imageData.objects.forEach((d) => {
    //document.getElementById('bunch-o-divs').innerHTML = "<p></p>";
    console.log(d.id);
    $('#bunch-o-divs').append(
      '<div id="' + d.id + '"></div>'
    );
  });

  // set onclick actions



});

// initiate the divs

// initiate the counter
// mouse action
// make mouse broom
