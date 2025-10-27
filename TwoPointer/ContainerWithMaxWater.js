// Container With Most Water

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7]; // maxArea = 49

function getMaxAreaToStoreWater(arr) {
  let left = 0;
  let right = arr.length - 1;
  let track = [];
  
  while (left < right) {
    // calculate current area
    let area = Math.min(arr[left], arr[right]) * (right - left);
    track.push(area);

    // move smaller pointer
    if (arr[left] < arr[right]) {
      left++;
    } else {
      right--;
    }
  }

  return Math.max(...track);
}

let result1 = getMaxAreaToStoreWater(height);
console.log('result 1 ->>', result1);

//removed tracking in array
function getMaxAreaToStoreWaterOptimized(arr) {
  let left = 0;
  let right = arr.length - 1;
  let maxArea = 0;
  
  while (left < right) {
    // calculate current area
    let area = Math.min(arr[left], arr[right]) * (right - left);
    maxArea = Math.max(maxArea, area);

    // move smaller pointer
    if (arr[left] < arr[right]) {
      left++;
    } else {
      right--;
    }
  }
  
  return maxArea;
}

let result2 = getMaxAreaToStoreWaterOptimized(height);
console.log('result 2 ->>', result2);
