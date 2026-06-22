// script.js - Premium Wedding Invitation
console.log('%c❤️ Devjeet Sir & Annushree Ma\'am Wedding Site Loaded', 'color:#D4AF37; font-size:14px;');

const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particles = [];

// Particle Class
class Particle {
    constructor() { this.reset(); }
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - 100;
        this.size = Math.random() * 11 + 5;
        this.speed = Math.random() * 3 + 1.2;
        this.angle = Math.random() * Math.PI * 2;
        this.angleSpeed = Math.random() * 0.07 - 0.035;
        this.opacity = Math.random() * 0.75 + 0.35;
        this.color = Math.random() > 0.5 ? '#D4AF37' : '#F5E8C7';
    }
    update() {
        this.y += this.speed;
        this.angle += this.angleSpeed;
        this.x += Math.sin(this.angle) * 1.8;
        if (this.y > canvas.height + 100) this.reset();
    }
    draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.ellipse(0, 0, this.size, this.size * 0.65, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animateParticles);
}

// **STRONG LOADER HIDE**
function hideLoader() {
    const loader = document.getElementById('loader');
    if (!loader) return;
    
    loader.style.opacity = '0';
    
    setTimeout(() => {
        loader.style.display = 'none';
    }, 1600);
}

// Typewriter
function startTypewriter() {
    const el = document.getElementById('typewriter');
    if (!el) return;
    
    const text = "Life is like a camera. Focus on what's important, capture the good times, and enjoy every moment.";
    let i = 0;
    el.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            el.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 48);
        }
    }
    type();
}

// Final Animation
window.triggerFinalAnimation = function() {
    if (canvas) {
        canvas.style.opacity = '1';
        resizeCanvas();
        particles = Array(200).fill().map(() => new Particle());
    }
};

// Main Load
window.addEventListener('load', () => {
    resizeCanvas();
    hideLoader();                    // Primary
    animateParticles();
    startTypewriter();

    // Extra Safety - Loader hide after 4 seconds max
    setTimeout(hideLoader, 4000);
    
    console.log('✅ Site Fully Loaded - Loader Removed');
});

window.addEventListener('resize', resizeCanvas);

// Button Functions
window.openGreeting = function() {
    document.getElementById('greeting').scrollIntoView({ behavior: 'smooth' });
};

window.toggleVideo = function() {
    const vid = document.getElementById('wedding-video');
    if (vid) vid.paused ? vid.play() : vid.pause();
};
