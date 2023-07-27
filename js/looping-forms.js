// TODO:
// - Title case for these:
//   - First_Name
//   - Last_Name
//   - Address
//   - City

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

// Code below from FreeCodeCamp
// https://www.freecodecamp.org/news/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27/
function titleCase(str) {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
}


if (queryString.length > 0) {
  let myOutput = `<div id="container">`; //will store data for display

  urlParams.forEach(function (value, key) {
    switch (key) {
        case "First_Name":
        case "Last_Name":
        case "Address":
        case "City":
            value = titleCase(value);
            break;
    
        default:
            break;
    }

    myOutput += `<p>${key}: ${value}</p>`;
  });

  myOutput += `<p><a href="index.html">CLEAR</a></p>`;
  myOutput += `</div>`;

  document.querySelector("#output").innerHTML = myOutput;
}
