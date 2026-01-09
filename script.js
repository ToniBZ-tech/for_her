const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const mainFrog = document.getElementById('main-frog');
const statusText = document.getElementById('status-text');
const subText = document.getElementById('sub-text');

// 1. Moving "No" Button
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// 2. Acceptance Event
yesBtn.addEventListener('click', () => {
    // Swap to the heart frog
    mainFrog.src = 'cute.png'; 
    statusText.innerHTML = "W CHAT!!!!💕";
    subText.innerHTML = "Chattt HIGHKEYYY, I love you <3.";
    
    // Hide buttons
    document.querySelector('.buttons').style.display = 'none';
    
    // Start raining frogs!
    setInterval(createFallingFrog, 150);
});

// 3. Make the happy frog rain down
function createFallingFrog() {
    const frog = document.createElement('img');
    // Using the happy frog for the rain
    frog.src = 'image.png';
    frog.className = 'falling-frog';
    
    frog.style.left = Math.random() * 100 + "vw";
    frog.style.top = "-50px";
    frog.style.animationDuration = (Math.random() * 2 + 2) + "s";
    
    document.getElementById('frog-rain-container').appendChild(frog);
    
    setTimeout(() => { frog.remove(); }, 4000);

}
