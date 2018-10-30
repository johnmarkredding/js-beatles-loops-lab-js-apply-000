// add solution here

function theBeatlesPlay(musicians, instruments) {
  let array = [];
  for(let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts) {
  let i = 0;
  while(facts[i]) {
    facts[i] = `${facts[i]}!!!`;
    i++;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  let resultArray = [];
  
  do {
    resultArray.push("I love the Beatles!");
  } while(resultArray === []);
  return resultArray;
}