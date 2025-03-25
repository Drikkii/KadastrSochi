document.addEventListener("DOMContentLoaded", () => {
    if ('ontouchstart' in document.documentElement) {
        try {
            for (let styleSheet of document.styleSheets) {
                for (let i = styleSheet.cssRules.length - 1; i >= 0; i--) {
                    if (styleSheet.cssRules[i].selectorText && styleSheet.cssRules[i].selectorText.includes(':hover')) {
                        styleSheet.deleteRule(i);
                    }
                }
            }
        } catch (e) {
            console.warn("Не удалось удалить правила :hover", e);
        }
    }
});
