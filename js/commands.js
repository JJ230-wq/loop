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
        permissions: "none"
    },
    {
        name: "autorole add",
        category: "autorole",
        description: "Adds a autorole and assigns on join to member",
        arguments: "role",
        permissions: "manage roles"
    },
    {
        name: "autorole remove",
        category: "autorole",
        description: "Remove a role from being assigned automatically on join",
        arguments: "role",
        permissions: "manage roles"
    },
    {
        name: "autorole list",
        category: "autorole",
        description: "View a list of every auto role",
        arguments: "none",
        permissions: "manage roles"
    },
    {
        name: "antiraid",
        category: "antiraid",
        description: "Configure protection against potential raids",
        arguments: "none",
        permissions: "none"
    },
    {
        name: "antiraid state",
        category: "antiraid",
        description: "Turn off server's raid state",
        arguments: "none",
        permissions: "manage guild"
    },
    {
        name: "antiraid avatar",
        category: "antiraid",
        description: "Punish accounts without a profile picture",
        arguments: "setting flags",
        permissions: "manage guild"
    },
    {
        name: "antiraid config",
        category: "antiraid",
        description: "View server antiraid configuration",
        arguments: "none",
        permissions: "manage guild"
    },
    {
        name: "antiraid whitelist",
        category: "antiraid",
        description: "Create a one-time whitelist to allow a user to join",
        arguments: "member",
        permissions: "manage guild"
    },
    {
        name: "antiraid whitelist view",
        category: "antiraid",
        description: "View all current antinuke whitelists",
        arguments: "none",
        permissions: "manage guild"
    },
    {
        name: "antiraid massjoin",
        category: "antiraid",
        description: "Protect server against mass bot raids",
        arguments: "setting flags",
        permissions: "manage guild"
    },
    {
        name: "antiraid newaccounts",
        category: "antiraid",
        description: "Punish new registered accounts",
        arguments: "setting flags",
        permissions: "none"
    },
    {
        name: "reaction",
        category: "reaction",
        description: "Adds a reaction(s) to a message",
        arguments: "message link, emoji or emote",
        permissions: "none"
    },
    {
        name: "reaction messages",
        category: "reaction",
        description: "Add or remove auto reaction on messages",
        arguments: "channel first second third",
        permissions: "none"
    },
    {
        name: "reaction messages list",
        category: "reaction",
        description: "List auto reactions for all channels",
        arguments: "none",
        permissions: "none"
    },
    {
        name: "reaction deleteall",
        category: "reaction",
        description: "Removes every reaction trigger for a specific word",
        arguments: "trigger word",
        permissions: "none"
    },
    {
        name: "reaction clear",
        category: "reaction",
        description: "Removes every reaction trigger in the guild",
        arguments: "none",
        permissions: "none"
    },
    {
        name: "reaction owner",
        category: "reaction",
        description: "Get the author of a trigger word",
        arguments: "trigger word",
        permissions: "none"
    },
    {
        name: "reaction list",
        category: "reaction",
        description: "View a list of every reaction trigger in the guild",
        arguments: "none",
        permissions: "none"
    },
    {
        name: "reaction add",
        category: "reaction",
        description: "Adds a reaction trigger to the guild",
        arguments: "emoji trigger word",
        permissions: "none"
    },
    {
        name: "reaction delete",
        category: "reaction",
        description: "Removes a reaction trigger in the guild",
        arguments: "emoji trigger word",
        permissions: "none"
    },
    {
        name: "noselfreact",
        category: "reaction",
        description: "Prevent self reactions on messages",
        arguments: "none",
        permissions: "administrator"
    },
    {
        name: "noselfreact exempt",
        category: "reaction",
        description: "Exempt a member, channel, or role from noselfreact",
        arguments: "member or channel or role",
        permissions: "administrator"
    },
    {
        name: "noselfreact exempt list",
        category: "reaction",
        description: "View all noselfreact exemptions",
        arguments: "none",
        permissions: "administrator"
    },
    {
        name: "noselfreact toggle",
        category: "reaction",
        description: "Toggle noselfreact on or off",
        arguments: "setting",
        permissions: "administrator"
    },
    {
        name: "noselfreact punishment",
        category: "reaction",
        description: "Set the punishment for self reacting",
        arguments: "punishment",
        permissions: "administrator"
    },
    {
        name: "noselfreact emoji",
        category: "reaction",
        description: "Set a specific emoji to monitor for self reacts",
        arguments: "emoji or emote",
        permissions: "administrator"
    },
    {
        name: "noselfreact emoji list",
        category: "reaction",
        description: "View all monitored emojis for noselfreact",
        arguments: "none",
        permissions: "administrator"
    },
    {
        name: "levels",
        category: "levels",
        description: "View your level and experience",
        arguments: "member",
        permissions: "none"
    },
    {
        name: "levels messagemode",
        category: "levels",
        description: "Set where level up messages will send",
        arguments: "mode",
        permissions: "none"
    },
    {
        name: "levels leaderboard",
        category: "levels",
        description: "View the highest ranking members",
        arguments: "none",
        permissions: "none"
    },
    {
        name: "levels leaderboard rename",
        category: "levels",
        description: "Set the title of the leaderboard embeds",
        arguments: "text",
        permissions: "none"
    },
    {
        name: "levels setrate",
        category: "levels",
        description: "Set multiplier for XP gain",
        arguments: "multiplier",
        permissions: "none"
    },
    {
        name: "levels sync",
        category: "levels",
        description: "Update your members level roles",
        arguments: "none",
        permissions: "none"
    },
    {
        name: "levels reset",
        category: "levels",
        description: "Reset all members level and XP",
        arguments: "none",
        permissions: "none"
    },
    {
        name: "levels unlock",
        category: "levels",
        description: "Enable the leveling system",
        arguments: "none",
        permissions: "none"
    },
    {
        name: "levels remove",
        category: "levels",
        description: "Remove a level role",
        arguments: "rank",
        permissions: "none"
    },
    {
        name: "levels cleanup",
        category: "levels",
        description: "No description given",
        arguments: "none",
        permissions: "none"
    },
    {
        name: "levels lock",
        category: "levels",
        description: "Disable the leveling system",
        arguments: "none",
        permissions: "none"
    },
    {
        name: "levels message",
        category: "levels",
        description: "Set a custom level up message",
        arguments: "text",
        permissions: "none"
    },
    {
        name: "levels message view",
        category: "levels",
        description: "View the level up message for the server",
        arguments: "none",
        permissions: "none"
    },
    {
        name: "levels config",
        category: "levels",
        description: "View the server configuration for the Leveling System",
        arguments: "none",
        permissions: "none"
    },
    {
        name: "levels list",
        category: "levels",
        description: "View all ignored channels and roles",
        arguments: "none",
        permissions: "none"
    },
    {
        name: "levels stackroles",
        category: "levels",
        description: "Enable or disable stacking of roles",
        arguments: "option",
        permissions: "none"
    },
    {
        name: "levels ignore",
        category: "levels",
        description: "Ignore a channel or role for XP",
        arguments: "target",
        permissions: "none"
    },
    {
        name: "levels messages",
        category: "levels",
        description: "Toggle level up messages for yourself",
        arguments: "setting",
        permissions: "none"
    },
    {
        name: "levels add",
        category: "levels",
        description: "Create a level role",
        arguments: "role rank",
        permissions: "none"
    },
    {
        name: "levels roles",
        category: "levels",
        description: "View all XP roles",
        arguments: "none",
        permissions: "none"
    },
    {
        name: "levels update",
        category: "levels",
        description: "Update a level roles rank",
        arguments: "role rank",
        permissions: "none"
    },
    {
        name: "setxp",
        category: "levels",
        description: "Set a user's XP",
        arguments: "user amount",
        permissions: "none"
    },
    {
        name: "removexp",
        category: "levels",
        description: "Remove XP from a user",
        arguments: "user amount",
        permissions: "manage guild"
    },
    {
        name: "setlevel",
        category: "levels",
        description: "Set a user's level",
        arguments: "user level",
        permissions: "manage guild"
    },

        {
        name: "antinuke",
        category: "antinuke",
        description: "Antinuke to protect your server",
        arguments: "none",
        permissions: "none"
    },
    {
        name: "antinuke admin",
        category: "antinuke",
        description: "Give a user permissions to edit antinuke settings",
        arguments: "member",
        permissions: "none"
    },
    {
        name: "antinuke channel",
        category: "antinuke",
        description: "Prevent mass channel create and delete",
        arguments: "status parameters",
        permissions: "none"
    },
    {
        name: "antinuke admins",
        category: "antinuke",
        description: "View all antinuke admins",
        arguments: "none",
        permissions: "none"
    },
    {
        name: "antinuke webhook",
        category: "antinuke",
        description: "Prevent mass webhook creation",
        arguments: "status parameters",
        permissions: "none"
    },
    {
        name: "antinuke kick",
        category: "antinuke",
        description: "Prevent mass member kick",
        arguments: "status parameters",
        permissions: "none"
    },
    {
        name: "antinuke permissions",
        category: "antinuke",
        description: "Watch for dangerous permissions being granted or removed",
        arguments: "type permission flags",
        permissions: "none"
    },
    {
        name: "antinuke whitelist",
        category: "antinuke",
        description: "Whitelist a member from triggering antinuke or a bot to join",
        arguments: "member",
        permissions: "none"
    },
    {
        name: "antinuke ban",
        category: "antinuke",
        description: "Prevent mass member ban",
        arguments: "status parameters",
        permissions: "none"
    },
    {
        name: "antinuke role",
        category: "antinuke",
        description: "Prevent mass role delete",
        arguments: "status parameters",
        permissions: "none"
    },
    {
        name: "antinuke list",
        category: "antinuke",
        description: "View all enabled modules along with whitelisted members and bots",
        arguments: "none",
        permissions: "none"
    },
    {
        name: "antinuke botadd",
        category: "antinuke",
        description: "Prevent new bot additions",
        arguments: "status",
        permissions: "none"
    },
    {
        name: "antinuke emoji",
        category: "antinuke",
        description: "Prevent mass emoji delete",
        arguments: "status parameters",
        permissions: "none"
    },
    {
        name: "antinuke config",
        category: "antinuke",
        description: "View the server configuration for antinuke",
        arguments: "none",
        permissions: "none"
    },
    {
        name: "antinuke vanity",
        category: "antinuke",
        description: "Punish users that change the server vanity",
        arguments: "status parameters",
        permissions: "none"
    }
];

