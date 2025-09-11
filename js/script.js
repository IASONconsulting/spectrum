const bar = document.getElementById("progressBar");
const button = document.getElementById("redirectButton");

document.addEventListener("DOMContentLoaded", () => {
    bar.addEventListener("animationend", () => {
        setTimeout(() => {
            bar.classList.add("progress_bar--active");
            
            redirect();
        }, 200);
    }, { once: true });

    button.addEventListener("click", redirect);
});

function redirect() {
    try {
        window.location.href = "idpms://";
    } catch (error) {
        console.error(`The forwarding failed, error: ${error}`);
    }
}