
function clock() {
   
    let now = new Date(); 
    var hours= now.getHours();
    let minutes = now.getMinutes() ;
    let seconds = now.getSeconds();
    let year = now.getFullYear();
    let month = now.toLocaleString('default', { month: 'long' });
    let day = now.getDate();

        // Pad single digit values with leading zeros
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');
      
        
      
        // Update the clock element
    
    document.getElementById("hours").innerHTML = hours + " h" ;
    document.getElementById("minutes").innerHTML = minutes + " min";
    document.getElementById("seconds").innerHTML = seconds + " s";
    document.getElementById("date").innerHTML = month + " " + day + ", " + year;
}
      
      // Call updateTime() initially to avoid delay
clock();
      
      // Call updateTime() every second to update the clock
setInterval(clock, 1000);
