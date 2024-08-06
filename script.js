document.addEventListener("DOMContentLoaded", () => {
    const countdownElement = document.getElementById("countdown");
    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    // Sayaç bitiş tarihini belirle
    const endDate = new Date("2024-08-06T18:10:00").getTime();

    // Geri sayım fonksiyonu
    const countdown = setInterval(() => {
        const now = new Date().getTime();
        const remainingTime = endDate - now;

        //const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        //daysElement.innerText = days;
        hoursElement.innerText = hours;
        minutesElement.innerText = minutes;
        secondsElement.innerText = seconds;

        if (remainingTime <= 0) {
            clearInterval(countdown);
            countdownElement.innerHTML = "Süre Doldu...";
        }
    }, 1000);
});
