const install = document.getElementById("install");

install.addEventListener("click", (event) => {
    event.preventDefault();
    const base = new URL("/wallet.html#!/%s", document.baseURI).href;
    navigator.registerProtocolHandler("web+evm", base, "Wallet");
    window.close();
});
