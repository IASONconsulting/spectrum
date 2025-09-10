const protocol = "idpms://";
const timeout = 1500;

function redirectToProtocol() {
    try {
        window.location.href = protocol;
    } catch (error) {
        console.error(`The forwarding failed. Error: ${error}`);
    }

    window.location.href = protocol;
}

document.addEventListener("DOMContentLoaded", () => {
    console.info(`You will be redirected in ${timeout / 1000} seconds.`)

    setTimeout(redirectToProtocol, timeout);
});