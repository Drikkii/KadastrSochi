document.addEventListener("DOMContentLoaded", () => {
    if ('ontouchstart' in document.documentElement) {
        document.body.classList.add("no-hover");
    }
});
