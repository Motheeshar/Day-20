// Challenge 1: Print name on page load
window.onload = function () {
    document.getElementById('user').innerHTML = 'Motheesh A R';
  };
  
  // Challenge 2: Change button background color
  document.getElementById('btn-click').onclick = function () {
    this.style.backgroundColor = 'red'; // Change to whatever color you desire
  };
  
  // Challenge 3: Create sentence from input values
  function makeSentence() {
    var noun = document.getElementById('noun').value;
    var verb = document.getElementById('verb').value;
    var adverb = document.getElementById('adverb').value;
    var sentence = noun + ' ' + verb + ' ' + adverb;
    document.getElementById('statement').innerHTML = sentence;
  }
  
  document.getElementById('build-button').addEventListener('click', makeSentence);
  
  // Challenge 4.1: Event bubbling
  document.getElementById('grandparent').addEventListener('click', function () {
    console.log('Grandparent clicked');
  });
  
  document.getElementById('parent').addEventListener('click', function () {
    console.log('Parent clicked');
  });
  
  document.getElementById('child').addEventListener('click', function (event) {
    console.log('Child clicked');
    event.stopPropagation(); // Prevents event from bubbling up to parent elements
  });
  
  // Challenge 4.2: Event capturing
  document.getElementById('grandparent').addEventListener(
    'click',
    function () {
      console.log('Grandparent clicked');
    },
    true
  ); // Use capture phase
  
  document.getElementById('parent').addEventListener(
    'click',
    function () {
      console.log('Parent clicked');
    },
    true
  ); // Use capture phase
  
  document.getElementById('child').addEventListener(
    'click',
    function () {
      console.log('Child clicked');
    },
    true
  ); // Use capture phase
  
  // Challenge 5: Event delegation
  document.getElementById('category').addEventListener('click', function (event) {
    if (event.target.id === 'blazers') {
      console.log('blazers');
    }
  });
  