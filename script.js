/* --- 1. PARTICLE CANVAS EFFICIENT ANIMATION --- */
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Ember {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + 10;
        this.size = Math.random() * 3 + 1;
        this.speedY = Math.random() * 1.5 + 0.5;
        this.speedX = Math.random() * 1 - 0.5;
        this.opacity = Math.random() * 0.7 + 0.3;
        this.color = Math.random() > 0.5 ? '#ff3b3f' : '#f4c430';
    }
    update() {
        this.y -= this.speedY;
        this.x += this.speedX;
        this.opacity -= 0.003;
        if (this.y < 0 || this.opacity <= 0) this.reset();
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

for (let i = 0; i < 45; i++) particles.push(new Ember());

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animateParticles);
}
animateParticles();

/* --- 2. SPOTIFY PLAYER CONTROLLER --- */
const audio = document.getElementById('bgmAudio');
const playBtn = document.getElementById('playBtn');
const spotifyBar = document.getElementById('spotifyPlayer');
let isPlaying = false;

function toggleAudio() {
    if (isPlaying) {
        audio.pause();
        playBtn.innerText = '▶';
        spotifyBar.classList.remove('playing');
    } else {
        audio.play();
        playBtn.innerText = '⏸';
        spotifyBar.classList.add('playing');
    }
    isPlaying = !isPlaying;
}

function toggleSpotifyBar() {
    spotifyBar.classList.toggle('active');
}

/* --- 3. SCROLL REVEAL TRANSITIONS --- */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('section').forEach(sec => observer.observe(sec));

/* --- 4. BOO TAO GHOST INTERACTION --- */
const quotes = [
    "Silly-churl, billy-churl, silly-billy hilichurl~ 🎶",
    "Saat matahari terbit, berjemurlah! Saat bulan terbit, berjemurlah cahaya bulan~",
    "Satu pesanan, gratis satu peti mati! Promo terbatas!",
    "Ehe~ Mau jalan-jalan ke alam lain denganku?",
    "Aiya! Kamu memegang Boo Tao!"
];

function ghostInteract() {
    const bubble = document.getElementById('speechBubble');
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    bubble.innerText = randomQuote;
    bubble.classList.add('show');

    // Sound effect buatan sederhana (Web Audio API)
    playPopSound();

    setTimeout(() => {
        bubble.classList.remove('show');
    }, 3000);
}

function playPopSound() {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.1);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.1);
}

/* --- 5. COUPON INTERACTION --- */
function claimCoupon() {
    const res = document.getElementById('couponResult');
    const randomCode = "HU-TAO-" + Math.floor(1000 + Math.random() * 9000);
    res.innerHTML = `🎉 Kupon Diklaim! Kode: <u>${randomCode}</u><br><small>*Tunjukkan kupon ini ke Wangsheng Funeral Parlor untuk diskon Beli 1 Gratis 1!</small>`;
}
