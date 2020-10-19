export const getNation = (data) => {
    let keys = Object.keys(data)
    let randomNumber = Math.floor(Math.random() * keys.length);
    return(keys[randomNumber])
}

export const getLeague = (data, nation) => {
    let leagueKeys = Object.keys(data[nation])
    let randomNumber = Math.floor(Math.random() * leagueKeys.length);
    return(leagueKeys[randomNumber])
}

export const getTeam = (data, nation, league) => {
    let numberOfTeams = data[nation][league][0].length;
    let randomNumber = Math.floor(Math.random() * numberOfTeams);
    return(data[nation][league][0][randomNumber])
}