function updateTimeFrequently() {

    const now = new Date();

    let hours = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()
    let ampm = "AM"

    const showHours = document.getElementById("hours")
    const showMinutes = document.getElementById("minutes")
    const showSeconds = document.getElementById("seconds")
    const showAmpm = document.getElementById("ampm")

    if (hours >= 12) {
        ampm = "PM"
        if (hours > 12) {
            hours = hours - 12
        }
    }

    if (hours == 0) {
        hours = 12
    }

    hours = hours < 10 ? "0" + hours : hours
    minutes = minutes < 10 ? "0" + minutes : minutes
    seconds = seconds < 10 ? "0" + seconds : seconds

    showHours.textContent = hours
    showMinutes.textContent = minutes
    showSeconds.textContent = seconds
    showAmpm.textContent = ampm

}

setInterval(updateTimeFrequently, 1000)
updateTimeFrequently()


const theme_btn = document.getElementById("theme-btn")

theme_btn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
    theme_btn.textContent = document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode";
})