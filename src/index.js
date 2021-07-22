const balls = [...document.querySelectorAll('.ball-container')];

function onDragStart() {
  setTimeout(() => (this.classList.add('invicible', 'dragging')), 0)
}

function onDragEnd() {
  console.log(this);
  this.classList.remove('invicible');
}

balls.forEach(ball => {
  ball.addEventListener('dragstart', onDragStart);
  ball.addEventListener('dragend', onDragEnd);
});

// enter
// leave
// over
// drop
