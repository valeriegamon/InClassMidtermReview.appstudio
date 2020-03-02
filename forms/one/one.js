/*
Write code (No controls) that gets two numbers from the user 
and outputs the sum - use alerts, prompts, etc.

function sum(sum1, sum2) {
  return sum1 + sum2
}

//Let user find their own product of numbers 
let product = sum((prompt('Insert a number')), (prompt('Insert another number')))
console.log('YOUR product is ' + product)
*/

btnSubmit.onclick=function(){
  let num1 = Number(inpt1.value)
  let num2 = Number(inpt2.value)
  alert(`The sum is ${num1+num2}.`)
}


