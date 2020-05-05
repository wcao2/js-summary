//Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
// INPUT 121=>True  INPUT -121 False

var isPlaindrome = function(x){
    if(x<0){
        return false;
    }else{
        return x== reverseInteger(x);
    }
};

var reverseInteger=function(x){
    let reversed=0;
    while(x>0){
        reversed=(reversed*10)+(x%10);
        x=Math.floor(x/10);
    }

    // if(x==reversed){
    //     console.log("the integer of "+x+" is palindrome");
    // }else{
    //     console.log("the integer of "+x+" is not palindrome");
    // }
    return reversed;
}

var y=isPlaindrome(121);
console.log(y);