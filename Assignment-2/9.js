// your ES6+ code here
const sumOfHours=(person)=>person.reduce((acc,num)=>acc+num,0)
const mostActivePerson=(neogCommunity)=>neogCommunity.reduce((map,person)=>sumOfHours(person.hours)>
    sumOfHours(map.hours)?person:map  )

const neogCommunity = [
    { name: 'Raju', role: 'student', hours: [1, 2, 3, 1, 2, 3, 0] },
    { name: 'Aakash', role: 'mentor', hours: [1, 2, 3, 1, 2, 3, 0] },
    { name: 'Ramesh', role: 'student', hours: [1, 2, 3, 1, 2, 3, 3] },
    { name: 'Jiten', role: 'TA', hours: [2, 2, 3, 5, 2, 3, 0] },
    { name: 'Harsh', role: 'student', hours: [1, 7, 3, 2, 2, 3, 0] },
    { name: 'Akshay', role: 'student', hours: [1, 6, 3, 1, 2, 3, 0] },
    { name: 'Rohan', role: 'mentor', hours: [1, 2, 3, 12, 2, 3, 0] },
    { name: 'Mohan', role: 'student', hours: [1, 8, 3, 0, 2, 3, 0] },
]
console.log(mostActivePerson(neogCommunity))
// Output: { name: "Rohan", role: "mentor", hours: [1, 2, 3, 12, 2, 3, 0] }
