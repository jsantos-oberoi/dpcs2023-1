d// Unit 01: First Programs
// Lesson 06: Introduction to simulation

// Goal: What is the average number of dice rolls required to get a 6?

// Computer Simulation: Leveraging computers to predict the outcome of some "physical" or "real-world" event.
// https://en.wikipedia.org/wiki/Computer_simulation

// Model: Representation of physical / system objects.
//  Data: Information I need from the model.
//  Behaviours: Any actions the object need to perform.

const die = {
    value: 0,
    roll: function () {
      // return a random value from 1 to 6????
      // Math.random() * 6 // [0, 6) 0 <= x < 6
      // Math.random() * 6 + 1 // [1, 7) (all real numbers)
      // Math.floor(Math.random() * 6 + 1) // [1, 2, 3, 4, 5, 6]
      this.value = getRandomInt(1, 6);
      return this.value;
    }
  }
  
  // Returns a random integer between min and max.
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * max + min);
  }
  
  // console.log(die.roll());
  
  // for-loop:
  //  let i = 0;
  //  while (i < n)
  //  i++
  //
  //  for (start; condition; iteration) { ... }
  //  for (let i = 0; i < n; i++) { ... }
  
  /*
    for (let i = 0; i < n; i++) { // do the body n times
      die.roll();
      let count = 1;
      while (die.value != 6) {
        die.roll();
        count++;
      }
    }
  */
  
  let i = 0;
  let sum = 0;
  let n = 1000000;
  
  while (i < n) {
    // ROLL UNTIL I GET A 6
    die.roll();
    let count = 1;
    while (die.value != 6) {
      die.roll();
      count++;
    }
  
    //console.log(count);
    sum += count;
    i++;
  }
  
  console.log(sum / n);
  
  
  // while (die.roll() != 6) {
  //   count++;
  // }
  
  
  