const container = document.querySelector('.container');
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.borderWidth = "1px";
container.style.borderStyle = "solid";


let grid_squares = document.querySelectorAll('.square');
grid_squares.forEach((square) => {
  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = "red";
  })
});

function createNewGrid(size) {
  
  listRows = document.querySelectorAll('.row');

  if (listRows) {
    listRows.forEach((row) => {
    container.removeChild(row);
  });

  }
 
  
for (let i = 0; i < size; i++) {
  const row = document.createElement("div");
  row.style.display = "flex";
  row.style.borderStyle = "solid";
  row.style.flexBasis = "100%";
  row.style.height = "40px";
  row.style.borderWidth = "1px";
  row.classList.add("row");

  for (let j = 0; j < size; j++) {
    const square = document.createElement("div");
    square.style.flex = 1;
    square.style.borderStyle = "solid";
    square.style.borderWidth = "1px";
    square.style.borderLeftWidth = "2px";
    square.classList.add("square");

    row.appendChild(square);
  }
  container.appendChild(row);
}
  
  grid_squares = document.querySelectorAll('.square');
  grid_squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      let red = Math.floor(Math.random() * 256);
      let green = Math.floor(Math.random() * 256);
      let blue = Math.floor(Math.random() * 256);
      square.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
  })
});
}

const button = document.createElement("button");
button.style.padding = "16px";
button.textContent = "New grid";
button.style.marginBottom = "10px";
createNewGrid(16);
button.addEventListener("click", () => {
  newGridSize = Number(prompt("Enter a grid size"));
  if (newGridSize <= 100) {
      createNewGrid(newGridSize);
  }
  else {
    alert("Sorry, that's too much!");
  }
});
const body = document.querySelector("body");
body.insertBefore(button, container);