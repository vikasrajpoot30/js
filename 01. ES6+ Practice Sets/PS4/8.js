const checkForTeam=student=>{
    let hasTeam=false;
  for(const key in student){
   if(key==='team')
    hasTeam=true;
    
    }
if(!hasTeam){
  student.team='A';
}
return student;


}


console.log(checkForTeam({ firstName: 'Penn', lastName: 'Ma' }))
// {firstName: 'Penn', lastName: 'Ma', team: A}
console.log(checkForTeam({ firstName: 'John', lastName: 'Dee', team: 'B' }))
// {firstName: 'John', lastName: 'Dee', team: B}
console.log(checkForTeam({ firstName: 'Priya', lastName: 'Raj' }))
// {firstName: 'Priya', lastName: 'Raj', team: A}