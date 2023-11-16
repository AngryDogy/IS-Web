

(async function () {
    while (true) {
        await sleep(500);
        var title = document.getElementById("colorful-title")
        if (title.className === "header__image-title") {
            title.className = "header__image-title-orange"
        } else {
            title.className = "header__image-title"
        }
    }
})();
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}