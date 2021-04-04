function missingNumber(arr) {
  let missing = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] > 1) {
      missing.push(arr[i + 1] - arr[1]);
    }
  }
  return missing;
}

let arr = [0, 1, 2, 4, 5, 6]; // Missing 2,6

// Find the missing array items

console.log(missingNumber(arr));
