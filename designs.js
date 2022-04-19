// Select color input
// const color = document.getElementById('colorPicker').value;
// console.log(color);
let table = document.getElementById("pixelCanvas");

let submit = document.querySelector('[type="submit"]');


submit.addEventListener("click", (e) => {
  e.preventDefault();
  let height = document.getElementById("inputHeight").value;
  let width = document.getElementById("inputWidth").value;
  for (let x = 0; x < height; x++) {
    let Row = document.createElement("tr");
    let createdRow = table.appendChild(Row.cloneNode());

    for (let y = 0; y < width; y++) {
      let gridBox = document.createElement("td");

      // createdRow.appendChild(gridBox.cloneNode());
      let createdData = createdRow.appendChild(gridBox.cloneNode());

      createdData.addEventListener("click", function () {
        const color = document.getElementById("colorPicker").value;
        this.style.backgroundColor = color;
      });
    }
  }
});
