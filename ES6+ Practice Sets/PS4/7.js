

const podAndTeamAllocation=userData=>{
    const teamId=665743;
    const result={};
    for(const key in userData){
        result[key]=userData[key];

    }
    result.teamId=teamId;
    return result;
}

const userData = { firstName: 'John', lastName: 'Dee' }
console.log(podAndTeamAllocation(userData))
// {firstName: 'John', lastName: 'Dee', teamId: 667543}
