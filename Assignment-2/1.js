// Assignment test datw 22 oct 2024 time- 11:13AM

// signed - vikasrajpoot

const sounds = [
    {
    name: 'rain',
    sound: 'tap tap tap',
    },
    {
    name: 'fire',
    sound: 'blaze',
    },
    {
    name: 'water',
    sound: 'slosh slosh',
    },
   ]

   const capitalizeLetters=(sounds)=>sounds.map(sound=>sound.name.toUpperCase())
   console.log(capitalizeLetters(sounds)) // Output: ["RAIN", "FIRE", "WATER"]
   



   