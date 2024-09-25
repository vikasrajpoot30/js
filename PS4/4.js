
const filterWords=words=>{
    var array=[];
    for(const i of words){
        if(i.length>=5)
       array.push(i);
    }
    return array;
}

var words = ['eat', 'sleep', 'code', 'repeat', 'neog', 'community']
console.log(filterWords(words)) // ["repeat", "community"]