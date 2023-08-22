let gridSize = 10;
const grid = document.querySelector("#grid");

generateGrid(gridSize)

function generateGrid(size) {
  for (let i = 0; i < size; i++) {
    const columnDiv = document.createElement('div');
    columnDiv.className = 'column';
    grid.appendChild(columnDiv);
    for (let j = 0; j < size; j++) {
      const cellDiv = document.createElement('div');
      cellDiv.className = 'cell';
      cellDiv.setAttribute("identifier", `${i}-${j}`);
      columnDiv.appendChild(cellDiv);
    }
  }
}