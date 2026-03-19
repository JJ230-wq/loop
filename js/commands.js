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

    const commandFiles = [
        "afkmentions","alias","antighostping","antiraid","antinuke","autoresponder","autorole","avatar","avatarhistory","badge","ban","birthday","blackjack","booster","bots","bumpreminder","buttonrole","choose","config","createembed","customize","disablecommand","editsnipe","embedcopy","enablecommand","evillaugh","facepalm","filter","forcenickname","fun","give","giveaways","goodbye","handhold","happy","hardban","headbang","hex","hide","history","hug","ignore","imgonly","imute","inrole","inviteinfo","iunmute","jail","juul","kick","kiss","laugh","leaderboard","leveling","lick","lock","love","mad","mute","nervous","nom","nsr","nuke","nuzzle","other","ping","prefix","quote","reaction","reactionrole","reactionsnipe","remind","restrictcommand","rmute","role","roleall","rolehumans","roleicon","roleplay","runmute","seen","serveravatar","serverbanner","serverinfo","settings","setup","slap","smile","snipe","starboard","steal","stickyrole","stickymessage","tags","ticket","timer","timezone","topcommands","transferhistory","unban","unhide","unjail","unlock","userinfo","utility","vanity","voicemaster","webhook","welcome","whitelist","withdraw"
    ];
    commandFiles.sort(function (a, b) { return a.localeCompare(b); });

    function guessCategory(name) {
        const n = name.toLowerCase();
        if (['ban','hardban','unban','mute','imute','rmute','runmute','iunmute','jail','unjail','lock','unlock','nuke','antinuke','antiraid','filter','restrictcommand','blacklist','ignore','timeout'].includes(n)) return 'moderation';
        if (['balance','bet','blackjack','leaderboard','give','withdraw','steal','remind','giveaways','boosts'].includes(n)) return 'economy';
        if (['serverinfo','userinfo','avatar','avatarhistory','inviteinfo','timezone','seen','history','topcommands','transferhistory','hex','ping','editsnipe','snipe','reactionsnipe'].includes(n)) return 'utility';
        if (['hug','kiss','slap','love','laugh','juul','roleplay','headbang','handhold','smile','mad','happy','evillaugh','nuzzle','nom','nervous','lick','facepalm'].includes(n)) return 'fun';
        if (['settings','setup','autorole','welcome','goodbye','ticket','reactionrole','buttonrole','voicemaster','starboard','bumpreminder','autoresponder','bots','whitelist','roles','role','roleall','rolehumans','stickyrole','stickymessage','enablecommand','disablecommand','forcenickname','serveravatar','serverbanner','customize','embedcopy','webhook','createembed','config'].includes(n)) return 'config';
        return 'other';
    }

    const commandDescriptions = {
        "afkmentions":"Toggle or configure AFK mention detection.","alias":"Manage command aliases.","antiraid":"Configure or toggle anti-raid features.","antighostping":"Anti-ghost ping protection and logging.","antinuke":"Anti-nuke server security.","autoresponder":"Custom autoresponder (bot messages).","autorole":"Auto-assign roles to new users.","avatar":"Display a user's avatar.","avatarhistory":"Show previous avatars of a user.","badge":"Manage or display user badges.","ban":"Ban a user from the server.","birthday":"Set or view a member's birthday.","blackjack":"Blackjack game.","booster":"See info about server boosters.","bots":"List bots and bot management.","bumpreminder":"Set up bump reminders.","buttonrole":"Button-based role assignment.","choose":"Randomly pick one of your options.","config":"Manage bot configs.","createembed":"Make quick embeds.","customize":"Server customization commands.","disablecommand":"Disable a command in your server.","editsnipe":"Snipe edited message.","embedcopy":"Copy embeds from other messages.","enablecommand":"Re-enable a previously disabled command.","evillaugh":"Send an evil laugh RP.","facepalm":"Send a facepalm RP.","filter":"Word filter setup.","forcenickname":"Force set a member's nick.","fun":"View fun commands.","give":"Give currency to another user.","giveaways":"Giveaway system & controls.","goodbye":"Setup goodbye message.","handhold":"Handhold another user (RP/fun).","hardban":"Ban - also remove all messages.","happy":"Send happy RP.","headbang":"Send a headbang RP.","hex":"Show color hex info.","hide":"Hide a channel.","history":"View recent server logs/history.","hug":"Send a virtual hug.","ignore":"Ignore a user/channel.","imute":"Instant mute a user.","imgonly":"Only allow images in a channel.","inrole":"List members in a role.","inviteinfo":"Show information about an invite.","iunmute":"Instantly unmute a user.","jail":"Restrict a member (jail).","juul":"Time for a virtual juul (fun).","kick":"Kick a member.","kiss":"Send a kiss RP/fun.","laugh":"Send a laughing RP/fun.","leaderboard":"Leaderboard for XP, balance, etc.","leveling":"Manage leveling options.","lick":"Lick RP/fun command.","lock":"Lock the current channel.","love":"Express love (fun/RP).","mad":"Mad RP/fun.","mute":"Mute a user.","nervous":"Send a nervous RP.","nsr":"No self-roles, configuration.","nuke":"Delete all and recreate a channel.","nom":"Send a nom RP/action.","nuzzle":"Nuzzle RP/fun.","other":"Miscellaneous commands.","ping":"Show bot latency.","prefix":"View or set server command prefix.","quote":"Random or quoted message.","reaction":"React to a message.","reactionrole":"Set up reaction roles.","reactionsnipe":"Snipe the last reaction.","remind":"Set a reminder.","restrictcommand":"Restrict a command(s) to some roles.","rmute":"Remove mute from a user.","role":"Role management.","roleall":"Add role to everyone.","rolehumans":"Add role to all humans.","roleicon":"Role icon controls.","roleplay":"Fun RP command.","runmute":"Remove unmute.","seen":"See when a user was last seen.","serveravatar":"Get the server avatar.","serverbanner":"Show server banner.","serverinfo":"Show server info.","settings":"Configure bot/server settings.","setup":"Setup the bot ('wizard').","slap":"Slap (RP/fun).","smile":"Smile RP/fun.","snipe":"Snipe the last deleted message.","starboard":"Starboard setup & moderation.","steal":"Steal emojis or images.","stickyrole":"Persist user roles.","stickymessage":"Sticky message setup.","tags":"Tag system.","ticket":"Server ticketing system.","timer":"Set a simple timer.","timezone":"User or server timezone setup.","topcommands":"Show top-used commands.","transferhistory":"Currency transfer history.","unban":"Unban a member.","unhide":"Show a hidden channel.","unjail":"Remove from jail.","unlock":"Unlock the channel.","userinfo":"Show user info.","utility":"Utility commands overview.","vanity":"Manage vanity urls/settings.","voicemaster":"Voice master features.","webhook":"Webhook controls.","welcome":"Welcome message setup.","whitelist":"Whitelist users/roles.","withdraw":"Withdraw currency from your account."
    };

    const commandArguments = {
        "ban":"<user> [reason]","mute":"<user> [duration]","unban":"<user>","kick":"<user> [reason]","userinfo":"[user]","serverinfo":"none","balance":"none","give":"<user> <amount>","avatar":"[user]","ping":"none","jail":"<user> [duration]","hug":"[user]","slap":"<user>","nuke":"none","help":"[command]","lock":"[channel]","unlock":"[channel]","inviteinfo":"[invite]","settings":"[option]","withdraw":"<amount>","remind":"<time> <reminder>","giveaways":"[start/end/list]","reactionrole":"<role> <emoji>","setup":"none","autorole":"<role>","role":"<user> <role>","tickets":"[open/close]","leaderboard":"none"
    };

    const commandPermissions = {
        "ban":"Ban Members","mute":"Mute Members","unban":"Ban Members","kick":"Kick Members","userinfo":"none","serverinfo":"none","balance":"none","give":"none","avatar":"none","ping":"none","jail":"Manage Roles","hug":"none","slap":"none","nuke":"Manage Channels","help":"none","lock":"Manage Channels","unlock":"Manage Channels","inviteinfo":"none","settings":"Manage Server","withdraw":"none","remind":"none","giveaways":"Manage Guild","reactionrole":"Manage Roles","setup":"Manage Server","autorole":"Manage Roles","role":"Manage Roles","ticket":"Manage Channels","leaderboard":"none"
    };

    const commandsData = commandFiles.map(function (name) {
        return {
            name: name,
            category: guessCategory(name),
            description: commandDescriptions[name] || "No description yet.",
            arguments: commandArguments[name] || "none",
            permissions: commandPermissions[name] || "none"
        };
    });

    function initializeCommandsPage() {
        const commandsGrid = document.getElementById('commandsGrid');
        const commandCount = document.getElementById('commandCount');
        const searchInput = document.getElementById('commandSearch');
        const categoryFilter = document.getElementById('categoryFilter');
        const searchClear = document.getElementById('searchClear');
        const clearFilters = document.getElementById('clearFilters');
        const modalContainer = document.getElementById('commandDetailsModalContainer');

        let currentSearch = "";
        let currentCategory = "all";
        let currentCommands = [].concat(commandsData);

        function updateClearButton() {
            const hasFilters = currentSearch.length > 0 || currentCategory !== 'all';
            clearFilters.disabled = !hasFilters;
            searchClear.classList.toggle('visible', currentSearch.length > 0);
        }

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
                card.innerHTML = `<div class="command-category-pill">${cmd.category}</div><div class="command-name">${cmd.name}</div>`;
                card.addEventListener('click', function () {
                    showCommandModal(cmd);
                });
                commandsGrid.appendChild(card);
            });
        }

        function applyFilters() {
            currentSearch = searchInput.value.toLowerCase().trim();
            currentCategory = categoryFilter.value;
            currentCommands = commandsData.filter(function (cmd) {
                const matchesText = cmd.name.toLowerCase().includes(currentSearch) || (cmd.description && cmd.description.toLowerCase().includes(currentSearch));
                const matchesCategory = currentCategory === 'all' || cmd.category === currentCategory;
                return matchesText && matchesCategory;
            });

            updateClearButton();
            renderCommands();
        }

        function clearAllFilters() {
            searchInput.value = "";
            categoryFilter.value = "all";
            currentSearch = "";
            currentCategory = "all";
            applyFilters();
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
            modal.innerHTML = `<button class="cmd-close-btn" title="Close (Esc)"><i class="fas fa-times"></i></button><div class="cmd-title-row"><span class="cmd-title">${cmd.name}</span><button class="cmd-copy-btn" id="cmdCopyBtn" title="Copy command"><i class="fas fa-copy"></i></button></div><div class="cmd-desc">${cmd.description}</div><div class="cmd-section"><div class="cmd-label">Arguments</div><span class="cmd-value">${argVal}</span></div><div class="cmd-section"><div class="cmd-label">Permissions</div><span class="cmd-value">${permVal}</span></div>`;
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
        categoryFilter.addEventListener('change', applyFilters);
        clearFilters.addEventListener('click', clearAllFilters);
        searchClear.addEventListener('click', clearSearch);
        searchInput.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') clearSearch();
        });
        categoryFilter.addEventListener('mousedown', function () {
            categoryFilter.classList.add('open');
            setTimeout(function () {
                categoryFilter.classList.remove('open');
            }, 400);
        });

        applyFilters();
    }

    window.addEventListener('DOMContentLoaded', initializeCommandsPage);
})();
