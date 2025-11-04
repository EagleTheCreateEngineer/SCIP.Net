const gridEl = document.getElementById("grid");

// Grid dimensions
const rows = 15;
const cols = 30;

// Create 2D array of spaces
let grid = Array.from({ length: rows }, () => Array(cols).fill(" "));

// Render function
function renderGrid() {
  gridEl.textContent = grid.map(row => row.join("")).join("\n");
}

// Detect click position
gridEl.addEventListener("click", (event) => {
  const rect = gridEl.getBoundingClientRect();
  const fontSize = parseFloat(getComputedStyle(gridEl).fontSize);
  const charWidth = fontSize * 0.6;  // approximate monospace width
  const lineHeight = parseFloat(getComputedStyle(gridEl).lineHeight);

  // Calculate which character was clicked
  const x = Math.floor((event.clientX - rect.left) / charWidth);
  const y = Math.floor((event.clientY - rect.top) / lineHeight);

  // Toggle character if inside bounds
  if (y >= 0 && y < rows && x >= 0 && x < cols) {
    grid[y][x] = grid[y][x] === "#" ? " " : "#";
    renderGrid();
  }
});

// Initial render
renderGrid();
