// Given this function:

function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
}
  
// Refactor it to use the rest operator & an arrow function:
  
/* Write an ES2015 Version */
  
const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);
  
// findMin

const findMin = (...nums) => Math.min(...nums);

// mergeObjects

const mergeObjects = (objects1, objects2) => ({...objects1, ...objects2});

// doubleAndReturnArgs

const doubleAndReturnArgs = (array, ...nums) => [...array, ...nums.map(num => num)]

// Slice and Dice!

const removeRandom = (...items) => {
  let num = Math.floor(Math.random() * items.length);
  return [...items.slice(0, num), ...items.slice(num + 1)];
};

const extend = (array1, array2) => [...array1, ...array2];

const addKeyVal = (obj, key, val) => {
  return {...obj, [key]:val}
};

const removeKey = (obj, key) => {
  let temp = {...obj};
  delete temp[key];
  return temp;
}

const combine = (obj1, obj2) => {
  return {...obj1}, {...obj2}
};

const update = (obj, key, val) => {
  return {...obj, [key]:val}
}