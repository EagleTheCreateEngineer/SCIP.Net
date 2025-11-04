const log = document.getElementById("log");
const commandInput = document.getElementById("command");

let power = 100;
let hour = 0;
let scps = ["Room 1", "Room 2", "Room 3"];
let scpPositions = [0, 1]; // example SCPs in rooms
let gameInterval;

function addLog(message) {
  log.textContent += message + "\n";
  log.scrollTop = log.scrollHeight;
}

function startGame() {
  addLog("SCP Monitoring Terminal Initialized...");
  addLog("Night begins: 12:00 AM\n");
  gameInterval = setInterval(updateGame, 5000); // every 5 seconds
}

function updateGame() {
  // Increase time
  hour++;
  addLog(`Time: ${12 + hour}:00 AM`);

  // Random SCP movement
  scpPositions = scpPositions.map(() => Math.floor(Math.random() * scps.length));
  addLog(`SCP positions updated: ${scpPositions.map(p => scps[p]).join(", ")}`);

  // Random event
  if (Math.random() < 0.3) {
    addLog("ALERT: Power fluctuation detected!");
    power -= 10;
  }

  addLog(`Power remaining: ${power}%\n`);

  // Win/Loss
  if (power <= 0) {
    addLog("SYSTEM FAILURE: Power depleted! Night lost.");
    clearInterval(gameInterval);
  } else if (hour >= 6) {
    addLog("Night completed successfully! All systems stable.");
    clearInterval(gameInterval);
  }
}

// Command input
commandInput.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    const cmd = commandInput.value.trim().toLowerCase();
    commandInput.value = "";
    handleCommand(cmd);
  }
});

function handleCommand(cmd) {
  switch(cmd) {
    case "check camera 1":
    case "check camera 2":
    case "check camera 3":
      addLog(`You check ${cmd.replace("check ", "")}. SCP positions: ${scpPositions.map(p => scps[p]).join(", ")}`);
      power -= 2;
      break;
    case "lock door a":
    case "lock door b":
      addLog(`${cmd.replace("lock ", "").toUpperCase()} engaged. Power -5`);
      power -= 5;
      break;
    case "run diagnostics":
      addLog("System diagnostics complete. All systems nominal.");
      power -= 1;
      break;
    default:
      addLog(`Unknown command: ${cmd}`);
  }
}
startGame();
