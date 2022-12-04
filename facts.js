let apiFacts = [];

const factContainer = document.getElementById('fact-container');
const factText = document.getElementById('fact');
const moreText = document.getElementById('more');
const newFactBtn = document.getElementById('new-fact');



// Show New Fact
function newFacts() {
 
  // Pick a random quote from array
  const fact = apiFacts[Math.floor(Math.random() * apiFacts.length)];

    var output = '';

//moreText.textContent = '<a href="'+fact.more+'">Read more here</a>';
factText.textContent = fact.text;
output += '<a href="' + fact.more + '">Read more</a>';

 $('#more').html(output);
}
// Get Facts From API
async function getFact() {
    const apiUrl =  'https://raw.githubusercontent.com/K00276260/IDM2RWD/front_end/facts.js';
  try {
      console.log('testhhhh');
    const response = await fetch(apiUrl);
    apiFacts = await response.json();
    console.log('test');
  } catch (error) {
  //   Catch Error Here
  }
}


// Event Listeners
newFactBtn.addEventListener('click', newFacts);

getFact();