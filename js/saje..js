// Selepas 4 saat, fade out loader
setTimeout(function () {
  document.getElementById('loader-wrapper').classList.add('fade-out');
}, 4000);

// Selepas 5 saat, tunjukkan content utama
setTimeout(function () {
  document.getElementById('loader-wrapper').style.display = 'none';
  document.getElementById('main-content').style.display = 'block';

  // Reset body style
  document.body.style.display = 'block';
  document.body.style.justifyContent = 'initial';
  document.body.style.alignItems = 'initial';
  document.body.style.height = 'auto';
}, 5000);
