function buildTeam(size) {
    size = parseInt(size);
    if (isNaN(size)) {
        console.log("Usage: bun team.js [num_people_in_team]");
        return [];
    } else if (size >= 2 && size <= 6) {
        console.log("You are building a team of [n] people")
        let teamNames = askForName(size);
        return teamNames;
    } else {
        console.log("Usage: bun team.js [num_people_in_team]");
        return [];
    }
}

function askForName(size) {
    let names = [];
    for (let i = 1; i < size + 1; i++) {
        let thisName = prompt(`Team members ${i} out of ${size}`)
        names.push(thisName);
    }
    return names;
}

function getCharStats(teamNames) {
    let chars = teamNames.join('').length;
    let charsAvg = teamNames.join('').length / teamNames.length;
    return [chars, charsAvg.toFixed(1)];
}

let size = Bun.argv[2];
let teamNames = buildTeam(size);
if (teamNames.length !== 0) {
    console.log("Your team members are: ", teamNames.join(", "))
    let charStats = getCharStats(teamNames);
    console.log(`Your ${size} team members have ${charStats[0]} characters in their names (average ${charStats[1]})`)
}