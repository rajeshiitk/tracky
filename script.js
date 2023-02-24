const ctx = document.getElementById('linechart').getContext("2d");

function chartSetup(accentColor){

lineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['1:00am', '5:00am', '11:00am', '3:00pm' , '11:00pm'],
    datasets: [{
      label: 'Views',
      data: [0, 1500, 525, 3180,1750],
      borderWidth: 1,
      backgroundColor: accentColor,
      borderColor:accentColor,
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

}

chartSetup('#654ce5');



/* Dark mode toggle */
const darkToggleIcon = document.getElementById("darkToggle");
const panels = document.querySelectorAll(".panel");

darkToggleIcon.addEventListener("click", e => {
    e.target.classList.toggle('fa-sun');
    e.target.classList.toggle('fa-moon');
    document.body.classList.toggle('dark-mode');
});


/*theme color change*/

const r = document.querySelector(':root');
const colors = document.querySelectorAll('.colors li');

colors.forEach(color => {
    color.addEventListener('click',()=>{
         /*get the clicked element background color from css*/
         const element = window.getComputedStyle(color);
         let bgc = element.getPropertyValue("background-color");
         /* Reset the accent css variable to the new color */
         r.style.setProperty('--accent', bgc);

         lineChart.destroy();
         chartSetup(bgc);
       
    });
});
   