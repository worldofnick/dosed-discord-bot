module.exports = {
    prefix: '!', // 1 character MAX
    restocks: {
        update_interval: 120,
        event_update_interval: 10,
        event_duration: 30,
        regions: {
            eu: "eu", 
            us: "us",
            jpn: "jpn"
        },
        url: "https://www.supremecommunity.com/restocks/",
        channels: {
            eu: ["461202460636217345"],
            us: ["461202477132283914"],
            jpn: ["461202512586866688"]
        },
        wait_between_pages_interval: 1,
        rich_embed_hours_ago_limit: 3, // (hours) the limit for "x hours ago", if greater, a timestamp as string will be displayed (also automatically works with days)
        proxy_switch_interval: 600,
        message_update_interval: 20, // Updates the timestamps in the messages
        request_block_timeout: 300, // The amount of seconds to wait if a request gets blocked
    },
    proxies: [
        { ip: "54.36.162.123", port: 10000},
        { ip: "159.65.63.23", port: 80},
        { ip: "188.166.175.238", port: 80},
        { ip: "178.32.53.138", port: 3128},
        { ip: "109.108.146.157", port: 80},
        { ip: "35.177.71.51", port: 80},
        { ip: "178.239.168.57", port: 8080},
        { ip: "88.208.244.136", port: 80},
        { ip: "89.36.221.125", port: 3128},
        { ip: "35.177.223.228", port: 80},
        { ip: "178.62.92.251", port: 8080},
        { ip: "178.62.13.163", port: 8080},
        { ip: "178.62.0.4", port: 8080},
        { ip: "185.42.221.246", port: 80},
        { ip: "46.101.89.147", port: 8080},
        { ip: "5.152.193.35", port: 808},
        { ip: "138.68.173.29", port: 8080},
    ],
    logger: {
        log_to_file: true,
        log_to_console: true,
        log_file_name: "log.txt",
        log_file_directory: "logs",
        on_error_discord_message: true,
        on_warning_discord_message: true,
        on_log_discord_message: true,
        discord_log_channel_ids: [ '468934013017522176' ],
    },
    commands: [
        {
            name: 'strike add',
            file_name: 'strike_add.js',
            description: 'strike add [user] [reason] : Add strike for a user',
            roles: [ 'admin', 'Server Manager', 'Developer', 'Staff' ]
        },
        {
            name: 'strike remove',
            file_name: 'strike_remove.js',
            description: 'strike remove [user] [strike position] : Remove strike for a user',
            roles: [ 'admin', 'Server Manager', 'Developer', 'Staff' ]
        },
        {
            name: 'strike see',
            file_name: 'strike_see.js',
            description: 'strike see [user] : See all strikes of a user',
            roles: [ 'admin', 'Server Manager', 'Developer', 'Staff' ]
        },
        {
            name: 'strike count',
            file_name: 'strike_count.js',
            description: 'strike count : See how many strikes you have'
        },
        {
            name: 'help',
            file_name: 'help.js',
            description: 'help : Get help for this bot'
        }
    ]
};