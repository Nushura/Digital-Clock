var hour = document.getElementById("hour");
var min = document.getElementById("min");
var sec = document.getElementById("sec");

var clock = setInterval(
    function time() {
        var date_now = new Date();
        var hr = date_now.getHours();
        var minutes = date_now.getMinutes();
        var seconds = date_now.getSeconds();

        if (hr < 10) {
            hr = "0" + hr;
        }

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        hour.textContent = hr;
        min.textContent = minutes;
        sec.textContent = seconds;

    }, 1000
);