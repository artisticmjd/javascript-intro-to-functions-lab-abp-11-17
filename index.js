function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  let shout = string.toUpperCase()
  console.log(shout)
}

function logWhisper(string){
  let whisper = string.toLowerCase()
  console.log(whisper)
}

function sayHiToGrandma(string){
  let low = string
  if(low.toLowerCase() === low){
    console.log('I can\'t hear you!')
  }
}
