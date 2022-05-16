


email pattern:1

let email   = 'morshed6006@hotmail.com';
let pattern = /^[a-z0-9._]*@[a-z]{3,9}\.[a-z]{3,5}$/;
console.log(pattern.test(email));


Username pattern:2

let username  = 'admin.123';
let pattern   = /^[a-z0-9._]*$/;
console.log(pattern.test(username));

Bangladeshi phone number pattern:3

let number  = '01766888195';
let pattern = /^(01|\+8801)[0-9]{9}$/;
console.log(pattern.test(number));



Password pattern:4

let Password = 'Lion420$.M';//P{AVK%7!st
let pattern  = /^[a-zA-Z0-9$]{8}\.[A-Z]{1}$/;
console.log(pattern.test(Password));


Zipcode pattern:5

let zipcode = '5910';
let pattern = /^[0-9]{4}$/;
console.log(pattern.test(zipcode));
