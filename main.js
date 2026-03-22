const menuIcon = document.getElementById("menuIcon");
const mobileMenu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("closeBtn");

// OPEN MENU
menuIcon.onclick = () => {
    mobileMenu.style.right = "0";
};

// CLOSE MENU
closeBtn.onclick = () => {
    mobileMenu.style.right = "-100%";
};

// SCROLL ANIMATION
const elements = document.querySelectorAll(".fade-up");

window.addEventListener("scroll", () => {
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;

        if(position < window.innerHeight - 100){
            el.classList.add("show");
        }
    });





});










const n = document.querySelectorAll('.fade-up');

function showOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    n.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            el.classList.add('show');
        }
    });
}

window.addEventListener('scroll', showOnScroll);
showOnScroll();
















const counters = document.querySelectorAll(".counter");

const speed = 200;

function runCounter() {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;

            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
}

/* TRIGGER ON SCROLL */
let started = false;

window.addEventListener("scroll", () => {
    const section = document.querySelector(".stats-section");
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight && !started) {
        runCounter();
        started = true;
    }
});





const section = document.querySelector('.pricing-section');
const text = document.querySelector('.slide-text');
const cards = document.querySelector('.hidden-cards');

let triggered = false;

window.addEventListener('scroll', () => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight * 0.8 && !triggered) {

        // TEXT ANIMATION
        text.classList.add('show');

        // CARDS AFTER TEXT
        setTimeout(() => {
            cards.classList.add('show');
        }, 900);

        triggered = true;
    }
});




const fadeElements = document.querySelectorAll('.fade-up');

function revealOnScroll() {
    const trigger = window.innerHeight * 0.85;

    fadeElements.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < trigger) {
            el.classList.add('show');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();





const j = document.querySelectorAll('.fade-up');

function reveal() {
    const trigger = window.innerHeight * 0.85;

    j.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < trigger) {
            el.classList.add('show');
        }
    });
}

window.addEventListener('scroll', reveal);
reveal();




const btn = document.getElementById("subscribeBtn");
const email = document.getElementById("email");
const errorMsg = document.getElementById("errorMsg");
const agree = document.getElementById("agree");
const box = document.querySelector(".subscribe-box");

btn.addEventListener("click", () => {

    const value = email.value.trim();
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // RESET
    errorMsg.classList.remove("show");
    box.classList.remove("error");

    if (value === "") {
        showError("Please enter your email");
        return;
    }

    if (!validEmail.test(value)) {
        showError("Enter valid email (example@domain.com)");
        return;
    }

    if (!agree.checked) {
        showError("Please accept the checkbox");
        return;
    }

    // SUCCESS
    errorMsg.style.color = "lightgreen";
    errorMsg.textContent = "Subscribed successfully 🚀";
    errorMsg.classList.add("show");

    setTimeout(() => {
        window.location.href = "404.html";
    }, 1500);
});

/* FUNCTION */
function showError(msg){
    errorMsg.style.color = "red";
    errorMsg.textContent = msg;
    errorMsg.classList.add("show");

    box.classList.add("error");
}








const m = document.querySelectorAll(".fade-in");

function checkScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    m.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", checkScroll);
window.addEventListener("load", checkScroll);









/* FADE IN */
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".fade-in").forEach(el=>{
    observer.observe(el);
});

/* COUNTER */
function animateCounter(el, target){
    let count = 0;

    function update(){
        count++;
        el.innerText = count;

        if(count < target){
            requestAnimationFrame(update);
        } else {
            el.innerText = target + (target === 9 ? "+" : "");
        }
    }

    update();
}

/* TRIGGER COUNTER */
const counterObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){

            document.querySelectorAll(".counter").forEach(counter=>{
                animateCounter(counter, +counter.dataset.target);
            });

            counterObserver.unobserve(entry.target);
        }
    });
});

counterObserver.observe(document.querySelector(".trust-section"));











/* FADE ANIMATION */
const l= document.querySelectorAll(".fade-in, .fade-up");

const s = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
}, {threshold:0.2});

l.forEach(el=>s.observe(el));

/* MOBILE CHECK (OPTIONAL EFFECT) */
function handleResize(){
    if(window.innerWidth < 768){
        document.querySelectorAll(".hero-card").forEach(card=>{
            card.style.transform = "none";
        });
    }
}

window.addEventListener("resize", handleResize);
handleResize();











const monthlyBtn = document.getElementById("monthlyBtn");
const yearlyBtn = document.getElementById("yearlyBtn");

const prices = document.querySelectorAll(".price");
const periods = document.querySelectorAll(".period");

monthlyBtn.addEventListener("click", () => {
    monthlyBtn.classList.add("active");
    yearlyBtn.classList.remove("active");

    prices.forEach(p => {
        p.textContent = "$" + p.dataset.month;
    });

    periods.forEach(p => p.textContent = "month");
});

yearlyBtn.addEventListener("click", () => {
    yearlyBtn.classList.add("active");
    monthlyBtn.classList.remove("active");

    prices.forEach(p => {
        p.textContent = "$" + p.dataset.year;
    });

    periods.forEach(p => p.textContent = "year");
});












const items = document.querySelectorAll(".item");
const image = document.getElementById("mainImage");

items.forEach(item => {

    item.addEventListener("click", () => {

        // remove active
        items.forEach(i => i.classList.remove("active"));

        // add active
        item.classList.add("active");

        // change image
        const newImg = item.getAttribute("data-img");

        image.style.opacity = "0";

        setTimeout(() => {
            image.src = newImg;
            image.style.opacity = "1";
        }, 200);

    });

});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    item.querySelector(".faq-question").addEventListener("click", () => {

        // if already open → close it
        if (item.classList.contains("active")) {
            item.classList.remove("active");
        } else {

            // close all first
            faqItems.forEach(i => i.classList.remove("active"));

            // open clicked
            item.classList.add("active");
        }

    });

});





const o = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {

    o.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            el.classList.add("show");
        }

    });

});





