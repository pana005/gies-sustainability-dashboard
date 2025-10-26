const container = document.getElementById('container');

// Generate 18 boxes automatically
for (let i = 1; i <= 18; i++) {
  const box = document.createElement('div');
  box.className = 'box';
  box.textContent = i; // add number label
  container.appendChild(box);
}
