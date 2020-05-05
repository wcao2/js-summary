//CREATE FUNCTION

//1:function declaration
// function greet() {
//     console.log('hello');
// }
// greet();

//2:function expression
//I can also store functions in a variable and invoke them
// const speak=function(name='People',time='whatever'){//assain the default value if I don't assign value to parameters
//     //const:don't want to override
//     console.log(`good ${time}! ${name}`);//or   console.log('good day!'+name);
// };//add semi-colon due to an expression

// speak('WeiCao','Morning');


// const calcArea=function(radius){
//     let area=3.14*radius**2;
//     console.log(area);
//     return area;
// };
// const a=calcArea(5);
// console.log(`${a}!!!!!!!`);

//3:Arrow function
// const calcArea1= radius=>{//only one parameter,remove the parenthesis
//     return 3.14*radius**2;   
// };
// const a=calcArea1(5);
// console.log(`${a}!!!!!!!`);

//Arror function practice
const greet= () =>{
    return 'hello world';
};
const result=greet();
console.log(result);


const bill=(products,tax)=>{
    let total=0;
    for(let i=0;i<products.length;i++){
        total+=products[i]+products[i]*tax;
    }
    return total;
};
console.log(bill([1,2],0.2));
