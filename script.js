// Create soft floating bubbles for background animation
function createBubble() {
    const b = document.createElement('div');
    b.className = 'bubble';
    const size = 20 + Math.random() * 80; // 20px – 100px
    b.style.width = size + 'px';
    b.style.height = size + 'px';
    b.style.left = Math.random() * 100 + 'vw';
    b.style.setProperty('--dur', 10 + Math.random() * 12 + 's');
    document.body.appendChild(b);
    setTimeout(() => b.remove(), 23000);
  }
  
  // Generate bubbles
  for (let i = 0; i < 18; i++) setTimeout(createBubble, i * 400);
  setInterval(createBubble, 1200);
  