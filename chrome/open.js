window.addEventListener("message", (event) => {
    if (event.source !== window.parent) {
        return;
    }

    console.log("received from page", event);

    chrome.runtime.sendMessage({
        data: event.data,
        origin: event.origin,
    });
}, false);

chrome.runtime.onMessage.addListener((message) => {
    console.log("received from background script", message);
    window.parent.postMessage(message, "*");
});
