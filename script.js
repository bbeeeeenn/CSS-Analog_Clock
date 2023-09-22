const clock = document.querySelector(".clock");

// Making the lines for the hours
for (let i = 0; i < 12; i++) {
	const hourLine = document.createElement("div");
	hourLine.classList.add("line", "hour");
	clock.appendChild(hourLine);
	if (i % 3 == 0) {
		hourLine.classList.add("strong");
	}
	hourLine.style.rotate = `${i / 12}turn`;
}

// Making the lines for the minutes
for (let i = 0; i < 60; i++) {
	if (i % 5 != 0) {
		const minuteLine = document.createElement("div");
		minuteLine.classList.add("line", "minute");
		clock.appendChild(minuteLine);
		minuteLine.style.rotate = `${i / 60}turn`;
	}
}

// Below is for clock's hand movement -------------------------------------------------
const hourHand = document.getElementById("hour-hand");
const minuteHand = document.getElementById("minute-hand");
const secondHand = document.getElementById("second-hand");

// I need to put this outside the function for second hand animation
const todayForAnimation = new Date();
let secondsForAnimation = todayForAnimation.getSeconds();

function setClock() {
	const today = new Date();
	let hours = today.getHours();
	let minutes = today.getMinutes();
	let seconds = today.getSeconds();
	hourHand.style.setProperty("rotate", `${(hours + minutes / 60) / 12}turn`);
	minuteHand.style.setProperty(
		"rotate",
		`${(minutes + seconds / 60) / 60}turn`
	);

	secondHand.style.setProperty("rotate", `${secondsForAnimation / 60}turn`);
	secondsForAnimation = secondsForAnimation + 1;
}
setClock();
setInterval(setClock, 1000);
