// ma)ximum in this array.
let arr=[10,30,5,4,40,50]

let copy=arr[0];
for(let i=0;i<=arr.length-1;i++){
  if(arr[i]>copy){
    copy=arr[i];
    
  }
}
console.log(copy);
