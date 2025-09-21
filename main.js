
(function(){
  let index = 0;
  const total = 4;
  const cube = document.getElementById('cube');
  const prevBtn = document.getElementById('prevImg');
  const nextBtn = document.getElementById('nextImg');

  function updateCube() {
    const angle = index * -90;
    cube.style.transform = `rotateY(${angle}deg)`;
  }

  function next() {
    index++; 
    updateCube();
  }

  function prev() {
    index--; 
    updateCube();
  }

  if (nextBtn) nextBtn.addEventListener('click', next);
  if (prevBtn) prevBtn.addEventListener('click', prev);
  
  let dragging = false;
  let startX = 0;
  cube.addEventListener('pointerdown', (e) => {
    dragging = true;
    startX = e.clientX;
    cube.setPointerCapture(e.pointerId);
  });

  cube.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 40) {
      if (dx < 0) next(); else prev();
      startX = e.clientX;
    }
  });

  cube.addEventListener('pointerup', (e) => {
    dragging = false;
    try { cube.releasePointerCapture(e.pointerId); } catch(_) {}
  });
  cube.addEventListener('pointercancel', ()=> dragging = false);

  
  let tstartX = 0;
  cube.addEventListener('touchstart', e => { 
    tstartX = e.touches[0].clientX; 
  }, { passive:true });

  cube.addEventListener('touchend', e => {
    const touchX = (e.changedTouches && e.changedTouches[0]) ? e.changedTouches[0].clientX : 0;
    const diff = touchX - tstartX;
    if (Math.abs(diff) > 40) { if (diff < 0) next(); else prev(); }
  });


  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
  });

 

  updateCube();
})();

  const card = document.getElementById('card');
  const button = document.getElementById('toggleButton');
  const cardContainer = document.getElementById('cardContainer');

  function toggleFlip() {
    card.classList.toggle('flipped');
  }

  button.addEventListener('click', (e) => {
    e.stopPropagation(); 
    toggleFlip();
  });

  
  cardContainer.addEventListener('click', () => {
    toggleFlip();
  });

    
    
  
  (function(){
      const el = document.getElementById('typewriter');
      const text = ' Happy Birthday ';
      const typingSpeed = 110; // ms per char
      const deletingSpeed = 60;
      const pauseAfterTyped = 1200; // ms
      const pauseAfterDeleted = 300;

      async function sleep(ms){ return new Promise(r => setTimeout(r, ms)); }

      async function typeText(){
        
        for(let i=1;i<=text.length;i++){
          el.textContent = text.slice(0,i);
          await sleep(typingSpeed + (Math.random()*40 - 20));
        }
        await sleep(pauseAfterTyped);
        for(let i=text.length;i>=0;i--){
          el.textContent = text.slice(0,i);
          await sleep(deletingSpeed + (Math.random()*30 - 15));
        }
        await sleep(pauseAfterDeleted);
      }

      
      (async function loop(){
        while(true){ await typeText(); }
      })();
    })();
  
    
  $(document).ready(function () {
    
    confetti({
      particleCount: 200,
      spread: 120,
      origin: { y: 0.17 }
    });
  });
