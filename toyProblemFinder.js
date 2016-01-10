// Toy Problems

// Green = Solved without struggle | Yellow = Solved with struggle | Red = Couldn't solve without solution

var toyProblems = {
  rockPaperScissors :'green',
  isSubsetOf : 'green',
  nonRepeatedCharacter : 'green',
  nthFibonacci : 'red',
  bubbleSort : 'green',
  commonCharacters : 'red',
  largestProductOfThree : 'red',
  treeDFSelect : 'yellow',
  deepEquality : 'red',
  htmljQueryColor : 'red',
  binarySearchArray : 'yellow',
  treeBFSelect : 'yellow',
  powerSet : 'red',
  composePipe : 'red',
  rotatedArraySearch : 'red',
  rangeClass : 'red',
  asyncMap : 'yellow',
  balancedParens : 'yellow',
  longestRun : 'red',
  mergeSort : 'red',
  fractionConverter : 'red',
  shuffleDeck : 'red',
  matrixRotation : 'red',
  romanNumeralTranslator : 'red',
  linkedList : 'red',
  tree : 'yellow',
  hashTable : 'red',
  queueStack : 'red',
  robotPaths : 'red',
  evenOccurance : 'green',
  treeCountLeaves : 'red',
  primeTester : 'red',
  insertionSort : 'red',
  characterFrequency : 'red',
  treeMap : 'red',
  sumArray : 'yellow',
  numberToEnglish : 'red',
  telephoneWords : 'yellow',
  functionBind: 'red',
  coinSums: 'red',
  arrayception: 'yellow',
  eventingLibrary: 'red',
  hashTableResize: 'red',
  linkedListCycles: 'red',
  allAnagrams: 'yellow',
  longestPalindrome: 'red',
  onlyUnique: 'red'
};

function toyProblemFinder(toyProblems) {
  // count how many we still need to solve
  var problemCounter = 0;
  // red problems left
  var redProblems = {};
  var redCounter = 0;
  // yellow problems left
  var yellowProblems = {};
  var yellowCounter = 0;

  for(var problem in toyProblems) {
    // if problem is red or yellow add to counter
    if(toyProblems[problem] === 'red' || toyProblems[problem] === 'yellow') {
      // increment counter
      problemCounter++;
      // if the problem is red add to redProblems
      if(toyProblems[problem] === 'red') {
        redProblems[problem] = problem;
        redCounter++;
      }
      // if problem is yellow add to yellowProblems
      if(toyProblems[problem] === 'yellow') {
        yellowProblems[problem] = problem;
        yellowCounter++;
      }
    }
  }

  console.log('Looks like we have ' + problemCounter + ' toy problems left to do!\n');
  // log all the red problems
  console.log('We still need to solve ' + redCounter +' red problems:\n');
  // for(var r in redProblems) {
  //  console.log(r + '\n');
  //}
  // log all the yellow problems
  console.log('We still need to retry ' + yellowCounter +' yellow problems:\n');
  // for(var y in yellowProblems) {
  //  console.log(y + '\n');
  //}
  var redKeys = Object.keys(redProblems);
  var yellowKeys = Object.keys(yellowProblems);
  var comboKeys = redKeys.concat(yellowKeys);
  var randomProblem = comboKeys[Math.floor(Math.random() * comboKeys.length)];
  console.log('Try this Problem: ', randomProblem);
}
toyProblemFinder(toyProblems);