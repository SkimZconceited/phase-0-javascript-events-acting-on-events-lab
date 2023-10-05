const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

  //This is the code for the right movement
function moveDodgerRight() {
    const rightPos = dodger.style.left.replace('px', '');
    const right = parseInt(rightPos, 10);

    if (right < 360) {
        dodger.style.left = `${right + 1}px`;
    }
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') {
        moveDodgerRight();
    }
}) 