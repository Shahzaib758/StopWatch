let interval;
let min = 0;
let sec = 0;
let msec = 0;
let disableButton = document.getElementsByTagName("button");

let minHeading = document.getElementById("min");
let secHeading = document.getElementById("sec");
let msecHeading = document.getElementById("msec");

function startTimer() {
    interval = setInterval(function () {
        msec++;
        msecHeading.innerText = msec;
        if (msec == 100) {
            sec++;
            secHeading.innerText = sec;
            msec = 0;
            msecHeading.innerText = msec;
        }
        if (sec == 60) {
            min++;
            minHeading.innerText = min;
            sec = 0
            secHeading.innerText = sec;
        }
    }, 10)
    disableButton[0].disabled = "disabled";
    disableButton[0].style.backgroundColor = "rgba(65, 105, 225, 0.34)";
}


function stopTimer() {
    clearInterval(interval);
    disableButton[0].disabled = false;
    disableButton[0].style.backgroundColor = "royalblue";
}

function resetTimer() {
    clearInterval(interval);
    min = "00";
    sec = "00";
    msec = "00";
    minHeading.innerText = min;
    secHeading.innerText = sec;
    msecHeading.innerText = msec;
    disableButton[0].disabled = false;
    disableButton[0].style.backgroundColor = "royalblue";
}
