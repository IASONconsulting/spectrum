const bar = document.getElementById("progressBar");
const button = document.getElementById("redirectButton");

document.addEventListener("DOMContentLoaded", () => {
	bar.addEventListener("animationend", (e) => {
		if (e.animationName === "fillBar") redirect();
	});

	button.addEventListener("click", redirect);
});

function redirect() {
	window.location.href = "idpms://";
}