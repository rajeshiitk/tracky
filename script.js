/* Dark mode toggle */
const darkToggleIcon = document.getElementById("darkToggle");
const panels = document.querySelectorAll(".panel");

darkToggleIcon.addEventListener("click", e => {
    e.target.classList.toggle('fa-sun');
    document.body.classList.toggle('dark-mode');
});


/*theme color change*/

const r = document.querySelector(':root');
const colors = document.querySelectorAll('.colors li');