document.addEventListener('DOMContentLoaded', function() {
    const noBtn = document.getElementById('noBtn');
    
    noBtn.addEventListener('mouseover', function() {
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        noBtn.style.position = 'absolute';
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });

    const yesBtn = document.getElementById('yesBtn');
    
    yesBtn.addEventListener('click', function() {
        window.location.href = 'page2.html';
    });
});
