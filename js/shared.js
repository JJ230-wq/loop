(function () {
    function drawStars(canvas, numStars, options) {
        if (!canvas) return;
        const opts = options || {};
        const ctx = canvas.getContext('2d');
        const w = canvas.width = window.innerWidth;
        const h = canvas.height = window.innerHeight;
        const minRadius = opts.minRadius ?? 0.45;
        const radiusSpread = opts.radiusSpread ?? 1.1;
        const minAlpha = opts.minAlpha ?? 0.3;
        const alphaSpread = opts.alphaSpread ?? 0.8;
        const minBlur = opts.minBlur ?? 2;
        const blurSpread = opts.blurSpread ?? 8;

        ctx.clearRect(0, 0, w, h);
        for (let i = 0; i < numStars; i++) {
            const x = Math.random() * w;
            const y = Math.random() * h;
            const r = minRadius + Math.random() * radiusSpread;
            const alpha = minAlpha + Math.random() * alphaSpread;
            ctx.beginPath();
            ctx.arc(x, y, r, 0, 2 * Math.PI, false);
            ctx.fillStyle = `rgba(255,255,255,${alpha})`;
            ctx.shadowColor = "#fff";
            ctx.shadowBlur = minBlur + Math.random() * blurSpread;
            ctx.fill();
        }
        ctx.shadowBlur = 0;
    }

    function ensureCanvas(container) {
        if (!container) return null;
        let canvas = container.querySelector('canvas');
        if (!canvas) {
            canvas = document.createElement('canvas');
            container.appendChild(canvas);
        }
        return canvas;
    }

    function setupStarfield(containerId, countFn, options) {
        const container = document.getElementById(containerId);
        if (!container) return;
        const canvas = ensureCanvas(container);
        drawStars(canvas, countFn(), options);
    }

    function initMainStarfield(containerId, countFn, options) {
        const init = function () {
            setupStarfield(containerId, countFn, options);
        };

        if (document.readyState !== 'loading') {
            init();
        } else {
            document.addEventListener('DOMContentLoaded', init);
        }

        window.addEventListener('resize', function () {
            setupStarfield(containerId, countFn, options);
        });
    }

    function initLoadingScreen(loadingId) {
        window.addEventListener('load', function () {
            const loading = document.getElementById(loadingId);
            if (!loading) return;
            loading.style.opacity = '0';
            setTimeout(function () {
                loading.style.display = 'none';
            }, 260);
        });
    }

    window.LoopShared = {
        drawStars,
        setupStarfield,
        initMainStarfield,
        initLoadingScreen
    };
})();
