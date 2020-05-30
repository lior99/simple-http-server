window.addEventListener('DOMContentLoaded', onLoadHandler);

function onLoadHandler() {
    setTimeout(() => {
        console.log('script was dowloaded and executed');   
    }, 1000);
}