function openModal(imageSrc) {
    document.getElementById('imageModal').classList.add('active');
    document.getElementById('modalImage').src = imageSrc;
}

function closeModal() {
    document.getElementById('imageModal').classList.remove('active');
}

// Close on ESC key
document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        closeModal();
        closePdfModal();
    }
});

function openPdfModal(pdfSrc) {
    // Check if device is mobile or small screen
    if (window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        window.open(pdfSrc, '_blank');
        return;
    }
    document.getElementById('pdfModal').classList.add('active');
    document.getElementById('pdfIframe').src = pdfSrc;
    document.getElementById('downloadPdfBtn').href = pdfSrc;
}

function closePdfModal() {
    document.getElementById('pdfModal').classList.remove('active');
    setTimeout(() => {
        document.getElementById('pdfIframe').src = "";
    }, 300);
}

// Theme Toggle Logic
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

// Scroll Reveal Animation Logic
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);
// Trigger reveal on load
reveal();

