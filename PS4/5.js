const capitalizeWords=str=>{
    for(const i in str){
        str[i]=str[i].toUpperCase();
    }
    return str;
}

console.log(capitalizeWords(['eat', 'sleep', 'code', 'repeat']))
// ["EAT", "SLEEP", "CODE", "REPEAT"]
