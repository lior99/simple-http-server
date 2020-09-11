window.addEventListener('DOMContentLoaded', onLoadHandler);

function onLoadHandler() {
    setTimeout(() => {
        console.log('script was dowloaded and executed');   
        document.querySelector("#welcomeTag").textContent = "Hello from script execution!";
    }, 1500);
}