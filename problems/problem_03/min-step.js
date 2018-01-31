const minStep = input => {
  // put your code here !!

  let step = 0;

  while (input > 1) {
    step++
    // odd
    if (input % 2 == 1) {
      if(((input + 1) / 2) % 2 == 0)
        input = input + 1
      else 
        input = input - 1
    } else {
      input = input / 2
    }
  }

  return step;
};
module.exports = {
  minStep
};