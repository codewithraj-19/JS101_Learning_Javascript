// Problem 1: Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties

let yob = 1999;
let age = 2023 - 1999;

if(age > 13 && age < 19)
{
   console.log("Greatest");
}
if(age > 20 && age < 29)
{
  console.log("Twenties");
}

console.log(age>13&&age<19?"Greatest":"Twenties");