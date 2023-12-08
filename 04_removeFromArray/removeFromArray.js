const removeFromArray = function (arr, ...targets) {
  newArr = [];
  for (ele of arr) {
    if (!targets.includes(ele)) newArr.push(ele);
  }
  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
