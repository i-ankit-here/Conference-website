//adding event listener on nav bar
document.querySelector(".nav").addEventListener("mousemove", (e) => {
    document.querySelector(".navbg").style.height = "15dvh";
})
document.querySelector(".nav").addEventListener("mouseout", (e) => {
    document.querySelector(".navbg").style.height = "0dvh";
})

//getting remaing time of the event and inserting time remaining in ticket dynamically
let eventDate = new Date(2024, 11, 27, 0, 0, 0)
let eventMonth = eventDate.getMonth()
setInterval(() => {
    let currdate = new Date()
    let currhour = currdate.getHours()
    let currmin = currdate.getMinutes()
    let currsec = currdate.getSeconds()
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const days = Math.round(Math.abs((eventDate - currdate) / oneDay));
    const hrs = 23 - currhour;
    const min = 59 - currmin;
    const sec = 59 - currsec;
    document.querySelector(".timeRemain").innerHTML = `<li>${days}</li><li>${hrs}</li><li>${min}</li><li>${sec}</li>`
}, 1000);

//adding eventlisteners on cancel and menu
document.getElementById("menu").addEventListener("click", () => {
    document.getElementById("menu").style.display = "none";
    document.querySelector(".navigation").style.left = "0";
})


document.getElementById("cancel").addEventListener("click", (e) => {
    document.getElementById("menu").style.display = "block";
    document.querySelector(".navigation").style.left = "-110%";
})