const textOverlay = document.querySelector('.text-overlay');
const texts = ['666 AESTHETIC', 'Aesthetic Coin', 'Aesthetic', '666 AESTHETIC'];
for (let i = 0; i < 25; i++) {
    const span = document.createElement('span');
    span.textContent = texts[i % texts.length];
    span.style.position = 'absolute';
    span.style.left = `${Math.random() * 100}%`;
    span.style.top = `${Math.random() * 100}%`;
    textOverlay.appendChild(span);
}
