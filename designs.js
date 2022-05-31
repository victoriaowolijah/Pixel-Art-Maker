//to return the table tag from the dom//
let table = document.getElementById("pixelCanvas");
// to return the submit button //
let submit = document.querySelector('[type="submit"]');

//add event listener click//
submit.addEventListener("click", (e) => {
  //add preventDefault to prevent the default value of a submit button//
  e.preventDefault();
  let all = document.querySelectorAll("tr");
  //get all tr //
  all.forEach(function (aTr) {
    aTr.remove();
  });
  //to return the inputheight and inputwidth value from the dom//
  let height = document.getElementById("inputHeight").value;
  let width = document.getElementById("inputWidth").value;
  //loop for the height//
  for (let x = 0; x < height; x++) {
    //create a tr element//
    let Row = document.createElement("tr");
    // append child to created row //
    let createdRow = table.appendChild(Row);

    for (let y = 0; y < width; y++) {
      let gridBox = document.createElement("td");

      let createdData = createdRow.appendChild(gridBox);
      //add an event listener to each td created//
      createdData.addEventListener("click", function () {
        // return and add the new color to the td box//
        const color = document.getElementById("colorPicker").value;
        this.style.backgroundColor = color;
      });
    }
  }
});
