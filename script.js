let countDownDate = new Date("2022-05-05 16:20:00").getTime();

let myFunction = setInterval(function() {
    let now = new Date().getTime();
    let timeLeft = countDownDate - now;
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft %  (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft %  (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft %  (1000 * 60)) / 1000);
    document.getElementById("day").innerHTML = days + "d "
    document.getElementById("hour").innerHTML = hours + "h "
    document.getElementById("minute").innerHTML = minutes + "m "
    document.getElementById("second").innerHTML = seconds + "s "
    if(timeLeft < 0) {
        clearInterval(myFunction);
        document.getElementById("day").innerHTML = ""
        document.getElementById("hour").innerHTML = ""
        document.getElementById("minute").innerHTML = ""
        document.getElementById("second").innerHTML = ""
        document.getElementById("end").innerHTML = "Time Up!!";
    }
},1000);
   