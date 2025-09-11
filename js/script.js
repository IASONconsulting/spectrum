const customProtocol = "idpms://";
const redirectDelay = 1500;

function redirect() {
    console.info("You are being redirected...");

    document.getElementById("loading-overlay").classList.add("active");
    
    try {
        window.location.href = customProtocol;
    } catch (error) {
        console.error(`The forwarding failed, error: ${error}`);
    }

    setTimeout(() => {
        document.getElementById("loading-overlay").classList.remove("active");
    }, 2 * redirectDelay);
}

document.addEventListener("DOMContentLoaded", () => {
    console.info(`You will be redirected in ${redirectDelay / 1000} seconds.`);

    setTimeout(redirect, redirectDelay);
});