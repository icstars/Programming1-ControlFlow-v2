// Conditions kata: FizzBuzz-style function that returns an array for 1..n

function fizzBuzz(n = 100) {

// No negative numbers
if (n< 1){
  throw new Error('n must be positive');
}
  // Purpose: return an array
// n is the limit to the amount of times that this loop will loop

const result = []
  for(let i = 1; i <= n; i += 1){
    if(i % 15 === 0){
      result.push("FizzBuzz")
    } else if(i % 3 === 0){
      result.push("Fizz");
    }else if (i % 5 === 0){
      result.push("Buzz");
    } else{
      result.push(i)
    }
  }
  
 return result
  
}


globalThis.__katas = globalThis.__katas || {};
globalThis.__katas.fizzBuzz = fizzBuzz;
