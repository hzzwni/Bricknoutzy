const img = document.getElementById('lanyard-img');
const line = document.getElementById('line');

let isDragging = false;
let startY = 0;
let startTop = 0;

img.addEventListener('mousedown', function(e) {
  isDragging = true;
  startY = e.clientY;
  startTop = parseInt(window.getComputedStyle(img).top);
  img.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', function(e) {
  if (!isDragging) return;

  const offsetY = e.clientY - startY;
  let newTop = startTop + offsetY;

  // Limit tarik max 250px
  if (newTop < 0) newTop = 0;
  if (newTop > 250) newTop = 250;

  img.style.top = newTop + 'px';
  line.style.height = newTop + 50 + 'px'; // line ikut panjang
});

document.addEventListener('mouseup', function() {
  isDragging = false;
  img.style.cursor = 'grab';
});
