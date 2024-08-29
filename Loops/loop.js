 // calculate the sum of all the even numbers and odd numbers from 1to 50 both included using the for loop
// sub problem1: calculate the sum
let sum_even=0;
let sum_odd=0;
for(let i=1;i<=50;i++){
  // sub problem 2: sum of even number
  if(i%2==0){
    sum_even=sum_even+i;
  }else{
    sum_odd=sum_odd+i;
  }
}
console.log("Even sum is",sum_even );
console.log("Odd sum is",sum_odd );