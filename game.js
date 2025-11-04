// Wait for the page to fully load before attaching event listeners
document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startBtn");
  if (startBtn) {
    startBtn.addEventListener("click", startGame);
  }
});

function startGame() {
  const game = document.getElementById("game");
  game.innerHTML = `
    <p>SCP-173 has breached containment! What are your orders?</p>
    <button id="containBtn">Send MTF Unit Epsilon-9</button>
    <button id="lockdownBtn">Initiate Site Lockdown</button>
  `;

  document.getElementById("containBtn").addEventListener("click", contain);
  document.getElementById("lockdownBtn").addEventListener("click", lockdown);
}

function contain() {
  const game = document.getElementById("game");
  game.innerHTML = `
    <p>MTF Epsilon-9 deployed. SCP-173 recontained successfully.</p>
    <button id="continueBtn">Continue</button>
  `;

  document.getElementById("continueBtn").addEventListener("click", nextEvent);
}

function lockdown() {
  const game = document.getElementById("game");
  game.innerHTML = `
    <p>Site locked down. Power fluctuations detected...</p>
    <button id="continueBtn">Continue</button>
  `;

  document.getElementById("continueBtn").addEventListener("click", nextEvent);
}

function nextEvent() {
  const game = document.getElementById("game");
  game.innerHTML = `
    <p>Containment breach escalating... SCP-096 has been sighted in Sector D!</p>
    <button id="evacuateBtn">Attempt to Evacuate</button>
  `;

  document.getElementById("evacuateBtn").addEventListener("click", () => {
    alert("You have lost control of the site.");
    resetGame();
  });
}

function resetGame() {
  const game = document.getElementById("game");
  game.innerHTML = `
    <p id="text">Welcome, Site Director. Containment status report requested.</p>
    <button id="startBtn">Begin Briefing</button>
  `;

  // Reattach listener so you can restart the game
  document.getElementById("startBtn").addEventListener("click", startGame);
}
