function forLoop(array) {
  j = array.length;
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      array[j+i] = "I am 1 strange loop.";
    }
    else {
      array[j+i] = `I am ${i} strange loops.`;
    }
  }
  return array
}

function whileLoop(number) {
  let countdown = number;
  while (countdown > 0) {
    console.log(--countdown)
  }
  return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.pop();
    i++
  } while (array.length > 0 && maybeTrue());
  return array
}
