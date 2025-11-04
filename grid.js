const gridEl = document.getElementById("grid");
const rows = 105;
const cols = 300;

// build grid as <span> elements
let grid = Array.from({ length: rows }, (_, y) => {
  const rowEl = document.createElement("div");
  rowEl.className = "row";
  const row = [];

  for (let x = 0; x < cols; x++) {
    const cellEl = document.createElement("span");
    cellEl.className = "cell";
    cellEl.textContent = " ";
    cellEl.dataset.x = x;
    cellEl.dataset.y = y;
    cellEl.addEventListener("click", toggleCell);
    rowEl.appendChild(cellEl);
    row.push(cellEl);
  }

  gridEl.appendChild(rowEl);
  return row;
});

function toggleCell(e) {
  const cell = e.target;
  cell.textContent = cell.textContent === "#" ? " " : "#";
}
