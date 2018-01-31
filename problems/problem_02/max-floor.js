const maxFloor = input => {
  // put your code here !!
  let floor = 0
  while (input > 0) {
    floor++
    input = input - floor;
  }
  // incomplete floor
  if (input < 0)
    floor--;
  return floor;
};

module.exports = {
  maxFloor
};