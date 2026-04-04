(function () {
    const shared = window.LoopShared;
    if (!shared) return;

    shared.initLoadingScreen('loadingScreen');
    shared.initMainStarfield('mainStarsBg', function () {
        return Math.floor(56 + Math.random() * 24);
    }, {
        minRadius: 0.6,
        radiusSpread: 0.85,
        minAlpha: 0.7,
        alphaSpread: 0.26,
        minBlur: 2,
        blurSpread: 8
    });

    const commandsData = [
        {
            name: "autorole",
            category: "autorole",
            description: "Set up automatic role assign on member join",
            arguments: "none",
            permissions: "Manage Roles"
        },
        {
            name: "autorole add",
            category: "autorole",
            description: "Adds a autorole and assigns on join to member",
            arguments: "<role>",
            permissions: "Manage Roles"
        },
        {
            name: "autorole remove",
            category: "autorole",
            description: "Remove a role from being assigned automatically on join",
            arguments: "<role>",
            permissions: "Manage Roles"
        },
        {
            name: "autorole list",
            category: "autorole",
            description: "View a list of every auto role",
            arguments: "none",
            permissions: "Manage Roles"
        }
    ];

    const tabCategories = [
        { id: 'autorole', label: 'Autorole' }
    ];

    function initializeCommandsPage() {
        const commandsGrid = document.getElementById('commandsGrid');
        const commandCount = document.getElementById('commandCount');
        const searchInput = document.getElementById('commandSearch');
        const tabNavigation = document.getElementById('tabNavigation');
        const modalContainer = document.getElementById('commandDetailsModalContainer');

        let currentSearch = "";
        let currentCategory = "autorole";
        let currentCommands = [].concat(commandsData);

        function renderCommands() {
            commandsGrid.innerHTML = "";
            commandCount.textContent = `Showing ${currentCommands.length} command${currentCommands.length === 1 ? "" : "s"}`;
            if (currentCommands.length === 0) {
                const noResults = document.createElement('div');
                noResults.style.cssText = "grid-column: 1 / -1; text-align: center; padding: 40px 20px; color: rgba(255, 255, 255, 0.65); filter: grayscale(1);";
                noResults.innerHTML = '<i class="fas fa-search" style="font-size: 2.4rem; margin-bottom: 14px; opacity: 0.35; filter: grayscale(1);"></i><div>No commands match your search.</div>';
                commandsGrid.appendChild(noResults);
                return;
            }

            const sortedCommands = [].concat(currentCommands).sort(function (a, b) {
                return a.name.localeCompare(b.name);
            });

            sortedCommands.forEach(function (cmd) {
                const card = document.createElement('div');
                card.className = 'command-card';
                card.dataset.category = cmd.category;
                card.innerHTML = `
                    <div class="command-category-pill">${cmd.category}</div>
                    <div class="command-name">${cmd.name}</div>
                    <div class="command-desc-preview">${cmd.description}</div>
                `;
                card.addEventListener('click', function () {
                    showCommandModal(cmd);
                });
                commandsGrid.appendChild(card);
            });
        }

        function applyFilters() {
            currentSearch = searchInput.value.toLowerCase().trim();
            currentCommands = commandsData.filter(function (cmd) {
                const matchesText = cmd.name.toLowerCase().includes(currentSearch) || (cmd.description && cmd.description.toLowerCase().includes(currentSearch));
                const matchesCategory = currentCategory === 'all' || cmd.category === currentCategory;
                return matchesText && matchesCategory;
            });

            renderCommands();
        }

        function renderTabs() {
            tabNavigation.innerHTML = '';
            tabNavigation.setAttribute('role', 'tablist');
            tabNavigation.setAttribute('aria-label', 'Command categories');
            tabCategories.forEach(function (cat) {
                const tabButton = document.createElement('button');
                tabButton.type = 'button';
                tabButton.className = 'tab-button';
                tabButton.setAttribute('role', 'tab');
                tabButton.setAttribute('aria-selected', cat.id === currentCategory ? 'true' : 'false');
                if (cat.id === currentCategory) {
                    tabButton.classList.add('is-active');
                }
                tabButton.dataset.category = cat.id;
                tabButton.textContent = cat.label;
                tabButton.addEventListener('click', function () {
                    if (currentCategory === cat.id) return;
                    currentCategory = cat.id;
                    tabNavigation.querySelectorAll('.tab-button').forEach(function (btn) {
                        var on = btn.dataset.category === currentCategory;
                        btn.classList.toggle('is-active', on);
                        btn.setAttribute('aria-selected', on ? 'true' : 'false');
                    });
                    applyFilters();
                });
                tabNavigation.appendChild(tabButton);
            });
        }

        function clearSearch() {
            searchInput.value = "";
            currentSearch = "";
            applyFilters();
        }

        function showCommandModal(cmd) {
            modalContainer.innerHTML = '';
            const argVal = cmd.arguments;
            const permVal = cmd.permissions;
            const cmdTextToCopy = `/${cmd.name}`;
            const modalBg = document.createElement('div');
            modalBg.className = 'command-details-modal-bg';
            modalBg.tabIndex = -1;

            const modal = document.createElement('div');
            modal.className = 'command-details-modal';
            modal.innerHTML = `
                <button class="cmd-close-btn" title="Close (Esc)"><i class="fas fa-times"></i></button>
                <div class="cmd-title-row">
                    <span class="cmd-title">${cmd.name}</span>
                    <button class="cmd-copy-btn" id="cmdCopyBtn" title="Copy command"><i class="fas fa-copy"></i></button>
                </div>
                <div class="cmd-desc">${cmd.description}</div>
                <div class="cmd-section">
                    <div class="cmd-label">Arguments</div>
                    <span class="cmd-value">${argVal}</span>
                </div>
                <div class="cmd-section">
                    <div class="cmd-label">Permissions</div>
                    <span class="cmd-value">${permVal}</span>
                </div>
            `;
            modalBg.appendChild(modal);

            let modalOpen = true;
            function doModalClose() {
                if (!modalOpen) return;
                modalOpen = false;
                modalBg.remove();
                window.removeEventListener('keydown', modalKeyHandler);
            }

            function modalKeyHandler(e) {
                if (e.key === "Escape") doModalClose();
            }

            modal.querySelector('.cmd-close-btn').onclick = doModalClose;
            modalBg.onclick = function (e) {
                if (e.target === modalBg) doModalClose();
            };
            window.addEventListener('keydown', modalKeyHandler);

            modal.querySelector('#cmdCopyBtn').onclick = function () {
                navigator.clipboard.writeText(cmdTextToCopy).then(function () {
                    const btn = modal.querySelector('#cmdCopyBtn');
                    btn.innerHTML = '<i class="fas fa-check"></i>';
                    btn.title = "Copied!";
                    setTimeout(function () {
                        btn.innerHTML = '<i class="fas fa-copy"></i>';
                        btn.title = "Copy command";
                    }, 1200);
                });
            };

            modalContainer.appendChild(modalBg);
        }

        searchInput.addEventListener('input', applyFilters);
        searchInput.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') clearSearch();
        });

        renderTabs();
        applyFilters();
    }

    window.addEventListener('DOMContentLoaded', initializeCommandsPage);
})();
