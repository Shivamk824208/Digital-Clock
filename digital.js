function updateClock() {
    const Clock = document.getElementById("Clock");
    const dateElement = document.getElementById("date");
    const toggleBtn  = document.getElementById("theme-toggle");
    const now = new Date();

    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let Seconds = now.getSeconds().toString().padStart(2, '0');

    Clock.textContent = `${hours}:${minutes}:${Seconds}`;

    const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    dateElement.textContent = now.toLocaleDateString('en-us', options);

    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");

        if(document.body.classList.contains("light-mode")){
            toggleBtn.textContent = " 🌑Dark Mode";
        } else{
            toggleBtn.textContent = " 🌙Light Mode"
        }

    })

}

setInterval(updateClock, 1000);
updateClock();

