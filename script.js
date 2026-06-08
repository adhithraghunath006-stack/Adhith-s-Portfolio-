// =========================
// ARN PORTFOLIO SCRIPT
// =========================

// Smooth Page Load

window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// Active Navbar Highlight

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }

    });

});

// Scroll Animation

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
    ".about-card, .skill-card, .experience-card, .project-card, .contact-card"
).forEach(el => {
    observer.observe(el);
});

// Typing Effect

const text =
"AI/ML Enthusiast • Web Developer • Problem Solver";

const typingElement = document.querySelector(".hero-line");

if (typingElement) {

    let index = 0;

    typingElement.innerHTML = "";

    function typeText() {

        if (index < text.length) {

            typingElement.innerHTML += text.charAt(index);

            index++;

            setTimeout(typeText, 60);

        }

    }

    typeText();

}

// Navbar Background Change

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(5,8,22,0.95)";

        navbar.style.boxShadow =
            "0 5px 25px rgba(0,191,255,0.15)";

    }

    else {

        navbar.style.background =
            "rgba(5,8,22,0.65)";

        navbar.style.boxShadow =
            "none";

    }

});

// Project Card Tilt Effect

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        const rotateY =
            (x / rect.width - 0.5) * 10;

        const rotateX =
            (0.5 - y / rect.height) * 10;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-10px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0)";

    });

});

// Button Glow Effect

const buttons = document.querySelectorAll(
    ".btn-primary, .btn-secondary, .project-btn"
);

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.boxShadow =
            "0 0 25px rgba(0,191,255,0.7)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.boxShadow =
            "none";

    });

});

// Dynamic Year Footer

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
        `Designed & Developed by Adhith Raghunath Nair © ${new Date().getFullYear()}`;

}

// Scroll To Top Button

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.style.display = "block";

    }

    else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});