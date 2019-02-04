import * as _ from 'underscore';

function sumFor(array){
  let ret = 0;
  for(let i = 0; i<array.length; i++){
    ret += array[i];
  }
  return ret;
}

function sumWhile(array){
  let ret = 0;
  let i = 0;
  while(i < array.length){
    ret += array[i];
    i++;
  }
  return ret;
}

function sumRecursion(array){
  return sumRecursionAssist(array, 0, 0);
}

function sumRecursionAssist(array, index, count){
  if(index === array.length - 1){
    return count + array[index];
  }else{
    return array[index] + sumRecursionAssist(array, index + 1, count);
  }
}

function sumTheSimpleWay(array){
  return _.reduce(array, function(first, second){
    return first + second;
  });
}

let test = [0,1,2,9];

console.log(sumFor(test));

console.log(sumWhile(test));

console.log(sumRecursion(test));

console.log(sumTheSimpleWay(test));

//console.log(_.identity(test));