

let SSO = {
    response_type: "code",
    redirect_uri:"http%3A%2F%2Flocalhost%3A63342%2FESI_Test%2FAuthCallback.php",
    client_id: "041ea789d4ed4acf8197f9f989daa51e",
    scope: "publicData%20esi-calendar.respond_calendar_events.v1%20esi-calendar.read_calendar_events.v1%20esi-location.read_location.v1%20esi-location.read_ship_type.v1%20esi-mail.organize_mail.v1%20esi-mail.read_mail.v1%20esi-mail.send_mail.v1%20esi-skills.read_skills.v1%20esi-skills.read_skillqueue.v1%20esi-wallet.read_character_wallet.v1%20esi-wallet.read_corporation_wallet.v1%20esi-search.search_structures.v1%20esi-clones.read_clones.v1%20esi-characters.read_contacts.v1%20esi-universe.read_structures.v1%20esi-bookmarks.read_character_bookmarks.v1%20esi-killmails.read_killmails.v1%20esi-corporations.read_corporation_membership.v1%20esi-assets.read_assets.v1%20esi-planets.manage_planets.v1%20esi-fleets.read_fleet.v1%20esi-fleets.write_fleet.v1%20esi-ui.open_window.v1%20esi-ui.write_waypoint.v1%20esi-characters.write_contacts.v1%20esi-fittings.read_fittings.v1%20esi-fittings.write_fittings.v1%20esi-markets.structure_markets.v1%20esi-corporations.read_structures.v1%20esi-characters.read_loyalty.v1%20esi-characters.read_opportunities.v1%20esi-characters.read_chat_channels.v1%20esi-characters.read_medals.v1%20esi-characters.read_standings.v1%20esi-characters.read_agents_research.v1%20esi-industry.read_character_jobs.v1%20esi-markets.read_character_orders.v1%20esi-characters.read_blueprints.v1%20esi-characters.read_corporation_roles.v1%20esi-location.read_online.v1%20esi-contracts.read_character_contracts.v1%20esi-clones.read_implants.v1%20esi-characters.read_fatigue.v1%20esi-killmails.read_corporation_killmails.v1%20esi-corporations.track_members.v1%20esi-wallet.read_corporation_wallets.v1%20esi-characters.read_notifications.v1%20esi-corporations.read_divisions.v1%20esi-corporations.read_contacts.v1%20esi-assets.read_corporation_assets.v1%20esi-corporations.read_titles.v1%20esi-corporations.read_blueprints.v1%20esi-bookmarks.read_corporation_bookmarks.v1%20esi-contracts.read_corporation_contracts.v1%20esi-corporations.read_standings.v1%20esi-corporations.read_starbases.v1%20esi-industry.read_corporation_jobs.v1%20esi-markets.read_corporation_orders.v1%20esi-corporations.read_container_logs.v1%20esi-industry.read_character_mining.v1%20esi-industry.read_corporation_mining.v1%20esi-planets.read_customs_offices.v1%20esi-corporations.read_facilities.v1%20esi-corporations.read_medals.v1%20esi-characters.read_titles.v1%20esi-alliances.read_contacts.v1%20esi-characters.read_fw_stats.v1%20esi-corporations.read_fw_stats.v1%20esi-characterstats.read.v1",
    state: "yeet"
};

/*
        Holdup Functions
   TODO: Add explanation when not tired
 */
function readTextFile(file){
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, true);
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

function getQueryVariable(variable)
{
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
    }
    return(false);
}

/*
        ACCESS FUNCTIONS
    functions that are accessed from the HTML directly

 */

function redirectSSO(){
    let uri = "https://login.eveonline.com/oauth/authorize/?response_type=" + SSO.response_type
                + "&redirect_uri=" + SSO.redirect_uri + "&client_id=" + SSO.client_id + "&scope=" + SSO.scope;
    //shunt user to SSO
    window.location.replace(uri);
}
/*

 TODO: Remove this once I get the AuthCallback.php working
function callbackSSO(){
    let authcode = getQueryVariable("code");
    let pre = readTextFile("file://../res/esi_id.txt") + ":" + readTextFile("file://../res/SecretKey.txt");
    let Secret = btoa(pre);
    let uri = "https://login.eveonline.com/v2/oauth/token";

    var RequestHeaders = {
        "Authorization" : "Basic" + Secret,
        "Content-Type" : "application/x-www-form-urlencoded",
        "Host" : "login.eveonline.com"
    };
    var postData = {
        "grant_type" : "authorization_code",
        "code" : authcode
    };

    var request = new XMLHttpRequest();
    request.onreadystatechange= function () {
        if (request.readyState==4) {
            //TODO: Add the Receive functionality
        }
    };
    //Open the request
    request.open("POST", uri, true);
    // Dump all Request headers into the request
    for (let requestHeadersKey in RequestHeaders) {
        request.setRequestHeader(requestHeadersKey, RequestHeaders[requestHeadersKey]);
    }
    request.send(postData);
}

*/