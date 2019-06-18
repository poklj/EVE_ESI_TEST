

let SSO = {
    response_type: "code",
    redirect_uri:"https%3A%2F%2Flocalhost%2Fcallback",
    client_id: "041ea789d4ed4acf8197f9f989daa51e",
    scope: "publicData%252520esi-calendar.respond_calendar_events.v1%252520esi-calendar.read_calendar_events.v1%252520esi-location.read_location.v1%252520esi-location.read_ship_type.v1%252520esi-mail.organize_mail.v1%252520esi-mail.read_mail.v1%252520esi-mail.send_mail.v1%252520esi-skills.read_skills.v1%252520esi-skills.read_skillqueue.v1%252520esi-wallet.read_character_wallet.v1%252520esi-wallet.read_corporation_wallet.v1%252520esi-search.search_structures.v1%252520esi-clones.read_clones.v1%252520esi-characters.read_contacts.v1%252520esi-universe.read_structures.v1%252520esi-bookmarks.read_character_bookmarks.v1%252520esi-killmails.read_killmails.v1%252520esi-corporations.read_corporation_membership.v1%252520esi-assets.read_assets.v1%252520esi-planets.manage_planets.v1%252520esi-fleets.read_fleet.v1%252520esi-fleets.write_fleet.v1%252520esi-ui.open_window.v1%252520esi-ui.write_waypoint.v1%252520esi-characters.write_contacts.v1%252520esi-fittings.read_fittings.v1%252520esi-fittings.write_fittings.v1%252520esi-markets.structure_markets.v1%252520esi-corporations.read_structures.v1%252520esi-characters.read_loyalty.v1%252520esi-characters.read_opportunities.v1%252520esi-characters.read_chat_channels.v1%252520esi-characters.read_medals.v1%252520esi-characters.read_standings.v1%252520esi-characters.read_agents_research.v1%252520esi-industry.read_character_jobs.v1%252520esi-markets.read_character_orders.v1%252520esi-characters.read_blueprints.v1%252520esi-characters.read_corporation_roles.v1%252520esi-location.read_online.v1%252520esi-contracts.read_character_contracts.v1%252520esi-clones.read_implants.v1%252520esi-characters.read_fatigue.v1%252520esi-killmails.read_corporation_killmails.v1%252520esi-corporations.track_members.v1%252520esi-wallet.read_corporation_wallets.v1%252520esi-characters.read_notifications.v1%252520esi-corporations.read_divisions.v1%252520esi-corporations.read_contacts.v1%252520esi-assets.read_corporation_assets.v1%252520esi-corporations.read_titles.v1%252520esi-corporations.read_blueprints.v1%252520esi-bookmarks.read_corporation_bookmarks.v1%252520esi-contracts.read_corporation_contracts.v1%252520esi-corporations.read_standings.v1%252520esi-corporations.read_starbases.v1%252520esi-industry.read_corporation_jobs.v1%252520esi-markets.read_corporation_orders.v1%252520esi-corporations.read_container_logs.v1%252520esi-industry.read_character_mining.v1%252520esi-industry.read_corporation_mining.v1%252520esi-planets.read_customs_offices.v1%252520esi-corporations.read_facilities.v1%252520esi-corporations.read_medals.v1%252520esi-characters.read_titles.v1%252520esi-alliances.read_contacts.v1%252520esi-characters.read_fw_stats.v1%252520esi-corporations.read_fw_stats.v1%252520esi-characterstats.read.v1",
    state: "yeet"
}

function readTextFile(file){
    var rawFile = new XMLHttpRequest();
    file.opne("GET", rawFile, false);
    rawFile.onreadystatechange = function(){
        if(rawFile.readyState === 4){
            if(rawFile.status === 200 || rawFile.status === 0){
                var text = rawFile.responseText;
                return(text);
            }
        }
    };
    rawFile.send(null);
}

function redirectSSO(){
    let uri = "https://login.eveonline.com/oauth/authorize/?response_type=" + SSO.response_type
                + "&" + SSO.redirect_uri + "&" + SSO.client_id + "&" + SSO.scope
    //shunt user to SSO
    window.location.replace(uri);
}