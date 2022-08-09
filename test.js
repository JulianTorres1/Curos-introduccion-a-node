function digitize(n) {
    let numberArray = Array.from(String(n), Number);
    numberArray.reverse();
    return(numberArray);
}

//digitize(123);

function calculator(operator, value1, value2){

  if (operator === '+') {
    return(value1+value2);
  } else if(operator === '-') {
    return(value1-value2);
  } else if(operator === '*'){
    return(value1*value2);
  } else if(operator === '/'){
    return(value1/value2);
  }else {
    return('invalid operator!')
  }

}

let oper = '-';
let v1 = 2;
let v2 = 2;

console.log(calculator(oper, v1, v2));

function fakeBinary(x) {
  let fakebinary = Array.from(String(x), Number);
  for (let i = 0; i < fakebinary.length; i++) {
    if (fakebinary[i] < 5) {
      fakebinary.splice(i, 1, 1);
    }else {
      fakebinary.splice(i, 1, 0);
    }
  }
  return(fakebinary.toString());
}

console.log(fakeBinary(12345678));

