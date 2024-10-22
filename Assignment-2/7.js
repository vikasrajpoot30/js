// Your ES6+ code here
const getQAEmployees= (teams) =>{
    let allTeams=[...teams.team1,...teams.team2];
    return allTeams.filter(employee=>employee.role==='QA')
}
const teams={
    team1: [
    { name: 'Alice', salary: 50000, role: 'engineer', workExperience: 2 },
    { name: 'Bob', salary: 75000, role: 'QA', workExperience: 5 },
    { name: 'Charlie', salary: 60000, role: 'developer', workExperience: 3 },
    ],
    team2: [
        { name: 'David', salary: 55000, role: 'engineer', workExperience: 3 },
        { name: 'Eve', salary: 80000, role: 'QA', workExperience: 4 },
        { name: 'Frank', salary: 65000, role: 'developer', workExperience: 2 },
        ],
        
       }
       const qaEmployees = getQAEmployees(teams)
       console.log(qaEmployees)
       // Output:
       // [
       // { name: "Bob", salary: 75000, role: "QA", workExperience: 5 },
       // { name: "Eve", salary: 80000, role: "QA", workExperience: 4 },
       // ] 