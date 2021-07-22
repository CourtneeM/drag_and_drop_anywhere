const balls = [...document.querySelectorAll('.ball-container')];

function onDragStart() {
  setTimeout(() => (this.classList.add('invicible', 'dragging')), 0)
}

function onDragEnd(e) {
  this.classList.remove('invicible', 'dragging');
  this.style.position = 'absolute';
  this.style.top = `${e.clientY - 82}px`;
  this.style.left = `${e.clientX - 35}px`;
}

balls.forEach(ball => {
  ball.addEventListener('dragstart', onDragStart);
  ball.addEventListener('dragend', onDragEnd);
});

function onDragOver(e) {
  e.preventDefault();
}

document.querySelector('body').addEventListener('dragover', onDragOver);
