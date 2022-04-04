//Created with assistance from https://youtu.be/1L-0I8sgX_s  

const countdown = () => {
    //specify the date and time we are counting down to. 
    const countDate = new Date("Jun 1, 2022 00:00:00").getTime(); 
    const now = new Date().getTime(); 
    //calculate remaining time
    const remainingTime = countDate - now; 
    //workout the time in days, hours, mins, seconds
    const second = 1000; 
    const minute = second * 60; 
    const hour = minute * 60; 
    const day = hour * 24; 

    const textDay = Math.floor(remainingTime / day); 
    const textHour = Math.floor((remainingTime % day) / hour); 
    const textMinute = Math.floor((remainingTime % hour) / minute); 
    const textSecond = Math.floor((remainingTime % minute) / second); 


    //update the html with the calculated values
    //checkif the time is past 0. 
    document.querySelector(".day").innerHTML = textDay > 0 ? textDay : 0;
    document.querySelector(".hour").innerHTML = textHour > 0 ? textHour : 0; 
    document.querySelector(".minute").innerHTML = textMinute > 0 ? textMinute : 0;
    document.querySelector(".second").innerHTML = textSecond > 0 ? textSecond : 0; 
}

//run the countdown every 500ms to display the time. 
setInterval(countdown, 500); 

