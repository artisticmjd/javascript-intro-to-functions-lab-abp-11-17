function shout(word){
  return word.toUpperCase()
}

function whisper(word){
  return word.toLowerCase()
}

function logShout(word){
  console.log(word.toUpperCase())
}

function logWhisper(word){
  console.log(word.toLowerCase())
}

function sayHiToGrandma(word){
  if (word.toUpperCase() == word){
    return "YES INDEED!"
  } else if ("I Love you, Grandma." === word){
    return "I love you, too."
  } else {
    return "I can't hear you!"
  }
}
