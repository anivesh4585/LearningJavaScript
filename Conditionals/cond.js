//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let stored_email="abc@gmail.com";
let stored_pass="12345";

let input_email="abc@gmail.com";
let input_pass ="123456";

if(stored_email==input_email){
  if(stored_pass==input_pass){
     console.log("user can login");
  }else{
    console.log("cannot login");
  }

}