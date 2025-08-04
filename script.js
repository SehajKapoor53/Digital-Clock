window.addEventListener("DOMContentLoaded", () => {
    const hoursDOM = document.querySelector("#hours");
    const minutesDOM = document.querySelector("#minutes");
    const secondsDOM = document.querySelector("#seconds");

    const animate = (element) => {
        element.classList.remove('animate');  // remove class first to restart animation
        void element.offsetWidth;              // trigger reflow
        element.classList.add('animate');     // add class to run animation
    };

    function updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');

        if (hoursDOM.innerText !== hours) {
            hoursDOM.innerText = hours;
            animate(hoursDOM);
        }
        if (minutesDOM.innerText !== minutes) {
            minutesDOM.innerText = minutes;
            animate(minutesDOM);
        }
        if (secondsDOM.innerText !== seconds) {
            secondsDOM.innerText = seconds;
            animate(secondsDOM);
        }
    }

    updateClock();
    setInterval(updateClock, 1000);
});
