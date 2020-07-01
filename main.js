/******************
 * YOUR CODE HERE *
******************/
const doubleAll = function(arr){
  let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i] * 2);
    }
    return newArr;
}

const yelledGreetings = function(arr){
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    newArr.push(arr[i] + '!')
  }
  return newArr;
}

const absoluteValues = function(arr){
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
      if(arr > 0 ? arr * -1 : arr ){
        newArr.push(arr[i])
      }
        }
    return newArr;
}

const upperCaseFirstLetters = function(arr){
  let newArr = [];
    for(let i = 0; i < arr.length; i++){
      let lowerCase = arr[i].slice(1, arr[i].length).toLowerCase();
      newArr.push(arr[i][0].toUpperCase() + lowerCase);
    }
    return newArr
}

const changeToInitials = function(arr){
  let newArr = [];
    for(let i = 0; i < arr.length; i++){
      newArr.push(arr[i][0] + arr[i][arr[i].indexOf(' ') + 1])
    }
    return newArr
}

const doubleOdd = function(arr){
  let newArr = [];
    for(let i = 0; i < arr.length; i++){
      if (arr[i] % 2 === 1 || arr[i] % 2 === -1){
        newArr.push(arr[i] * 2);
      } else {
        newArr.push(arr[i]);
      }
    }
    return newArr;
}

const add1ToLeft = function(arr){
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    
  }
  return newArr;
}






/*******************************************
* CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
*           PLEASE DON'T TOUCH!            *
*******************************************/

if (typeof doubleAll === 'undefined') {
  doubleAll = undefined;
}

if (typeof yelledGreetings === 'undefined') {
  yelledGreetings = undefined;
}

if (typeof absoluteValues === 'undefined') {
  absoluteValues = undefined;
}

if (typeof upperCaseFirstLetters === 'undefined') {
  upperCaseFirstLetters = undefined;
}

if (typeof changeToInitials === 'undefined') {
  changeToInitials = undefined;
}

if (typeof doubleOdd === 'undefined') {
  doubleOdd = undefined;
}

if (typeof add1ToLeft === 'undefined') {
  add1ToLeft = undefined;
}


module.exports = {
  doubleAll,
  yelledGreetings,
  absoluteValues,
  upperCaseFirstLetters,
  changeToInitials,
  doubleOdd,
  add1ToLeft,
}
