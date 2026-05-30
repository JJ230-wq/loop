(function () {
    const shared = window.LoopShared;
    if (!shared) return;

    shared.initLoadingScreen('loadingScreen');
    shared.initMainStarfield('mainStarsBg', function () {
        return Math.floor(66 + Math.random() * 28);
    }, {
        minRadius: 0.45,
        radiusSpread: 1.1,
        minAlpha: 0.3,
        alphaSpread: 0.8,
        minBlur: 3,
        blurSpread: 10
    });

    function setupCommandsOverlayStars() {
        shared.setupStarfield('commandsStarsBg', function () {
            return Math.floor(56 + Math.random() * 24);
        }, {
            minRadius: 0.45,
            radiusSpread: 1.1,
            minAlpha: 0.3,
            alphaSpread: 0.8,
            minBlur: 3,
            blurSpread: 10
        });
    }

    window.addEventListener('resize', setupCommandsOverlayStars);

    function animateProgressBar(elem, cb) {
        if (!elem) return;
        elem.style.width = '0%';
        setTimeout(function () { elem.style.width = '70%'; }, 32);
        setTimeout(function () { elem.style.width = '87%'; }, 360);
        setTimeout(function () { elem.style.width = '100%'; }, 720);
        setTimeout(cb, 850);
    }

    function showCommandsLoaderAndGo(url) {
        const overlay = document.getElementById('commandsLoading');
        const bar = document.getElementById('commandsProgressBar');
        if (!overlay) {
            window.location.href = url;
            return;
        }

        overlay.classList.add('active');
        setupCommandsOverlayStars();

        if (bar) {
            bar.style.width = '0%';
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
        el.addEventListener('click', function (e) {
            if (e.button === 0 && !(e.metaKey || e.ctrlKey || e.altKey || e.shiftKey)) {
                e.preventDefault();
                showCommandsLoaderAndGo(link);
            }
        });
    }

    attachCommandsLoaderHandler('navCommands', 'commands.html');
    attachCommandsLoaderHandler('navCommandsMobile', 'commands.html');
    attachCommandsLoaderHandler('mainCommandsBtn', 'commands.html');
})();

// ── Status Popup ──
(function () {
    const btn = document.getElementById('navStatus');
    const popup = document.getElementById('statusPopup');
    const backdrop = document.getElementById('statusBackdrop');
    const closeBtn = document.getElementById('statusClose');
    const shardsEl = document.getElementById('statusShards');
    if (!btn || !popup) return;

    function fetchShards() {
        return fetch('https://your-domain.com:3000/status')
            .then(r => r.json());
    }

    function fmtNumber(n) {
        return n.toLocaleString('en-US');
    }

    function renderShards(shards) {
        shardsEl.innerHTML = shards.map(s => {
            const online = s.status === 'operational';
            const ago = Math.floor(Math.random() * 40 + 10) + 's ago';
            return `
            <div class="shard-card">
                <div class="shard-card-top">
                    <div>
                        <div class="shard-card-name">Shard ${s.id}</div>
                        <div class="shard-card-meta">
                            <i class="fas fa-rotate-right"></i> ${ago}
                        </div>
                    </div>
                    <div class="shard-status-badge ${online ? '' : 'offline'}">
                        <div class="shard-status-dot"></div>
                        ${online ? 'Operational' : 'Offline'}
                    </div>
                </div>
                <div class="shard-card-stats">
                    <div class="shard-stat">
                        <div class="shard-stat-label">Uptime</div>
                        <div class="shard-stat-value"><i class="fas fa-arrow-trend-up"></i>${s.uptime}</div>
                    </div>
                    <div class="shard-stat">
                        <div class="shard-stat-label">Latency</div>
                        <div class="shard-stat-value"><i class="fas fa-wifi"></i>${s.latency}ms</div>
                    </div>
                    <div class="shard-stat">
                        <div class="shard-stat-label">Servers</div>
                        <div class="shard-stat-value"><i class="fas fa-server"></i>${fmtNumber(s.servers)}</div>
                    </div>
                    <div class="shard-stat">
                        <div class="shard-stat-label">Users</div>
                        <div class="shard-stat-value"><i class="fas fa-user-group"></i>${fmtNumber(s.users)}</div>
                    </div>
                </div>
            </div>`;
        }).join('');
    }

    function openPopup() {
        shardsEl.innerHTML = '<div class="status-loading">Loading…</div>';
        backdrop.classList.add('open');
        popup.style.display = 'block';
        requestAnimationFrame(() => popup.classList.add('open'));
        fetchShards().then(renderShards).catch(() => {
            shardsEl.innerHTML = '<div class="status-loading">Failed to load status.</div>';
        });
    }

    function closePopup() {
        popup.classList.remove('open');
        backdrop.classList.remove('open');
        setTimeout(() => { popup.style.display = ''; }, 200);
    }

    btn.addEventListener('click', function (e) { e.preventDefault(); openPopup(); });
    closeBtn.addEventListener('click', closePopup);
    backdrop.addEventListener('click', closePopup);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closePopup(); });
})();
