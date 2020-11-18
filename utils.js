export function randomOrder(length) {
  let orderArray = sequence(0, length - 1)
  shuffleArray(orderArray)
  return orderArray
}

export function sequence(start, end) {
  let arr = []
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr
}

export function shuffleArray(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
