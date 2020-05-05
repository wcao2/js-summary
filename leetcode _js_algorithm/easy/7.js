//7:Given a 32-bit signed integer, reverse digits of an integer.    
//eg: 123 ==>321

var reverseList=function(x){
    //let negative =x<0;
    let negative =x;
    //create a variable which will be the reversed value of x
    let reversed=0;

    if(negative){
        x*=-1;
    }

    while(x>0){
        reversed=(reversed * 10)+(x%10);
        x=Math.floor(x/10);
    }

    if(reversed>(2**31-1)){
        return 0;
    }
    
    return negative<0 ? (reversed *-1):reversed;
    
}

let y=reverseList(-123);
console.log(y);


