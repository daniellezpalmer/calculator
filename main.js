let button = document.querySelectorAll('.show');
let displayScreen = document.querySelector('#input');
let clearBtn = document.querySelector('#btnClr');
let equalBtn = document.querySelector('#equalSign');

button.forEach(function(clicked) {
  clicked.addEventListener('click', function() {
    if (displayScreen.textContent.length < maxLength) {
      displayScreen.textContent += clicked.value;
    }
  })
})

clearBtn.addEventListener('click', function() {
  displayScreen.textContent = '';
})

equalBtn.addEventListener('click', function() {
  let result = eval(displayScreen.textContent)
  displayScreen.textContent = result;
})

let quotes = [
  'Female kangaroos have three vaginas.',
  'Most Muppets are left-handed. (Because most Muppeteers are right-handed, so they operate the head with their favoured hand.)',
  'Light doesn\'t necessarily travel at the speed of light. The slowest we\'ve ever recorded light moving at is 38 mph.',
  'The northern leopard frog swallows its prey using its eyes — it uses them to help push food down its throat by retracting them into its head.',
  'Some fruit flies are genetically resistant to getting drunk — but only if they have an inactive version of a gene scientists have named "happyhour".',
  'Experiments show that male rhesus macaque monkeys will pay to look at pictures of female rhesus macaques\' bottoms.',
  'In 1567, the man said to have the longest beard in the world died after he tripped over his beard running away from a fire.',
  'In 1993, San Francisco held a referendum over whether a police officer called Bob Geary was allowed to patrol while carrying a ventriloquist\'s dummy called Brendan O\'Smarty. He was.',
  'There is a single mega-colony of ants that spans three continents, covering much of Europe, the west coast of the U.S., and the west coast of Japan.',
  'Most toilets flush in E flat.',
  'Cap\'n Crunch’s full name is Horatio Magellan Crunch.',
  'If a female ferret does not have sex for a year, she will die.',
  'It actually takes 142.18 licks to reach the center of a Tootsie pop.',
  '1% of all women can achieve full orgasm just by stimulating their breasts.',
  'There is enough sperm in one single man to impregnate every woman on earth.',
  'All swans in England belong to the queen.',
  'The “hashtag” key on your keyboard (#) is called an octotroph.',
  'Alaska law says that you can’t look at a moose from an airplane.',
  'The Declaration of Independence was written on hemp paper.',
  'There really was a Captain Morgan. He was a Welsh pirate who later became the lieutenant governor of Jamaica',
  'A pound of houseflies contains more protein than a pound of beef.',
  'Grapes explode when you put them in the microwave.',
  'Human saliva had a boiling point three times that of regular water.',
  'The Twitter bird actually has a name - Larry.',
  'The medical term for buttcrack is "intergluteal cleft".',
  'Daddy Long Legs have penises, which technically makes them not a spider.',
]

function newQuote() {
  let randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
