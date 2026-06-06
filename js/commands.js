(function () {
    const shared = window.LoopShared;
if (shared) {
    shared.initLoadingScreen('loadingScreen');
    shared.initMainStarfield('mainStarsBg', function () {
        return Math.floor(56 + Math.random() * 24);
    }, { minRadius: 0.6, radiusSpread: 0.85, minAlpha: 0.7, alphaSpread: 0.26, minBlur: 2, blurSpread: 8 });
}

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
        name: "buttonrole",
        category: "autorole",
        description: "No description given",
        arguments: "none",
        permissions: "manage guild manage roles"
    },
    {
        name: "buttonrole list",
        category: "autorole",
        description: "No description given",
        arguments: "none",
        permissions: "manage guild manage roles"
    },
    {
        name: "buttonrole add",
        category: "autorole",
        description: "Add a button role to a message",
        arguments: "messagelink role style emoji label",
        permissions: "manage guild manage roles"
    },
    {
        name: "buttonrole reset",
        category: "autorole",
        description: "No description given",
        arguments: "none",
        permissions: "manage guild manage roles"
    },
    {
        name: "buttonrole removeall",
        category: "autorole",
        description: "No description given",
        arguments: "messagelink",
        permissions: "manage guild manage roles"
    },
    {
        name: "buttonrole remove",
        category: "autorole",
        description: "Remove a button role from a message",
        arguments: "messagelink index",
        permissions: "manage guild manage roles"
    },
    {
        name: "reactionrole",
        category: "autorole",
        description: "Set up self-assignable roles with reactions",
        arguments: "none",
        permissions: "none"
    },
    {
        name: "reactionrole add",
        category: "autorole",
        description: "Adds a reaction role to a message",
        arguments: "messagelink reaction role",
        permissions: "none"
    },
    {
        name: "reactionrole reset",
        category: "autorole",
        description: "Clears every reaction role from the guild",
        arguments: "none",
        permissions: "manage guild manage roles"
    },
    {
        name: "reactionrole restore",
        category: "autorole",
        description: "Choose whether reaction roles restore when members rejoin",
        arguments: "option",
        permissions: "manage guild manage roles"
    },
    {
        name: "reactionrole list",
        category: "autorole",
        description: "View a list of every reaction role",
        arguments: "none",
        permissions: "manage guild manage roles"
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
        arguments: "member|or|channel|or|role",
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
    name: "autoreact",
    category: "reaction",
    description: "Auto reaction system for users",
    arguments: "none",
    permissions: "none"
},
{
    name: "autoreact add",
    category: "reaction",
    description: "Adds auto reaction(s) to a user",
    arguments: "member emoji",
    permissions: "manage expressions"
},
{
    name: "autoreact remove",
    category: "reaction",
    description: "Removes an auto reaction for a user",
    arguments: "member emoji",
    permissions: "manage expressions"
},
{
    name: "autoreact clear",
    category: "reaction",
    description: "Clears all auto reactions for a user",
    arguments: "member",
    permissions: "manage expressions"
},
{
    name: "autoreact list",
    category: "reaction",
    description: "View all auto reactions in the server",
    arguments: "none",
    permissions: "none"
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
    },

        {
        name: "prefix",
        category: "primary",
        description: "View guild prefix",
        arguments: "none",
        permissions: "none"
    },
    {
        name: "prefix self",
        category: "primary",
        description: "Set personal prefix across all servers with loop",
        arguments: "prefix",
        permissions: "server booster"
    },
    {
        name: "prefix set",
        category: "primary",
        description: "Set a command prefix for your server",
        arguments: "prefix",
        permissions: "administrator"
    },
    {
        name: "prefix remove",
        category: "primary",
        description: "Remove a command prefix for your server",
        arguments: "none",
        permissions: "administrator"
    },
    {
        name: "settings",
        category: "primary",
        description: "Server configuration",
        arguments: "none",
        permissions: "manage guild"
    },
    {
        name: "settings modlog",
        category: "primary",
        description: "Set mod logs for punishments in the guild",
        arguments: "channel",
        permissions: "manage guild"
    },
    {
        name: "settings staff",
        category: "primary",
        description: "Set staff role(s)",
        arguments: "role",
        permissions: "manage guild"
    },
    {
        name: "settings staff list",
        category: "primary",
        description: "View a list of all staff roles",
        arguments: "none",
        permissions: "manage guild"
    },
    {
        name: "settings config",
        category: "primary",
        description: "View settings configuration for the guild",
        arguments: "none",
        permissions: "manage guild"
    },
    {
        name: "settings resetcases",
        category: "primary",
        description: "Reset jail-log cases",
        arguments: "none",
        permissions: "administrator"
    },

        {
    name: "filter",
    category: "primary",
    description: "View a variety of options to keep chat clean",
    arguments: "none",
    permissions: "manage channels"
},
{
    name: "filter add",
    category: "primary",
    description: "Add a filtered word",
    arguments: "word",
    permissions: "manage guild manage channels"
},
{
    name: "filter remove",
    category: "primary",
    description: "Remove a filtered word",
    arguments: "word",
    permissions: "manage guild manage channels"
},
{
    name: "filter list",
    category: "primary",
    description: "View a list of filtered words in the server",
    arguments: "none",
    permissions: "manage channels"
},
{
    name: "filter removeall",
    category: "primary",
    description: "Removes all filtered words",
    arguments: "none",
    permissions: "manage channels"
},
{
    name: "filter links",
    category: "primary",
    description: "Delete any message that contains a link",
    arguments: "channel setting parameter",
    permissions: "manage channels"
},
{
    name: "filter links exempt",
    category: "primary",
    description: "Exempt roles from links filter",
    arguments: "role",
    permissions: "manage channels"
},
{
    name: "filter links exempt list",
    category: "primary",
    description: "View a list of roles exempted from links filter",
    arguments: "none",
    permissions: "manage channels"
},
{
    name: "filter spam",
    category: "primary",
    description: "Delete messages from users that send messages too fast",
    arguments: "channel setting parameters",
    permissions: "manage channels"
},
{
    name: "filter spam exempt",
    category: "primary",
    description: "Exempt roles from the antispam filter",
    arguments: "role",
    permissions: "manage channels"
},
{
    name: "filter spam exempt list",
    category: "primary",
    description: "View a list of roles exempted from the spam filter",
    arguments: "none",
    permissions: "manage channels"
},
{
    name: "filter snipe",
    category: "primary",
    description: "Filter snipe command from allowing certain content",
    arguments: "type",
    permissions: "manage channels"
},
{
    name: "filter caps",
    category: "primary",
    description: "Delete messages that contain too many uppercase characters",
    arguments: "channel setting parameters",
    permissions: "manage channels"
},
{
    name: "filter caps exempt",
    category: "primary",
    description: "Exempt roles from the caps filter",
    arguments: "role",
    permissions: "manage channels"
},
{
    name: "filter caps exempt list",
    category: "primary",
    description: "View list of roles exempted from caps filter",
    arguments: "none",
    permissions: "manage channels"
},
{
    name: "filter invites",
    category: "primary",
    description: "Delete any message that contains a server link",
    arguments: "channel setting parameters",
    permissions: "manage channels"
},
{
    name: "filter invites exempt",
    category: "primary",
    description: "Exempt roles from the invite filter",
    arguments: "role",
    permissions: "manage channels"
},
{
    name: "filter invites exempt list",
    category: "primary",
    description: "View list of roles exempted from invites filter",
    arguments: "none",
    permissions: "manage channels"
},
{
    name: "filter emoji",
    category: "primary",
    description: "Delete any message exceeding the threshold for emojis",
    arguments: "channel setting parameters",
    permissions: "manage channels"
},
{
    name: "filter emoji exempt",
    category: "primary",
    description: "Exempt roles from the emoji filter",
    arguments: "role",
    permissions: "manage channels"
},
{
    name: "filter emoji exempt list",
    category: "primary",
    description: "View list of roles exempted from emoji filter",
    arguments: "none",
    permissions: "manage channels"
},
    {
        name: "boosts",
        category: "primary",
        description: "Set up a boost message in a channel",
        arguments: "none",
        permissions: "manage guild"
    },
    {
        name: "boosts variables",
        category: "primary",
        description: "View all available variables for boost messages",
        arguments: "none",
        permissions: "manage guild"
    },
    {
        name: "boosts view",
        category: "primary",
        description: "View a boost message for a channel",
        arguments: "channel",
        permissions: "manage guild"
    },
    {
        name: "boosts list",
        category: "primary",
        description: "View all boost messages",
        arguments: "none",
        permissions: "manage guild"
    },
    {
        name: "boosts remove",
        category: "primary",
        description: "Remove a boost message from a channel",
        arguments: "channel",
        permissions: "manage guild"
    },
    {
        name: "boosts add",
        category: "primary",
        description: "Add a boost message to a channel",
        arguments: "channel message",
        permissions: "manage guild"
    },
    {
        name: "alias",
        category: "primary",
        description: "Create your own shortcuts for commands",
        arguments: "none",
        permissions: "manage guild"
    },
    {
        name: "alias add",
        category: "primary",
        description: "Create an alias for a command",
        arguments: "shortcut command",
        permissions: "manage guild"
    },
    {
        name: "alias removeall",
        category: "primary",
        description: "Remove all aliases for a command",
        arguments: "command",
        permissions: "manage guild"
    },
    {
        name: "alias list",
        category: "primary",
        description: "List every alias for all commands",
        arguments: "none",
        permissions: "manage guild"
    },
    {
        name: "alias remove",
        category: "primary",
        description: "Remove an alias for a command",
        arguments: "shortcut",
        permissions: "manage guild"
    },
    {
        name: "alias reset",
        category: "primary",
        description: "Reset every alias for all commands",
        arguments: "none",
        permissions: "manage guild"
    },
    {
        name: "alias view",
        category: "primary",
        description: "View command execution for an alias",
        arguments: "shortcut",
        permissions: "manage guild"
    },
    {
        name: "stickymessage",
        category: "primary",
        description: "Set up a sticky message in a channel",
        arguments: "none",
        permissions: "manage guild"
    },
    {
        name: "stickymessage list",
        category: "primary",
        description: "View all sticky messages",
        arguments: "none",
        permissions: "manage guild"
    },
    {
        name: "stickymessage add",
        category: "primary",
        description: "Add a sticky message to a channel",
        arguments: "channel message",
        permissions: "manage guild"
    },
    {
        name: "stickymessage view",
        category: "primary",
        description: "View a sticky message for a channel",
        arguments: "channel",
        permissions: "manage guild"
    },
    {
        name: "stickymessage remove",
        category: "primary",
        description: "Remove a sticky message from a channel",
        arguments: "channel",
        permissions: "manage guild"
    },
    {
        name: "welcome",
        category: "primary",
        description: "Set up a welcome message for a channel",
        arguments: "none",
        permissions: "manage guild"
    },
    {
        name: "welcome remove",
        category: "primary",
        description: "Remove a welcome message from a channel",
        arguments: "channel",
        permissions: "manage guild"
    },
    {
        name: "welcome variables",
        category: "primary",
        description: "View all available variables for welcome messages",
        arguments: "none",
        permissions: "manage guild"
    },
    {
        name: "welcome add",
        category: "primary",
        description: "Add a welcome message for a channel",
        arguments: "channel message",
        permissions: "manage guild"
    },
    {
        name: "welcome list",
        category: "primary",
        description: "View all welcome messages",
        arguments: "none",
        permissions: "manage guild"
    },
    {
        name: "welcome view",
        category: "primary",
        description: "View a welcome message for a channel",
        arguments: "channel",
        permissions: "manage guild"
    },
    {
        name: "goodbye",
        category: "primary",
        description: "Set up a goodbye message for a channel",
        arguments: "none",
        permissions: "manage guild"
    },
    {
        name: "goodbye add",
        category: "primary",
        description: "Add a goodbye message for a channel",
        arguments: "channel message",
        permissions: "manage guild"
    },
    {
        name: "goodbye variables",
        category: "primary",
        description: "View all available variables for goodbye messages",
        arguments: "none",
        permissions: "manage guild"
    },
    {
        name: "goodbye remove",
        category: "primary",
        description: "Remove a goodbye message from a channel",
        arguments: "channel",
        permissions: "manage guild"
    },
    {
        name: "goodbye view",
        category: "primary",
        description: "View a goodbye message for a channel",
        arguments: "channel",
        permissions: "manage guild"
    },
    {
        name: "goodbye list",
        category: "primary",
        description: "View all goodbye messages",
        arguments: "none",
        permissions: "manage guild"
    },
    {
        name: "imgonly",
        category: "primary",
        description: "Set up an image only channel",
        arguments: "none",
        permissions: "manage guild"
    },
    {
        name: "imgonly remove",
        category: "primary",
        description: "Remove a gallery channel",
        arguments: "channel",
        permissions: "manage guild"
    },
    {
        name: "imgonly list",
        category: "primary",
        description: "View all gallery channels",
        arguments: "none",
        permissions: "manage guild"
    },
    {
        name: "imgonly add",
        category: "primary",
        description: "Set up a gallery channel",
        arguments: "channel",
        permissions: "manage guild"
    },
    {
        name: "evoke",
        category: "primary",
        description: "Change punishment message for a DM or command response",
        arguments: "none",
        permissions: "manage guild"
    },
    {
        name: "evoke remove",
        category: "primary",
        description: "Remove custom message for a command",
        arguments: "command",
        permissions: "manage guild"
    },
    {
        name: "evoke view",
        category: "primary",
        description: "View the custom message for a command",
        arguments: "command",
        permissions: "manage guild"
    },
    {
        name: "autoresponder",
        category: "primary",
        description: "No description given",
        arguments: "none",
        permissions: "manage guild"
    },
    {
        name: "autoresponder remove",
        category: "primary",
        description: "Remove a reply for a trigger word",
        arguments: "trigger",
        permissions: "manage channels"
    },
    {
        name: "autoresponder add",
        category: "primary",
        description: "Create a reply for a trigger word",
        arguments: "args",
        permissions: "manage channels"
    },
    {
        name: "autoresponder update",
        category: "primary",
        description: "Update a reply for a trigger word",
        arguments: "args",
        permissions: "manage channels"
    },
    {
        name: "autoresponder variables",
        category: "primary",
        description: "View a list of available variables",
        arguments: "none",
        permissions: "manage channels"
    },
    {
        name: "autoresponder exclusive",
        category: "primary",
        description: "No description given",
        arguments: "role|or|channel, trigger",
        permissions: "manage channels"
    },
    {
        name: "autoresponder exclusive list",
        category: "primary",
        description: "No description given",
        arguments: "trigger",
        permissions: "manage channels"
    },
    {
        name: "autoresponder list",
        category: "primary",
        description: "View auto-reply triggers in the guild",
        arguments: "none",
        permissions: "manage channels"
    },
    {
        name: "autoresponder reset",
        category: "primary",
        description: "Remove every auto response",
        arguments: "none",
        permissions: "manage channels"
    },
    {
        name: "enablecommand",
        category: "primary",
        description: "Enable a previously disabled command in a channel",
        arguments: "channel|or|member, command",
        permissions: "manage channels"
    },
    {
        name: "enablecommand all",
        category: "primary",
        description: "Enable a command in every channel",
        arguments: "command",
        permissions: "manage channels"
    },
    {
        name: "disablecommand",
        category: "primary",
        description: "Disable a command in a channel",
        arguments: "channel or member, command",
        permissions: "manage channels"
    },
    {
        name: "disablecommand list",
        category: "primary",
        description: "View a list of disabled commands in the guild",
        arguments: "none",
        permissions: "manage channels"
    },
    {
        name: "disablecommand all",
        category: "primary",
        description: "Disable a command in every channel",
        arguments: "command",
        permissions: "manage channels"
    },
    {
        name: "enablemodule",
        category: "primary",
        description: "Enable a module in a channel",
        arguments: "channel module",
        permissions: "none"
    },
    {
        name: "enablemodule all",
        category: "primary",
        description: "Enable a module in every channel",
        arguments: "module",
        permissions: "manage channels"
    },

        {
        name: "disablerole",
        category: "primary",
        description: "Disable a role from using a command in a channel",
        arguments: "channel cmd role",
        permissions: "manage channels"
    },
    {
        name: "disablerole list",
        category: "primary",
        description: "View a list of all commands disabled in channels",
        arguments: "none",
        permissions: "manage channels"
    },
    {
        name: "enablerole",
        category: "primary",
        description: "Re-enable a role to use a command in a channel",
        arguments: "channel cmd role",
        permissions: "manage channels"
    },
    {
        name: "disablemodule",
        category: "primary",
        description: "Disable a module in a channel",
        arguments: "channel module",
        permissions: "manage channels"
    },
    {
        name: "disablemodule all",
        category: "primary",
        description: "Disable a module in every channel",
        arguments: "module",
        permissions: "manage channels"
    },
    {
        name: "disablemodule list",
        category: "primary",
        description: "View a list of disabled modules in the guild",
        arguments: "none",
        permissions: "manage channels"
    },
    {
        name: "ignore",
        category: "primary",
        description: "No description given",
        arguments: "member|or|channel",
        permissions: "administrator"
    },
    {
        name: "ignore list",
        category: "primary",
        description: "View a list of ignored members or channels",
        arguments: "none",
        permissions: "administrator"
    },
    {
        name: "ignore remove",
        category: "primary",
        description: "Remove ignoring for a member or channel",
        arguments: "member|or|channel",
        permissions: "administrator"
    },
    {
        name: "ignore add",
        category: "primary",
        description: "Ignore a member or channel",
        arguments: "member|or|channel",
        permissions: "administrator"
    },
    {
        name: "seticon",
        category: "primary",
        description: "Set a new guild icon",
        arguments: "url",
        permissions: "manage guild"
    },
    {
        name: "setsplashbackground",
        category: "primary",
        description: "Set a new guild splash background",
        arguments: "url",
        permissions: "manage guild"
    },
    {
        name: "setbanner",
        category: "primary",
        description: "Set a new guild banner",
        arguments: "url",
        permissions: "manage guild"
    },
    {
        name: "unpin",
        category: "primary",
        description: "Unpin a message",
        arguments: "message",
        permissions: "manage messages"
    },
    {
        name: "pin",
        category: "primary",
        description: "Pin the most recent message or by url",
        arguments: "message",
        permissions: "manage messages"
    },
    {
        name: "firstmessage",
        category: "primary",
        description: "Get a link for the first message in a channel",
        arguments: "channel",
        permissions: "none"
    },
    {
        name: "pins",
        category: "primary",
        description: "Pin archival system commands",
        arguments: "none",
        permissions: "manage guild"
    },
    {
        name: "pins unpin",
        category: "primary",
        description: "Enable or disable the unpinning of messages during archival",
        arguments: "option",
        permissions: "manage guild"
    },
    {
        name: "pins config",
        category: "primary",
        description: "View pin archival config",
        arguments: "none",
        permissions: "manage guild"
    },
    {
        name: "pins reset",
        category: "primary",
        description: "Reset the pin archival config",
        arguments: "none",
        permissions: "manage guild"
    },
    {
        name: "pins channel",
        category: "primary",
        description: "Set the pin archival channel",
        arguments: "channel",
        permissions: "manage guild"
    },
    {
        name: "pins archive",
        category: "primary",
        description: "Archive the pins in the current channel",
        arguments: "none",
        permissions: "manage guild"
    },
    {
        name: "pins set",
        category: "primary",
        description: "Enable or disable the pin archival system",
        arguments: "option",
        permissions: "manage guild"
    },
    {
        name: "webhook",
        category: "primary",
        description: "Set up webhooks in your server",
        arguments: "none",
        permissions: "manage webhooks"
    },
    {
        name: "webhook edit",
        category: "primary",
        description: "Send a message to an existing channel webhook",
        arguments: "messagelink|message or embed code",
        permissions: "manage webhooks"
    },
    {
        name: "webhooks list",
        category: "primary",
        description: "List all available webhooks in the server",
        arguments: "none",
        permissions: "none"
    },
    {
        name: "webhook delete",
        category: "primary",
        description: "Delete a webhook for a channel",
        arguments: "identifier",
        permissions: "manage webhooks"
    },
    {
        name: "webhook create",
        category: "primary",
        description: "Create a webhook to forward messages to",
        arguments: "name",
        permissions: "manage webhooks"
    },
    {
        name: "webhook send",
        category: "primary",
        description: "Send a message to an existing channel webhook",
        arguments: "identifier|message or embed code",
        permissions: "manage webhooks"
    },
    {
        name: "customize",
        category: "primary",
        description: "No description given",
        arguments: "none",
        permissions: "server owner"
    },
    {
        name: "customize bio",
        category: "primary",
        description: "No description given",
        arguments: "text",
        permissions: "server owner"
    },
    {
        name: "customize avatar",
        category: "primary",
        description: "No description given",
        arguments: "url",
        permissions: "server owner"
    },
    {
        name: "customize banner",
        category: "primary",
        description: "No description given",
        arguments: "url",
        permissions: "server owner"
    },
    {
        name: "badge",
        category: "primary",
        description: "No description given",
        arguments: "setting",
        permissions: "manage guild"
    },
    {
        name: "badge message",
        category: "primary",
        description: "No description given",
        arguments: "message",
        permissions: "manage guild"
    },
    {
        name: "badge message view",
        category: "primary",
        description: "No description given",
        arguments: "none",
        permissions: "manage guild"
    },
    {
        name: "badge channel",
        category: "primary",
        description: "No description given",
        arguments: "channel",
        permissions: "manage guild"
    },
    {
        name: "badge role",
        category: "primary",
        description: "No description given",
        arguments: "none",
        permissions: "manage guild"
    },
    {
        name: "badge role remove",
        category: "primary",
        description: "No description given",
        arguments: "role",
        permissions: "manage guild"
    },
    {
        name: "badge role add",
        category: "primary",
        description: "No description given",
        arguments: "role",
        permissions: "manage guild"
    },
    {
        name: "badge role list",
        category: "primary",
        description: "No description given",
        arguments: "none",
        permissions: "manage guild"
    },
    {
        name: "badge sync",
        category: "primary",
        description: "No description given",
        arguments: "none",
        permissions: "manage guild"
    },
    {
        name: "boosterrole",
        category: "primary",
        description: "Set the base role for where boost roles will go under",
        arguments: "role",
        permissions: "manage guild"
    },
    {
        name: "boosterrole award",
        category: "primary",
        description: "Reward a member a specific role upon boost",
        arguments: "role",
        permissions: "manage guild"
    },
    {
        name: "boosterrole award view",
        category: "primary",
        description: "View the current award role",
        arguments: "none",
        permissions: "manage guild"
    },
    {
        name: "boosterrole award remove",
        category: "primary",
        description: "Remove the reward role",
        arguments: "none",
        permissions: "manage guild"
    },
    {
        name: "boosterrole filter",
        category: "primary",
        description: "Blacklist words for booster role names",
        arguments: "word",
        permissions: "manage guild"
    },
    {
        name: "boosterrole filter list",
        category: "primary",
        description: "View blacklisted words for booster role names",
        arguments: "none",
        permissions: "manage guild"
    },
    {
        name: "boosterrole rename",
        category: "primary",
        description: "Edit your booster role name",
        arguments: "new name",
        permissions: "boosters only"
    },
    {
        name: "boosterrole icon",
        category: "primary",
        description: "Set an icon for your booster role",
        arguments: "url",
        permissions: "boosters only"
    },

        {
    name: "log",
    category: "logging",
    description: "No description given",
    arguments: "none",
    permissions: "none"
},
{
    name: "log color",
    category: "logging",
    description: "No description given",
    arguments: "channel event color",
    permissions: "none"
},
{
    name: "log color list",
    category: "logging",
    description: "No description given",
    arguments: "channel",
    permissions: "none"
},
{
    name: "log remove",
    category: "logging",
    description: "No description given",
    arguments: "channel event",
    permissions: "none"
},
{
    name: "log add",
    category: "logging",
    description: "Set up logging for your community",
    arguments: "channel event",
    permissions: "none"
},
{
    name: "log ignore",
    category: "logging",
    description: "No description given",
    arguments: "member or channel",
    permissions: "none"
},
{
    name: "log ignore list",
    category: "logging",
    description: "No description given",
    arguments: "none",
    permissions: "none"
},

        {
    name: "starboard",
    category: "starboard",
    description: "Showcase the best messages in your server",
    arguments: "none",
    permissions: "none"
},
{
    name: "starboard emoji",
    category: "starboard",
    description: "Sets the emoji that triggers the starboard messages",
    arguments: "emoji",
    permissions: "manage guild"
},
{
    name: "starboard config",
    category: "starboard",
    description: "View the settings for starboard in guild",
    arguments: "none",
    permissions: "manage guild"
},
{
    name: "starboard attachments",
    category: "starboard",
    description: "Allow attachments to appear on Starboard posts",
    arguments: "setting",
    permissions: "manage guild"
},
{
    name: "starboard set",
    category: "starboard",
    description: "Sets the channel where starboard messages will be sent to",
    arguments: "channel",
    permissions: "manage guild"
},
{
    name: "starboard unlock",
    category: "starboard",
    description: "Enables/unlocks starboard from operating",
    arguments: "none",
    permissions: "manage guild"
},
{
    name: "starboard color",
    category: "starboard",
    description: "Set default color for starboard posts",
    arguments: "color",
    permissions: "manage guild"
},
{
    name: "starboard selfstar",
    category: "starboard",
    description: "Allow an author to star their own message",
    arguments: "setting",
    permissions: "manage guild"
},
{
    name: "starboard jumpurl",
    category: "starboard",
    description: "Allow the jump URL to appear on a Starboard post",
    arguments: "setting",
    permissions: "manage guild"
},
{
    name: "starboard lock",
    category: "starboard",
    description: "Disables/locks starboard from operating",
    arguments: "none",
    permissions: "manage guild"
},
{
    name: "starboard reset",
    category: "starboard",
    description: "Resets guild's configuration for starboard",
    arguments: "none",
    permissions: "manage guild"
},
{
    name: "starboard threshold",
    category: "starboard",
    description: "Sets the default amount stars needed to post",
    arguments: "threshold",
    permissions: "manage guild"
},
{
    name: "starboard timestamp",
    category: "starboard",
    description: "Allow a timestamp to appear on a Starboard post",
    arguments: "setting",
    permissions: "manage guild"
},

        {
        name: "giveaways",
        category: "giveaways",
        description: "No description given",
        arguments: "none",
        permissions: "none"
    },
    {
        name: "giveaways start",
        category: "giveaways",
        description: "Start a giveaway with your provided duration, winners, and prize description",
        arguments: "channel duration winners prize",
        permissions: "manage channels"
    },
    {
        name: "giveaway reroll",
        category: "giveaways",
        description: "Pick a new winner from an ended giveaway",
        arguments: "message link winners",
        permissions: "manage channels"
    },
    {
        name: "giveaways end",
        category: "giveaways",
        description: "End an active giveaway early",
        arguments: "message link",
        permissions: "manage channels"
    },
    {
        name: "giveaways list",
        category: "giveaways",
        description: "View a list of active giveaways in the server",
        arguments: "none",
        permissions: "manage channels"
    },
    {
        name: "giveaways edit",
        category: "giveaways",
        description: "Edit options and limits for a specific giveaway",
        arguments: "none",
        permissions: "manage channels"
    },
    {
        name: "giveaways edit prize",
        category: "giveaways",
        description: "Change the prize on a giveaway",
        arguments: "message link prize",
        permissions: "manage channels"
    },
    {
        name: "giveaways edit duration",
        category: "giveaways",
        description: "Change the time on a active giveaway",
        arguments: "message link date",
        permissions: "manage channels"
    },
    {
        name: "giveaways edit winners",
        category: "giveaways",
        description: "Change the amount of winners for a giveaway",
        arguments: "message link count",
        permissions: "manage channels"
    },
    {
        name: "counter",
        category: "moderation",
        description: "Create counters for everybody to see",
        arguments: "none",
        permissions: "manage channels"
    },
    {
        name: "counter remove",
        category: "moderation",
        description: "Remove a channel counter",
        arguments: "channel action",
        permissions: "manage channels"
    },
    {
        name: "counter add",
        category: "moderation",
        description: "Create channel counter",
        arguments: "option channel",
        permissions: "manage channels"
    },
    {
        name: "counter list",
        category: "moderation",
        description: "List every counter available in the server",
        arguments: "none",
        permissions: "manage channels"
    },
    {
        name: "counter set",
        category: "moderation",
        description: "Set a channel counter to an existing channel",
        arguments: "channel option",
        permissions: "manage channels"
    },
    {
        name: "timer",
        category: "moderation",
        description: "Post repeating messages in your server",
        arguments: "none",
        permissions: "none"
    },
    {
        name: "timer remove",
        category: "moderation",
        description: "Remove repeating message from a channel",
        arguments: "channel",
        permissions: "manage guild"
    },
    {
        name: "timer add",
        category: "moderation",
        description: "Add repeating message to a channel",
        arguments: "channel interval message",
        permissions: "manage guild"
    },
    {
        name: "timer list",
        category: "moderation",
        description: "View all auto messages in your server",
        arguments: "none",
        permissions: "manage guild"
    },
    {
        name: "timer view",
        category: "moderation",
        description: "Preview a channel's auto message",
        arguments: "channel",
        permissions: "manage guild"
    },
    {
        name: "clearsnipe",
        category: "moderation",
        description: "Clear all results for reactions, edits and messages",
        arguments: "none",
        permissions: "manage messages"
    },
    {
        name: "reactionhistory",
        category: "moderation",
        description: "See logged reactions for a message",
        arguments: "message link",
        permissions: "manage messages"
    },
    {
        name: "reactionsnipe",
        category: "moderation",
        description: "Snipe the latest reaction that was removed",
        arguments: "none",
        permissions: "none"
    },
    {
        name: "editsnipe",
        category: "moderation",
        description: "Snipe the latest message that was edited",
        arguments: "index",
        permissions: "none"
    },
    {
        name: "snipe",
        category: "moderation",
        description: "Snipe the latest message that was deleted",
        arguments: "index",
        permissions: "none"
    },

        {
        name: "snipe",
        category: "moderation",
        description: "Snipe the latest message that was deleted",
        arguments: "index",
        permissions: "none"
    },
    {
        name: "tempban",
        category: "moderation",
        description: "Temporarily ban a user",
        arguments: "member duration reason",
        permissions: "ban members"
    },
    {
        name: "remind",
        category: "moderation",
        description: "Get reminders for a duration set about whatever you choose",
        arguments: "reminder",
        permissions: "none"
    },
    {
        name: "reminder remove",
        category: "moderation",
        description: "Remove a reminder",
        arguments: "id",
        permissions: "none"
    },
    {
        name: "remind list",
        category: "moderation",
        description: "View a list of your reminders",
        arguments: "none",
        permissions: "none"
    },
    {
        name: "reminders",
        category: "moderation",
        description: "View a list of your reminders",
        arguments: "none",
        permissions: "none"
    },
    {
        name: "warn",
        category: "moderation",
        description: "Warns the mentioned user",
        arguments: "member reason",
        permissions: "none"
    },
    {
        name: "thread",
        category: "moderation",
        description: "Commands to manage threads and forum posts",
        arguments: "none",
        permissions: "none"
    },
    {
        name: "thread unlock",
        category: "moderation",
        description: "Unlock a thread or forum post",
        arguments: "thread reason",
        permissions: "manage threads"
    },
    {
        name: "thread add",
        category: "moderation",
        description: "Add a member to a thread or forum post",
        arguments: "thread reason",
        permissions: "manage threads"
    },
    {
        name: "thread lock",
        category: "moderation",
        description: "Lock a thread or forum post",
        arguments: "thread reason",
        permissions: "manage threads"
    },
    {
        name: "thread remove",
        category: "moderation",
        description: "Remove a member from a thread",
        arguments: "thread member",
        permissions: "manage threads"
    },
    {
        name: "thread watch",
        category: "moderation",
        description: "No description given",
        arguments: "thread",
        permissions: "manage channels"
    },
    {
        name: "thread rename",
        category: "moderation",
        description: "Rename a thread",
        arguments: "thread new name",
        permissions: "manage threads"
    },

        {
        name: "lockdown",
        category: "moderation",
        description: "Lockdown a channel",
        arguments: "channel reason",
        permissions: "manage channels"
    },
    {
        name: "lockdown all",
        category: "moderation",
        description: "Lock all channels",
        arguments: "reason",
        permissions: "manage channels"
    },
    {
        name: "lockdown role",
        category: "moderation",
        description: "No description given",
        arguments: "role",
        permissions: "manage guild"
    },
    {
        name: "lockdown ignore",
        category: "moderation",
        description: "Blocks a channel from being altered when using the unlock all command",
        arguments: "none",
        permissions: "manage guild"
    },
    {
        name: "lockdown ignore remove",
        category: "moderation",
        description: "Remove an ignored lockdown channel",
        arguments: "channel",
        permissions: "manage guild"
    },
    {
        name: "lockdown ignore list",
        category: "moderation",
        description: "View all ignored lockdown channels",
        arguments: "none",
        permissions: "manage guild"
    },
    {
        name: "lockdown ignore add",
        category: "moderation",
        description: "Set an ignored lockdown channel",
        arguments: "channel",
        permissions: "manage guild"
    },
    {
        name: "unlock",
        category: "moderation",
        description: "Unlock a channel",
        arguments: "channel reason",
        permissions: "manage channels"
    },
    {
        name: "unlock all",
        category: "moderation",
        description: "Unlocks every channel",
        arguments: "reason",
        permissions: "manage channels"
    },
    {
        name: "stripstaff",
        category: "moderation",
        description: "No description given",
        arguments: "member",
        permissions: "administrator"
    },
    {
        name: "jail",
        category: "moderation",
        description: "Jails the mentioned user",
        arguments: "member duration reason",
        permissions: "none"
    },
    {
        name: "modstats",
        category: "moderation",
        description: "No description given",
        arguments: "member",
        permissions: "manage messages"
    },
    {
        name: "warnings",
        category: "moderation",
        description: "View warnings for a member",
        arguments: "member",
        permissions: "manage messages"
    },
    {
        name: "moderationhistory",
        category: "moderation",
        description: "View moderation actions from staff member",
        arguments: "member command",
        permissions: "manage messages"
    },
    {
        name: "history",
        category: "moderation",
        description: "View a list of every punishment recorded",
        arguments: "member command",
        permissions: "manage messages"
    },
    {
        name: "history view",
        category: "moderation",
        description: "View an ID's case log",
        arguments: "case id",
        permissions: "manage messages"
    },
    {
        name: "history remove",
        category: "moderation",
        description: "Remove a punishment from a member",
        arguments: "member case id",
        permissions: "none"
    },
    {
        name: "history removeall",
        category: "moderation",
        description: "Remove all punishments from a member",
        arguments: "member",
        permissions: "administrator"
    },
    {
        name: "jaillist",
        category: "moderation",
        description: "View a list of every current jailed member",
        arguments: "none",
        permissions: "manage messages"
    },
    {
        name: "proof",
        category: "moderation",
        description: "No description given",
        arguments: "one",
        permissions: "manage messages"
    },
    {
        name: "proof list",
        category: "moderation",
        description: "No description given",
        arguments: "case id",
        permissions: "manage messages"
    },
    {
        name: "proof add",
        category: "moderation",
        description: "Add attachment(s) to a case log",
        arguments: "case id media url",
        permissions: "manage messages"
    },
    {
        name: "proof view",
        category: "moderation",
        description: "Show attachments for a case log",
        arguments: "case id",
        permissions: "manage messages"
    },
    {
        name: "proof set",
        category: "moderation",
        description: "Set the proof and attachments if applicable for a case log",
        arguments: "case id explanation",
        permissions: "manage messages"
    },
    {
        name: "proof remove",
        category: "moderation",
        description: "Remove an attachment from a case log",
        arguments: "case id index",
        permissions: "manage messages"
    },
    {
        name: "case log",
        category: "moderation",
        description: "View a case log for a member",
        arguments: "case id",
        permissions: "manage messages"
    },
    {
        name: "reason",
        category: "moderation",
        description: "Updates the reason on a case log",
        arguments: "case id reason",
        permissions: "manage messages"
    },
    {
        name: "timeout",
        category: "moderation",
        description: "Mutes the provided member using Discord's timeout feature",
        arguments: "member duration reason",
        permissions: "none"
    },
    {
        name: "timeout list",
        category: "moderation",
        description: "View list of timed out members",
        arguments: "none",
        permissions: "moderate members"
    },
    {
        name: "untimeout",
        category: "moderation",
        description: "Removes a timeout for a member",
        arguments: "member reason",
        permissions: "none"
    },
    {
        name: "mute",
        category: "moderation",
        description: "Mute a member in the server",
        arguments: "member duration reason",
        permissions: "none"
    },
    {
        name: "unmute",
        category: "moderation",
        description: "Unmute a member in the server",
        arguments: "member reason",
        permissions: "moderate members"
    },
    {
        name: "imute",
        category: "moderation",
        description: "Remove a member's attach files & embed links permission",
        arguments: "member reason",
        permissions: "moderate members"
    },
    {
        name: "iunmute",
        category: "moderation",
        description: "Restore a member's attach files & embed links permission",
        arguments: "member reason",
        permissions: "moderate members"
    },
    {
        name: "rmute",
        category: "moderation",
        description: "Remove a member's add reactions and use external emotes permission",
        arguments: "member reason",
        permissions: "moderate members"
    },
    {
        name: "runmute",
        category: "moderation",
        description: "Restore a member's add reactions and use external emotes permission",
        arguments: "member reason",
        permissions: "moderate members"
    },
    {
        name: "hardban",
        category: "moderation",
        description: "Keep a member banned",
        arguments: "member reason",
        permissions: "none"
    },
    {
        name: "hardban list",
        category: "moderation",
        description: "View a list of hardbanned members",
        arguments: "none",
        permissions: "administrator antinuke admin"
    },
    {
        name: "unbanall",
        category: "moderation",
        description: "Unbans every member in the guild",
        arguments: "none",
        permissions: "server owner"
    },
    {
        name: "unban cancel",
        category: "moderation",
        description: "Cancels a unban all task running",
        arguments: "none",
        permissions: "server owner"
    },
    {
        name: "unban",
        category: "moderation",
        description: "Unbans the mentioned user",
        arguments: "user reason",
        permissions: "none"
    },
    {
        name: "softban",
        category: "moderation",
        description: "Softbans the mentioned user and deletes 1 day of messages",
        arguments: "member delete history reason",
        permissions: "none"
    },
    {
        name: "ban",
        category: "moderation",
        description: "Bans the mentioned user",
        arguments: "member delete history reason",
        permissions: "ban members"
    },
    {
        name: "ban recent",
        category: "moderation",
        description: "No description given",
        arguments: "none",
        permissions: "none"
    },
    {
        name: "ban purge",
        category: "moderation",
        description: "Set default message history purge upon ban",
        arguments: "delete history",
        permissions: "none"
    },
    {
        name: "unjail",
        category: "moderation",
        description: "Unjails the mentioned user",
        arguments: "member reason",
        permissions: "none"
    },
    {
        name: "temprole",
        category: "moderation",
        description: "Temporarily give a role to a member",
        arguments: "member duration role",
        permissions: "manage roles"
    },
    {
        name: "temprole list",
        category: "moderation",
        description: "No description given",
        arguments: "none",
        permissions: "manage roles"
    },
    {
        name: "role",
        category: "moderation",
        description: "Modify a member's roles",
        arguments: "member role",
        permissions: "none"
    },
    {
        name: "role has",
        category: "moderation",
        description: "Add a role to members with a specific role",
        arguments: "role assign role",
        permissions: "none"
    },
    {
        name: "role has remove",
        category: "moderation",
        description: "Remove a role from members with a specific role",
        arguments: "role remove role",
        permissions: "none"
    },
    {
        name: "role hoist",
        category: "moderation",
        description: "Toggle hoisting a role",
        arguments: "role",
        permissions: "none"
    },
    {
        name: "role humans",
        category: "moderation",
        description: "Adds a role to all humans",
        arguments: "role flags",
        permissions: "none"
    },
    {
        name: "role humans remove",
        category: "moderation",
        description: "Remove a role from all humans",
        arguments: "role",
        permissions: "none"
    },
    {
        name: "role color",
        category: "moderation",
        description: "Set a color for a role",
        arguments: "color role",
        permissions: "none"
    },
    {
        name: "role color gradient",
        category: "moderation",
        description: "Set a gradient color for a role",
        arguments: "color second color role",
        permissions: "none"
    },
    {
        name: "role delete",
        category: "moderation",
        description: "Deletes a role",
        arguments: "role",
        permissions: "none"
    },
    {
        name: "role mentionable",
        category: "moderation",
        description: "Toggle mentioning a role",
        arguments: "role",
        permissions: "none"
    },
    {
        name: "role cancel",
        category: "moderation",
        description: "Cancels a mass role task running",
        arguments: "none",
        permissions: "none"
    },
    {
        name: "role restore",
        category: "moderation",
        description: "Restore roles to a member",
        arguments: "member",
        permissions: "none"
    },
    {
        name: "role icon",
        category: "moderation",
        description: "Set an icon for a role",
        arguments: "url role",
        permissions: "none"
    },
    {
        name: "role topcolor",
        category: "moderation",
        description: "Changes your highest role's color",
        arguments: "color member",
        permissions: "none"
    },
    {
        name: "role bots",
        category: "moderation",
        description: "Add a role to all bots",
        arguments: "role",
        permissions: "none"
    },
    {
        name: "role bots remove",
        category: "moderation",
        description: "Remove a role from all bots",
        arguments: "role",
        permissions: "none"
    },
    {
        name: "role edit",
        category: "moderation",
        description: "Changes a role's name",
        arguments: "role name",
        permissions: "none"
    },
    {
        name: "role create",
        category: "moderation",
        description: "Creates a role with an optional color",
        arguments: "color role",
        permissions: "none"
    },

        {
        name: "purge",
        category: "moderation",
        description: "Delete the specified amount of messages from the current channel",
        arguments: "member search",
        permissions: "none"
    },
    {
        name: "purge bots",
        category: "moderation",
        description: "Purge messages from bots in chat",
        arguments: "search",
        permissions: "none"
    },
    {
        name: "purge humans",
        category: "moderation",
        description: "Purge messages from humans in chat",
        arguments: "search",
        permissions: "none"
    },
    {
        name: "purge links",
        category: "moderation",
        description: "Purge messages containing links",
        arguments: "search",
        permissions: "none"
    },
    {
        name: "purge activity",
        category: "moderation",
        description: "Purge activity messages from chat",
        arguments: "search",
        permissions: "none"
    },
    {
        name: "purge mentions",
        category: "moderation",
        description: "Purge mentions from chat",
        arguments: "member search",
        permissions: "none"
    },
    {
        name: "purge images",
        category: "moderation",
        description: "Purge images from chat",
        arguments: "search",
        permissions: "none"
    },
    {
        name: "purge emoji",
        category: "moderation",
        description: "Purge emojis from chat",
        arguments: "search",
        permissions: "none"
    },
    {
        name: "dump",
        category: "moderation",
        description: "Dump all members of a role",
        arguments: "role",
        permissions: "manage roles"
    },
    {
        name: "nuke",
        category: "moderation",
        description: "No description given",
        arguments: "none",
        permissions: "none"
    },
    {
        name: "nuke add",
        category: "moderation",
        description: "Schedule nuke for a channel",
        arguments: "none",
        permissions: "none"
    },
    {
        name: "nuke view",
        category: "moderation",
        description: "View message after scheduled nuke for channel",
        arguments: "channel",
        permissions: "none"
    },
    {
        name: "nuke remove",
        category: "moderation",
        description: "Remove scheduled nuke for a channel",
        arguments: "channel",
        permissions: "none"
    },
    {
        name: "nuke list",
        category: "moderation",
        description: "No description given",
        arguments: "none",
        permissions: "none"
    },
    {
        name: "nuke archive",
        category: "moderation",
        description: "Automatically archive pins upon scheduled nuke",
        arguments: "channel setting",
        permissions: "none"
    },
    {
        name: "newmembers",
        category: "moderation",
        description: "View a list of recently joined members",
        arguments: "count",
        permissions: "none"
    },
    {
        name: "recentban",
        category: "moderation",
        description: "Chunk ban recently joined members",
        arguments: "count reason",
        permissions: "ban members"
    },
    {
        name: "unhide",
        category: "moderation",
        description: "Unhide a channel from a role or member",
        arguments: "channel role|or|member",
        permissions: "none"
    },
    {
        name: "hide",
        category: "moderation",
        description: "Hide a channel from a role or member",
        arguments: "channel role|or|member",
        permissions: "none"
    },
    {
        name: "slowmode",
        category: "moderation",
        description: "Restricts members to sending one message per interval",
        arguments: "none",
        permissions: "none"
    },
    {
        name: "slowmode off",
        category: "moderation",
        description: "Disable slowmode in a channel",
        arguments: "channel",
        permissions: "manage channels"
    },
    {
        name: "slowmode on",
        category: "moderation",
        description: "Enable slowmode in a channel",
        arguments: "channel delay|time",
        permissions: "manage channels"
    },
    {
        name: "setup",
        category: "moderation",
        description: "Start process for setting up the moderation system",
        arguments: "none",
        permissions: "administrator"
    },
    {
        name: "rename",
        category: "moderation",
        description: "Assigns the mentioned user a new nickname in the guild",
        arguments: "member new|name",
        permissions: "none"
    },
    {
        name: "restrictcommand",
        category: "moderation",
        description: "Only allows people with a certain role to use command",
        arguments: "cmd role",
        permissions: "none"
    },
    {
        name: "restrictcommand list",
        category: "moderation",
        description: "View a list of every restricted command",
        arguments: "role|or|command",
        permissions: "manage guild"
    },
    {
        name: "restrictcommand remove",
        category: "moderation",
        description: "Removes the specified roles exclusive permission to use a command",
        arguments: "cmd role",
        permissions: "manage guild"
    },
    {
        name: "restrictcommand add",
        category: "moderation",
        description: "Allows the specified role exclusive permission to use a command",
        arguments: "cmd role",
        permissions: "manage guild"
    },
    {
        name: "stickyrole",
        category: "moderation",
        description: "Reapplies a role on join",
        arguments: "member role",
        permissions: "server owner"
    },
    {
        name: "stickyrole list",
        category: "moderation",
        description: "View a list of every sticky role",
        arguments: "none",
        permissions: "server owner"
    },
    {
        name: "stickyrole add",
        category: "moderation",
        description: "Reapplies a role on join",
        arguments: "member role",
        permissions: "server owner"
    },
    {
        name: "stickyrole remove",
        category: "moderation",
        description: "Removes sticky role on join",
        arguments: "member role",
        permissions: "server owner"
    },
    {
        name: "raid",
        category: "moderation",
        description: "Remove all members that joined in the time provided in the event of a raid",
        arguments: "time action reason",
        permissions: "none"
    },
    {
        name: "forcenickname",
        category: "moderation",
        description: "Force a members current nickname",
        arguments: "member name|to|set",
        permissions: "none"
    },
    {
        name: "forcenickname list",
        category: "moderation",
        description: "View a list of all forced nicknames",
        arguments: "none",
        permissions: "manage guild manage nicknames"
    },
    {
        name: "topic",
        category: "moderation",
        description: "Change the current channel topic",
        arguments: "text",
        permissions: "manage channels"
    },
    {
        name: "naughty",
        category: "moderation",
        description: "Temporarily make a channel NSFW for 30 seconds",
        arguments: "channel",
        permissions: "manage channels"
    },
    {
        name: "permissions",
        category: "moderation",
        description: "Check permissions for a member or myself",
        arguments: "member channel",
        permissions: "manage roles manage channels"
    },

        {
        name: "lastfm",
        category: "lastfm",
        description: "No description given",
        arguments: "none",
        permissions: "none"
    },
    {
        name: "lastfm set",
        category: "lastfm",
        description: "Set your Last.fm username",
        arguments: "username",
        permissions: "none"
    },
    {
        name: "lastfm taste",
        category: "lastfm",
        description: "Compare your music taste between you and someone else",
        arguments: "member period",
        permissions: "none"
    },
    {
        name: "lastfm favorites",
        category: "lastfm",
        description: "View yours or a member's liked tracks",
        arguments: "member",
        permissions: "none"
    },
    {
        name: "lastfm toptracks",
        category: "lastfm",
        description: "View your most listened to tracks",
        arguments: "member period",
        permissions: "none"
    },
    {
        name: "lastfm milestone",
        category: "lastfm",
        description: "No description given",
        arguments: "number",
        permissions: "none"
    },
    {
        name: "lastfm count",
        category: "lastfm",
        description: "View your total Last.fm scrobbles",
        arguments: "member",
        permissions: "none"
    },
    {
        name: "lastfm streak",
        category: "lastfm",
        description: "View your current listening streak",
        arguments: "member",
        permissions: "none"
    },
    {
        name: "lastfm whois",
        category: "lastfm",
        description: "View Last.fm profile information",
        arguments: "member",
        permissions: "none"
    },
    {
        name: "lastfm customcommand",
        category: "lastfm",
        description: "Set your own custom Now Playing command",
        arguments: "substring",
        permissions: "none"
    },
    {
        name: "lastfm customreactions",
        category: "lastfm",
        description: "Set personal upvote and downvote reaction for Now Playing",
        arguments: "upvote downvote",
        permissions: "none"
    },
    {
        name: "lastfm mode",
        category: "lastfm",
        description: "Use a different embed for Now Playing or create your own",
        arguments: "type",
        permissions: "none"
    },

        {
        name: "balance",
        category: "economy",
        description: "Check yours or another users balance",
        arguments: "member",
        permissions: "none"
    },
    {
        name: "bet",
        category: "economy",
        description: "Bet money on a dice roll with multiplier",
        arguments: "amount",
        permissions: "none"
    },
    {
        name: "bet admin",
        category: "economy",
        description: "Set predetermined roll for a user next bet",
        arguments: "member amount",
        permissions: "administrator"
    },
    {
        name: "blackjack",
        category: "economy",
        description: "Play a game of blackjack",
        arguments: "amount",
        permissions: "none"
    },
    {
        name: "daily",
        category: "economy",
        description: "Claim your daily coins",
        arguments: "none",
        permissions: "none"
    },
    {
        name: "hunt",
        category: "economy",
        description: "Go hunting to earn coins",
        arguments: "none",
        permissions: "none"
    },
    {
        name: "mine",
        category: "economy",
        description: "Go mining to earn coins",
        arguments: "none",
        permissions: "none"
    },
    {
        name: "mines",
        category: "economy",
        description: "Play a minesweeper-style gambling game",
        arguments: "amount",
        permissions: "none"
    },
    {
        name: "monthly",
        category: "economy",
        description: "Claim your monthly coins",
        arguments: "none",
        permissions: "none"
    },
    {
        name: "rob",
        category: "economy",
        description: "Rob a user",
        arguments: "member amount",
        permissions: "none"
    },
    {
        name: "yearly",
        category: "economy",
        description: "Claim your yearly coins",
        arguments: "none",
        permissions: "none"
    },

        {
        name: "voicemaster",
        category: "voicemaster",
        description: "Make temporary voice channels in your server",
        arguments: "none",
        permissions: "none"
    },
    {
        name: "voicemaster configuration",
        category: "voicemaster",
        description: "See current configuration for current Voice Channel",
        arguments: "none",
        permissions: "none"
    },
    {
        name: "voicemaster unlock",
        category: "voicemaster",
        description: "Unlock your voice channel",
        arguments: "none",
        permissions: "none"
    },
    {
        name: "voicemaster ghost",
        category: "voicemaster",
        description: "Hide your voice channel",
        arguments: "none",
        permissions: "none"
    },
    {
        name: "voicemaster claim",
        category: "voicemaster",
        description: "Claim an inactive voice channel",
        arguments: "none",
        permissions: "none"
    },
    {
        name: "voicemaster unghost",
        category: "voicemaster",
        description: "Unhide your voice channel",
        arguments: "none",
        permissions: "none"
    },
    {
        name: "voicemaster sendinterface",
        category: "voicemaster",
        description: "Forcefully resend VoiceMaster interface",
        arguments: "none",
        permissions: "none"
    },
    {
        name: "voicemaster name",
        category: "voicemaster",
        description: "Rename your voice channel",
        arguments: "new name",
        permissions: "none"
    },
    {
        name: "voicemaster limit",
        category: "voicemaster",
        description: "Set a member limit to your voice channel",
        arguments: "limit",
        permissions: "none"
    },
    {
        name: "voicemaster role",
        category: "voicemaster",
        description: "Grant roles to members who join and remove from members leaving",
        arguments: "role",
        permissions: "none"
    },
    {
        name: "voicemaster transfer",
        category: "voicemaster",
        description: "Transfer ownership of your channel to another member",
        arguments: "member",
        permissions: "none"
    },
    {
        name: "voicemaster reset",
        category: "voicemaster",
        description: "Reset server configuration for VoiceMaster",
        arguments: "none",
        permissions: "none"
    },
    {
        name: "voicemaster join",
        category: "voicemaster",
        description: "No description given",
        arguments: "none",
        permissions: "none"
    },
    {
        name: "voicemaster join role",
        category: "voicemaster",
        description: "No description given",
        arguments: "role",
        permissions: "none"
    },
    {
        name: "voicemaster setup",
        category: "voicemaster",
        description: "Begin VoiceMaster server configuration setup",
        arguments: "none",
        permissions: "none"
    },
    {
        name: "voicemaster permit",
        category: "voicemaster",
        description: "Permit a member or role to join your VC",
        arguments: "member|or|role",
        permissions: "none"
    },
    {
        name: "voicemaster reject",
        category: "voicemaster",
        description: "Reject a member or role from joining VC",
        arguments: "member|or|role",
        permissions: "none"
    },
    {
        name: "voicemaster category",
        category: "voicemaster",
        description: "Redirect voice channels to custom",
        arguments: "channel",
        permissions: "none"
    },
    {
        name: "voicemaster default",
        category: "voicemaster",
        description: "No description given",
        arguments: "none",
        permissions: "none"
    },
    {
        name: "voicemaster default interface",
        category: "voicemaster",
        description: "Send interface to new Voice Channels",
        arguments: "setting",
        permissions: "none"
    },
    {
        name: "voicemaster default role",
        category: "voicemaster",
        description: "Set the default role for loop to set permissions for",
        arguments: "role",
        permissions: "none"
    },
    {
        name: "voicemaster default name",
        category: "voicemaster",
        description: "Set default name for new Voice Channels",
        arguments: "name",
        permissions: "none"
    },
    {
        name: "voicemaster lock",
        category: "voicemaster",
        description: "Lock your voice channel",
        arguments: "none",
        permissions: "none"
    },

        {
        name: "roblox",
        category: "roblox",
        description: "Gets profile information on the given roblox user",
        arguments: "username",
        permissions: "none"
    },
    {
        name: "roblox link",
        category: "roblox",
        description: "Link your Roblox account to your Discord account",
        arguments: "username",
        permissions: "none"
    },
    {
        name: "roblox verify",
        category: "roblox",
        description: "Verify your Roblox account after setting your bio code",
        arguments: "none",
        permissions: "none"
    },
    {
        name: "roblox fromdiscord",
        category: "roblox",
        description: "Get the linked Roblox account from a Discord user",
        arguments: "user id",
        permissions: "none"
    },
    {
        name: "roblox todiscord",
        category: "roblox",
        description: "Get the linked Discord account from a Roblox user",
        arguments: "username",
        permissions: "none"
    },
    {
        name: "roblox devex",
        category: "roblox",
        description: "Convert Robux to USD using the current DevEx rate",
        arguments: "robux",
        permissions: "none"
    },
    {
        name: "roblox template",
        category: "roblox",
        description: "View details and link for a Roblox asset",
        arguments: "asset id",
        permissions: "none"
    },
    {
        name: "roblox inventory",
        category: "roblox",
        description: "View a Roblox user's public inventory",
        arguments: "username",
        permissions: "none"
    },
    {
        name: "roblox item",
        category: "roblox",
        description: "Search for a Roblox limited item",
        arguments: "query",
        permissions: "none"
    },
    {
        name: "roblox outfits",
        category: "roblox",
        description: "View all outfits for a Roblox user",
        arguments: "username",
        permissions: "none"
    },
    {
        name: "roblox check",
        category: "roblox",
        description: "Check if a Roblox user owns a specific asset",
        arguments: "username|asset id|or|name"
        permissions: "none"
    },
];

const tabCategories = [
    { id: 'primary', label: 'Primary' },
    { id: 'moderation', label: 'Moderation' },
    { id: 'antiraid', label: 'Antiraid' },
    { id: 'autorole', label: 'Autorole' },
    { id: 'reaction', label: 'Reaction' },
    { id: 'levels', label: 'Levels' },
    { id: 'antinuke', label: 'Antinuke' },
    { id: 'logging', label: 'Logging' },
    { id: 'starboard', label: 'Starboard' },
    { id: 'lastfm', label: 'Last.fm' },
    { id: 'economy', label: 'Economy' },
    { id: 'voicemaster', label: 'VoiceMaster' },
    { id: 'roblox', label: 'Roblox' },
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
    : cmd.arguments.split('|').map(a => {
    const display = a.trim().replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return `<span style="background:rgba(255,255,255,0.08); border-radius:4px; padding:2px 8px; font-size:0.85rem; margin-right:4px;">${display}</span>`;
    }).join('');
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
        <button class="cmd-close-btn" aria-label="Close">✕</button>
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
