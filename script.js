// ==========================
// MOBILE MENU
// ==========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    menuBtn.innerHTML = navLinks.classList.contains("active")
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
});


// ==========================
// STICKY NAVBAR
// ==========================

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        nav.style.background = "rgba(5,18,30,.92)";
        nav.style.padding = "15px 8%";
        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,.3)";

    } else {

        nav.style.background = "rgba(10,20,35,.45)";
        nav.style.padding = "20px 8%";
        nav.style.boxShadow = "none";

    }

});


// ==========================
// SCROLL TO TOP
// ==========================

const scrollBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollBtn.classList.add("show");

    } else {

        scrollBtn.classList.remove("show");

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ==========================
// COUNTER
// ==========================

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        let count = 0;

        const update = () => {

            const increment = target / 200;

            if (count < target) {

                count += increment;

                counter.innerText = Math.ceil(count);

                requestAnimationFrame(update);

            } else {

                counter.innerText = target;

            }

        };

        update();

    });

};

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            startCounter();

            observer.disconnect();

        }

    });

});

observer.observe(document.querySelector(".stats"));


// ==========================
// TESTIMONIALS
// ==========================

const testimonials = document.querySelectorAll(".testimonial");

let current = 0;

function showTestimonial(index) {

    testimonials.forEach(card => card.classList.remove("active"));

    testimonials[index].classList.add("active");

}

setInterval(() => {

    current++;

    if (current >= testimonials.length) {

        current = 0;

    }

    showTestimonial(current);

}, 4000);


// ==========================
// GALLERY EFFECT
// ==========================

document.querySelectorAll(".gallery img").forEach(img => {

    img.addEventListener("mousemove", () => {

        img.style.transform = "scale(1.08)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1)";

    });

});


// ==========================
// ACTIVE NAVIGATION LINK
// ==========================

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            currentSection = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});


// ==========================
// SCROLL REVEAL
// ==========================

const revealElements = document.querySelectorAll(
".destination-card,.package-card,.why-card,.stat-box,.gallery img,.testimonial,.contact-wrapper,.adventure-content"
);

const revealOnScroll = () => {

    revealElements.forEach(element => {

        const top = element.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

};

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(50px)";
    element.style.transition = ".7s ease";

});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// ==========================
// NEWSLETTER
// ==========================

const newsletter = document.querySelector(".newsletter form");

newsletter.addEventListener("submit", e => {

    e.preventDefault();

    const email = newsletter.querySelector("input");

    if (email.value.trim() === "") {

        alert("Please enter your email.");

        return;

    }

    alert("🎉 Thanks for subscribing!");

    email.value = "";

});



// ==========================
// CONTACT FORM
// ==========================

const contactForm = document.querySelector(".contact-form form");

contactForm.addEventListener("submit", e => {

    e.preventDefault();

    const inputs = contactForm.querySelectorAll("input, textarea");

    let valid = true;

    inputs.forEach(input => {

        if (input.value.trim() === "") {

            valid = false;

        }

    });

    if (!valid) {

        alert("Please fill all the fields.");

        return;

    }

    alert("✅ Message sent successfully!");

    contactForm.reset();

});




// ==========================
// HERO PARALLAX
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    header.style.backgroundPositionY = window.scrollY * 0.5 + "px";

});


// ==========================
// PAGE LOAD
// ==========================

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = ".7s";
        document.body.style.opacity = "1";

    }, 100);

});



// ==========================
// CURSOR GLOW
// ==========================

const glow = document.createElement("div");

glow.className = "cursor-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove", e => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});



// Save selected destination

document.querySelectorAll(".view-details").forEach(button => {

    button.addEventListener("click", function () {

        const place = this.getAttribute("data-place").trim();

        localStorage.setItem("selectedDestination", place);

    });

});