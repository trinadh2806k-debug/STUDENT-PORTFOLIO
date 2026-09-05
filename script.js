function toggleMenu(){document.getElementById("navLinks").classList.toggle("show");}
document.querySelectorAll(".nav-links a").forEach(link=>link.addEventListener("click",()=>document.getElementById("navLinks").classList.remove("show")));
function toggleTheme(){document.body.classList.toggle("dark");localStorage.setItem("portfolioTheme",document.body.classList.contains("dark")?"dark":"light");}
window.addEventListener("DOMContentLoaded",()=>{if(localStorage.getItem("portfolioTheme")==="dark")document.body.classList.add("dark");});
function sendMessage(event){event.preventDefault();const name=document.getElementById("name").value;alert("Thank you "+name+"! Your message has been submitted.");document.getElementById("contactForm").reset();}
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.style.opacity="1";e.target.style.transform="translateY(0)";}}),{threshold:.1});
document.querySelectorAll(".skill-card,.project-card,.timeline-item").forEach(el=>{el.style.opacity="0";el.style.transform="translateY(30px)";el.style.transition="opacity .6s ease,transform .6s ease";observer.observe(el);});