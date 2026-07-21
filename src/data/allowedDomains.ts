export interface AllowedDomainEntry {
    domains: { label: string; href: string }[];
    names: string;
}

export const allowedDomains: AllowedDomainEntry[] = [
    {
        domains: [
            { label: "discord.com", href: "https://discord.com/" },
            { label: "discord.gg", href: "https://discord.gg/" },
            { label: "dis.gd", href: "https://dis.gd/" }
        ],
        names: "Discord, Дискорд"
    },
    {
        domains: [{ label: "twitch.tv", href: "https://twitch.tv" }],
        names: "Twitch, Твич"
    },
    {
        domains: [
            { label: "youtube.com", href: "https://youtube.com/" },
            { label: "youtu.be", href: "https://youtu.be/" }
        ],
        names: "YouTube, Ютуб"
    },
    {
        domains: [{ label: "instagram.com", href: "https://instagram.com/" }],
        names: "Instagram, Инстаграм"
    },
    {
        domains: [
            { label: "x.com", href: "https://x.com/" },
            { label: "twitter.com", href: "https://twitter.com/" }
        ],
        names: "X, Twitter, Икс, Твиттер"
    },
    {
        domains: [
            { label: "reddit.com", href: "https://reddit.com/" },
            { label: "redd.it", href: "https://redd.it/" }
        ],
        names: "Reddit, Реддит"
    },
    {
        domains: [{ label: "deviantart.com", href: "https://deviantart.com/" }],
        names: "DeviantArt, ДевиантАрт"
    },
    {
        domains: [{ label: "artstation.com", href: "https://artstation.com/" }],
        names: "ArtStation, АртСтейшн, АртСтэйшн"
    },
    {
        domains: [{ label: "behance.net", href: "https://behance.net/" }],
        names: "Behance, Беханс, Биханс"
    },
    {
        domains: [{ label: "tenor.com", href: "https://tenor.com/" }],
        names: "Tenor, Тенор"
    },
    {
        domains: [{ label: "vk.com", href: "https://vk.com/" }],
        names: "VKontakte, VK, ВКонтакте, ВК"
    },
    {
        domains: [
            { label: "pinterest.com", href: "https://pinterest.com/" },
            { label: "pin.it", href: "https://pin.it/" }
        ],
        names: "Pinterest, Пинтерест"
    },
    {
        domains: [{ label: "dsc.gg", href: "https://dsc.gg/" }],
        names: "Link shortener, сократитель ссылок | Discord, Дискорд"
    },
    {
        domains: [{ label: "top.gg", href: "https://top.gg/" }],
        names: "TopGG, ТопГГ"
    },
    {
        domains: [{ label: "disboard.org", href: "https://disboard.org/" }],
        names: "DisBoard (monitoring), ДисБорд (мониторинг), ДисБоард | Discord, Дискорд"
    },
    {
        domains: [
            {
                label: "discordserver.info",
                href: "https://discordserver.info/"
            },
            { label: "mon.lv", href: "https://mon.lv/" }
        ],
        names: "DiscordServer (monitoring), ДискордСервер (мониторинг) | Discord, Дискорд"
    },
    {
        domains: [
            { label: "server-discord.com", href: "https://server-discord.com/" }
        ],
        names: "ServerDiscord (monitoring), СерверДискорд (мониторинг) | Discord, Дискорд | Vare, Вэйр"
    },
    {
        domains: [{ label: "boticord.top", href: "https://boticord.top/" }],
        names: "BotiCord (monitoring), БотиКорд (мониторинг) | Discord, Дискорд"
    },
    {
        domains: [
            { label: "telegram.org", href: "https://telegram.org" },
            { label: "t.me", href: "https://t.me" }
        ],
        names: "Telegram, Телеграмм"
    }
];
