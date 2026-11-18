
(function () {
    /*
     * Malencholy shared functions.
     * The old canvas starfield has been removed.
     * The visual background is now handled by CSS.
     */

    function drawStars() {
        // Kept for compatibility with older page scripts.
    }

    function setupStarfield() {
        // CSS handles the stars now.
    }

    function initMainStarfield() {
        // No canvas or resize listener needed.
    }

    function initLoadingScreen(loadingId) {
        function hide() {
            const loading = document.getElementById(loadingId);

            if (!loading) return;

            loading.style.opacity = "0";

            setTimeout(function () {
                loading.style.display = "none";
            }, 260);
        }

        if (document.readyState === "complete") {
            hide();
        } else {
            window.addEventListener("load", hide, { once: true });
        }
    }

    window.LoopShared = {
        drawStars,
        setupStarfield,
        initMainStarfield,
        initLoadingScreen
    };
})();
