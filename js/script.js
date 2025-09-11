const bar = document.getElementById("progressBar");
const button = document.getElementById("redirectButton");

document.addEventListener("DOMContentLoaded", () => {
	bar.addEventListener("animationend", (e) => {
		if (e.animationName === "fillBar") redirect();
	});

	button.addEventListener("click", redirect);
});

function redirect() {
	try {
		window.location.href = "idpms://";
	} catch (error) {
		console.error(`The forwarding failed, error: ${error}`);
	}
}