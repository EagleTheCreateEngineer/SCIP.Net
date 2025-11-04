const gridElement = document.getElementById("grid");

// grid size
const rows = 15;
const cols = 30;

// create grid array
let grid = Array.from({ length: rows }, () => Array(cols).fill(" "));

// render function
function renderGrid() {
  gridElement.textContent = grid.map(row => row.join("")).join("\n");
}

// convert click position to grid coordinates
gridElement.addEventListener("click", (e) => {
  const rect = gridElement.getBoundingClientRect();
  const lineHeight = parseFloat(getComputedStyle(gridElement).lineHeight);
  const charWidth = parseFloat(getComputedStyle(gridElement).fontSize) * 0.6;

  const x = Math.floor((e.clientX - rect.left) / charWidth);
  const y = Math.floor((e.clientY - rect.top) / lineHeight);

  if (x >= 0 && x < cols && y >= 0 && y < rows) {
    grid[y][x] = grid[y][x] === "#" ? " " : "#";
    renderGrid();
  }
});
