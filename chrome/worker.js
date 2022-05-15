chrome.runtime.onMessage.addListener(notify);

function notify(message, sender) {
    console.log("received from content script", message, sender);
    chrome.tabs.sendMessage(sender.tab.id, "hi from background script", {frameId: sender.frameId});
}

chrome.runtime.onInstalled.addListener((reason) => {
    chrome.tabs.create({
        url: `foo.html`
    });
});
