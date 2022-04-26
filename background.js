browser.runtime.onMessage.addListener(notify);

function notify(message, sender) {
	console.log("received from content script", message, sender);
	browser.tabs.sendMessage(sender.tab.id, "hi from background script", {frameId: sender.frameId});
}
