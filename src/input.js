let inputDirection = { x: 0, y: 0 };
let lastInputDirecttion = { x: 0, y: 0 };

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      if (lastInputDirecttion.y !== 0) break;
      inputDirection = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      if (lastInputDirecttion.y !== 0) break;
      inputDirection = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
      if (lastInputDirecttion.x !== 0) break;
      inputDirection = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      if (lastInputDirecttion.x !== 0) break;
      inputDirection = { x: 1, y: 0 };
      break;
  }
});

export function getInputDirection() {
  lastInputDirecttion = inputDirection;
  return inputDirection;
}
