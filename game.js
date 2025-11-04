function startGame() {
  const game = document.getElementById("game");
  game.innerHTML = `
    <p>SCP-173 has breached containment! What are your orders?</p>
    <button onclick="contain()">Send MTF Unit Epsilon-9</button>
    <button onclick="lockdown()">Initiate Site Lockdown</button>
  `;
}

function contain() {
  document.getElementById("game").innerHTML = `
    <p>MTF Epsilon-9 deployed. SCP-173 recontained successfully.</p>
    <button onclick="nextEvent()">Continue</button>
  `;
}

function lockdown() {
  document.getElementById("game").innerHTML = `
    <p>Site locked down. Power fluctuations detected...</p>
    <button onclick="nextEvent()">Continue</button>
  `;
}

function nextEvent() {
  document.getElementById("game").innerHTML = `
    <p>Containment breach escalating... SCP-096 has been sighted in Sector D!</p>
    <button onclick="alert('You have lost control of the site.')">Attempt to Evacuate</button>
  `;
}
