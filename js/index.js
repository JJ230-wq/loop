
(function () {
    const shared = window.LoopShared;

    if (!shared) return;

    shared.initLoadingScreen("loadingScreen");

    function animateProgressBar(elem, cb) {
        if (!elem) return;

        elem.style.width = "0%";

        setTimeout(function () {
            elem.style.width = "70%";
        }, 32);

        setTimeout(function () {
            elem.style.width = "87%";
        }, 360);

        setTimeout(function () {
            elem.style.width = "100%";
        }, 720);

        setTimeout(cb, 850);
    }

    function showCommandsLoaderAndGo(url) {
        const overlay = document.getElementById("commandsLoading");
        const bar = document.getElementById("commandsProgressBar");

        if (!overlay) {
            window.location.href = url;
            return;
        }

        overlay.classList.add("active");

        if (bar) {
            bar.style.width = "0%";

            animateProgressBar(bar, function () {
                window.location.href = url;
            });
        } else {
            setTimeout(function () {
                window.location.href = url;
            }, 900);
        }
    }

    function attachCommandsLoaderHandler(selector, link) {
        const el = document.getElementById(selector);

        if (!el) return;

        el.addEventListener("click", function (e) {
            if (
                e.button === 0 &&
                !(e.metaKey || e.ctrlKey || e.altKey || e.shiftKey)
            ) {
                e.preventDefault();
                showCommandsLoaderAndGo(link);
            }
        });
    }

    attachCommandsLoaderHandler("navCommands", "commands.html");
    attachCommandsLoaderHandler("navCommandsMobile", "commands.html");
    attachCommandsLoaderHandler("mainCommandsBtn", "commands.html");
})();
