showTeams = (sportTeams) => {
    const teamsDiv = document.querySelector('#sports-teams');
    sportTeams.forEach(team => {
        let teamElement = document.createElement('p');
        teamElement.innerText = `The ${team.name} are a ${team.sport} team and their head coach is ${team.head_coach}.`;
        teamsDiv.append(teamElement);
    }); 
}

fetch('http://localhost:3001/api/v1/sport-teams')
.then(response => response.json())
.then(sportTeams => showTeams(sportTeams));

const newTeam1 = {
    id: 14,
    name: "Denver Broncos",
    head_coach: "Vic Fangio",
    sport: "football"
}

const newTeam2 = {
    id: 10,
    name: 'Colorado Rapids',
    head_coach: 'Robin Fraser',
    sport: 'soccer'
}


fetch('http://localhost:3001/api/v1/sport-teams',  {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTeam1),
})
.then(response => response.json())
.then(newTeam1 => console.log(newTeam1));

fetch('http://localhost:3001/api/v1/sport-teams',  {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTeam2),
})
.then(response => response.json())
.then(newTeam2 => console.log(newTeam2));

fetch('http://localhost:3001/api/v1/sport-teams/' + newTeam1.id, {
    method: 'DELETE',
})
.then(response => response.json())
.then(response => console.log(response));