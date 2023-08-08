function threeSum(arr, target) {
  //your code here
	  let closestSum = Infinity;
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                let sum = arr[i] + arr[j] + arr[k];
                if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
                    closestSum = sum;
                }
            }
        }
    }
    
    return closestSum;
}


module.exports = threeSum;
