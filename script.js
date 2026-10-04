// =============================
// MOBILE MENU
// =============================

function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navLinks").classList.remove("show");
    });
});


// =============================
// LIGHT / DARK MODE
// =============================

function toggleTheme() {

    const body = document.body;
    const themeButton = document.querySelector(".theme-btn");

    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {

        themeButton.innerHTML = "☀️";

        localStorage.setItem("portfolioTheme", "dark");

    } else {

        themeButton.innerHTML = "🌙";

        localStorage.setItem("portfolioTheme", "light");
    }
}


// =============================
// LOAD SAVED THEME
// =============================

window.addEventListener("DOMContentLoaded", () => {

    const savedTheme = localStorage.getItem("portfolioTheme");
    const themeButton = document.querySelector(".theme-btn");

    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

        if (themeButton) {
            themeButton.innerHTML = "☀️";
        }

    } else {

        if (themeButton) {
            themeButton.innerHTML = "🌙";
        }
    }
});


// =============================
// CONTACT FORM
// =============================

function sendMessage(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thank you " +
        name +
        "! Your message has been submitted."
    );

    document.getElementById("contactForm").reset();
}


// =============================
// SCROLL ANIMATION
// =============================

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";
            }

        });

    },
    {
        threshold: 0.1
    }
);


document
    .querySelectorAll(
        ".skill-card, .project-card, .timeline-item"
    )
    .forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(30px)";

        element.style.transition =
            "opacity .6s ease, transform .6s ease";

        observer.observe(element);
    });
