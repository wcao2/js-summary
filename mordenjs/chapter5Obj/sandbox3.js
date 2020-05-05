//Math object

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const Area=7.7;
//round the number to the nearest integer
console.log(Math.round(Area));
//floor this number to the number below what this is
console.log(Math.floor(Area));
console.log(Math.ceil(Area));
//take away the decimal and leave the integer
console.log(Math.trunc(Area));

//Random numbers
const random=Math.random();//generate random number between 0,1
console.log(random);
console.log(Math.random()*100);//generate random number between 1,100
//or
console.log(Math.round(random*100))
