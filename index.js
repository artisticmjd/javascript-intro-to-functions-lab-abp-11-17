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
  if (word.toLowerCase() == word){
    return "I can't hear you!"
  } else if ("I Love you, Grandma." === word){
    return "I love you, too."
  } else {
    return "YES INDEED"
  }
}
