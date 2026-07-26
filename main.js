// 1. تأثير الكتابة حرف بحرف
const typingText = document.getElementById('typing-text');
const textToType = "My name is Mohamed Walid";
let charIndex = 0;

function typeWriter() {
    if (charIndex < textToType.length) {
        typingText.innerHTML += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100);
    }
}
window.onload = function () {
    setTimeout(typeWriter, 500);
};

// 2. زرار الطلوع لأعلى الصفحة + تلوين لينك الناف بار (دمجناهم في سكروول واحد)
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.header-one .links a');

window.addEventListener('scroll', () => {
    // إظهار زرار الطلوع
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }

    // تفعيل لينك الناف بار
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navAnchors.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = '#FFC107';
        }
    });
});

scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 3. قائمة المنيو للموبايل
const menuToggle = document.createElement('i');
menuToggle.className = 'fas fa-bars menu-toggle';
const headerOne = document.querySelector('.header-one');
const navMenu = document.querySelector('.links');

headerOne.insertBefore(menuToggle, navMenu);

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle('active');
});

navAnchors.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// 4. حركات ظهور الأقسام
const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.15 });

revealElements.forEach(el => {
    observer.observe(el);
});