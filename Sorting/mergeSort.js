// Merge Sort Implementation in JavaScript
// Time Complexity: O(n log n)
// Space Complexity: O(n) — due to temporary array used in merge




function mergeSort(arr, left, right) {
  if (left < right) {
    let mid = Math.floor((left + right) / 2);
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
  }
}


function merge(arr, left, mid, right) {
  let temp = new Array(arr.length); // temp array
  let i = left;
  let j = mid + 1;
  let k = left;


  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) {
      temp[k] = arr[i];
      i++;
    } else {
      temp[k] = arr[j];
      j++;
    }
    k++;
  }


  while (i <= mid) {
    temp[k] = arr[i];
    i++;
    k++;
  }


  while (j <= right) {
    temp[k] = arr[j];
    j++;
    k++;
  }


  for (let p = left; p <= right; p++) {
    arr[p] = temp[p];
  }
}


// 🔍 Usage:
let nums = [15, 5, 24, 8, 1, 3, 16, 10, 20];
mergeSort(nums, 0, nums.length - 1);
console.log("Sorted array:", nums);
