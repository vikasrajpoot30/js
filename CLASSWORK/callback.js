// willThanosKillMe()
// main-> willThanosKillMe(name,iDieCb,iLiveCb)
// cb->

const willThanosKillMe=(name,iDieCb,iLiveCb)=>{
    if(name.length%2!=0){
        iDieCb();
    }
    else{
        iLiveCb();
    } 

}

willThanosKillMe('Akashi',()=>{
    console.log("Give my Headphone and Laptop to my friend Sunny");
}, ()=>{
    console.log("Yay! I'm alive ")
})