const tabCategories = [
    { id: 'autorole', label: 'Autorole' },
    { id: 'antiraid', label: 'Antiraid' },
    { id: 'reaction', label: 'Reaction' },
    { id: 'levels', label: 'Levels' },
    { id: 'antinuke', label: 'Antinuke' }
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
    <div class="command-card-top">
        <div class="command-name">${cmd.name}</div>
        <button class="command-card-copy-btn" title="Copy command" aria-label="Copy /${cmd.name}">
            <i class="fas fa-copy"></i>
        </button>
    </div>
`;

                // Copy button — stop propagation so card click (modal) doesn't also fire
                card.querySelector('.command-card-copy-btn').addEventListener('click', function (e) {
                    e.stopPropagation();
                    navigator.clipboard.writeText(`/${cmd.name}`).then(function () {
                        const btn = card.querySelector('.command-card-copy-btn');
                        btn.innerHTML = '<i class="fas fa-check"></i>';
                        setTimeout(function () {
                            btn.innerHTML = '<i class="fas fa-copy"></i>';
                        }, 1200);
                    });
                });

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
            const argVal = cmd.arguments === 'none' 
    ? 'none' 
    : cmd.arguments.split(' ').map(a => `<span style="background:rgba(255,255,255,0.08); border-radius:4px; padding:2px 8px; font-size:0.85rem; margin-right:4px;">${a.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</span>`).join('');
            const permVal = cmd.permissions;
            const cmdTextToCopy = `/${cmd.name}`;
            const modalBg = document.createElement('div');
            modalBg.className = 'command-details-modal-bg';
            modalBg.tabIndex = -1;

            const modal = document.createElement('div');
            modal.className = 'command-details-modal';
            modal.innerHTML = `
    <div class="cmd-title-row">
        <span class="cmd-title" style="font-weight:700; font-size:1.15rem;">${cmd.name}</span>
    </div>
    <div class="cmd-desc" style="margin: 6px 0 14px; color: rgba(255,255,255,0.55); font-size:0.92rem;">${cmd.description}</div>
    <hr style="border:none; border-top:1px solid rgba(255,255,255,0.08); margin: 0 0 14px;">
    <div class="cmd-section" style="margin-bottom:12px;">
        <div class="cmd-label" style="font-size:0.78rem; color:rgba(255,255,255,0.45); text-transform:lowercase; margin-bottom:3px;">arguments</div>
        <div class="cmd-value" style="font-size:0.92rem; color:rgba(255,255,255,0.85);">${argVal}</div>
    </div>
    <div class="cmd-section">
        <div class="cmd-label" style="font-size:0.78rem; color:rgba(255,255,255,0.45); text-transform:lowercase; margin-bottom:3px;">permissions</div>
        <div class="cmd-value" style="font-size:0.92rem; color:rgba(255,255,255,0.85);">${permVal}</div>
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

            const closeBtn = modal.querySelector('.cmd-close-btn');
if (closeBtn) closeBtn.onclick = doModalClose;
            modalBg.onclick = function (e) {
                if (e.target === modalBg) doModalClose();
            };
            window.addEventListener('keydown', modalKeyHandler);

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
