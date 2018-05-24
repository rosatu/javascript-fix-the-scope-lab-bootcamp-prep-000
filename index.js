var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  var animal = "cat"
  return animal
}

function add2(n) {
  const two = 2
  return n + two
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.

<<<<<<< HEAD
var theFunk = funkyFunction()()




=======
var theFunk = funkyFunction
>>>>>>> 45f3f2280273b47baf6b432bc4495e425aca154c
