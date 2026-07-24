/* --- 0. BACKGROUND ROTATING SLIDER --- */
const bgSlides = document.querySelectorAll('.bg-slide');
let currentSlide = 0;

function rotateBackground() {
    if (bgSlides.length === 0) return;
    bgSlides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % bgSlides.length;
    bgSlides[currentSlide].classList.add('active');
}

// Berganti gambar latar setiap 7 detik secara otomatis
setInterval(rotateBackground, 7000);

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
        this.size = Math.random() * 2.5 + 1;
        this.speedY = Math.random() * 1.2 + 0.4;
        this.speedX = Math.random() * 0.8 - 0.4;
        this.opacity = Math.random() * 0.7 + 0.3;
        this.color = Math.random() > 0.5 ? '#ff3b3f' : '#f4c430';
    }
    update() {
        this.y -= this.speedY;
        this.x += this.speedX;
        this.opacity -= 0.0025;
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

for (let i = 0; i < 40; i++) particles.push(new Ember());

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animateParticles);
}
animateParticles();

/* --- 2. SPOTIFY PLAYER REALTIME AUDIO LOGIC --- */
const audio = document.getElementById('bgmAudio');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');
const spotifyWidget = document.getElementById('spotifyWidget');
const progressBar = document.getElementById('progressBar');
const currentTimeEl = document.getElementById('currentTime');
const durationTimeEl = document.getElementById('durationTime');
let isPlaying = false;

function toggleAudio() {
    if (isPlaying) {
        audio.pause();
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
        spotifyWidget.classList.remove('playing');
    } else {
        audio.play().then(() => {
            playIcon.classList.add('hidden');
            pauseIcon.classList.remove('hidden');
            spotifyWidget.classList.add('playing');
        }).catch(e => console.log('Autoplay blocked:', e));
    }
    isPlaying = !isPlaying;
}

function toggleMinimize() {
    spotifyWidget.classList.toggle('minimized');
}

function toggleLike(btn) {
    btn.classList.toggle('liked');
}

// Audio Time Updates & Progress Sync
audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
        const progressPercent = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = `${progressPercent}%`;
        currentTimeEl.innerText = formatTime(audio.currentTime);
    }
});

audio.addEventListener('loadedmetadata', () => {
    durationTimeEl.innerText = formatTime(audio.duration);
});

// Interactive Progress Bar Click (Seek)
function seekAudio(e) {
    const container = document.getElementById('progressContainer');
    const width = container.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    
    if (duration) {
        audio.currentTime = (clickX / width) * duration;
    }
}

// Volume Controls with Dynamic SVG Icon Update
function changeVolume(val) {
    audio.volume = val;
    const volSvg = document.getElementById('volSvg');
    if (val == 0) {
        volSvg.innerHTML = `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>`;
    } else if (val < 0.5) {
        volSvg.innerHTML = `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>`;
    } else {
        volSvg.innerHTML = `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>`;
    }
}

function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

/* --- 3. SCROLL HELPER & REVEAL --- */
function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('section').forEach(sec => observer.observe(sec));

/* --- 4. BOO TAO INTERACTION --- */
const quotes = [
    "Silly-churl, billy-churl, silly-billy hilichurl~",
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
