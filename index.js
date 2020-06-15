window.addEventListener('load', init);
const timelimit = {
  easy:60,
    medium:30,
    hard:15
}
var timeleft;
var level = prompt("Choose your level: 60 seconds for easy, 30 seconds for medium, 15 seconds for hard").toLowerCase();
switch(level) {
  case "easy":
    timeleft = timelimit.easy;
    break;
  case "medium":
    timeleft = timelimit.medium;
    break;
  case "hard":
    timeleft = timelimit.hard;
     break;
     default:
      window.alert('wrong value');
      location.reload();
}
let times = timeleft;
let score = 0;
let playing;
//DOM
const input =  document.querySelector("#third");
var current =  document.querySelector("#second");
const scoredisplay =  document.querySelector("#score");
const timedisplay =  document.querySelector("#times");
const message =  document.querySelector("#message");
const seconds =  document.querySelector("#seconds");
const words = ['hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition',
  'sequoia',
  "aluminium",
  "hi",
  "yours",
  "love",
  "tea",
  "animal",
  'angular',
    'magic',
    'brew',
    'while',
    'throw',
    'css',
    'break',
    'swing',
    'echo',
    'let',
    'wall',
    'laughter',
    'hash',
    'spinner',
    'beer',
    'ninja',
    'javascript',
    'master',
    'program',
    'coding',
    'hero',
    'learning',
    'work',
    'case',
    'react',
    'dragon',
    'rush',
    'api',
    'init',
    'motion',
    'google',
    'float',
    'damn',
    'block',
    'ranking',
    'nice',
    'machine',
    'perfect',
    'deploy',
    'terminal',
    'array',
    'vue',
    'node',
    'html',
    'front',
    'grid',
    'stack',
    'mac',
    'console',
    'ajax',
    'heroku',
    'loop',
    'sql',
    'php',
    'data',
    'npm',
    'server',
    'bash'
];
function init() {
  // Show number of seconds in UI
  seconds.innerHTML = timeleft;
  // Load word from array
  showWord(words);
  // Start matching on word input
  input.addEventListener('input', startMatch);
  // Call countdown every second
  setInterval(countdown, 1000);
  // Check game status
  setInterval(checkStatus,60);
}
//start match
function startMatch() {
  if (matchWords()) {
    playing = true;
    times = times + 1;
    showWord(words);
    input.value = '';
    score++;
  }
   // If score is -1, display 0
  if (score === -1) {
    scoredisplay.innerHTML = 0;
  } else {
    scoredisplay.innerHTML = score;
  }
}
//match word
function matchWords() {
  if (input.value === current.innerHTML) {
    var correct = '<h1>Correct!!!<h1>'
    message.innerHTML = correct;
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}
// Pick & show random word
function showWord(words) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output random word
  current.innerHTML = words[randIndex];
}
//Countdown timer
function countdown() {
  // Make sure time is not run out
  if (times > 0) {
    // Decrement
    times--;
  } else if (times === 0) {
    // Game is over
    playing = false;
 } // Show time
  timedisplay.innerHTML = times;
}
// Check game status
function checkStatus() {
  if (!playing && times === 0) {
    message.innerHTML = '<h1>Game Over!!!</h1>';
    score = -1;
  }
}
document.querySelector("#hint1").onclick = function(){
  window.alert("Hint 1 used!!");
  setTimeout(() => {
    //input.value = current.innerHTML;
    showWord(words);
    scoredisplay.innerHTML = ++score;
    //input.value = '';
    
  }, 2000);
  document.querySelector("#hint1").disabled = true;
  document.querySelector("#hint1").style.display = "none";  
};
document.querySelector("#hint2").onclick = function(){
  window.alert("Hint 2 used!!");
  setTimeout(() => {
    //input.value = current.innerHTML;
    showWord(words);
    scoredisplay.innerHTML = ++score;
    //input.value = '';
    
  }, 2000);
    document.querySelector("#hint2").disabled = true;
  document.querySelector("#hint2").style.display = "none";
  
};
document.querySelector("#hint3").onclick = function(){
  window.alert("Hint 3 used!!");
  setTimeout(() => {
    //input.value = current.innerHTML;
    showWord(words);
    scoredisplay.innerHTML = ++score;
    //input.value = '';
    
  }, 2000);
    document.querySelector("#hint3").disabled = true;
  document.querySelector("#hint3").style.display = "none";
  
};
